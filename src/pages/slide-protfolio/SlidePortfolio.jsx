import React, { useState } from "react";
import "./SlidePortfolio.css";
import product from "../../assets/product.avif";
import todo from "../../assets/todo.avif";
import lucky from "../../assets/lucky.avif";
import robo from "../../assets/robo.avif";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import "animate.css";
import Typewriter from "typewriter-effect";

function SlidePortfolio(props) {
  const currentPortfolio = [
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
      url: "https://vercel.com/adrian-edu/todo-app",
    },
    {
      id: 3,
      name: "The lucky dice game",
      image: lucky,
      url: "https://vercel.com/adrian-edu/lucky-dice",
    },
    {
      id: 4,
      name: "Robot joketeller",
      image: robo,
      url: "https://robo-joke-teller.adrianedu.repl.co/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeProjectPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentPortfolio.length - 1);
    }
  };

  const changeProjectTowards = () => {
    if (currentIndex === currentPortfolio.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section
      className="slide-page-height "
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <p className="header-slide">
          {" "}
          <Typewriter
            options={{
              strings: ["Portfolio presentation", "Portfolio"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <p className="subtitle-slide " style={{ color: `${props.textColor}` }}>
        {currentPortfolio[currentIndex].name}
      </p>
      <div className="slide-flex">
        <button onClick={changeProjectPrevious} className="button-slide">
          ←
        </button>
        <div>
          <a
            href={currentPortfolio[currentIndex].url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={currentPortfolio[currentIndex].image}
              className="slide-image"
              alt="portfolio img"
            />
          </a>
        </div>

        <button onClick={changeProjectTowards} className="button-slide">
          →
        </button>
      </div>
      <p className="message-slide  " style={{ color: `${props.textColor}` }}>
        <Typewriter
          options={{
            strings: ["See the project by clicking on the image!"],
            autoStart: true,
            loop: true,
          }}
        />{" "}
      </p>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default SlidePortfolio;
