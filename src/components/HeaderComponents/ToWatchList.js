import React, { useState, useEffect } from "react";
import {FaPlusCircle, FaStar, FaTrashAlt} from 'react-icons/fa';
import ReactTooltip from "react-tooltip";


const ToWatchList = () => {

    const [movies, setMovies] = useState(() => {
        return JSON.parse(localStorage.getItem("watch")) || []
    });

    useEffect(() => {
        localStorage.setItem("watch", JSON.stringify(movies))
    }, [movies]);

    function handleDeleteClick(id) {
        const removeItem = movies.filter((movie) => {
            return movie.imdbID !== id;
        });
        setMovies(removeItem)
    }

    const addToFavourites = (movieID) => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        favourites.push(movieID)
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }

    const addToWatched = (movieID) => {
        const watch = JSON.parse(localStorage.getItem("watched")) || [];
        watch.push(movieID)
        localStorage.setItem("watched", JSON.stringify(watch));
    }

    return (
        <>
            <div className={"image_container"}>
                {movies.map((movie, index) =>
                    <li key={index}>
                        <div>
                            <img className={"image_box"} src={movie.Poster} alt={"movie"}/>
                            <div className={"image_button"}>
                                <div className={"to_watch_button"}>
                                    <button className={"add_to_watched_button"} data-tip data-for="add_to_watched" onClick={() => addToWatched(movie)}><FaPlusCircle/></button>
                                    <button className={"add_to_favourites_button"} data-tip data-for="add_to_favourites" onClick={() => addToFavourites(movie)}><FaStar/></button>
                                </div>
                                <ReactTooltip id="add_to_watched" place="top" effect="solid">
                                    Dodaj film do obejrzanych
                                </ReactTooltip>
                                <ReactTooltip id="add_to_favourites" place="top" effect="solid">
                                    Dodaj film do ulubionych
                                </ReactTooltip>
                                <div className={"trash_button"}>
                                    <button data-tip data-for="delete_from_watched" onClick={() => handleDeleteClick(movie.imdbID)}><FaTrashAlt/></button>
                                </div>
                                <ReactTooltip id="delete_from_watched" place="top" effect="solid">
                                    Usuń z filmów do obejrzenia
                                </ReactTooltip>
                            </div>
                        </div>
                    </li>
                )}

            </div>
        </>
    )
}

export default ToWatchList;