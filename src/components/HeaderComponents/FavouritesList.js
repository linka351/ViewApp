import React from "react";
import {FaPlusCircle, FaTrashAlt} from 'react-icons/fa';
import ReactTooltip from "react-tooltip";


const FavouritesList = ({movies}) => {

    const addToWatched = (movieID) => {
        const watched = JSON.parse(localStorage.getItem("watched")) || [];
        watched.push(movieID)
        localStorage.setItem("watched", JSON.stringify(watched));
    }

    const addToWatch = (movieID) => {
        const watch = JSON.parse(localStorage.getItem("watch")) || [];
        watch.push(movieID)
        localStorage.setItem("watch", JSON.stringify(watch));
    }

    return (
        <>
            <div className={"image_container"}>
                {movies.map((movie, index) => (
                    <div>
                        <img className={"image_box"} src={movie.Poster} alt={"movie"}/>
                        <div className={"image_button"}>
                            <div className={"left_image_button"} >
                                <button data-tip data-for="add_to_watch" onClick={() => addToWatch(movie)}><FaPlusCircle/></button>
                                <button data-tip data-for="add_to_watched" onClick={() => addToWatched(movie)}><FaPlusCircle/></button>
                            </div>
                            <ReactTooltip id="add_to_watch" place="top" effect="solid">
                                Dodaj film do obejrzenia
                            </ReactTooltip>
                            <ReactTooltip id="add_to_watched" place="top" effect="solid">
                                Dodaj film do obejrzanych
                            </ReactTooltip>
                            <div className={"trash_button"}>
                                <button data-tip data-for="delete_from_favourites"><FaTrashAlt/></button>
                            </div>
                            <ReactTooltip id="delete_from_favourites" place="top" effect="solid">
                                Usuń z ulubionych
                            </ReactTooltip>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default FavouritesList;