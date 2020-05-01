import {
  SET_MOVIES,
  SET_MOVIE,
  SET_MOVIES_LOADING,
  SET_MOVIE_LOADING,
  SET_MOVIES_ERROR,
  SET_MOVIE_ERROR,
  SET_FAVORITES,
  SET_FAVORITES_LOADING,
  SET_FAVORITES_ERROR,
  SET_SEARCH_RESULTS,
} from "../actions";

const initialState = {
  movies: [],
  movie: {},
  moviesLoading: false,
  movieLoading: false,
  moviesError: null,
  movieError: null,
  favorites: [],
  favoritesLoading: false,
  favoritesError: null,
  searchResults: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === SET_MOVIES) {
    return { ...state, movies: payload };
  }

  if (type === SET_MOVIE) {
    return { ...state, movie: payload };
  }

  if (type === SET_MOVIES_LOADING) {
    return { ...state, moviesLoading: payload };
  }

  if (type === SET_MOVIE_LOADING) {
    return { ...state, movieLoading: payload };
  }

  if (type === SET_MOVIES_ERROR) {
    return { ...state, moviesError: payload };
  }

  if (type === SET_MOVIE_ERROR) {
    return { ...state, movieError: payload };
  }

  if (type === SET_FAVORITES) {
    return { ...state, favorites: [...state.favorites, payload] };
  }

  if (type === SET_FAVORITES_LOADING) {
    return { ...state, favoritesLoading: payload };
  }

  if (type === SET_FAVORITES_ERROR) {
    return { ...state, favoritesError: payload };
  }

  if (type === SET_SEARCH_RESULTS) {
    return { ...state, searchResults: payload };
  }

  return state;
}

export default reducer;
