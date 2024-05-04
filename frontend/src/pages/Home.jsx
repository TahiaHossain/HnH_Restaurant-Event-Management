import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
const Banner = () => {
	return (
		<div className="header">
			<div
				className="hero min-h-screen"
				style={{ backgroundImage: 'url(https://i.ibb.co/470DS4q/31739020-C980-41-E7-830-B-9-FFCE8090649.jpg)' }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Enjoy your tastes from H&H</h1>
						<p className="mb-5">
							Irresistible recipes and culinary inspiration await your discovery. Unleash your inner chef and savor the essence of
							extraordinary flavors.
						</p>
						{/* <button className="btn btn-primary">Get Started</button> */}
						<Link className="btn btn-primary" to="/signup">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

function Home() {
	return (
		<>
			<Banner />
			<Carousel></Carousel>
		</>
	);
}

export default Home;
