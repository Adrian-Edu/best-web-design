import React from "react";
import "./SecondPage.css";
import secondslicepicture from "./secondslidepicture.png";
import background from "../background.png";

function SecondPage() {
  return (
    <section style={{ backgroundImage: `url(${background})` }}>
      <h4>Web Design</h4>
      <div className="container2">
        <h3 className="secondpagetext">
          It is essential for <br /> any business to have <br /> a professional
          online <br /> presence. Using the <br /> latest technologies, <br /> I
          will create a fully responsive website.
        </h3>
        <img src={secondslicepicture} className="secondpicture" alt="" />
      </div>
    </section>
  );
}

export default SecondPage;
