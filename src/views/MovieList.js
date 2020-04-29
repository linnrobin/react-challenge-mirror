import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { CardColumns } from "react-bootstrap";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function MovieList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const movies = useSelector((state) => state.movies);
  console.log("ini movies: ", movies);
  const url =
    "https://api.themoviedb.org/3/trending/all/week?api_key=d7cd318e78bcc8e62adff521f04d307b";
  const Background =
    "https://bestwallpapers.in/wp-content/uploads/2018/05/deadpool-2-movie-bullet-poster-4k-wallpaper-3840x2160.jpg";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) =>
        dispatch({ type: "SET_MOVIES", payload: data.results })
      )
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
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
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </CardColumns>
  );
}
export default MovieList;
