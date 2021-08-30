import React from "react";
import { FaStar, FaPlusCircle, FaClock } from 'react-icons/fa';
import ReactTooltip from "react-tooltip";




const MovieList = ({movies}) => {

    return (
        <>
            <div className={"image_container"}>
            {movies.map((movie, index) => (
                <div>
                    <img className={"image_box"} src={movie.Poster} alt={"movie"}/>
                    <div className={"image_button"}>
                        <div className={"left_image_button"} >
                            <button data-tip data-for="add_to_watch"><FaPlusCircle/></button>
                            <button data-tip data-for="add_to_watched"><FaPlusCircle/></button>
                        </div>
                        <ReactTooltip id="add_to_watch" place="top" effect="solid">
                            Dodaj film do obejrzanych
                        </ReactTooltip>
                        <ReactTooltip id="add_to_watched" place="top" effect="solid">
                            Dodaj film do obejrzenia
                        </ReactTooltip>
                        <div className={"right_image_button"}>
                            <button data-tip data-for="add_to_favourites"><FaStar/></button>
                        </div>
                        <ReactTooltip id="add_to_favourites" place="top" effect="solid">
                            Dodaj do ulubionych
                        </ReactTooltip>
                    </div>
                </div>

            ))}

            </div>
        </>
    )
}

export default MovieList