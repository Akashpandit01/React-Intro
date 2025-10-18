import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "32e51e4a"; // Replace with your OMDb API key

// Async thunk to fetch movies by title
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
      );

      if (response.data.Response === "False") {
        return rejectWithValue(response.data.Error);
      }

      return response.data.Search;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    watchlist: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToWatchlist: (state, action) => {
      if (!state.watchlist.find((m) => m.imdbID === action.payload.imdbID)) {
        state.watchlist.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (m) => m.imdbID !== action.payload.imdbID
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToWatchlist, removeFromWatchlist } = movieSlice.actions;
export default movieSlice.reducer;
