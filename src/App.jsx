import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [reciveData, setReciveData] = useState(darkbackground);

  const moveData = (personalData) => {
    setReciveData(personalData);
  };

  return (
    <>
      <Navbar send={moveData} />
      <Routes>
        <Route path="/" element={<AllComponents background={reciveData} />} />
        <Route path="home" element={<Home />} />
        <Route
          path="webdesign"
          element={<WebDesign background={reciveData} />}
        />
        <Route path="skills" element={<Skills background={reciveData} />} />
        <Route path="services" element={<Services background={reciveData} />} />
        <Route path="steps" element={<StepsPage background={reciveData} />} />
        <Route
          path="portofolio"
          element={<Portofolio background={reciveData} />}
        />
        <Route
          path="contact"
          element={<ContactPage background={reciveData} />}
        />
      </Routes>
    </>
  );
}

export default App;
