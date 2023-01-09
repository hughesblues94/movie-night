import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/Providers.css'

const Providers = ({ movie }) => {

    const [whereToBuy, setWhereToBuy] = useState([])
    const [whereToRent, setWhereToRent] = useState([])
    const [whereToStream, setWhereToStream] = useState([])

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/watch/providers?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&watch_region=GB`)
            .then((res) => {
                console.log(res.data.results.GB)
                const toBuy = res.data.results.GB.buy
                const toRent = res.data.results.GB.rent
                const toStream = res.data.results.GB.flatrate
                setWhereToBuy(toBuy)
                setWhereToRent(toRent)
                setWhereToStream(toStream)
            })

            .catch((err) => console.log(err))
    }, [movie]);



    return (
        <div className="providers">

            <h1>Where to buy:</h1>

            {whereToBuy && whereToBuy.map((prov) => {
                return <div className="image-container">
                    <p>{prov.provider_name}</p>
                    <img className="logo" alt={prov.provider_name} src={`https://image.tmdb.org/t/p/w300/${prov.logo_path}`} />
                </div>
            })}

            <h1>Where to stream:</h1>

            {whereToStream && whereToStream.map((prov) => {
                return <div className="image-container">
                    <p>{prov.provider_name}</p>
                    <img className="logo" alt={prov.provider_name} src={`https://image.tmdb.org/t/p/w300/${prov.logo_path}`} />
                </div>
            })}

            <h1>Where to rent:</h1>

            {whereToRent && whereToRent.map((prov) => {
                return <div className="image-container">
                    <p>{prov.provider_name}</p>
                    <img className="logo" alt={prov.provider_name} src={`https://image.tmdb.org/t/p/w300/${prov.logo_path}`} />
                </div>
            })}

        </div>


    );
}

export default Providers;