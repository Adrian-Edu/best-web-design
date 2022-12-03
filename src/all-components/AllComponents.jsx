import React from "react";
import Home from "../home/Home";
import WebDesign from "../web-design/WebDesign";
import Skills from "../skills-page/SkillsPage";
import Services from "../services-page/Services";
import StepsPage from "../steps-page/StepsPage";
import Portofolio from "../portofolio/Portofolio";
import ContactPage from "../contact-page/ContactPage";

function AllComponents() {
  return (
    <section>
      <Home />
      <WebDesign />
      <Skills />
      <Services />
      <StepsPage />
      <Portofolio />
      <ContactPage />
    </section>
  );
}

export default AllComponents;
