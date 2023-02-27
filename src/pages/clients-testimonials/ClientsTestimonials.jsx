import React from "react";
import passion from "../../assets/passion.png";
import needs from "../../assets/needs.png";
import quickly from "../../assets/quickly.png";
import "./ClientsTestimonials.css";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import Typewriter from "typewriter-effect";

function ClientsTestimonials(props) {
  return (
    <section
      className="page-height-special"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div className="eighth-page-display">
        <div>
          <p className="header-eighth">
            <Typewriter
              options={{
                strings: ["Clients' Testimonials"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="eighth-container">
          <img src={passion} className="passion" alt="succes img" />
          <img src={needs} className="needs" alt="phone img" />
          <img src={quickly} className="quickly" alt="presentation img" />
        </div>
      </div>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default ClientsTestimonials;
