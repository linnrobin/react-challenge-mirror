import axios from "axios";

export const SET_MOVIES = "SET_MOVIES";
export const SET_MOVIE = "SET_MOVIE";
export const SET_MOVIES_LOADING = "SET_MOVIES_LOADING";
export const SET_MOVIE_LOADING = "SET_MOVIE_LOADING";
export const SET_MOVIES_ERROR = "SET_MOVIES_ERROR";
export const SET_MOVIE_ERROR = "SET_MOVIE_ERROR";
export const SET_FAVORITES = "SET_FAVORITES";
export const SET_FAVORITES_LOADING = "SET_FAVORITES_LOADING";
export const SET_FAVORITES_ERROR = "SET_FAVORITES_ERROR";

export const setMovies = (data) => {
  return { type: SET_MOVIES, payload: data.results };
};

export const setMovie = (data) => {
  return { type: SET_MOVIE, payload: data };
};

export const setMoviesLoading = (data) => {
  return { type: SET_MOVIES_LOADING, payload: data };
};

export const setMovieLoading = (data) => {
  return { type: SET_MOVIE_LOADING, payload: data };
};

export const setMoviesError = (data) => {
  return { type: SET_MOVIES_ERROR, payload: data };
};

export const setMovieError = (data) => {
  return { type: SET_MOVIE_ERROR, payload: data };
};

export const setFavorites = (data) => {
  return { type: SET_FAVORITES, payload: data };
};

export const setFavoritesLoading = (data) => {
  return { type: SET_FAVORITES_LOADING, payload: data };
};

export const setFavoritesError = (data) => {
  return { type: SET_FAVORITES_ERROR, payload: data };
};

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(setMoviesLoading(true));
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=d7cd318e78bcc8e62adff521f04d307b"
      )
      .then(({ data }) => dispatch(setMovies(data)))
      .catch((err) => dispatch(setMoviesError(err)))
      .finally(() => dispatch(setMoviesLoading(false)));
  };
};

export const fetchMovie = (id) => {
  return (dispatch) => {
    dispatch(setMovieLoading(true));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d7cd318e78bcc8e62adff521f04d307b`
      )
      .then(({ data }) => dispatch(setMovie(data)))
      .catch((err) => dispatch(setMovieError(err)))
      .finally(() => dispatch(setMovieLoading(false)));
  };
};

export const fetchFavorite = (id) => {
  return (dispatch) => {
    dispatch(setFavoritesLoading(true));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d7cd318e78bcc8e62adff521f04d307b`
      )
      .then(({ data }) => dispatch(setFavorites(data)))
      .catch((err) => dispatch(setFavoritesError(err)))
      .finally(() => dispatch(setFavoritesLoading(false)));
  };
};
