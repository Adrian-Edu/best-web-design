import React from "react";
import background from "../background.png";
import Desktop from "./Desktop.png";
import OldNew from "./OldNew.png";
import "./Services.css";
import Navbar from "../navbar/Navbar";

function Services() {
  return (
    <section>
      <Navbar />
      <div
        className="page-height"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div>
          <h6>Services</h6>
        </div>
        <div className="fourt-container">
          <div className="first2-fourtpage">
            <p className="h7">
              Responsive website <br /> design
            </p>
            <img src={Desktop} className="desktop-image" alt="" />
          </div>
          <div className="second2-fourtpage">
            <p className="h7">
              Modify your old <br /> website
            </p>
            <img src={OldNew} className="oldnew-image" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
