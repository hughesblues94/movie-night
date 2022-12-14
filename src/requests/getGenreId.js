const getGenreId = (genre) => {

    console.log("I'm running the getGEnreLIst function")
    const ACTION_ID = 28
    const ADVENTURE_ID = 12
    const ANIMATION_ID = 16
    const COMEDY_ID = 35
    const CRIME_ID = 80
    const DRAMA_ID = 18
    const FANTASY_ID = 14
    const ROMANCE_ID = 10749

    switch (genre) {
        default:
        case "Action": genre = ACTION_ID
            break
        case "Adventure": genre = ADVENTURE_ID
            break
        case "Animation": genre = ANIMATION_ID
            break
        case "Comedy": genre = COMEDY_ID
            break
        case "Crime": genre = CRIME_ID
            break
        case "Drama": genre = DRAMA_ID
            break
        case "Fantasy": genre = FANTASY_ID
            break
        case "Romance": genre = ROMANCE_ID
    }

    return genre

}

export default getGenreId