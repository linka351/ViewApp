import React from "react";
import WatchedList from "./HeaderComponents/WatchedList";
export const Watched = () => {

    const watched = JSON.parse(localStorage.getItem("watched")) || [];

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Filmy które już widziałeś</h2>
                <WatchedList/>
            </div>
        </div>
    )
}