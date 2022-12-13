import getGenreList from "../requests/getGenreList"
import userQuestions from '../userQuestions.json'

const genreList = () => {




    const categories = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Fantasy", "Romance"]

    const handleGetMovies = (cat) => {
        getGenreList(cat)
    }

    console.log(userQuestions)

    return (
        <div>
            <h2>What genre would you like to watch?</h2>
            <div>
                {userQuestions[0].responses.map(cat => {
                    return <button className="button" onClick={() => handleGetMovies(cat)}>{cat}</button>
                })}
            </div>
        </div>
    );
}

export default genreList;