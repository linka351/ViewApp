import React from "react";
import ToWatchList from "../HeaderComponents/ToWatchList";

export const ToWatch = () => {
    const watch = JSON.parse(localStorage.getItem("watch")) || [];

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Filmy które chcesz zobaczyć</h2>
                <ToWatchList/>
            </div>
        </div>
    )
}