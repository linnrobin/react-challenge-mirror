import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieList from "../views/MovieList";
import MovieDetail from "../views/MovieDetail";

function Routers() {
  return (
    <Switch>
      <Route path="/movies/:id">
        <MovieDetail />
      </Route>
      <Route exact path="/">
        <MovieList />
      </Route>
    </Switch>
  );
}

export default Routers;
