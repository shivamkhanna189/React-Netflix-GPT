import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie);
  return (
    <div className="bg-black pl-20">
      <div className="">
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}></MovieList>
              <MovieList title="Popular" movies={movies.popularMovies}></MovieList>
              <MovieList title="Top Rated" movies={movies.popularMovies}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
