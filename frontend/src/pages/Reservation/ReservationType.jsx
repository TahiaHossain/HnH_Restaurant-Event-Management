import PropTypes from 'prop-types';
export default function ReservationType({ setReservationType, reservationType }) {
	return (
		<div className="flex items-center justify-center gap-5 mt-5">
			<h1 className="text-md">Reservation Type: </h1>

			<div className="flex justify-center items-center gap-4 flex-col">
				<div className="flex gap-4 items-center">
					<div>
						<input
							type="radio"
							value={'dinein'}
							name="type"
							id="dinein"
							className="hidden"
							checked={reservationType === 'dinein'}
							onChange={(e) => setReservationType(e.target.value)}
						/>
						<label className="bg-slate-200 rounded-md" htmlFor="dinein">
							Dine In
						</label>
					</div>
					<div>
						<input
							type="radio"
							value={'event'}
							name="type"
							id="catering"
							className="hidden"
							checked={reservationType === 'event'}
							onChange={(e) => setReservationType(e.target.value)}
						/>
						<label className="bg-slate-200 rounded-md" htmlFor="catering">
							Event
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

ReservationType.propTypes = {
	reservationType: PropTypes.string,
	setReservationType: PropTypes.func,
};
