import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Pagination = () => {

    const { store, actions } = useContext(Context);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1)


    const handleNextPagination = () => {
        if (store.pagination_people[2] !== null) {
            actions.getPagePeople(store.pagination_people[2]);
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePreviousPagination = () => {
        if (store.pagination_people[3] !== null) {
            actions.getPagePeople(store.pagination_people[3]);
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePagination = (idx) => {
        if (idx > currentPage) {
            handleNextPagination();
        } else if (idx < currentPage) {
            handlePreviousPagination();
        }
    }


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                {Array.from({ length: pages }, (_, i) => (
                    <li key={i + 1} classNameName="page-item">
                        <a classNameName="page-link" href="#" onClick={() => handlePagination(i + 1)}>
                            {i + 1}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}