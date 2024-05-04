const Carousel = () => {
	return (
		<>
			<div className="h-[900px] carousel carousel-vertical w-full">
				<div className="carousel-item h-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
						}}>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className>
								<h1 className="mb-5 text-5xl font-bold">Ambiance</h1>
								<p className="mb-5">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae illo commodi voluptates consequatur placeat,
									saepe eaque modi voluptatum quisquam asperiores tempore unde rem neque ipsa repellendus esse doloribus nam harum.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item h-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
						}}>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className>
								<h1 className="mb-5 text-5xl font-bold">Cuisine</h1>
								<p className="mb-5">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae illo commodi voluptates consequatur placeat,
									saepe eaque modi voluptatum quisquam asperiores tempore unde rem neque ipsa repellendus esse doloribus nam harum.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel-item h-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								'url(https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
						}}>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className>
								<h1 className="mb-5 text-5xl font-bold">Events</h1>
								<p className="mb-5">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae illo commodi voluptates consequatur placeat,
									saepe eaque modi voluptatum quisquam asperiores tempore unde rem neque ipsa repellendus esse doloribus nam harum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
