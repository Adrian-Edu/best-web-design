import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bgColorSlice from "./action";

const reducer = combineReducers({ state: bgColorSlice });

export const store = configureStore({
  reducer,
});
export default store;

/*

const reducers = combineReducers({ storeColor: colorReducer });

export const store = configureStore({
  reducers: reducers,
});
export default store;


*/
