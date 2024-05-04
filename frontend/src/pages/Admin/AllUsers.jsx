import User from './User';
const AllUsers = ({ users, customersLoading, admin }) => {
	return (
		<div>
			<div className="bg-white p-6 rounded-lg shadow-md ">
				<div className="text-xl font-semibold mb-4">All Users</div>
				<table className="table w-full">
					<thead>
						<tr>
							<th className="py-2 px-4">Name</th>
							<th className="py-2 px-4">Id</th>
							<th className="py-2 px-4">Email</th>
							<th className="py-2 px-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{customersLoading ? (
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
							users.map((user) => <User user={user} admin={admin} />)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllUsers;
