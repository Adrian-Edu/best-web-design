import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/home/Home.jsx";
import WebDesign from "./pages/web-design/WebDesign";
import Skills from "./components/../pages/skills-page/SkillsPage";
import Services from "./components/../pages/services-page/Services";
import StepsPage from "./components/../pages/steps-page/StepsPage";
import Portofolio from "./components/../pages/portofolio/Portofolio";
import AllComponents from "./components/../pages/all-pages/AllComponents";
import Navbar from "./components/navbar/Navbar";
import darkbackground from "./assets/darkbackground.png";
import NotFound from "./pages/not-found/NotFound";
import Footer from "./components/../pages/footer-page/Footer";

function App() {
  const [switchImage, setSwitchImage] = useState(darkbackground);
  const [switchColor, setSwitchColor] = useState("#FFFFFF");

  const getImage = (image) => {
    setSwitchImage(image);
  };

  const getTextColor = (color) => {
    setSwitchColor(color);
  };

  return (
    <>
      <Navbar sendImage={getImage} sendTextColor={getTextColor} />
      <Routes>
        <Route
          path="/"
          element={
            <AllComponents background={switchImage} textColor={switchColor} />
          }
        />
        <Route
          path="home"
          element={<Home background={switchImage} textColor={switchColor} />}
        />
        <Route
          path="webdesign"
          element={
            <WebDesign background={switchImage} textColor={switchColor} />
          }
        />
        <Route
          path="skills"
          element={<Skills background={switchImage} textColor={switchColor} />}
        />
        <Route
          path="services"
          element={
            <Services background={switchImage} textColor={switchColor} />
          }
        />
        <Route
          path="steps"
          element={
            <StepsPage background={switchImage} textColor={switchColor} />
          }
        />
        add
        <Route
          path="portofolio"
          element={
            <Portofolio background={switchImage} textColor={switchColor} />
          }
        />
        <Route
          path="*"
          element={
            <NotFound background={switchImage} textColor={switchColor} />
          }
        />
      </Routes>
      <Footer background={switchImage} textColor={switchColor} />
    </>
  );
}

export default App;
