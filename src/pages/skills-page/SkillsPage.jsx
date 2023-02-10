import React from "react";
import "./SkillsPage.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import Typewriter from "typewriter-effect";
import "animate.css";

function SkillsPage(props) {
  return (
    <section
      className="page-height"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <Typewriter
          className="h4"
          options={{
            strings: ["Skills & Experience", "Abilities & Expertise"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="third-container">
        <div className="first2 animate__animated animate__backInLeft">
          <img src={css} className="css" alt="css img" />
          <img src={html} className="html" alt="html img" />
        </div>
        <div className="second2 animate__animated animate__backInRight">
          <img src={js} className="js" alt="js img" />
          <img src={react} className="react" alt="react img" />
        </div>
        <BackToTopButton
          background={props.background}
          textColor={props.textColor}
        />
      </div>
    </section>
  );
}

export default SkillsPage;
