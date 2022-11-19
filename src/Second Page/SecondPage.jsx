import React from "react";
import "./SecondPage.css";
import secondslicepicture from "./secondslidepicture.png";
import background from "../background.png";

function SecondPage() {
  return (
    <section style={{ backgroundImage: `url(${background})` }}>
      <h4>Web Design</h4>

      <div className="second-container">
        <h5 className="secondpagetext">
          It is essential for any business to <br /> have a professional online{" "}
          <br /> presence. <br />
          Using thelatest technologies, I will
          <br />
          create a fully responsive <br />
          website.
        </h5>
        <img src={secondslicepicture} className="secondpicture" alt="" />
      </div>
    </section>
  );
}

export default SecondPage;
