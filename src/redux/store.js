import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./reducer";

const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export default store;

/*

INDEX.JS

import { store } from "./toolkit/store";
import { Provider } from "react-redux";

<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
_______________________________________
APP.JSX

import { increment, decrement } from "./toolkit/reducer";
import { useDispatch, useSelector } from "react-redux";

const count = useSelector((state) => state.changeColor.context;
const dispatch = useDispatch();

 <button onClick={() => dispatch(white())}>

 <button onClick={() => dispatch(dark())}>
/*

_______________________________________
STORE

import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../toolkit/reducer";

export const store = configureStore({
  reducer: {
   changeColors: colorReducer,
  },
});
_______________________________________
 REDUCER

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColors: "",
  color: "",
};

export const colorSlice = createSlice({
  name: "changeColors",
  initialState,
  reducers: {
    white: (state) => {
      backgroundColor.context = "white";
      color.context = "black";
    },
    dark: (state) => {
      backgroundColor.context = "black";
      color.context = "white";
    },
  },
});

export const { white, dark } = colorSlice.actions;

export default colorSlice.reducer;

*/
