import React from "react";
import MovieList from "./SearchAppComponents/MovieList";

export const ToWatch = () => {
    const watch = JSON.parse(localStorage.getItem("watch")) || [];

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Twoje ulubione filmy</h2>
                <MovieList movies={watch}/>
            </div>
        </div>
    )
}