import '../Styles/MovieCard.css'

const MovieCard = ({ movie }) => {

    return (
        <div className='container'>
            <h2> Your movie for tonight: </h2>
            <h1 className='movie-title'>{movie.original_title}</h1>
            <img alt="movie poster" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
            <p className='desc'> {movie.overview} </p>

        </div>
    );
}

export default MovieCard