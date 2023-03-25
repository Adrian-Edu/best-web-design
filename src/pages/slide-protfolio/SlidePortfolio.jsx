import React, { useState } from "react";
import "./SlidePortfolio.css";
import product from "../../assets/product.png";
import todo from "../../assets/todo.png";
import lucky from "../../assets/lucky.png";
import robo from "../../assets/robo.png";
import career from "../../assets/career.png";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import "animate.css";
import Typewriter from "typewriter-effect";

function SlidePortfolio(props) {
  const currentPortfolio = [
    {
      id: 1,
      name: "Career opportunities",
      image: career,
      url: "https://firme.peviitor.ro/",
    },
    {
      id: 2,
      name: "The lucky dice game",
      image: lucky,
      url: "https://lucky-dice-ruby.vercel.app/",
    },

    {
      id: 3,
      name: "Todo App",
      image: todo,
      url: "https://todo-app-six-lyart.vercel.app/",
    },
    {
      id: 4,
      name: "Product website",
      image: product,
      url: "https://lading-page-12.adrianedu.repl.co/",
    },
    {
      id: 5,
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


/*

.slide-page-height {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
}

.button-slide {
  font-size: 50px;
  max-height: 50px;
  max-width: 50;
  display: flex;
  margin: 0 15px;
  background-color: #3dd816;
  border: none;
  color: black;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  padding-bottom: 10px;
}

.slide-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  max-width: 680px;
  max-height: 680px;
  object-fit: contain;
  border-radius: 5px;
}

.header-slide {
  text-align: center;
  font-size: 60px;
  color: #f4b510;
  margin: 0;
  letter-spacing: 3px;
  font-weight: 700;
  padding: 70px 0 10px 0;
}

.subtitle-slide {
  font-size: 30px;
  font-weight: 700;
}

.message-slide {
  font-size: 20px;
  font-weight: 700;
}

@media screen and (max-width: 2000px) {
  .slide-image {
    max-width: 450px;
    max-height: 450px;
  }
  .button-slide {
    font-size: 30px;
    margin: 10px;
  }
}

@media screen and (max-width: 1500px) {
  .slide-image {
    max-width: 380px;
    max-height: 380px;
  }
  .header-slide {
    font-size: 50px;
  }
}

@media screen and (max-width: 800px) {
  .slide-image {
    max-width: 330px;
    max-height: 500px;
  }
  .header-slide {
    font-size: 40px;
  }
  .subtitle-slide {
    font-size: 25px;
  }

  .message-slide {
    font-size: 15px;
  }
  .button-slide {
    font-size: 25px;
    margin: 0 5px;
  }
}

@media screen and (max-width: 500px) {
  .slide-image {
    max-width: 270px;
    max-height: 270px;
  }
  .header-slide {
    font-size: 30px;
    padding: 50px 0 10px 0;
  }
  .subtitle-slide {
    font-size: 20px;
  }

  .message-slide {
    font-size: 15px;
  }
  .button-slide {
    font-size: 20px;
    margin: 0 3px;
    height: 25px;
    width: 24px;
  }
}

*/