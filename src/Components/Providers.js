import axios from "axios";
import { useEffect } from "react";

const Providers = ({ movie }) => {


    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/watch/providers?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&watch_region=GB`)
            .then((res) => {
                console.log(res.data)
            })

            .catch((err) => console.log(err))
    }, [movie]);



    return (
        <div>
            <h1>These are the providers</h1>
        </div>


    );
}

export default Providers;