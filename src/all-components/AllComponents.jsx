import React from "react";
import Home from "../home/Home";
import WebDesign from "../web-design/WebDesign";
import Skills from "../skills-page/SkillsPage";
import Services from "../services-page/Services";
import StepsPage from "../steps-page/StepsPage";
import PortofolioPageOne from "../portofolio-page-one/PortofolioPageOne";
import PortofolioPageTwo from "../portofolio-page-two/PortofolioPageTwo";
import ContactPage from "../contact-page/ContactPage";

function AllComponents() {
  return (
    <section>
      <Home />
      <WebDesign />
      <Skills />
      <Services />
      <StepsPage />
      <PortofolioPageOne />
      <PortofolioPageTwo />
      <ContactPage />
    </section>
  );
}

export default AllComponents;
