import { useEffect, useState } from "react";
import axios from "axios";
import getGenreId from "../helpers/getGenreId";
import getMedium from "../helpers/getMedium";
import getQuality from "../helpers/getQuality";
import MovieCard from "./MovieCard";
import getLength from "../helpers/getLength";

const MovieSuggestion = ({ results, handleReset }) => {
    console.log(results)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const genreId = getGenreId(results.genre)
        const quality = getQuality(results.quality)
        const medium = getMedium(results.medium)
        const length = getLength(results.length)
        axios.get(`https://api.themoviedb.org/3/discover/${medium}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&&with_genres=${genreId}&${quality}&release_date.lte=2022&language=en-US&${length}`)
            .then((res) => {
                setMovies(res.data.results)
                console.log("useEffect ran with the following arguments ", "GENRE_ID: " + genreId, "MEDIUM: " + medium, "QUALITY: ", quality + "LENGTH: " + length)

            })

            .catch((err) => console.log(err))
    }, [results.genre, results.length, results.medium, results.quality]);

    return (
        <div>
            {movies && <MovieCard movie={movies[0]} handleReset={handleReset} />}
        </div>

    );
}

export default MovieSuggestion;