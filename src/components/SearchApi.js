import React, {useState, useEffect} from "react";
import TextName from "./SearchAppComponents/TextName";
import BoxSearch from "./SearchAppComponents/BoxSearch";

const SearchApi = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=9d83e569`;

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search)
    };


    useEffect( () => {
        getMovieRequest();
    }, [searchValue])


    return (
        <div className={"container"}>
            <div className={"main"}>
                <TextName/>
                <BoxSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
        </div>

    )
}

export default SearchApi;