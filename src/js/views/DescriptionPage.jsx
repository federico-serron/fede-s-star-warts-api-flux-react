import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext";

export const DescriptionPage = () => {
    const { store, actions } = useContext(Context);
    const { type, id } = useParams(); // Aquí obtenemos tanto el type como el id

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCurrentItem(type, id) {
            if (id && type) {
                try {
                    await actions.getCurrentItem(type, id);
                } catch (error) {
                    console.error(`There was an error trying to get the ${type} item`, error);
                }
            }
        }

        setIsLoading(true);
        if (!store.currentItem.length > 0) {
            fetchCurrentItem(type, id).then(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }

        return () => {
            console.log("Se desmontó el componente");
            actions.cleanUpCurrentItem();
        };
    }, [type, id, store.flagStore]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mt-3">
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-sm-6">
                                <div className="white-box text-center">
                                    <img src={store.images[type]} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7 col-sm-6">
                                <h3 className="card-title">{store.currentItem?.properties?.name}</h3>
                                <h6 className="card-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quasi quia saepe consequuntur suscipit laborum minima ab voluptatibus incidunt atque.</h6>
                                <h3 className="box-title mt-5">Key Highlights</h3>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check text-success"></i> {store.currentItem.description}</li>
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
                                                    <td>{store.currentItem.properties?.gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Skin Color</td>
                                                    <td>{store.currentItem.properties?.skin_color}</td>
                                                </tr>
                                                <tr>
                                                    <td>Hair Color</td>
                                                    <td>{store.currentItem.properties?.hair_color}</td>
                                                </tr>
                                                <tr>
                                                    <td>Height</td>
                                                    <td>{store.currentItem.properties?.height}</td>
                                                </tr>
                                                <tr>
                                                    <td>Eye Color</td>
                                                    <td>{store.currentItem.properties?.eye_color}</td>
                                                </tr>
                                                <tr>
                                                    <td>Mass (Kg)</td>
                                                    <td>{store.currentItem.properties?.mass}</td>
                                                </tr>
                                                <tr>
                                                    <td>Birth Year</td>
                                                    <td>{store.currentItem.properties?.birth_year}</td>
                                                </tr>
                                            </tbody>
                                        )}

                                        {type === 'vehicles' && (
                                            <tbody>
                                                <tr>
                                                    <td width="390">Consumables</td>
                                                    <td>{store.currentItem.properties?.consumables}</td>
                                                </tr>
                                                <tr>
                                                    <td>Cargo Capacity</td>
                                                    <td>{store.currentItem.properties?.cargo_capacity}</td>
                                                </tr>
                                                <tr>
                                                    <td>Passengers</td>
                                                    <td>{store.currentItem.properties?.passengers}</td>
                                                </tr>
                                                <tr>
                                                    <td>Max Atmosphering Speed</td>
                                                    <td>{store.currentItem.properties?.max_atmosphering_speed}</td>
                                                </tr>
                                                <tr>
                                                    <td>Crew</td>
                                                    <td>{store.currentItem.properties?.crew}</td>
                                                </tr>
                                                <tr>
                                                    <td>Length</td>
                                                    <td>{store.currentItem.properties?.length}</td>
                                                </tr>
                                                <tr>
                                                    <td>Model</td>
                                                    <td>{store.currentItem.properties?.model}</td>
                                                </tr>
                                                <tr>
                                                    <td>Cost</td>
                                                    <td>{store.currentItem.properties?.cost_in_credits}</td>
                                                </tr>
                                                <tr>
                                                    <td>Manufacturer</td>
                                                    <td>{store.currentItem.properties?.manufacturer}</td>
                                                </tr>
                                                <tr>
                                                    <td>Type</td>
                                                    <td>{store.currentItem.properties?.vehicle_class}</td>
                                                </tr>
                                            </tbody>
                                        )}

                                        {type === 'planets' && (
                                            <tbody>
                                                <tr>
                                                    <td width="390">Climate</td>
                                                    <td>{store.currentItem.properties?.climate}</td>
                                                </tr>
                                                <tr>
                                                    <td>Surface Water</td>
                                                    <td>{store.currentItem.properties?.surface_water}</td>
                                                </tr>
                                                <tr>
                                                    <td>Diameter</td>
                                                    <td>{store.currentItem.properties?.diameter}</td>
                                                </tr>
                                                <tr>
                                                    <td>Rotation Period</td>
                                                    <td>{store.currentItem.properties?.rotation_period}</td>
                                                </tr>
                                                <tr>
                                                    <td>Terrain</td>
                                                    <td>{store.currentItem.properties?.terrain}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gravity</td>
                                                    <td>{store.currentItem.properties?.gravity}</td>
                                                </tr>
                                                <tr>
                                                    <td>Population</td>
                                                    <td>{store.currentItem.properties?.population}</td>
                                                </tr>
                                            </tbody>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};