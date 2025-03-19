import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import Card from "../component/Card.jsx";

export const Planets = ({classSlide=false}) => {

	const { store, actions } = useContext(Context);


	useEffect(() => {
		if (!store.planets.length > 0) {
			actions.getPlanets()
		}
	}, []);

	return (
		<div className="container">

				<div className={classSlide ? "d-flex overflow-auto " : "row"}>
					{store && store.planets?.map((planet) => {
						return (
							<React.Fragment key={planet.uid}>
								<Card classSlide={classSlide} uid={planet.uid} name={planet.name} url={planet.url} type={"planets"} image={store.images.planets}/>
							</React.Fragment>
						)
					})}
			</div>
		</div>

	)
};
