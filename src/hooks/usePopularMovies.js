import { useEffect } from "react";
import {POPULAR_MOVIES_API_URL} from "../utils/constants"
import {MOVIE_API_OPTIONS} from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const req = await fetch(POPULAR_MOVIES_API_URL , MOVIE_API_OPTIONS)
        const json = await req.json();
        dispatch(addPopularMovies(json.results))
    }
    useEffect(() => {
        getPopularMovies();
    },[])
}

export default usePopularMovies;