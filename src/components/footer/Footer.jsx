import React from "react";
import "./Footer.css";
import logo from "../../assets/LogoBWD.png";
import mobile from "../../assets/mobile.png";
import whats from "../../assets/whats.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="footer" style={{ backgroundColor: "black" }}>
      <div className="first-column">
        <img src={logo} className="logo" alt="BWD logo" />
        <div className="first-column-list">
          <Link onClick={scrollUp} to="/">
            <p>Home </p>
          </Link>
          <Link onClick={scrollUp} to="/About-me">
            <p>About me </p>
          </Link>
          <Link onClick={scrollUp} to="/Contact">
            <p>Contact </p>
          </Link>
          <Link onClick={scrollUp} to="/Clients">
            <p>Testimonials </p>
          </Link>
          <Link onClick={scrollUp} to="/NotFound">
            <p>Blog </p>
          </Link>
        </div>
        <p className="all-rights"> All rights reserved © BWD</p>
      </div>
      <div className="second-column footer-text-color">
        <p>Location Bucharest, Romania</p>
        <div className="mobile-display">
          <a
            href="https://www.linkedin.com/in/adrian-edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mobile} className="mobile" alt="mobile img" />
          </a>
          <p>+400766.775.420</p>
        </div>
        <div className="email-display">
          <a
            href="https://www.linkedin.com/in/adrian-edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} className="email" alt="email img" />
          </a>
          <p>adrian_edu@yahoo.com</p>
        </div>
      </div>
      <div className="footer-text-color">
        <div className="third-column">
          <p>About the company</p>
          <p>
            BestWebDesign is one of the best web design <br />
            companies in Romania.
          </p>
          <div>
            <a
              href="https://wa.me/+400766775420"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whats} className="whats" alt="WhatsApp img" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="linkedin" alt="LinkedIn img" />
            </a>

            <a
              href="https://github.com/Adrian-Edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="github" alt="Git img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
