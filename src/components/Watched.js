import React from "react";
import WatchedList from "./HeaderComponents/WatchedList";
export const Watched = () => {

    const watched = JSON.parse(localStorage.getItem("watched")) || [];

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Twoje ulubione filmy</h2>
                <WatchedList movies={watched}/>
            </div>
        </div>
    )
}