import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
const DateTime = ({ reservationType }) => {
	const { user } = useContext(AuthContext);
	const [date, setDate] = useState('2024-04-03');
	const [time, setTime] = useState('11:00');
	const [people, setPeople] = useState(2);
	const [available, setAvailable] = useState(false);
	const themeRef = useRef(null);

	useEffect(() => {
		handleCheckAvailablity();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date, time, people, reservationType]);

	const handleCheckAvailablity = async () => {
		try {
			console.log(date, time, people, reservationType);
			// get request with date, time, type, people
			const body = {
				date,
				time,
				type: reservationType,
				people,
				user: user.user,
				theme: themeRef.current ? themeRef.current.value : null,
			};
			const response = await fetch(`http://localhost:3001/api/reservation/available`, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			if (!data.success) {
				toast.error(data.error);
				return;
			}
			setAvailable(data.payload.available);
			if (!data.payload.available) {
				toast.error(data.message);
			} else toast.success(data.message + ' Available seats: ' + data.payload.availablePeople);
			console.log(data);
		} catch (error) {
			toast.error('Error checking availability');
		}
	};

	const handleConfirm = async () => {
		try {
			const body = {
				date,
				time,
				type: reservationType,
				people,
				userId: user.user._id,
				name: user.user.name,
			};
			const response = await fetch(`http://localhost:3001/api/reservation/add`, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			if (!data.success) {
				toast.error(data.error);
				return;
			}
			toast.success(data.message);
		} catch (error) {
			toast.error('Error confirming reservation');
		}
	};

	return (
		<div className="flex flex-col gap-10	">
			<div className="flex gap-10 items-center justify-between">
				<div className="flex justify-center gap-4 mt-4 flex-col">
					<div className="flex gap-4 justify-between items-center">
						<label htmlFor="date" className="text-xl">
							Date:
						</label>
						<input className="input input-bordered" type="date" id="date" defaultValue={date} onChange={(e) => setDate(e.target.value)} />
					</div>
					{reservationType === 'dinein' ? (
						<>
							<div className="flex gap-4 justify-between items-center">
								<label htmlFor="time" className="text-xl">
									Time:
								</label>
								<input
									className="input input-bordered"
									type="Time"
									id="time"
									defaultValue={time}
									onChange={(e) => setTime(e.target.value)}
								/>
							</div>
							<div className="flex gap-4 justify-between items-center">
								<label htmlFor="time" className="text-xl">
									Table for:
								</label>
								<input
									className="input input-bordered"
									type="number"
									id="people"
									defaultValue={people}
									onChange={(e) => setPeople(e.target.value)}
								/>
							</div>
						</>
					) : (
						<div className="flex gap-4 justify-between items-center">
							<label htmlFor="theme" className="text-xl">
								Theme
							</label>
							<select ref={themeRef} id="theme" className="select select-bordered w-full max-w-xs">
								<option disabled selected>
									Select Theme
								</option>
								<option value={'office'}>Office</option>
								<option value={'wedding'}>Wedding</option>
								<option value={'birthday'}>Birthday</option>
							</select>
						</div>
					)}
					<button
						className={`btn ${
							!available ? 'hidden' : ''
						} bg-success text-white absolute bottom-10 w-1/2 left-1/2 rigth-1/2 transform -translate-x-1/2`}
						onClick={handleConfirm}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

DateTime.propTypes = {
	reservationType: PropTypes.any,
};

export default DateTime;
