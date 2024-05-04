import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner';
import toast from 'react-hot-toast';
const index = () => {
	const { user, dispatch } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const emailRef = useRef(null);
	const addressRef = useRef(null);
	const phoneRef = useRef(null);
	console.log('user:', user);
	useEffect(() => {
		if (user) {
			// Set initial values using refs
			if (emailRef.current) {
				emailRef.current.value = user.user.email;
			}
			if (addressRef.current) {
				addressRef.current.value = user.user.address;
			}
			if (phoneRef.current) {
				phoneRef.current.value = user.user.phone ? user.user.phone : 'Not Provided';
			}
		}
	}, [user]);

	const handleUpdateInfo = async () => {
		const address = addressRef.current.value;
		const phone = phoneRef.current.value === 'Not Provided' ? null : phoneRef.current.value;

		if (!address) {
			return toast.error('Address is required');
		}

		if (phone && (phone.length !== 11 || isNaN(phone) || phone[0] + phone[1] !== '01')) {
			return toast.error('Not a valid phone number');
		}

		try {
			setLoading(true);
			const res = await fetch(`http://localhost:3001/api/users/update/${user.user._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + user.refreshToken,
				},
				body: JSON.stringify({ address, phone }),
			});

			const json = await res.json();
			user.user.address = address;
			user.user.phone = phone;
			setLoading(false);
			dispatch({ type: 'UPDATE', payload: user });
			toast.success('User info updated successfully');
			console.log(json);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{user && (
				<div className="bg-gray-200">
					<div className="flex gap-48 justify-normal items-center p-32">
						<div className="bg-white rounded-md shadow-md flex flex-col justify-center w-60 border h-96 mx-10">
							<div className="flex justify-center avatar">
								<div className="w-24 rounded-full">
									<img src="https://cdn-icons-png.flaticon.com/512/266/266033.png" />
								</div>
							</div>
							<div className="text-center text-2xl my-3">{user.user.name}</div>
							<div className="text-center my-3">{user.user.isVerified ? 'Verified User' : 'Not Verified'}</div>
							<div className="text-center my-3">Created At: {new Date(user.user.updatedAt).toDateString()}</div>
						</div>
						<div className="bg-white rounded-md shadow-md w-1/2 flex flex-col justify-between gap-4 p-20">
							<div className="flex justify-between items-center">
								<label htmlFor="email" className="text-xl">
									Email:
								</label>
								<input id="email" type="text" className="input w-full max-w-xs input-bordered" disabled ref={emailRef} />
							</div>
							<div className="flex justify-between items-center">
								<label htmlFor="address" className="text-xl">
									Address:
								</label>
								<input id="address" type="text" className="input w-full max-w-xs input-bordered" ref={addressRef} />
							</div>
							<div className="flex justify-between items-center">
								<label htmlFor="phone" className="text-xl">
									Phone:
								</label>
								<input id="phone" type="text" className="input w-full max-w-xs input-bordered" ref={phoneRef} />
							</div>

							<button onClick={handleUpdateInfo} className="btn btn-success text-white">
								{loading ? <LoadingSpinner /> : 'Update Info'}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default index;
