import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ uid, name, classSlide, url, type }) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (

        <div className={classSlide ? "col-md-3 mt-3 mx-2 " : "col-md-3 mt-3 "} >
            <div className="card custom-card">
                <img src="https://conceptartworld.com/wp-content/uploads/2016/03/Star_Wars_The_Force_Awakens_Concept_Art_ILM_001.jpg" className="card-img-top" alt="Product Image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, architecto?</p>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light">
                    <Link className="btn btn-primary btn-sm" to={`/${type}/${uid}/`} >See more</Link>
                    <button className="btn btn-outline-secondary btn-sm"><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card