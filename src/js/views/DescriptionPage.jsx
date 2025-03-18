import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const DescriptionPage = () => {

    const { store, actions } = useContext(Context);
    const location = useLocation();
    const params = useParams();

    const [type, setType] = useState(location.pathname.split('/')[1]);

    useEffect( () => {
        async function fetchCurrentItem(type, id ) {
            if (params.id && type) {
                try {
                    await actions.getCurrentItem(type, id);          
                    console.log(store.currentItem) 
                } catch (error) {
                    console.error("There was an error", error)
                }
            }
        }

        fetchCurrentItem(type, params.id)

        return () => {
            actions.cleanUpCurrentItem()
        }

    }, [type, params.id]);


    return (
        <div className="container mt-3">
            <div className="row mb-3">
                <div className="col-6">
                    <img className="img-fluid w-100" src="https://conceptartworld.com/wp-content/uploads/2016/03/Star_Wars_The_Force_Awakens_Concept_Art_ILM_001.jpg" alt="" />
                </div>
                <div className="col-4">
                <h4>{store.currentItem?.properties?.name}</h4>
                <p>{store.currentItem?.description}</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-2">
                    <h4>{store.currentItem?.properties?.name}</h4>
                </div>
                <div className="col-2">
                    <h4>{store.currentItem?.properties?.gender}</h4>

                </div>
                <div className="col-2">
                    <h4>Algo</h4>

                </div>
                <div className="col-2">
                    <h4>Algo</h4>

                </div>
                <div className="col-2">
                    <h4>Algo</h4>

                </div>
                <div className="col-2">
                    <h4>Algo</h4>

                </div>
            </div>

        </div>
    )
}
