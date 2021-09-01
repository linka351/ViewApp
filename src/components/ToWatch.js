import React from "react";
import ToWatchList from "./HeaderComponents/ToWatchList";

export const ToWatch = () => {
    const watch = JSON.parse(localStorage.getItem("watch")) || [];

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Twoje ulubione filmy</h2>
                <ToWatchList movies={watch}/>
            </div>
        </div>
    )
}