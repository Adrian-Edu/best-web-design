import React from "react";
import "./Home.css";
import pozamea from "../../assets/pozamea.png";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import { motion } from "framer-motion";
import "animate.css";
import Typewriter from "typewriter-effect";

function Home(props) {
  const animationButton = {
    whileHover: {
      scale: 1.1,
      textShadow: "0px 0px 8px black",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      originX: 0,
      color: "blue",
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
    },
  };

  return (
    <section>
      <div
        className="container"
        style={{
          backgroundColor: `${props.background}`,
        }}
      >
        <div className="">
          <h1
            style={{
              color: `${props.textColor}`,
            }}
          >
            My name is Adrian Edu,
          </h1>

          <h2
            style={{
              color: `${props.textColor}`,
            }}
          >
            <Typewriter
              options={{
                strings: ["  Front-End Developer.", " Web Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <h3
            style={{
              color: `${props.textColor}`,
            }}
          >
            <Link className="remove-format-footer-home" to="/Contact">
              <motion.button
                variants={animationButton}
                whileHover="whileHover"
                style={{
                  color: `${props.textColor}`,
                }}
              >
                Contact me !
              </motion.button>
            </Link>
          </h3>
        </div>
        <div>
          <img src={pozamea} className="profilepic " alt="" />
        </div>
      </div>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default Home;
