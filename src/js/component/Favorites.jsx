import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom';



export const Favorites = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [favoritesQty, setFavoritesQty] = useState(store.favorites.length);

    const handlerDavo = (url) => {
        navigate(url)
        actions.flag()
    }

    useEffect(() => {
        setFavoritesQty(store.favorites.length)
    }, [store.favorites])

    return (
        <div className="dropdown">
            <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="badge bg-danger rounded-pill">{favoritesQty}</span>
            </a>

            {store.favorites.length > 0 ? (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {store && store.favorites?.map((item, index) => {
                        return (
                            // <li key={index}><Link className="dropdown-item" to={item.url}>{item.name}</Link></li>
                            <li key={index}><p className="dropdown-item" onClick={()=>{handlerDavo(item.url)}} to={item.url}>{item.name}</p></li>

                        )
                    })}
                </ul>
            ) : (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="dropdown-item">Favorites empty</li>
                </ul>
            )}

        </div>
    )
}
