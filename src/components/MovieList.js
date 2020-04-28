import React from "react";
import { Card } from "react-bootstrap";
import useFetcher from "./useFetcher";

function MovieList() {
  const { loading, error, data: movies } = useFetcher(
    "https://api.themoviedb.org/3/trending/all/week?api_key=d7cd318e78bcc8e62adff521f04d307b"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <Card
          className="mt-3"
          style={{
            width: "22rem",
            borderRadius: "10px",
            boxShadow: "2px 3px 10px #9E9E9E",
          }}
          key={movie.id}
        >
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
            style={{ width: "22rem", borderRadius: "10px 10px 0 0" }}
          />
          <Card.Body>
            <Card.Title>{movie.title ? movie.title : movie.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}
export default MovieList;
