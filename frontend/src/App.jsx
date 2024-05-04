import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Signup from './pages/Signup';
import ShoppingCart from './pages/ShoppingCart';
import Admin from './pages/Admin';
import UserProfile from './pages/UserProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Reservation from './pages/Reservation';
import About from './pages/About';
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/profile" element={<UserProfile />} />
					<Route path="/reservation" element={<Reservation />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
