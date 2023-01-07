import React, { useState } from "react";
import "./SlidePortfolio.css";
import product from "../../assets/product.png";
import todo from "../../assets/todo.png";
import lucky from "../../assets/lucky.png";
import robo from "../../assets/robo.png";
import { useEffect } from "react";

function SlidePortfolio(props) {
  const [buttonColor, setButtonColor] = useState("#ffffff");

  const portfolioData = [
    {
      nume: "Product website",
      image: product,
      url: "https://lading-page-12.adrianedu.repl.co/",
    },
    {
      nume: "Todo App",
      image: todo,
      url: "https://todo-app-dun-phi.vercel.app/",
    },
    {
      nume: "The lucky dice game",
      image: lucky,
      url: "https://lucky-dice-alpha.vercel.app/",
    },
    {
      nume: "Robot joketeller",
      image: robo,
      url: "https://robo-joke-teller.adrianedu.repl.co/",
    },
  ];

  return (
    <section
      className="slide-page-height "
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <p className="header-slide">Portfolio</p>
      </div>
    </section>
  );
}

export default SlidePortfolio;

/*


      <p className="h10" style={{ color: `${props.textColor}` }}>
        Robot joketeller
      </p>
      <div className="slide-flex">
        <button
          onMouseEnter={() => setButtonColor("rgba(0, 0, 0, 1)")}
          onMouseLeave={() => setButtonColor("#ffffff")}
          style={{ backgroundColor: `${buttonColor}` }}
          className="button-slide"
        >
          ←
        </button>
        <img src={product} className="slide-image" alt="" />
        <button
          onMouseEnter={() => setButtonColor("rgba(0, 0, 0, 1)")}
          onMouseLeave={() => setButtonColor("#ffffff")}
          style={{ backgroundColor: `${buttonColor}` }}
          className="button-slide"
        >
          →
        </button>
      </div>
      <p style={{ color: `${props.textColor}` }}>
        See the project by clicking on the image!
      </p>

      */
