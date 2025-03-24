import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    darkMode: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    darkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu, darkMode } = appSlice.actions;
export default appSlice.reducer;
