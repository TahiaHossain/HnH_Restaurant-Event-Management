/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from 'react';
import DateTime from './DateTime';
import ReservationType from './ReservationType';

import './style.css';
import { AuthContext } from '../../context/AuthContext';

const index = () => {
	const { user } = useContext(AuthContext);
	const [step, setStep] = useState(1);
	const [reservationType, setReservationType] = useState('dinein');

	async function handleGetReservations() {
		const res = await fetch(`http://localhost:3001/api/reservation/user/${user.user._id}`);
		const json = await res.json();

		console.log('res', json.payload.reservations);
	}
	useEffect(() => {
		if (step < 1) {
			setStep(1);
		}
		if (step > 2) {
			setStep(2);
		}
	}, [step]);

	useEffect(() => {
		if (!user) {
			return;
		}
		handleGetReservations();
	}, []);

	return (
		<div className="bg-gray-200">
			<div className="mx-auto">
				<div className="flex justify-center items-center pt-16">
					<div className="flex flex-row-reverse shadow-lg">
						<img
							className="h-[500px] object-fill rounded-l-md shadow-md transition-opacity"
							src={
								reservationType === 'dinein'
									? 'https://images.unsplash.com/photo-1583354608715-177553a4035e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							alt=""
						/>
					</div>
					<div className="bg-white p-10 rounded-r-md h-[500px] shadow-md relative">
						<div className="flex flex-col gap-3">
							<h1 className="text-center text-3xl">Make Reservation</h1>
							<hr className="my" />
							<DateTime reservationType={reservationType} />
						</div>
					</div>
				</div>
				<div className="w-1/2 mx-auto pb-10">
					<ReservationType setReservationType={setReservationType} reservationType={reservationType} />
				</div>
			</div>
		</div>
	);
};

export default index;
