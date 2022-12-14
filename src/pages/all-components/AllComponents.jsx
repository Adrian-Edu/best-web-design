import React from "react";
import Home from "../home/Home";
import WebDesign from "../web-design/WebDesign";
import Skills from "../skills-page/SkillsPage";
import Services from "../services-page/Services";
import StepsPage from "../steps-page/StepsPage";

import ClientsTestimonial from "../clients-testimonials/ClientsTestimonials";
import Contact from "../contact/ContactPage";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import SlidePortfolio from "../slide-protfolio/SlidePortfolio";

function AllComponents(props) {
  return (
    <section>
      <Home background={props.background} textColor={props.textColor} />
      <WebDesign background={props.background} textColor={props.textColor} />
      <Skills background={props.background} textColor={props.textColor} />
      <Services background={props.background} textColor={props.textColor} />
      <StepsPage background={props.background} textColor={props.textColor} />
      <SlidePortfolio
        background={props.background}
        textColor={props.textColor}
      />
      <ClientsTestimonial
        background={props.background}
        textColor={props.textColor}
      />
      <Contact background={props.background} textColor={props.textColor} />
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default AllComponents;
