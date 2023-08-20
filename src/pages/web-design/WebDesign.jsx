import React from "react";
import "./WebDesign.css";
import secondslicepicture from "../../assets/secondslidepicture.png";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import "animate.css";
import Typewriter from "typewriter-effect";

function WebDesign(props) {
  return (
    <section
      className="page-height"
      style={{
        backgroundColor: `${props.background}`,
      }}
    >
      <div>
        <p className="website-header">
          <Typewriter
            options={{
              strings: ["Website Development"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="second-container">
        <div className="second-container-h6">
          <p
            className="h6"
            style={{
              color: `${props.textColor}`,
            }}
          >
            It is essential for any business to have a professional online
            presence.
          </p>
          <p
            className="h6"
            style={{
              color: `${props.textColor}`,
            }}
          >
            Using the latest technologies, I will create a fully responsive
            website.
          </p>
        </div>
        <div className="second-container-image">
          <img
            src={secondslicepicture}
            className="secondpicture animate__animated animate__backInRight "
            alt="presentation img"
          />
        </div>
      </div>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default WebDesign;
