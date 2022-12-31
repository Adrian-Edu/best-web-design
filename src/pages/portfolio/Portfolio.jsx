import React from "react";
import todo from "../../assets/todo.png";
import product from "../../assets/product.png";
import lucky from "../../assets/lucky.png";
import robo from "../../assets/robo.png";
import "./Portfolio.css";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";

function Portfolio(props) {
  return (
    <section className="page-height-two">
      <div
        className="page-height"
        style={{ backgroundColor: `${props.background}` }}
      >
        <div>
          <p className="header-sixth">Portfolio</p>
        </div>
        <div className="sixth-container">
          <div className="first2-fifth">
            <div className="test2">
              <p className="h10" style={{ color: `${props.textColor}` }}>
                Product website
              </p>
              <img src={product} className="product" alt="" />

              <a
                href={"https://lading-page-12.adrianedu.repl.co/"}
                target="_blank"
                rel="noreferrer"
              >
                <button className="sixth-button"> See the project </button>
              </a>
            </div>
          </div>
          <div className="second2-fifth">
            <div className="test2">
              <p className="h10" style={{ color: `${props.textColor}` }}>
                Todo App
              </p>
              <img src={todo} className="todo" alt="" />

              <a
                href={"https://todo-app-dun-phi.vercel.app/"}
                target="_blank"
                rel="noreferrer"
              >
                <button className="sixth-button"> See the project </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="page-height"
        style={{ backgroundColor: `${props.background}` }}
      >
        <div>
          <p className="header-sixth">Portfolio</p>
        </div>
        <div className="sixth-container">
          <div className="first2-fifth">
            <div className="test2">
              <p className="h10" style={{ color: `${props.textColor}` }}>
                The lucky dice game
              </p>
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
              <p className="h10" style={{ color: `${props.textColor}` }}>
                Robot joketeller
              </p>
              <img src={robo} className="robo" alt="" />
              <a
                href={"https://robo-joke-teller.adrianedu.repl.co/"}
                target="_blank"
                rel="noreferrer"
              >
                <button className="sixth-button"> See the project </button>
              </a>
              <BackToTopButton
                background={props.background}
                textColor={props.textColor}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
