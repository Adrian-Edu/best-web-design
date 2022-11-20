import React from "react";
import "./Presentation.css";
import pozamea from "./pozamea.png";
import background from "../background.png";

function Presentation() {
  return (
    <section
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h1> My name is Adrian Edu, </h1>
        <h2>
          I am a FrontEnd <br /> Developer
        </h2>
        <h3>Contact me !</h3>
      </div>
      <div>
        <img src={pozamea} className="profilepic" alt="" />
      </div>
    </section>
  );
}

export default Presentation;