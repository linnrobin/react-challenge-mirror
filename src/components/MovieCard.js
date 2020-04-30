import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchFavorite } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function MovieCard(content) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const { movie } = content;
  const { from } = content;

  function ButtonHider() {
    if (from === "MovieList") {
      return (
        <Button
          variant="primary"
          style={{ fontSize: "12px" }}
          onClick={(el) => AddToFavorites(el, movie.id)}
        >
          Add To Favorites
        </Button>
      );
    } else if (from === "FavoriteList") {
      return <></>;
    }
  }

  function AddToFavorites(el, id) {
    el.preventDefault();
    if (favorites.length === 0) {
      toast.success("Added Movie to Favorites");
      dispatch(fetchFavorite(id));
    } else {
      let flag = false;
      for (let i = 0; i < favorites.length; i++) {
        if (id === favorites[i].id) {
          flag = true;
          toast.error("Movie already added to favorites");
        }
      }
      if (!flag) {
        toast.success("Added Movie to Favorites");
        dispatch(fetchFavorite(id));
      }
    }
  }

  return (
    <Link to={`/movies/${movie.id}`}>
      <Card
        className="mt-3"
        style={{
          width: "16rem",
          borderRadius: "10px",
          boxShadow: "2px 3px 10px #9E9E9E",
          backgroundColor: "#FFFAFA",
        }}
      >
        <Card.Img
          variant="top"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          style={{
            width: "16rem",
            borderRadius: "10px 10px 0 0",
            opacity: "100%",
          }}
        />
        <Card.Body
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: "5px",
          }}
        >
          <Card.Title>{movie.title ? movie.title : movie.name}</Card.Title>
          <ButtonHider />
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;
