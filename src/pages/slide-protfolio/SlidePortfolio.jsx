import React, { useState } from "react";
import "./SlidePortfolio.css";
import product from "../../assets/product.png";
import todo from "../../assets/todo.png";
import lucky from "../../assets/lucky.png";
import robo from "../../assets/robo.png";

function SlidePortfolio(props) {
  const [buttonColor, setButtonColor] = useState("#ffffff");

  const portfolioData = [
    {
      id: 1,
      name: "Product website",
      image: product,
      url: "https://lading-page-12.adrianedu.repl.co/",
    },
    {
      id: 2,
      name: "Todo App",
      image: todo,
      url: "https://todo-app-dun-phi.vercel.app/",
    },
    {
      id: 3,
      name: "The lucky dice game",
      image: lucky,
      url: "https://lucky-dice-alpha.vercel.app/",
    },
    {
      id: 4,
      name: "Robot joketeller",
      image: robo,
      url: "https://robo-joke-teller.adrianedu.repl.co/",
    },
  ];

  const [currentPortfolio, setCurrentPortfolio] = useState([
    portfolioData[0],
    portfolioData[1],
    portfolioData[2],
    portfolioData[3],
  ]);

  const changeProjectRight = () => {
    setCurrentPortfolio();
  };

  const changeProjectLeft = () => {
    setCurrentPortfolio((prevState) => prevState - 1);
  };

  return (
    <section
      className="slide-page-height "
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <p className="header-slide">Portfolio</p>
      </div>
      {[currentPortfolio[0]].map((project) => {
        return (
          <div key={currentPortfolio.key}>
            <p className="h10" style={{ color: `${props.textColor}` }}>
              {project.name}
            </p>
            <div className="slide-flex">
              <button
                onClick={changeProjectLeft}
                onMouseEnter={() => setButtonColor("rgba(0, 0, 0, 1)")}
                onMouseLeave={() => setButtonColor("#ffffff")}
                style={{ backgroundColor: `${buttonColor}` }}
                className="button-slide"
              >
                ←
              </button>
              <img src={project.image} className="slide-image" alt="" />
              <button
                onClick={changeProjectRight}
                onMouseEnter={() => setButtonColor("rgba(0, 0, 0, 1)")}
                onMouseLeave={() => setButtonColor("#ffffff")}
                style={{ backgroundColor: `${buttonColor}` }}
                className="button-slide"
              >
                →
              </button>
            </div>
          </div>
        );
      })}
      <p style={{ color: `${props.textColor}` }}>
        See the project by clicking on the image!
      </p>
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
