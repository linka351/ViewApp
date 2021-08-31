import React from "react";
import MovieList from "./SearchAppComponents/MovieList";

export const Favourites = () => {

    const favourites = JSON.parse(localStorage.getItem("favourites")) || []

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Twoje ulubione filmy</h2>
                <MovieList movies={favourites}/>
            </div>
            </div>
    )
}