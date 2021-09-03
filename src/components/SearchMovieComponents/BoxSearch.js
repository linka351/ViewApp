import React from "react";

const BoxSearch = ({value, setSearchValue}) => {
    return (
        <div className={"container"}>
            <div className={"search_movie"}>
                <div className={"search_movie_container"}>
                    <form className={"search_movie_form"}>
                        <label className={"search_movie_label"}>Wyszukaj film</label>
                        <input
                            className={"search_movie_input"}
                            type={"text"}
                            name={"query"} placeholder={"Nazwa filmu"} value={value}
                            onChange={(event) => setSearchValue(event.target.value)}
                            autoComplete={"off"}
                        />
                        <button className={"search_movie_button"} type={"submit"}>Szukaj</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BoxSearch;