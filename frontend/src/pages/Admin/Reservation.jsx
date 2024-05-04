import { useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import { toast } from 'react-hot-toast';

export default function Reservation({ reservation, admin }) {
	const [loading, setLoading] = useState(false);
	const [reservation2, setReservation] = useState(reservation);

	const handleConfirmReservation = async () => {
		try {
			setLoading(true);
			const response = await fetch(`http://localhost:3001/api/reservation/update?reservationId=${reservation._id}&status=Confirmed`, {
				method: 'PUT',
				headers: {
					Authorization: 'Bearer ' + admin.refreshToken,
				},
			});
			const json = await response.json();
			setReservation(json.payload.reservation);
			console.log(json);
			setLoading(false);
			toast.success('Reservation confirmed successfully');
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	return (
		<tr key={reservation2._id}>
			<td className="py-2 px-4">{reservation2.name}</td>
			<td className="py-2 px-4">{new Date(reservation2.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</td>
			<td className="py-2 px-4">{reservation2.time}</td>
			<td className="py-2 px-4">{reservation2.type}</td>
			<td className="py-2 px-4">{reservation2.people}</td>
			<td className="py-2 px-4">{reservation2.status}</td>
			<td>
				<button className="btn btn-primary text-green-900" onClick={handleConfirmReservation}>
					{loading ? <LoadingSpinner /> : 'Confirm Reservation'}
				</button>
			</td>
		</tr>
	);
}
