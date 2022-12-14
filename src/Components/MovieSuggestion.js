import { useEffect, useState } from "react";
import axios from "axios";
import getGenreId from "../helpers/getGenreId";
import getMedium from "../helpers/getMedium";
import getQuality from "../helpers/getQuality";
import MovieCard from "./MovieCard";
import Providers from "./Providers";
import getLength from "../helpers/getLength";

const MovieSuggestion = ({ results, handleReset }) => {
    console.log(results)
    const [movies, setMovies] = useState([])

    const random = Math.floor(Math.random() * (20 - 0 + 1)) + 0
    console.log(random)

    useEffect(() => {
        const genreId = getGenreId(results.genre)
        const quality = getQuality(results.quality)
        const medium = getMedium(results.medium)
        const length = getLength(results.length)
        axios.get(`https://api.themoviedb.org/3/discover/${medium}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&&with_genres=${genreId}&${quality}&release_date.lte=2022&language=en-US&${length}`)
            .then((res) => {
                setMovies(res.data.results)
                console.log(res.data.results)
            })

            .catch((err) => console.log(err))
    }, [results.genre, results.length, results.medium, results.quality]);

    return (
        <div>
            <div>
                {movies && <MovieCard movie={movies[random]} handleReset={handleReset} />}
            </div>
            <div>
                {movies && <Providers movie={movies[random]} />}

            </div>
        </div>
    );
}

export default MovieSuggestion;