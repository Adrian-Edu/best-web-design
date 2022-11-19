import React from "react";
import "./ThirdPage.css";
import background from "../background.png";
import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";

function ThirdPage() {
  return (
    <section style={{ backgroundImage: `url(${background})` }}>
      <h4>Skills & Experience</h4>
      <div className="third-container">
        <img src={Image2} className="image2" alt="" />
        <img src={Image1} className="ThirdPageImage" alt="" />
        <img src={Image3} className="ThirdPageImage" alt="" />
        <img src={Image4} className="image4" alt="" />
      </div>
    </section>
  );
}

export default ThirdPage;
