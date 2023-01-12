import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// STORE-UL LOCUL UNDE TINEM DATELE

// ACTIONS

const changeBackgroundToWhite = () => {
  return {
    type: { CHANGETOWHITE: "#d0efff" },
  };
};

const changeBackgroundToDark = () => {
  return {
    type: { CHANGETODARK: "#151B54" },
  };
};

const changeTextColorToWhite = () => {
  return {
    type: { CHANGETOWHITE: "#FFFFFF" },
  };
};

const changeTextColorToDark = () => {
  return {
    type: { CHANGETDARK: "#0e1111" },
  };
};

// REDUCER

const chooseBackgroundColor = (standard = "#151B54", action) => {
  switch (action.type) {
    case "changeBackgroundToWhite":
      return "#d0efff";
    case "changeBackgroundToDark":
      return "#151B54";
    default:
      return standard;
  }
};

// DISPLAY IN CONSOLE

// DISPACH

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
