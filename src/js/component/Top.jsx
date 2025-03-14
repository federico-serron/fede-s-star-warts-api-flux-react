import React from "react";

const Top = () => {
    return (
        <div className="container-fluid justify-content-evenly row my-3">
            <div className="col-4">
                <a className="navbar-brand" href="#">Star Wars Databank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-4 text-center">
                <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className=" w-25 mx-auto" alt="" />
            </div>
            <div className="col-4">
                Soy otro contenido para un compoete de busqueda
            </div>

    </div>
    );
}

export default Top