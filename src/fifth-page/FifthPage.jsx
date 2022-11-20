import React from "react";
import background from "../background.png";
import "./FifthPage.css";

function ThirdPage() {
  return (
    <section
      className="page-height"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h6>Services</h6>
      </div>
      <div className="fourt-container">
        <div className="first2-fourtpage">
          <h7>
            Responsive website <br /> design
          </h7>
          <img src={Desktop} className="desktop-image" alt="" />
        </div>
        <div className="second2-fourtpage">
          <h7>
            Modify your old <br /> website
          </h7>
          <img src={OldNew} className="oldnew-image" alt="" />
        </div>
      </div>
    </section>
  );
}

export default ThirdPage;
