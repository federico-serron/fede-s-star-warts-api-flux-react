import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import Banner from "../component/Banner.jsx"
import Card from "../component/Card.jsx";
import { Pagination } from "../component/Pagination.jsx";

export const People = ({classSlide=false}) => {

	const { store, actions } = useContext(Context);


	useEffect(() => {
		if (!store.people.length > 0) {
			actions.getPeople()
		}
	}, []);

	return (
		<div className="container">

				<div className={classSlide ? "d-flex overflow-auto" : "row"}>
					{store && store.people?.map((person) => {
						return (
							<React.Fragment key={person.uid}>
								<Card classSlide={classSlide} uid={person.uid} name={person.name} url={person.url} type={"people"} image={store.images.people}/>
							</React.Fragment>
						)
					})}
			</div>
		</div>

	)
};
