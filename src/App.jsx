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
import NotFound from "./pages/not-found/NotFound";
import Footer from "./pages/footer-page/Footer";
import Contact from "./pages/contact/contact";

function App() {
  const [switchBackgroundColor, setswitchBackgroundColor] = useState("#151B54");
  const [switchTextColor, setswitchTextColor] = useState("#FFFFFF");

  const getImage = (image) => {
    setswitchBackgroundColor(image);
  };

  const getTextColor = (color) => {
    setswitchTextColor(color);
  };

  return (
    <>
      <Navbar sendImage={getImage} sendTextColor={getTextColor} />
      <Routes>
        <Route
          path="/"
          element={
            <AllComponents
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="home"
          element={
            <Home
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="webdesign"
          element={
            <WebDesign
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="skills"
          element={
            <Skills
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="services"
          element={
            <Services
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="steps"
          element={
            <StepsPage
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        add
        <Route
          path="portofolio"
          element={
            <Portofolio
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="contact"
          element={
            <Contact
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
      </Routes>
      <Footer background={switchBackgroundColor} textColor={switchTextColor} />
    </>
  );
}

export default App;
