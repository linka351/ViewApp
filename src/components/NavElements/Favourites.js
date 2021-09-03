import React from "react";
import FavouritesList from "../HeaderComponents/FavouritesList";

export const Favourites = () => {

    const favourites = JSON.parse(localStorage.getItem("favourites")) || []

    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Twoje ulubione filmy</h2>
                <FavouritesList/>
            </div>
            </div>
    )
}