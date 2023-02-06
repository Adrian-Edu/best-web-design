import React from "react";
import passion from "../../assets/passion.avif";
import needs from "../../assets/needs.avif";
import quickly from "../../assets/quickly.avif";
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
          <img src={passion} className="passion" alt="" />
          <img src={needs} className="needs" alt="" />
          <img src={quickly} className="quickly" alt="" />
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
