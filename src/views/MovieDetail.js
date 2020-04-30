import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../store/actions";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/percentage.css";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const loading = useSelector((state) => state.movieLoading);
  const error = useSelector((state) => state.movieError);
  console.log("satu movie: ", movie);
  console.log("1.", loading);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

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
          <Col className="align-self-center" xs lg="4">
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
    </>
  );
};

export default MovieDetail;
