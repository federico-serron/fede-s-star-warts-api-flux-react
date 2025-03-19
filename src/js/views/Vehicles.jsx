import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import Card from "../component/Card.jsx";

export const Vehicles = ({classSlide=false}) => {

	const { store, actions } = useContext(Context);


	useEffect(() => {
		if (!store.vehicles.length > 0) {
			actions.getVehicles()
		}
	}, []);

	return (
		<div className="container">

				<div className={classSlide ? "d-flex overflow-auto " : "row"}>
					{store && store.vehicles?.map((vehicle) => {
						return (
							<React.Fragment key={vehicle.uid}>
								<Card classSlide={classSlide} uid={vehicle.uid} name={vehicle.name} url={vehicle.url} type={"vehicles"} image={store.images.vehicles}/>
							</React.Fragment>
						)
					})}
			</div>
		</div>

	)
};
