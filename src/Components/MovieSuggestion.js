import { useEffect, useState } from "react";
import axios from "axios";
import getGenreId from "../requests/getGenreId";
import getMedium from "../requests/getMedium";
import getQuality from "../requests/getQuality";
import MovieCard from "./MovieCard";
import getLength from "../requests/getLength";

const MovieSuggestion = ({ results }) => {

    console.log(getMedium(results.medium))
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const genreId = getGenreId(results.genre)
        const medium = getMedium(results.medium)
        const quality = getQuality(results.quality)
        const length = getLength(results.length)
        axios.get(`https://api.themoviedb.org/3/discover/${medium}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&&with_genres=${genreId}&${quality}&release_date.lte=2022&language=en-US&${length}`)
            .then((res) => {
                setMovies(res.data.results)
            })

            .catch((err) => console.log(err))
    }, [results.genre, results.length, results.medium, results.quality]);



    console.log("here are the movies ==> ", movies)

    
    return (
        <div>
            {movies && <MovieCard movies={movies} />}
        </div>
    
    );
}

export default MovieSuggestion;