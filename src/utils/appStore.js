import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/appSlice";
import searchMovieSlice from "../utils/searchMovieSlice";
import liveChatMessage from "../utils/liveChatSlice";
import historySlice from "../utils/historySlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    searchMovies: searchMovieSlice,
    live: liveChatMessage,
    history: historySlice,
  },
});

export default appStore;
