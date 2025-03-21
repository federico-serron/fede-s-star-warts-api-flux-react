const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			people: [],
			planets: [],
			vehicles: [],
			currentItem: {},
			images: {
				planets: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/internal_resources/121/Star_Wars_Kepler-22b_Kamino.png?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint",
				people: "https://conceptartworld.com/wp-content/uploads/2016/03/Star_Wars_The_Force_Awakens_Concept_Art_ILM_001.jpg",
				vehicles: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/12/17/1331765975410_5/star-wars-landspeeders-in-the-dakar-rally"
			}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getPeople: async () => {
				const store = getStore();
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/`, { method: 'GET' })
					if (!response.ok) {
						console.log("Error getting the people", response.statusText)
						throw new Error("Error getting all the people from API");
					}
					const data = await response.json();
					setStore({ ...store, people: data.results, pagination_people: [data.total_pages, data.total_records, data.next, data.previous] })
					console.log(store)



				} catch (error) {
					console.error(error)
				}

			},


			getPlanets: async () => {
				const store = getStore();
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/`, { method: 'GET' })
					if (!response.ok) {
						console.log("Error getting the planets", response.statusText)
						throw new Error("Error getting all the planets from API");
					}
					const data = await response.json();
					setStore({ ...store, planets: data.results })

				} catch (error) {
					console.error(error)
				}

			},

			getVehicles: async () => {
				const store = getStore();
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/`, { method: 'GET' })
					if (!response.ok) {
						console.log("Error getting the vehicles", response.statusText)
						throw new Error("Error getting all the vehicles from API");
					}
					const data = await response.json();
					setStore({ ...store, vehicles: data.results })

				} catch (error) {
					console.error(error)
				}

			},

			getCurrentItem: async (type, id) => {
				const store = getStore();
				try {
					const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`, { method: 'GET' })
					if (!response.ok) {
						console.log("Error getting the item", response.statusText)
						throw new Error("Error getting all the data for this item from API");
					}
					const data = await response.json();
					setStore({ ...store, currentItem: data.result });
					return true;

				} catch (error) {
					console.error(error)
					return false;
				}

			},

			cleanUpCurrentItem: () => {
				const store = getStore();

				setStore({ ...store, currentItem: {} })
			},

			setFavorite: (name, uid, type) => {
				const store = getStore();

				const indexFav = store.favorites.findIndex(favorite => favorite.name === name && favorite.uid === uid);

				if (indexFav !== -1) {
					const updatedFavorites = [...store.favorites];
					updatedFavorites.splice(indexFav, 1);
					setStore({ ...store, favorites: updatedFavorites });
					return true
				} else {
					try {

						const url = `/${type}/${uid}`;

						setStore({ ...store, favorites: [...store.favorites, { uid: uid, url: url, name: name }] })
						return true

					} catch (error) {
						console.error("It could't be added to favorites, please try again later, ", error)
						return false;
					}
				}


			},
		}
	};
};

export default getState;
