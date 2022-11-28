import React from "react";
import background from "../background.png";
import passion from "./passion.png";
import needs from "./needs.png";
import quickly from "./quickly.png";
import "./EighthPage.css";

function EighthPage() {
  return (
    <section
      className="page-height-special"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <p className="header-eighth">Clients' Testimonials</p>
      </div>
      <div className="eighth-container">
        <img src={passion} className="passion" alt="" />
        <img src={needs} className="needs" alt="" />
        <img src={quickly} className="quickly" alt="" />
      </div>
    </section>
  );
}

export default EighthPage;
