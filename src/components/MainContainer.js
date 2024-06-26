import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector(store => store.movie.nowPlayingMovies);
    if (!movies.length) return;

    const mainMovie = movies[2]
    const { title, overview , id} = mainMovie;

    return (<div>
        <VideoTitle title={ title} overview ={overview}></VideoTitle>
        <VideoBackground id={ id}></VideoBackground>
    </div>)
}
export default MainContainer;
