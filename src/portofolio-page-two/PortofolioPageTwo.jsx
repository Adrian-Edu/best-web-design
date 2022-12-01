import React from "react";
import background from "../background.png";
import "./PortofolioPageTwo";
import lucky from "./lucky.png";
import robo from "./robo.png";

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
            <img src={lucky} className="product" alt="" />
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
            <img src={robo} className="todo" alt="" />
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
