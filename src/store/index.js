import { createStore } from "redux";

const initialState = {
  movies: [],
  movie: {},
};

function reducer(state = initialState, action) {
  if (action.type === "SET_MOVIES") {
    return { ...state, movies: action.payload };
  } else if (action.type === "SET_MOVIE") {
    return { ...state, movie: action.payload };
  }
  return state;
}

const store = createStore(reducer);

export default store;
