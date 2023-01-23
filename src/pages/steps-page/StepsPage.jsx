import React from "react";
import "./StepsPage.css";
import search from "../../assets/search.png";
import figma from "../../assets/figma.png";
import laptop from "../../assets/laptop.png";
import release from "../../assets/release.png";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import "animate.css";
import Typewriter from "typewriter-effect";

function StepsPage(props) {
  return (
    <section
      className="page-height"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <p className="header-fifth">
          <Typewriter
            options={{
              strings: ["Steps for building <br /> a website"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="fifth-container">
        <div className="first2-fifth animate__animated animate__backInLeft">
          <div className="test">
            <p className="h9" style={{ color: `${props.textColor}` }}>
              Identifying the <br />
              client's needs
            </p>
            <img src={search} className="search" alt="" />
          </div>
          <div className="test">
            <p className="h9" style={{ color: `${props.textColor}` }}>
              Implementing the <br /> design
            </p>
            <img src={figma} className="figma" alt="" />
          </div>
        </div>
        <div className="second2-fifth animate__animated animate__backInRight">
          <div className="test">
            <p className="h9" style={{ color: `${props.textColor}` }}>
              Building the <br /> website
            </p>
            <img src={laptop} className="laptop" alt="" />
          </div>
          <div className="test">
            <p className="h9" style={{ color: `${props.textColor}` }}>
              Testing the <br /> website
            </p>
            <img src={release} className="release" alt="" />
          </div>
        </div>
        <BackToTopButton
          background={props.background}
          textColor={props.textColor}
        />
      </div>
    </section>
  );
}

export default StepsPage;
