import '../Styles/MovieCard.css'

const MovieCard = ({ movies }) => {
    const moviePosters = movies.map((movie) => movie.poster_path)
    console.log("this is movie posters at position 0 => ", moviePosters[0])
    const firstMovie = moviePosters[0]
    const movieDesc = movies.map((movie) => movie.overview)
    const firstDesc = movieDesc[0]
    return (
        <div>
            <h1> Your movie for tonight:</h1>
            <img alt="movie poster" src={`https://image.tmdb.org/t/p/w185${firstMovie}`} />
            <p> {firstDesc} </p>
        </div>
    );
}

export default MovieCard