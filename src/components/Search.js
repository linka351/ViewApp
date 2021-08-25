import React from "react";

const Search = () => {
    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Witaj Name! w swojej wyszukiwarce filmów</h2>
                <div className={"search_movie"}>
                        <div className={"search_movie_container"}>
                            <form className={"search_movie_form"}>
                                <label className={"search_movie_label"}>Wyszukaj film</label>
                                <input className={"search_movie_input"} type={"text"} name={"query"} placeholder={"Nazwa filmu"}/>
                                <button className={"search_movie_button"} type={"submit"}>Szukaj</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Search;