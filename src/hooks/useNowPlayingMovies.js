import { MOVIE_API_URL ,MOVIE_API_OPTIONS} from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMoveis = async () => {
        const data = await fetch(MOVIE_API_URL, MOVIE_API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMoveis();
    },[])
}

export default useNowPlayingMovies;