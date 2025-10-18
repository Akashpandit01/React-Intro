import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialState = JSON.parse(localStorage.getItem("watchlist")) || [];

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      if (!state.find(movie => movie.imdbID === action.payload.imdbID)) {
        state.push(action.payload);
        localStorage.setItem("watchlist", JSON.stringify(state));
      }
    },
    removeMovie: (state, action) => {
      const newState = state.filter(movie => movie.imdbID !== action.payload);
      localStorage.setItem("watchlist", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addMovie, removeMovie } = watchlistSlice.actions;
export default watchlistSlice.reducer;
