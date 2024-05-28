
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideoId } from "../utils/movieSlice";

const useTrailerVideo = (id) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          MOVIE_API_OPTIONS
        );
        const json = await data.json();
        const videosList = json.results;
        const trailerList = videosList.filter(data => data.type === "Trailer");
        dispatch(addTrailerVideoId(trailerList[0].key));
      };
      useEffect(() => {
        getMovieVideos();
      }, []);
}

export default useTrailerVideo;