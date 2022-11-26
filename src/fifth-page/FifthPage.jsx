import React from "react";
import background from "../background.png";
import "./FifthPage.css";
import search from "./search.png";
import figma from "./figma.png";
import laptop from "./laptop.png";
import release from "./release.png";

function FifthPage() {
  return (
    <section
      className="page-height"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <p className="header-fifth">
          Steps for building <br /> a website
        </p>
      </div>
      <div className="fifth-container">
        <div className="first2-fifth">
          <div className="test">
            <h9>
              Identifying the <br />
              client's needs
            </h9>
            <img src={search} className="search" alt="" />
          </div>
          <div className="test">
            <h9>
              Implementing the <br /> design
            </h9>
            <img src={figma} className="figma" alt="" />
          </div>
        </div>
        <div className="second2-fifth">
          <div className="test">
            <h9>
              Building the <br /> website
            </h9>
            <img src={laptop} className="laptop" alt="" />
          </div>
          <div className="test">
            <h9>
              Testing the <br /> website
            </h9>
            <img src={release} className="release" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthPage;
