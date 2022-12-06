import "./App.css";
import WebDesign from "./web-design/WebDesign";
import Skills from "./skills-page/SkillsPage";
import Services from "./services-page/Services";
import StepsPage from "./steps-page/StepsPage";
import Portofolio from "./portofolio/Portofolio";
import ContactPage from "./contact-page/ContactPage";
import AllComponents from "./all-components/AllComponents";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";

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
