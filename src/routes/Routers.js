import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieList from "../views/MovieList";
import MovieDetail from "../views/MovieDetail";
import FavoriteList from "../views/FavoriteList";

function Routers() {
  return (
    <Switch>
      <Route path="/movies/:id">
        <MovieDetail />
      </Route>
      <Route path="/favorites">
        <FavoriteList />
      </Route>
      <Route exact path="/">
        <MovieList />
      </Route>
    </Switch>
  );
}

export default Routers;
