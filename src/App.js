import React from "react";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import { CardColumns } from "react-bootstrap";
import Ticker from "react-ticker";

function App() {
  return (
    <>
      <Navigation />
      <div
        style={{
          color: "#444444",
          fontSize: "60px",
          boxShadow: "2px 3px 10px #9E9E9E",
        }}
      >
        <Ticker mode="smooth" speed={10}>
          {() => <h1>TRENDING - This Week</h1>}
        </Ticker>
      </div>
      <CardColumns>
        <MovieList />
      </CardColumns>
    </>
  );
}

export default App;
