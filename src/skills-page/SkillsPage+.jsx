import React from "react";
import "./SkillsPage.css";
import background from "../background.png";
import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";
import Navbar from "../navbar/Navbar";

function SkillsPage() {
  return (
    <section>
      <Navbar />
      <div
        className="page-height"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div>
          <h4>Skills & Experience</h4>
        </div>
        <div className="third-container">
          <div className="first2">
            <img src={Image2} className="image2" alt="" />
            <img src={Image1} className="image1" alt="" />
          </div>
          <div className="second2">
            <img src={Image3} className="image3" alt="" />
            <img src={Image4} className="image4" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
