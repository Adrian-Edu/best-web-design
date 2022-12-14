import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/home/Home.jsx";
import WebDesign from "./pages/web-design/WebDesign";
import Skills from "./components/../pages/skills-page/SkillsPage";
import Services from "./components/../pages/services-page/Services";
import StepsPage from "./components/../pages/steps-page/StepsPage";
import Portofolio from "./components/../pages/portofolio/Portofolio";
import ContactPage from "./components/../pages/contact-page/ContactPage";
import AllComponents from "./components/../pages/all-pages/AllComponents";
import Navbar from "./components/navbar/Navbar";
import darkbackground from "./assets/darkbackground.png";
import NotFound from "./pages/not-found/NotFound";

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
          path="contact"
          element={
            <ContactPage background={switchImage} textColor={switchColor} />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
