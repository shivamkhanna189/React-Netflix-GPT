import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    movies.length && (
      <div className="p-2">
        <h1 className="text-xl text-white">{title}</h1>
        <div className=" flex overflow-x-scroll">
          <div className="flex py-2">
            {movies.map(movie => (
                <MovieCard
                key={movie.id}
                img_path={movie.poster_path}></MovieCard>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
