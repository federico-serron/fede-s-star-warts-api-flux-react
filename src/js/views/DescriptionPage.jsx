import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const DescriptionPage = () => {

    const { store, actions } = useContext(Context);
    const location = useLocation();
    const params = useParams();

    const [type, setType] = useState(location.pathname.split('/')[1]);

    useEffect(() => {
        async function fetchCurrentItem(type, id) {
            if (id && type) {
                try {
                    await actions.getCurrentItem(type, id);
                } catch (error) {
                    console.error(`There was an error trying to get the ${type} item`, error)
                }
            }
        }

        fetchCurrentItem(type, params.id)

        return () => {
            actions.cleanUpCurrentItem()
        }

    }, [type, params.id]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-sm-6">
                            <div className="white-box text-center"><img src={store.images[type]} className="img-fluid" /></div>
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-6">
                            <h3 className="card-title">{store.currentItem?.properties?.name || 'Loading...'}</h3>
                            <h6 className="card-subtitle">{store.currentItem.properties ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quasi quia saepe consequuntur suscipit laborum minima ab voluptatibus incidunt atque.' : 'Loading...' }</h6>
                            <h3 className="box-title mt-5">Key Highlights</h3>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-check text-success"></i> {store.currentItem?.description || 'Loading...'}</li>
                            </ul>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3 className="box-title mt-5">General Info</h3>
                            <div className="table-responsive">
                                <table className="table table-product">
                                    {type === 'people' && (
                                        <tbody>
                                            <tr>
                                                <td width="390">Gender</td>
                                                <td>{store.currentItem?.properties?.gender || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Sking Color</td>
                                                <td>{store.currentItem?.properties?.skin_color || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Hair Color</td>
                                                <td>{store.currentItem?.properties?.hair_color || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Height</td>
                                                <td>{store.currentItem?.properties?.height || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Eye Color</td>
                                                <td>{store.currentItem?.properties?.eye_color || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Mass (Kg)</td>
                                                <td>{store.currentItem?.properties?.mass || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Birth Year</td>
                                                <td>{store.currentItem?.properties?.birth_year || 'Loading...'}</td>
                                            </tr>
                                        </tbody>
                                    )}

                                    {type === 'vehicles' && (
                                        <tbody>
                                            <tr>
                                                <td width="390">Consumables</td>
                                                <td>{store.currentItem?.properties?.consumables || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Cargo Capacity</td>
                                                <td>{store.currentItem?.properties?.cargo_capacity || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Passengers</td>
                                                <td>{store.currentItem?.properties?.passengers || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Max Atmosphering Speed</td>
                                                <td>{store.currentItem?.properties?.max_atmosphering_speed || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Crew</td>
                                                <td>{store.currentItem?.properties?.crew || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Length</td>
                                                <td>{store.currentItem?.properties?.length || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Model</td>
                                                <td>{store.currentItem?.properties?.model || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Cost</td>
                                                <td>{store.currentItem?.properties?.cost_in_credits || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Manufacturer</td>
                                                <td>{store.currentItem?.properties?.manufacturer || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Type</td>
                                                <td>{store.currentItem?.properties?.vehicle_class || 'Loading...'}</td>
                                            </tr>
                                        </tbody>
                                    )}

                                    {type === 'planets' && (
                                        <tbody>
                                            <tr>
                                                <td width="390">Climate</td>
                                                <td>{store.currentItem?.properties?.climate || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Surface Water</td>
                                                <td>{store.currentItem?.properties?.surface_water || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Diameter</td>
                                                <td>{store.currentItem?.properties?.diameter || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Rotation Period</td>
                                                <td>{store.currentItem?.properties?.rotation_period || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Terrain</td>
                                                <td>{store.currentItem?.properties?.terrain || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Gravity</td>
                                                <td>{store.currentItem?.properties?.gravity || 'Loading...'}</td>
                                            </tr>
                                            <tr>
                                                <td>Population</td>
                                                <td>{store.currentItem?.properties?.population || 'Loading...'}</td>
                                            </tr>
                                        </tbody>
                                    )}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
