import { createSlice } from "@reduxjs/toolkit";
import { CHAT_COUNT } from "./constants";

const liveChatSlice = createSlice({
  name: "live",
  initialState: {
    liveMessage: [],
  },
  reducers: {
    addLiveMessage: (state, action) => {
      state.liveMessage.splice(CHAT_COUNT, 1);
      state.liveMessage.unshift(action.payload);
    },
  },
});

export const { addLiveMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
