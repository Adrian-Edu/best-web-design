import React from "react";
import "./Home.css";
import pozamea from "../../assets/pozamea.png";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import Fade from "react-reveal/Fade";

function Home(props) {
  return (
    <section>
      <div
        className="container"
        style={{ backgroundColor: `${props.background}` }}
      >
        <div>
          <Fade left>
            <h1 style={{ color: `${props.textColor}` }}>
              My name is Adrian Edu,
            </h1>

            <h2 style={{ color: `${props.textColor}` }}>
              I am a Front-End <br /> Developer
            </h2>

            <h3 style={{ color: `${props.textColor}` }}>
              <Link className="remove-format-footer-home" to="/Contact">
                <p style={{ color: `${props.textColor}` }}>Contact me !</p>
              </Link>
            </h3>
          </Fade>
        </div>
        <Fade right>
          <div>
            <img src={pozamea} className="profilepic" alt="" />
          </div>
        </Fade>
      </div>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default Home;
