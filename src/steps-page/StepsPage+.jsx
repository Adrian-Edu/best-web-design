import React from "react";
import background from "../background.png";
import "./StepsPage.css";
import search from "./search.png";
import figma from "./figma.png";
import laptop from "./laptop.png";
import release from "./release.png";
import Navbar from "../navbar/Navbar";

function StepsPage() {
  return (
    <section>
      <Navbar />
      <div
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
              <p className="h9">
                Identifying the <br />
                client's needs
              </p>
              <img src={search} className="search" alt="" />
            </div>
            <div className="test">
              <p className="h9">
                Implementing the <br /> design
              </p>
              <img src={figma} className="figma" alt="" />
            </div>
          </div>
          <div className="second2-fifth">
            <div className="test">
              <p className="h9">
                Building the <br /> website
              </p>
              <img src={laptop} className="laptop" alt="" />
            </div>
            <div className="test">
              <p className="h9">
                Testing the <br /> website
              </p>
              <img src={release} className="release" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsPage;
