import { useEffect, useState } from "react";
import axios from "axios";
import getGenreId from "../requests/getGenreId";

const MovieSuggestion = ({ results }) => {
    console.log("these are the results ", results)

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const genreId = getGenreId(results.genre)

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&&with_genres=${genreId}`)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    }, [results.genre]);


    console.log("here are the movies ==> ", movies)

    return (
        <div>

        </div>
    );
}

export default MovieSuggestion;