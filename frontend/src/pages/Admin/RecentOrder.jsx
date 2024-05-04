import { useState } from 'react';
import toast from 'react-hot-toast';

export function RecentOrder({ order, user, setOrders }) {
	const [statusLoading, setStatusLoading] = useState(false);
	async function handleConfirm(id, user, status) {
		try {
			setStatusLoading(true);
			// user.email and user.name in the request body
			const response = await fetch(`http://localhost:3001/api/orders/confirm/${id}?status=${status}`, {
				headers: {
					Authorization: 'Bearer ' + user.refreshToken,
				},
			});
			const json = await response.json();
			if (json.success) {
				setOrders(json.payload.orders);
				setStatusLoading(false);
			} else {
				toast.error(json.error);
				setStatusLoading(false);
			}
			console.log('Order confirmed:', json);
		} catch (error) {
			console.error('Error confirming order:', error);
		}
	}
	return (
		<tr key={order._id}>
			<td className="py-2 px-4">{order._id}</td>
			<td className="py-2 px-4">{order.createdAt}</td>
			<td className="py-2 px-4">{order.user.name}</td>
			<td className="py-2 px-4">৳{order.total}</td>
			<td className="py-2 px-4">{statusLoading ? <span className="loading loading-spinner loading-md"></span> : order.status}</td>
			<td>
				<div className="flex">
					<button
						onClick={async () => await handleConfirm(order._id, user, 'Confirmed')}
						className="bg-green-500 hover:bg-green-600 hover:scale-110 text-white rounded-lg btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
							<path fill="currentColor" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z" />
						</svg>
					</button>
					<button
						onClick={async () => await handleConfirm(order._id, user, 'Cancelled')}
						className="bg-red-500 hover:bg-red-600 hover:scale-110 text-white rounded-lg btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 72 72">
							<path
								fill="#ea5a47"
								d="m58.14 21.78l-7.76-8.013l-14.29 14.22l-14.22-14.22l-8.013 8.013L28.217 36l-14.36 14.22l8.014 8.013l14.22-14.22l14.29 14.22l7.76-8.013L43.921 36z"
							/>
							<path
								fill="white"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="2"
								d="m58.14 21.78l-7.76-8.013l-14.29 14.22l-14.22-14.22l-8.013 8.013L28.207 36l-14.35 14.22l8.014 8.013l14.22-14.22l14.29 14.22l7.76-8.013L43.921 36z"
							/>
						</svg>
					</button>
				</div>
			</td>
		</tr>
	);
}
