import React from "react";
import "./AboutMe.css";
import about from "../../assets/about.png";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";

function AboutMe(props) {
  return (
    <div
      className="page-height-about"
      style={{ backgroundColor: `${props.background}` }}
    >
      <p className="header-about">About me</p>
      <img src={about} alt="mountains img" className="about" />
      <p className="about-us-value" style={{ color: `${props.textColor}` }}>
        FOLLOW YOUR PASSION AND YOU'LL NEVER WORK A DAY!
      </p>
      <p className="about-us-value" style={{ color: `${props.textColor}` }}>
        I think this quote is the most meaningful value in our lives and the one
        that makes a big difference between me and others. <br /> My passion for
        programming will make your website look outstanding, <br /> whether it's
        your personal or professional website.
      </p>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </div>
  );
}

export default AboutMe;
