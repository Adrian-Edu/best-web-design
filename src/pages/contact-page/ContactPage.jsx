import React from "react";
import passion from "../../assets/passion.png";
import needs from "../../assets/needs.png";
import quickly from "../../assets/quickly.png";
import "./ContactPage.css";

function ContactPage(props) {
  return (
    <section
      className="page-height-special"
      style={{ backgroundImage: `url(${props.background})` }}
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
      </div>
    </section>
  );
}

export default ContactPage;
