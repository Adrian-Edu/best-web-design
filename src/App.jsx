import "./App.css";
import WebDesign from "./pages/web-design/WebDesign";
import Skills from "./components/../pages/skills-page/SkillsPage";
import Services from "./components/../pages/services-page/Services";
import StepsPage from "./components/../pages/steps-page/StepsPage";
import Portofolio from "./portofolio/Portofolio";
import ContactPage from "./components/../pages/contact-page/ContactPage";
import AllComponents from "./components/../pages/all-pages/AllComponents";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="webdesign" element={<WebDesign />} />
        <Route path="skills" element={<Skills />} />
        <Route path="services" element={<Services />} />
        <Route path="steps" element={<StepsPage />} />
        <Route path="portofolio" element={<Portofolio />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
