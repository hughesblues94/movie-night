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

    const moviePosters = movies.map((movie) => movie.poster_path)
    console.log("this is movie posters at position 0 => ", moviePosters[0])
    const firstMovie = moviePosters[0]


    //this is the array of movie ratings
    const movieRatings = movies.map((movie) => movie.vote_average)
    console.log("these are the movie ratings ===>", movieRatings)
    movieRatings.sort(function (a, b) { return b - a });
    const highestValue = movieRatings[0]
    console.log(highestValue)



    const firstMovieAverage = movieRatings[0]

    return (
        <div>
            {movies && <img alt="poster-img" src={`https://image.tmdb.org/t/p/w185${firstMovie}`}></img>}
            {movies && <h1>{firstMovieAverage}</h1>}
        </div>
    );
}

export default MovieSuggestion;