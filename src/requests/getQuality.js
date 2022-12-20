const getQuality = (quality) => {

    if (quality === "Good") {
        return "vote_average.gte=8"
    } else if (quality === "Bad") {
        return "vote_average.lte=4"
    }
    
}

export default getQuality;