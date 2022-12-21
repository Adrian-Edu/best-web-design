import React from "react";
import "./WebDesign.css";
import secondslicepicture from "../../assets/secondslidepicture.png";

function WebDesign(props) {
  return (
    <section
      className="page-height"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div>
        <p className="h4">Web Design</p>
      </div>
      <div className="second-container">
        <div className="secondpagetext">
          <h5 style={{ color: `${props.textColor}` }}>
            It is essential for any business to <br /> have a professional
            online <br /> presence. <br />
          </h5>
          <h5 style={{ color: `${props.textColor}` }}>
            Using the latest technologies, I will
            <br />
            create a fully responsive <br />
            website.
          </h5>
        </div>
        <img src={secondslicepicture} className="secondpicture" alt="" />
      </div>
    </section>
  );
}

export default WebDesign;
