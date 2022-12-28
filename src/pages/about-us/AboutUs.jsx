import React from "react";
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <div
      className="page-height"
      style={{ backgroundColor: `${props.background}` }}
    >
      <h4>About us</h4>
      <p>Story</p>
      <p>Values</p>
    </div>
  );
}

export default AboutUs;
