import "./App.css";
import Home from "./home/Home";
import WebDesign from "./web-design/WebDesign";
import Skills from "./skills-page/SkillsPage";
import Services from "./services-page/Services";
import StepsPage from "./steps-page/StepsPage";
import PortofolioPageOne from "./portofolio-page-one/PortofolioPageOne";
import PortofolioPageTwo from "./portofolio-page-two/PortofolioPageTwo";
import ContactPage from "./contact-page/ContactPage";
import AllComponents from "./all-components/AllComponents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllComponents />} />
      <Route path="home" element={<Home />} />
      <Route path="webdesign" element={<WebDesign />} />
      <Route path="skills" element={<Skills />} />
      <Route path="services" element={<Services />} />
      <Route path="steps" element={<StepsPage />} />
      <Route path="portofoliopageone" element={<PortofolioPageOne />} />
      <Route path="portofoliopagetwo" element={<PortofolioPageTwo />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
