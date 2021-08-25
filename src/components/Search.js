import React from "react";

const Search = () => {
    return (
        <div className={"container"}>
            <div className={"main"}>
                <h2>Witaj Name!</h2>
                <div className={"search_movie"}>
                    <form className={"search_movie_form"}>
                        <label className={"search_movie_label"}>Wyszukaj film</label>
                        <input className={"search_movie_input"} type={"text"} name={"query"} placeholder={"Nazwa filmu"}/>
                        <button className={"search_movie_button"} type={"submit"}>Wyszukaj</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Search;