import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*

// REDUCER

const chooseBackgroundColor = (standard = "#0e1111", action) => {
  switch (action.type) {
    case "CHANGEBACKGROUNDTOWHITE":
      return "#d0efff";
    case "CHANGEBACKGROUNDTODARKk":
      return "#151B54";
    default:
      return standard;
  }
};

const chooseColor = (standard = "#151B54", action) => {
  switch (action.type) {
    case "CHANGECOLORTOWHITE":
      return "#FFFFFF";
    case "CHANGECOLORTODARK":
      return "#0e1111";
    default:
      return standard;
  }
};

let storeBkg = configureStore({ reducer: chooseBackgroundColor });
let storeColor = configureStore({ reducer: chooseColor });

// DISPLAY IN CONSOLE

storeBkg.subscribe(() => console.log(storeBkg.getState()));
storeColor.subscribe(() => console.log(storeColor.getState()));

// DISPACH

storeBkg.dispatch(changeBackgroundToDark());
storeColor.dispatch(chooseColor());

*/
