import { useState } from 'react';
export default function User({ user, admin }) {
	const [loading, setLoading] = useState(false);
	const [user2, setUser] = useState(user);

	const handleBanUser = async () => {
		try {
			setLoading(true);
			const response = await fetch(`http://localhost:3001/api/users/ban/${user._id}`, {
				method: 'PUT',
				headers: {
					Authorization: 'Bearer ' + admin.refreshToken,
				},
			});
			const json = await response.json();
			setUser(json.payload.user);
			console.log(json);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	return (
		<tr key={user2._id}>
			<td className="py-2 px-4">{user2.name}</td>
			<td className="py-2 px-4">{user2._id}</td>
			<td className="py-2 px-4">{user2.email}</td>
			<td className="py-2 px-4">
				<button className="btn btn-error text-white" onClick={handleBanUser}>
					{loading ? <span className="loading loading-spinner loading-md"></span> : user2.isBanned ? 'Unban User' : 'Ban User'}
				</button>
			</td>
		</tr>
	);
}
