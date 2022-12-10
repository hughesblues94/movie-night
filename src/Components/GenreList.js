import getGenreList from "../requests/getGenreList"

const genreList = () => {

    const categories = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Fantasy", "Romance"]

    const handleGetMovies = (cat) => {
        getGenreList(cat)
    }

    return (
        <div>
            <h2>What genre would you like to watch?</h2>
            <div>
                {categories.map(cat => {
                    return <button className="button" onClick={() => handleGetMovies(cat)}>{cat}</button>
                })}
            </div>
        </div>
    );
}

export default genreList;