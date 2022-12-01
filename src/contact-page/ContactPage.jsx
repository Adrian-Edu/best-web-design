import React from "react";
import background from "../background.png";
import passion from "./passion.png";
import needs from "./needs.png";
import quickly from "./quickly.png";
import "./ContactPage.css";
import Fouter from "../footer-page/Footer";

function ContactPage() {
  return (
    <section
      className="page-height-special"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="eighth-page-display">
        <div>
          <p className="header-eighth">Clients' Testimonials</p>
        </div>
        <div className="eighth-container">
          <img src={passion} className="passion" alt="" />
          <img src={needs} className="needs" alt="" />
          <img src={quickly} className="quickly" alt="" />
        </div>
        <Fouter />
      </div>
    </section>
  );
}

export default ContactPage;
