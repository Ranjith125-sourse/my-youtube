import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "search",
  initialState: {
    searchMovies: null,
  },
  reducers: {
    addSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});

export const { addSearchMovies } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
