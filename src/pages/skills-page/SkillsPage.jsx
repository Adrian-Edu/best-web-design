import React from "react";
import "./SkillsPage.css";
import background from "../../assets/background.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";

function SkillsPage() {
  return (
    <section
      className="page-height"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h4>Skills & Experience</h4>
      </div>
      <div className="third-container">
        <div className="first2">
          <img src={css} className="css" alt="" />
          <img src={html} className="html" alt="" />
        </div>
        <div className="second2">
          <img src={js} className="js" alt="" />
          <img src={react} className="react" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
