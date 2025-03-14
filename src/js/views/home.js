import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import Banner from "../component/Banner.jsx"

export const Home = () => (
	<div className="text-center mt-5">
		<Banner/>

							<div className="container">
								<div className="row">
									<div className="col-md-4">
										<div className="card">
											<img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Personajes"/>
												<div className="card-body">
													<h5 className="card-title">Personajes</h5>
													<p className="card-text">Descubre a los héroes y villanos de la saga.</p>
													<a href="#" className="btn btn-warning">Ver más</a>
												</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card">
											<img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Planetas"/>
												<div className="card-body">
													<h5 className="card-title">Planetas</h5>
													<p className="card-text">Explora los mundos de Star Wars.</p>
													<a href="#" className="btn btn-warning">Ver más</a>
												</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card">
											<img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Naves"/>
												<div className="card-body">
													<h5 className="card-title">Naves</h5>
													<p className="card-text">Conoce las naves más icónicas de la galaxia.</p>
													<a href="#" className="btn btn-warning">Ver más</a>
												</div>
										</div>
									</div>
								</div>
							</div>
				</div>

);
