import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
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
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {movie.title ? movie.title : movie.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;
