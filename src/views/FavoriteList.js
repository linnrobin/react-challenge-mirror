import React from "react";
import MovieCard from "../components/MovieCard";
import { CardColumns } from "react-bootstrap";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";

function FavoriteList() {
  const favorites = useSelector((state) => state.favorites);
  const loading = useSelector((state) => state.favoritesLoading);
  const error = useSelector((state) => state.favoritesError);
  console.log("favorites list: ", favorites);
  const Background =
    "https://bestwallpapers.in/wp-content/uploads/2018/05/deadpool-2-movie-bullet-poster-4k-wallpaper-3840x2160.jpg";

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;

  function ContentHider() {
    if (favorites.length === 0) {
      return <h1 style={{ color: "white" }}> No Content Yet...</h1>;
    } else {
      return (
        <>
          {favorites.map((favorite) => (
            <MovieCard
              movie={favorite}
              key={favorite.id}
              from={"FavoriteList"}
            />
          ))}
        </>
      );
    }
  }

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
      <ContentHider />
    </CardColumns>
  );
}

export default FavoriteList;
