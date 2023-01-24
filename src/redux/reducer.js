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

export const { white, dark } = colorSlice.actions;

export default colorSlice.reducer;

/*

import { createSlice } from "@reduxjs/toolkit";

const intialColors = {
  backgroundColor: "#151B54",
  color: "#FFFFFF",
};

export const colorSlice = createSlice({
  name: "changeColors",
  initialState,
  reducers: {
    white: (state) => {
      backgroundColor.state = "#d0efff";
      color.state = "#0e1111";
    },
    dark: (state) => {
      backgroundColor.state = "#151B54";
      color.state = "#FFFFFF";
    },
  },
});

export const { white, dark } = colorSlice.actions;

export default colorSlice.reducer;

*/
