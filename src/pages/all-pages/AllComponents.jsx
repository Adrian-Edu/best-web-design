import React from "react";
import Home from "../home/Home";
import WebDesign from "../web-design/WebDesign";
import Skills from "../skills-page/SkillsPage";
import Services from "../services-page/Services";
import StepsPage from "../steps-page/StepsPage";
import Portofolio from "../portofolio/Portofolio";
import ContactPage from "../contact-page/ContactPage";

function AllComponents(props) {
  return (
    <section>
      <Home background={props.background} />
      <WebDesign background={props.background} />
      <Skills background={props.background} />
      <Services background={props.background} />
      <StepsPage background={props.background} />
      <Portofolio background={props.background} />
      <ContactPage background={props.background} />
    </section>
  );
}

export default AllComponents;
