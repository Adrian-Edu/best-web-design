import React from "react";
import background from "../background.png";
import "./SixthPage.css";
import lucky from "./lucky.png";
import robo from "./robo.png";

function Seventh() {
  return (
    <section
      className="page-height"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <p className="header-sixth">Portofolio</p>
      </div>
      <div className="sixth-container">
        <div className="first2-fifth">
          <div className="test2">
            <h10>The lucky dice game</h10>
            <img src={lucky} className="product" alt="" />
            <button className="sixth-button">See the project</button>
          </div>
        </div>
        <div className="second2-fifth">
          <div className="test2">
            <h10>Robot joketeller</h10>
            <img src={robo} className="todo" alt="" />
            <button className="sixth-button">See the project</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seventh;
