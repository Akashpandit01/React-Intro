import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Replace YOUR_API_KEY with your actual OMDb API key
export const fetchMovies = createAsyncThunk("movies/fetch", async (title) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=ce0857ff-b52c-4959-9432-652fc194e96c&s=${title}`);
  // OMDb returns Search array or undefined
  return response.data.Search || [];
});

const movieSlice = createSlice({
  name: "movies",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
