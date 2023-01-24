import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../redux/reducer";

export default configureStore({
  reducer: {
    background: colorReducer,
    color: colorReducer,
  },
});
