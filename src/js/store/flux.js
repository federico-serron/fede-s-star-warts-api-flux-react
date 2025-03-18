const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			currentItem: {},


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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

			getPagePeople: async (url) => {
				const store = getStore();
				try {
					const response = await fetch(url, { method: 'GET' })
					if (!response.ok) {
						console.log("Error getting the people", response.statusText)
						throw new Error("Error getting all the people from API");
					}
					const data = await response.json();
					setStore({ ...store, people: data.results, pagination_people: [data.total_pages, data.total_records, data.next, data.previous] })

				} catch (error) {
					console.error(error)
					return error
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
					setStore({...store, currentItem: data.result});
					return true;

				} catch (error) {
					console.error(error)
					return false;
				}

			},

			cleanUpCurrentItem: ()=>{
				const store = getStore();

				setStore({...store, currentItem: {}})
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
		}
	};
};

export default getState;
