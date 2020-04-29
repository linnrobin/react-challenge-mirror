import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/percentage.css";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const movie = useSelector((state) => state.movie);
  console.log("satu movie: ", movie);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d7cd318e78bcc8e62adff521f04d307b`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => dispatch({ type: "SET_MOVIE", payload: data }))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Container
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), 
            rgba(0,0,0,0.5)), 
            url(https://image.tmdb.org/t/p/original${movie.backdrop_path})
            `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          maxWidth: "100vw",
        }}
      >
        <Row style={{ height: "89vh" }}>
          <Col
            className="align-self-center"
            xs
            lg="4"
            // style={{ backgroundColor: "yellow" }}
          >
            <Image
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
              style={{
                width: "20rem",
                borderRadius: "10px",
                boxShadow: "2px 3px 10px #9E9E9E",
                zIndex: "-1",
              }}
            />
          </Col>
          <Col style={{ paddingTop: "20px", color: "white" }}>
            <h1 style={{ fontWeight: "bold" }}>{movie.title}</h1>
            <h5>
              Release Date: {movie.release_date} - Duration: {movie.runtime}{" "}
              mins
            </h5>
            <Row
              style={{
                border: "1px white solid",
                padding: "15px",
                margin: "5px 100px 5px 3px",
              }}
            >
              {movie.overview}
            </Row>
            <Row className="m-3">
              <div className="clearfix">
                <div className={`c100 p${movie.vote_average * 10}`}>
                  <span>{movie.vote_average * 10}%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <h1 style={{ background: "white" }}>ID:{id}</h1> */}
    </>
  );
};

export default MovieDetail;
