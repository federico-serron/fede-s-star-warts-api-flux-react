import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Top from "./component/Top.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./views/People.jsx";
import { Vehicles } from "./views/Vehicles.jsx";
import { Planets } from "./views/Planets.jsx";
import { DescriptionPage } from "./views/DescriptionPage.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Top/>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people/" element={<People />} />
						<Route path="/vehicles/" element={<Vehicles />} />
						<Route path="/planets/" element={<Planets />} />
						<Route path="/planets/:id" element={<DescriptionPage />} />
						<Route path="/people/:id" element={<DescriptionPage />} />
						<Route path="/vehicles/:id" element={<DescriptionPage />} />
						<Route path="/test/" element={<DescriptionPage />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
