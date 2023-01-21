import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/home/Home.jsx";
import WebDesign from "./pages/web-design/WebDesign";
import Skills from "./components/../pages/skills-page/SkillsPage";
import Services from "./components/../pages/services-page/Services";
import StepsPage from "./components/../pages/steps-page/StepsPage";
import SlidePortfolio from "./components/../pages/slide-protfolio/SlidePortfolio";
import AllComponents from "./pages/all-components/AllComponents";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/ContactPage";
import ClientsTestimonials from "./pages/clients-testimonials/ClientsTestimonials";
import AboutMe from "./pages/about-me/AboutMe";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [switchBackgroundColor, setSwitchBackgroundColor] = useState("#151B54");
  const [switchTextColor, setswitchTextColor] = useState("#FFFFFF");

  const getImage = (image) => {
    setSwitchBackgroundColor(image);
  };                        

  const getTextColor = (color) => {
    setswitchTextColor(color);
  };

  const changeB = useSelector((state) => console.log(state));

  return (
    <>
      <Navbar sendImage={getImage} sendTextColor={getTextColor} />
      <Routes>
        <Route
          exact
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
        <Route
          path="portfolio"
          element={
            <SlidePortfolio
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="Contact"
          element={
            <Contact
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="clients"
          element={
            <ClientsTestimonials
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="about-me"
          element={
            <AboutMe
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
