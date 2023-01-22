import React from "react";
import "./Home.css";
import pozamea from "../../assets/pozamea.png";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import { motion } from "framer-motion";

function Home(props) {
  const animationButton = {
    whileHover: {
      scale: 1.2,
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
        <div>
          <h1
            className="animate__fadeInLeft"
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
            I am a Front-End
            <br />
            Developer
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

// FRAMER

/*

INTO COMPONENTS

<motion.div
  initial={{ x: "-100vw" }}
  animate={{ x: 0 }}
  transition={{
    delay: 1.5,
    duration: 2.5,
    type: "spring",
    stiffness: 100,
  }}

></motion.div>;

  whileHover={{
                  scale: 1.2,
                  textShadow: "0px 0px 8px black",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                  originX: 0,
                  color: "blue",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
*/

/*

OUTSIDE COMPONENTS AS CONSTANTS

 const animationImage = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      animation: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

    <motion.img
            variants={animationImage}
            initial="hidden"
            animate="visible"
            src={pozamea}
            className="profilepic "
            alt=""
          />

  ---------------------------------------------------
  const animationButton = {
    whileHover: {
      scale: 1.2,
      textShadow: "0px 0px 8px black",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      originX: 0,
      color: "blue",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  <motion.button
                variants={animationButton}
                whileHover="whileHover"
                style={{
                  color: `${props.textColor}`,
                }}
              >
                Contact me !
              </motion.button>

*/
