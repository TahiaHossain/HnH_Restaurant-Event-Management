import AllUsers from './AllUsers';
import { Menu } from './Menu';
import { RecentOrders } from './RecentOrders';
import Sidebar from './Sidebar';
import 'boxicons/css/boxicons.min.css';
import { useEffect, useState } from 'react';
import Reservations from './Reservations';

const Admin = () => {
	const [orders, setOrders] = useState([]);
	const [customers, setCustomers] = useState([]);
	const [products, setProducts] = useState([]);
	const [orderLoading, setOrderLoading] = useState(true);
	const [customerLoading, setCustomerLoading] = useState(true);
	const [productLoading, setProductLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [reservations, setReservations] = useState([]);
	const [reservationsLoading, setReservationsLoading] = useState(true);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		console.log('user:', user);
		setUser(user);
		fetchAllCustomers('', user).then((customers) => {
			setCustomers(customers);
			setCustomerLoading(false);
		});
		fetchAllOrders(user).then((orders) => {
			setOrders(orders);
			setOrderLoading(false);
		});
		fetchAllProducts(user).then((products) => {
			setProducts(products);
			setProductLoading(false);
		});
		fetchAllReservations(user).then((reservations) => {
			setReservations(reservations.reservations);
			setReservationsLoading(false);
		});
	}, []);
	return (
		<>
			<Sidebar />
			<section className="ml-60 bg-gray-200 min-h-screen transition-all duration-500 ease-in-out pt-5 px-5">
				<div className="flex justify-between flex-wrap mb-6">
					<TotalOrders ordersNumber={orders.length} orderLoading={orderLoading} />
					<TotalCustomers customerNumber={customers.length} customerLoading={customerLoading} />
				</div>

				<div className="grid grid-cols-4 gap-6">
					<div className="col-span-3">
						<RecentOrders orders={orders} orderLoading={orderLoading} user={user} setOrders={setOrders} />
					</div>
					<div className="col-span-1">
						<Menu products={products} productLoading={productLoading} />
					</div>
					<div className="col-span-4">
						<AllUsers users={customers} customerLoading={customerLoading} admin={user} />
					</div>
					<div className="col-span-4">
						<Reservations reservations={reservations} reservationsLoading={reservationsLoading} admin={user} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Admin;

function TotalOrders({ ordersNumber, orderLoading }) {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md flex items-center w-1/2 md:w-1/4 mb-4 md:mb-0">
			<div className="text-3xl font-bold mr-4" id="total-orders"></div>
			<div className="flex gap-2 items-center ">
				{orderLoading ? (
					<span className="loading loading-bars loading-sm"></span>
				) : (
					<div className="text-xl py-1 px-3 rounded-md bg-gray-200">{ordersNumber}</div>
				)}
				<div className="text-lg font-semibold">Total Orders</div>
				<div className="flex items-center text-green-500 text-xl">
					<i className="bx bx-up-arrow-alt"></i>
				</div>
			</div>
			<i className="bx bx-cart-alt text-3xl ml-auto text-gray-500"></i>
		</div>
	);
}

function TotalCustomers({ customerNumber, customerLoading }) {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md flex items-center w-1/2 md:w-1/4 mb-4 md:mb-0">
			<div className="text-3xl font-bold mr-4" id="total-customers"></div>
			<div className="flex gap-2 items-center">
				{(customerLoading && <span className="loading loading-bars loading-sm"></span>) || (
					<div className="text-xl py-1 px-3 rounded-md bg-gray-200">{customerNumber}</div>
				)}
				<div className="text-lg font-semibold">Total Users</div>
				<div className="flex items-center text-green-500">
					<i className="bx bx-up-arrow-alt"></i>
				</div>
			</div>
			<i className="bx bxs-cart-add text-3xl ml-auto text-green-500"></i>
		</div>
	);
}

async function convertDate(originalDateString) {
	const date = new Date(originalDateString);

	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('en-US', options);
}

async function fetchAllCustomers(customerId, user) {
	try {
		const response = await fetch(`http://localhost:3001/api/users/get/${customerId}`, {
			headers: {
				Authorization: 'Bearer ' + user.refreshToken,
			},
		});
		const json = await response.json();
		console.log(json);
		return json.payload.users;
	} catch (error) {
		console.error('Error fetching customer name:', error);
	}
}

async function fetchAllOrders(admin) {
	try {
		const response = await fetch('http://localhost:3001/api/orders/');
		const json = await response.json();
		return json.payload.orders;
	} catch (error) {
		console.error('Error fetching total orders:', error);
	}
}

async function fetchAllProducts(user) {
	try {
		const response = await fetch('http://localhost:3001/api/products/', {
			headers: {
				Authorization: 'Bearer ' + user.refreshToken,
			},
		});
		const json = await response.json();
		return json.payload;
	} catch (error) {
		console.error('Error fetching total products:', error);
	}
}

async function fetchAllReservations(user) {
	try {
		const response = await fetch('http://localhost:3001/api/reservation/all', {
			headers: {
				Authorization: 'Bearer ' + user.refreshToken,
			},
		});
		const json = await response.json();
		return json.payload;
	} catch (error) {
		console.error('Error fetching total reservations:', error);
	}
}
