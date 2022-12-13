import axios from "axios";

const getGenreList = (genre) => {

    switch (genre) {
        default:
        case "Action": genre = 28
            break
        case "Adventure": genre = 12
            break
        case "Animation": genre = 16
            break
        case "Comedy": genre = 35
            break
        case "Crime": genre = 80
            break
        case "Drama": genre = 18
            break
        case "Fantasy": genre = 14
            break
        case "Romance": genre = 10749
    }

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&&with_genres=${genre}`)
        .then((res) => console.log(res.data.results))
        .catch((err) => console.log(err))
}

export default getGenreList