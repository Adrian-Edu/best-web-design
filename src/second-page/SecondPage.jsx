import React from "react";
import "./SecondPage.css";
import secondslicepicture from "./secondslidepicture.png";
import background from "../background.png";

function SecondPage() {
  return (
    <section
      className="page-height"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h4>Web Design</h4>
      </div>
      <div className="second-container">
        <div className="secondpagetext">
          <h5>
            It is essential for any business to <br /> have a professional
            online <br /> presence. <br />
          </h5>
          <h5>
            Using thelatest technologies, I will
            <br />
            create a fully responsive <br />
            website.
          </h5>
        </div>
        <img src={secondslicepicture} className="secondpicture" alt="" />
      </div>
    </section>
  );
}

export default SecondPage;
