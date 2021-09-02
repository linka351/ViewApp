import React from "react";
import { FaStar, FaPlusCircle } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";




const MovieList = ({movies}) => {
    const addToFavourites = (movieID) => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        favourites.push(movieID)
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }

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
            <div className={"main"}>
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
                        <div className={"right_image_button"}>
                            <button data-tip data-for="add_to_favourites" onClick={() => addToFavourites(movie)}><FaStar/></button>
                        </div>
                        <ReactTooltip id="add_to_favourites" place="top" effect="solid">
                            Dodaj do ulubionych
                        </ReactTooltip>
                    </div>
                </div>
            ))}

            </div>
            </div>

        </>
    )
}

export default MovieList