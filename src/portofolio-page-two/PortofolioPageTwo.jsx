import React from "react";
import background from "../assets/background.png";
import "./PortofolioPageTwo.css";
import lucky from "../assets/lucky.png";
import robo from "../assets/robo.png";

function PortofolioPageTwo() {
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
            <p className="h10">The lucky dice game</p>
            <img src={lucky} className="lucky-dice" alt="" />
            <a
              href={"https://lucky-dice-alpha.vercel.app/"}
              target="_blank"
              rel="noreferrer"
            >
              <button className="sixth-button"> See the project </button>
            </a>
          </div>
        </div>
        <div className="second2-fifth">
          <div className="test2">
            <p className="h10">Robot joketeller</p>
            <img src={robo} className="robo" alt="" />
            <a
              href={"https://robo-joke-teller.adrianedu.repl.co/"}
              target="_blank"
              rel="noreferrer"
            >
              <button className="sixth-button"> See the project </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortofolioPageTwo;
