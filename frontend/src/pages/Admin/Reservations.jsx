import Reservation from './Reservation';

const Reservations = ({ reservations, reservationsLoading, admin }) => {
	return (
		<div>
			<div className="bg-white p-6 rounded-lg shadow-md ">
				<div className="text-xl font-semibold mb-4">All Reservations</div>
				<table className="table w-full">
					<thead>
						<tr>
							<th className="py-2 px-4">Name</th>
							<th className="py-2 px-4">Date</th>
							<th className="py-2 px-4">Time</th>
							<th className="py-2 px-4">Type</th>
							<th className="py-2 px-4">Capacity</th>
							<th className="py-2 px-4">Status</th>
							<th className="py-2 px-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{reservationsLoading ? (
							<>
								<tr>
									<td>
										<div className="skeleton h-4 w-full"></div>
									</td>
									<td>
										<div className="skeleton h-4 w-full"></div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="skeleton h-4 w-full"></div>
									</td>
									<td>
										<div className="skeleton h-4 w-full"></div>
									</td>
								</tr>
							</>
						) : (
							reservations.map((reservation) => <Reservation reservation={reservation} admin={admin} />)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Reservations;
