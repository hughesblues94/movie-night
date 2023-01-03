import '../Styles/MovieCard.css'

const MovieCard = ({ movies }) => {
    const movieTitle = movies.map((movie) => movie.original_title)
    const movieTitle1 = movieTitle[0]
    const moviePosters = movies.map((movie) => movie.poster_path)
    const firstMovie = moviePosters[0]
    const movieDesc = movies.map((movie) => movie.overview)
    const firstDesc = movieDesc[0]
    return (
        <div className='container'>
            <h2> Your movie for tonight: </h2>
            <h1 className='movie-title'>{movieTitle1}</h1>
            <img alt="movie poster" src={`https://image.tmdb.org/t/p/w185${firstMovie}`} />
            <p className='desc'> {firstDesc} </p>

        </div>
    );
}

export default MovieCard