import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import Card from "../component/Card.jsx";
import { Spinner } from "../component/Spinner.jsx";
import { Pagination } from "../component/Pagination.jsx";

export const People = ({ classSlide = false }) => {

	const { store, actions } = useContext(Context);
	const [isLoading, setIsLoading] = useState(false);


	useEffect(() => {
		setIsLoading(true);
		if (!store.people.length > 0) {
			actions.getPeople().then(() => setIsLoading(false))
		} else {
			setIsLoading(false);
		}
	}, []);

	return (
		<div className="container">
			{isLoading ? (
				<Spinner />
			) : (
				<div className={classSlide ? "d-flex overflow-auto" : "row"}>
					{store && store.people?.map((person) => {
						return (
							<React.Fragment key={person.uid}>
								<Card classSlide={classSlide} uid={person.uid} name={person.name} url={person.url} type={"people"} image={store.images.people} />
							</React.Fragment>
						)
					})}
				</div>
			)}

		</div>

	)
};
