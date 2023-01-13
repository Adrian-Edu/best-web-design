import React from "react";
import changeBackgroundToWhite from "./action";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

function chooseBackgroundColor(standard = "#0e1111", action) {
  switch (action.type) {
    case "CHANGEBACKGROUNDTOWHITE":
      return "#d0efff";
    case "CHANGEBACKGROUNDTODARKk":
      return "#151B54";
    default:
      return standard;
  }
}

const reducers = combineReducers({
  chooseBackgroundColor,
});

const store = configureStore(reducers);

export default chooseBackgroundColor;
