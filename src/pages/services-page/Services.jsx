import React from "react";
import "./Services.css";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import desktop from "../../assets/desktop.avif";
import oldnew from "../../assets/oldvsnew.avif";
import "animate.css";
import Typewriter from "typewriter-effect";

function Services(props) {
  return (
    <section
      className="page-height"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <h6>
          <Typewriter
            options={{
              strings: ["Services", "Assistance"],
              autoStart: true,
              loop: true,
            }}
          />
        </h6>
      </div>
      <div className="fourt-container">
        <div className="first2-fourtpage  animate__animated animate__backInLeft">
          <p className="h7" style={{ color: `${props.textColor}` }}>
            Responsive website <br /> design
          </p>
          <img src={desktop} className="desktop-image" alt="dekstop img" />
        </div>
        <div className="second2-fourtpage  animate__animated animate__backInRight">
          <p className="h7" style={{ color: `${props.textColor}` }}>
            Modify your old <br /> website
          </p>
          <img src={oldnew} className="oldnew-image" alt="oldnew img" />
        </div>
        <BackToTopButton
          background={props.background}
          textColor={props.textColor}
        />
      </div>
    </section>
  );
}

export default Services;
