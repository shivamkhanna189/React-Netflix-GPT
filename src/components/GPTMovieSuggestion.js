import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GPTMovieSuggestion = () => {

    const gpt = useSelector(store => store.gpt);

    if(!gpt.movieNames) return null

    return (<div className="p-4 m-4 bg-black text-white bg-opacity-70">
        {
            gpt.movieNames.map((name, index) => <MovieList key={index} title={name} movies={gpt.movieResults[index]}></MovieList>)
        }
    </div>)
}

export default GPTMovieSuggestion;