import React, {useState, useEffect} from "react";
import TextName from "./SearchAppComponents/TextName";
import BoxSearch from "./SearchAppComponents/BoxSearch";
import MovieList from "./SearchAppComponents/MovieList";

const SearchApi = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const MovieSearch = async () => {
        const url = `https://www.omdbapi.com/?s=${search}&apikey=9d83e569`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect( () => {
        MovieSearch(search);
    }, [search]);

    return (
        <div className={"container"}>
            <div className={"main"}>
                <TextName/>
                <BoxSearch searchValue={search} setSearchValue={setSearch}/>
                <MovieList movies={movies}/>
            </div>
        </div>

    )
}

export default SearchApi;