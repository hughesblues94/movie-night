import axios from "axios";
import { useEffect, useState } from "react";

const Providers = ({ movie }) => {

    const [whereToBuy, setWhereToBuy] = useState([])

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/watch/providers?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&watch_region=GB`)
            .then((res) => {
                console.log(res.data.results.GB)
                const toBuy = res.data.results.GB.buy
                setWhereToBuy(toBuy)
            })

            .catch((err) => console.log(err))
    }, [movie]);



    return (
        <div>
            <h1>These are the providers</h1>
            {whereToBuy && whereToBuy.map((prov) => <h1>{prov.provider_name}</h1>)}
        </div>


    );
}

export default Providers;