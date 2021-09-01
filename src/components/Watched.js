import React from "react";
import MovieList from "./SearchAppComponents/MovieList";

export const Watched = () => {

    const watched = JSON.parse(localStorage.getItem("watched")) || [];

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Twoje ulubione filmy</h2>
                <MovieList movies={watched}/>
            </div>
        </div>
    )
}