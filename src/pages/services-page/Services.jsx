import React from "react";
import desktop from "../../assets/desktop.png";
import oldnew from "../../assets/oldnew.png";
import "./Services.css";

function Services(props) {
  return (
    <section
      className="page-height"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <h6>Services</h6>
      </div>
      <div className="fourt-container">
        <div className="first2-fourtpage">
          <p className="h7" style={{ color: `${props.textColor}` }}>
            Responsive website <br /> design
          </p>
          <img src={desktop} className="desktop-image" alt="" />
        </div>
        <div className="second2-fourtpage">
          <p className="h7" style={{ color: `${props.textColor}` }}>
            Modify your old <br /> website
          </p>
          <img src={oldnew} className="oldnew-image" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Services;
