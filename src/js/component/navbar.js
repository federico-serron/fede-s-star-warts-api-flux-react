import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">NEWS + FEATURES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">VIDEO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FILMS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SERIES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">GAMES + INTERACTIVE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DATABANK</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DISNEY+</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
	);
};
