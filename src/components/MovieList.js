import React from "react";
import useFetcher from "../hooks/useFetcher";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

function MovieList() {
  const { loading, error, data: movies } = useFetcher(
    "https://api.themoviedb.org/3/trending/all/week?api_key=d7cd318e78bcc8e62adff521f04d307b"
  );

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
export default MovieList;
