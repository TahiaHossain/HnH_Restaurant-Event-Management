import { Logo } from './Logo';
import LoginModal from './LoginModal';
import CartDropdown from './CartDropdown';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

const handleVerify = (email, name) => {
	const promise = axios.get(`http://localhost:3001/register/send-verification-email?email=${email}&name=${name}`).then((res) => {
		return res;
	});
	toast.promise(promise, {
		loading: 'Sending verification email...',
		success: (data) => {
			console.log(data);
			return data.data.message;
		},
		error: (err) => err.response.data.msg,
	});
};
function Navbar() {
	const { user } = useAuthContext();

	return (
		<>
			<div className="navbar bg-base-100 shadow-md">
				<Logo />
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1 items-center">
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						{user && user.user.isAdmin && (
							<li>
								<Link to="/admin">Admin</Link>
							</li>
						)}
						{user && (
							<li>
								<Link to="/reservation">Make Reservation</Link>
							</li>
						)}
						{!user && (
							<div className="flex justify-center items-center">
								<li>
									<Link to="/signup">Sign Up</Link>
								</li>
								<LoginModal />
							</div>
						)}
						{user && (
							<div className="flex justify-center items-center">
								<CartDropdown />
								<UserIcon />
								<h1 className="mx-3">{user.user.name}</h1>
							</div>
						)}
					</ul>
				</div>
			</div>
			{user && !user.user.isVerified && (
				<div className="bg-yellow-100 p-4">
					Hello {user.user.name}. To be able to use all of our features please verify your account. Click the link{' '}
					<a className="text-blue-600" onClick={() => handleVerify(user.user.email, user.user.name)}>
						here{' '}
					</a>
					to verify.
				</div>
			)}
		</>
	);
}

export default Navbar;
