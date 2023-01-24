import { createSlice } from "@reduxjs/toolkit";

const intialColors = {
  backgroundColor: "#151B54",
  color: "#FFFFFF",
};

export const colorSlice = createSlice({
  name: "color",
  intialColors,
  reducers: {
    white: (state) => {
      state.backgroundColor = "#d0efff ";
      state.color = "#0e1111";
    },
    dark: (state) => {
      state.backgroundColor = "#151B54";
      state.color = "#FFFFFF";
    },
  },
});

export const { white } = colorSlice.actions;

export default colorSlice.reducer;
