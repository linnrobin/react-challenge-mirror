import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";
import { CardColumns } from "react-bootstrap";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.moviesLoading);
  const error = useSelector((state) => state.moviesError);
  console.log("ini movies: ", movies);
  const Background =
    "https://bestwallpapers.in/wp-content/uploads/2018/05/deadpool-2-movie-bullet-poster-4k-wallpaper-3840x2160.jpg";

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;

  return (
    <CardColumns
      className="overflow-auto"
      style={{
        maxHeight: "89vh",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        columnCount: "4",
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} from={"MovieList"} />
      ))}
    </CardColumns>
  );
}
export default MovieList;
