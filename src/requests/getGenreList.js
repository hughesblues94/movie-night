import axios from "axios";

const getGenreList = (genre) => {
    if (genre === "Action") {
        genre = 28
    } else if (genre === "Adventure") {
        genre = 12
    }
    else if (genre === "Animation") {
        genre = 16
    }
    else if (genre === "Comedy") {
        genre = 35
    }
    else if (genre === "Crime") {
        genre = 80
    }
    else if (genre === "Drama") {
        genre = 18
    }
    else if (genre === "Fantasy") {
        genre = 14
    }
    else if (genre === "Romance") {
        genre = 10749
    }

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&&with_genres=${genre}`)
        .then((res) => console.log(res.data.results))
        .catch((err) => console.log(err))
}

export default getGenreList