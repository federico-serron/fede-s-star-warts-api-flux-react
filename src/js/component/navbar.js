import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

    const location = useLocation();

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/"} className={`nav-link ${location.pathname === "/" ? "active" : ""}`} href="#">ALL</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/people/"} className={`nav-link ${location.pathname.startsWith("/people") ? "active" : ""}`} href="#">PEOPLE</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/planets/"} className={`nav-link ${location.pathname.startsWith("/planets") ? "active" : ""}`} href="#">PLANETS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/vehicles/"}  className={`nav-link ${location.pathname.startsWith("/vehicles") ? "active" : ""}`} href="#">VEHICLES</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
	);
};
