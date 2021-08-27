import React from "react";

const MovieList = ({movies}) => {
    return (
        <>
            <div className={"image_container"}>
            {movies.map((movie, index) => (
                <div>
                    <img className={"image_box"} src={movie.Poster} alt={"movie"}/>
                </div>
            ))}
            </div>
        </>
    )
}

export default MovieList