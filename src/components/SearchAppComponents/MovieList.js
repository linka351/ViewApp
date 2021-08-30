import React from "react";
import { FaStar } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa'


const MovieList = ({movies}) => {
    return (
        <>
            <div className={"image_container"}>
            {movies.map((movie, index) => (
                <div>
                    <img className={"image_box"} src={movie.Poster} alt={"movie"}/>
                    <div className={"image_button"}>
                        <div className={"left_image_button"}>
                            <FaPlusCircle/>
                            <FaPlusCircle/>
                        </div>
                        <div className={"right_image_button"}>
                            <FaStar/>
                        </div>
                    </div>
                </div>

            ))}

            </div>
        </>
    )
}

export default MovieList