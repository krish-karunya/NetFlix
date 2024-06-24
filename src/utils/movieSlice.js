import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
    popularMovie: null,
    upcomingMovie: null,
    TopRatedMovie: null,
    vedio: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.TopRatedMovie = action.payload;
    },
    addVedio: (state, action) => {
      state.vedio = action.payload;
    },
    removeVedio: (state) => {
      state.vedio = null;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailerVedio,
  addPopularMovie,
  addUpcomingMovie,
  addTopRatedMovie,
  addVedio,
  removeVedio,
} = movieSlice.actions;
export default movieSlice.reducer;
