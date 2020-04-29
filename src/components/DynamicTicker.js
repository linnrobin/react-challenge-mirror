import React from "react";
import Ticker from "react-ticker";
import { useSelector } from "react-redux";

const GetMovies = () => {
  const movies = useSelector((state) => state.movies);
  console.log("dynamic", movies);

  let moviesStr = "";
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title) {
      moviesStr += `  ${i + 1}. ${movies[i].title} --- `;
    } else moviesStr += `  ${i + 1}. ${movies[i].name} --- `;
  }

  return movies ? (
    <h6 style={{ whiteSpace: "nowrap", padding: "0", margin: "0" }}>
      TRENDING - This Week --- {moviesStr}
    </h6>
  ) : (
    <p style={{ visibility: "hidden" }}>Placeholder</p>
  );
};

function DynamicTicker() {
  return (
    <Ticker offset="run-in" speed={10}>
      {() => <GetMovies />}
    </Ticker>
  );
}

export default DynamicTicker;
