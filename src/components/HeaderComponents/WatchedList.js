import React, { useState, useEffect } from "react";
import {FaPlusCircle, FaStar, FaTrashAlt} from 'react-icons/fa';
import ReactTooltip from "react-tooltip";


const WatchedList = () => {

    const [movies, setMovies] = useState(() => {
        return JSON.parse(localStorage.getItem("watched")) || []
    });

    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify(movies))
    }, [movies]);

    function DeleteClick(id) {
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

    const addToWatch = (movieID) => {
        const watched = JSON.parse(localStorage.getItem("watch")) || [];
        watched.push(movieID)
        localStorage.setItem("watch", JSON.stringify(watched));
    }

    return (
        <>
            <div className={"image_container"}>
                {movies.map((movie, index) =>
                    <li key={index}>
                        <div>
                            <img className={"image_box"} src={movie.Poster} alt={"movie"}/>
                            <div className={"image_button"}>
                                <div className={"to_watch_button"} >
                                    <button className={"add_to_watched_button"} data-tip data-for="add_to_watch" onClick={() => addToWatch(movie)}><FaPlusCircle/></button>
                                    <button className={"add_to_favourites_button"} data-tip data-for="add_to_favourites" onClick={() => addToFavourites(movie)}><FaStar/></button>
                                </div>
                                <ReactTooltip id="add_to_watch" place="top" effect="solid">
                                    Dodaj film do obejrzenia
                                </ReactTooltip>
                                <ReactTooltip id="add_to_favourites" place="top" effect="solid">
                                    Dodaj film do ulubionych
                                </ReactTooltip>
                                <div className={"trash_button"}>
                                    <button data-tip data-for="delete_from_watched" onClick={() => DeleteClick(movie.imdbID)}><FaTrashAlt/></button>
                                </div>
                                <ReactTooltip id="delete_from_watched" place="top" effect="solid">
                                    Usuń z obejrzanych
                                </ReactTooltip>
                            </div>
                        </div>
                    </li>
                )}
            </div>
        </>
    )
}

export default WatchedList;