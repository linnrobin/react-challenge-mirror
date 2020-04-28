import React from "react";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import { CardColumns } from "react-bootstrap";
import Ticker from "react-ticker";

function App() {
  const Background =
    "https://bestwallpapers.in/wp-content/uploads/2018/05/deadpool-2-movie-bullet-poster-4k-wallpaper-3840x2160.jpg";

  return (
    <>
      <Navigation />
      <div
        style={{
          color: "#444444",
          backgroundColor: "#FFFAFA",
          boxShadow: "2px 3px 10px #9E9E9E",
        }}
      >
        <Ticker mode="smooth" speed={10}>
          {() => <h6>TRENDING - This Week</h6>}
        </Ticker>
      </div>
      <CardColumns
        className="overflow-auto"
        style={{
          maxHeight: "87vh",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <MovieList />
      </CardColumns>
    </>
  );
}

export default App;
