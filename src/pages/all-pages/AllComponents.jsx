import React from "react";
import Home from "../home/Home";
import WebDesign from "../web-design/WebDesign";
import Skills from "../skills-page/SkillsPage";
import Services from "../services-page/Services";
import StepsPage from "../steps-page/StepsPage";
import Portofolio from "../portofolio/Portofolio";
import ClientsTestimonial from "../clients-testimonials/ClientsTestimonials";
import Contact from "../contact/Contact";

function AllComponents(props) {
  return (
    <section>
      <Home background={props.background} textColor={props.textColor} />
      <WebDesign background={props.background} textColor={props.textColor} />
      <Skills background={props.background} textColor={props.textColor} />
      <Services background={props.background} textColor={props.textColor} />
      <StepsPage background={props.background} textColor={props.textColor} />
      <Portofolio background={props.background} textColor={props.textColor} />
      <ClientsTestimonial
        background={props.background}
        textColor={props.textColor}
      />
      <Contact background={props.background} textColor={props.textColor} />
    </section>
  );
}

export default AllComponents;
