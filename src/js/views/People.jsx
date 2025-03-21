import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

import Card from "../component/Card.jsx";
import { Spinner } from "../component/Spinner.jsx";

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
							<div key={person.uid} className="col-12 col-sm-6 col-md-4 col-lg-3">

								<React.Fragment>
									<Card classSlide={classSlide} uid={person.uid} name={person.name} url={person.url} type={"people"} image={store.images.people} />
								</React.Fragment>
							</div>
						)
					})}
				</div>
			)}

		</div>

	)
};
