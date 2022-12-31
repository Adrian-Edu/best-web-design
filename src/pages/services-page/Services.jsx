import React from "react";
import "./Services.css";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";

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
          <img src={""} className="desktop-image" alt="" />
        </div>
        <div className="second2-fourtpage">
          <p className="h7" style={{ color: `${props.textColor}` }}>
            Modify your old <br /> website
          </p>
          <img src={""} className="oldnew-image" alt="" />
        </div>
        <BackToTopButton
          background={props.background}
          textColor={props.textColor}
        />
      </div>
    </section>
  );
}

export default Services;
