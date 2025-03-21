import React from "react";
import { Favorites } from "./Favorites.jsx";

const Top = () => {
    return (
        <div className="container-fluid justify-content-evenly row my-3">
            <div className="col-sm-12 text-center col-md-4">
                <a className="navbar-brand" href="#">Star Wars Databank</a>

            </div>
            <div id="logo" className="col-sm-12 col-md-4  text-center">
                <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className=" w-25 mx-auto" alt="" />
            </div>
            <div className="col-sm-12 col-md-4 d-flex justify-content-end col-4">
                <Favorites/>
            </div>

    </div>
    );
}

export default Top