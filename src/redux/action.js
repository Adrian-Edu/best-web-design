import { createSlice } from "@reduxjs/toolkit";

const bgColorSlice = createSlice({
  name: "color",
  initialState: {
    themeColors: {
      backgroundColor: "",
      textColor: "",
    },
  },
  reducers: {
    changeBackgroundColor: (state, action) => {
      state.themeColors.backgroundColor = action.payload;

      console.log(action.payload);
    },

    changeTextColor: (state, action) => {
      console.log("textc", action.payload);
      state.themeColors.textColor = action.payload;
      console.log(action.payload);
    },
  },
});

export const { changeBackgroundColor, changeTextColor } = bgColorSlice.actions;

export default bgColorSlice.reducer;

/*
export const Action1 = (payload) => {
  return {
    type: 'ACTION_1',
    payload
  }
}

export const Action2 = (payload) => {
  return {
    type: 'ACTION_2',
    payload
  }
}

export const Action3 = (payload) => {
  return {
    type: 'ACTION_3',
    payload
  }
}

export const Action4 = (payload) => {
  return {
    type: 'ACTION_4',
    payload
  }
}
*/
