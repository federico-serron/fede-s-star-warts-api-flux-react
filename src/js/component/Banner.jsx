import React from "react";

const Banner = () => {
    return (
        <div id="carouselFade" className="carousel slide carousel-fade mb-4 px-4">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://superneox.com/cdn/shop/files/Anniversary-Sale-01.jpg?v=1723536721&width=3840" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item ">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/492ad6f0-78d0-4ea2-a58d-b79e2e22f54f/dhf2f78-96319ee5-bd3a-47a8-baa3-989dfeca998e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5MmFkNmYwLTc4ZDAtNGVhMi1hNThkLWI3OWUyZTIyZjU0ZlwvZGhmMmY3OC05NjMxOWVlNS1iZDNhLTQ3YTgtYmFhMy05ODlkZmVjYTk5OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ee7h8bhgXF2L7wldnSBW2UiS6H6tTXYr8x9nocQs_Ls" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner