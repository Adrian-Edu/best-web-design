import React from "react";
import background from "../../assets/background.png";
import Desktop from "../../assets/Desktop.png";
import OldNew from "../../assets/OldNew.png";
import "./Services.css";

function Services() {
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
    </section>
  );
}

export default Services;
