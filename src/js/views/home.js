import React from "react";
import "../../styles/home.css";


import Banner from "../component/Banner.jsx"
import { People } from "./People.jsx";
import { Planets } from "./Planets.jsx";
import { Vehicles } from "./Vehicles.jsx";

export const Home = () => {

	return (
		<div className="text-center my-3">
			<Banner />
			<div className="container">
				<h2 className="text-start mt-4">People</h2>
				<People classSlide={true}/>

				<h2 className="text-start mt-4">Planets</h2>
				<Planets classSlide={true}/>

				<h2 className="text-start mt-4">Vehicles</h2>
				<Vehicles classSlide={true}/>				
			</div>
		</div>

	)
};
