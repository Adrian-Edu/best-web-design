import { configureStore } from "@reduxjs/toolkit";
import chooseBackgroundColor from "./reducer";

const store = configureStore({ reducer: chooseBackgroundColor });

export default store;
