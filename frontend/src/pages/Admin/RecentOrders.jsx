import { RecentOrder } from './RecentOrder';
export function RecentOrders({ orders, orderLoading, user, setOrders }) {
	console.log('RecentOrders:', orders);
	return (
		<div className="bg-white p-6 rounded-lg shadow-md ">
			<div className="text-xl font-semibold mb-4">Recent Orders</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th className="py-2 px-4">Order #</th>
						<th className="py-2 px-4">Date</th>
						<th className="py-2 px-4">Customer</th>
						<th className="py-2 px-4">Total</th>
						<th className="py-2 px-4">Status</th>
						<th className="py-2 px-4">Actions</th>
					</tr>
				</thead>
				<tbody>
					{orderLoading ? (
						<>
							<tr>
								<td>
									<div className="skeleton h-4 w-full"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-full"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-full"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-full"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-full"></div>
								</td>
								<td>
									<div className="flex gap-3">
										<div className="skeleton h-14 w-12"></div>
										<div className="skeleton h-14 w-12"></div>
									</div>
								</td>
							</tr>
							<tr>
								<td colSpan="5">
									<div className="skeleton h-4 w-full"></div>
								</td>
							</tr>
						</>
					) : (
						orders.map((order) => <RecentOrder key={order._id} order={order} user={user} setOrders={setOrders} />)
					)}
				</tbody>
			</table>
			<div className="mt-4 text-right">
				<button id="seeAllOrders" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
					See All
				</button>
			</div>
		</div>
	);
}
