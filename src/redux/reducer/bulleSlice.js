import { createSlice } from "@reduxjs/toolkit";

const bulleSlice = createSlice({
  name: "bulle",
  initialState: {
    isBullComicsVisible: false,
  },
  reducers: {
    toggleBullComics: (state) => {
      state.isBullComicsVisible = !state.isBullComicsVisible;
    },
  },
});

export const { toggleBullComics } = bulleSlice.actions;
export const selectIsBullComicsVisible = (state) => state.bulle.isBullComicsVisible;

export default bulleSlice.reducer;
