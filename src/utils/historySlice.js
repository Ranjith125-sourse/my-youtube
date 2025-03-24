import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    historyVideos: [],
  },
  reducers: {
    addHistoryVideo: (state, action) => {
      state.historyVideos.push(action.payload);
    },
    clearHistory: (state, action) => {
      state.historyVideos.length = 0;
    }
  },
});

export const { addHistoryVideo, clearHistory } = historySlice.actions;
export default historySlice.reducer;
