import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import mobile from "../../assets/mobile.png";
import whats from "../../assets/whats.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <section
      className="footer-position"
      style={{ backgroundColor: `${props.background}` }}
    >
      <div className="footer">
        <div className="footer-first2">
          <div className="footer-column">
            <img src={Logo} className="logo" alt="" />
            <div className="footer-first-column">
              <a href="tel://+400766775420">
                <img src={mobile} className="mobile" alt="" />
              </a>
              <a
                href="https://wa.me/+400766775420"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whats} className="whats" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="linkedin" alt="" />
              </a>

              <a
                href="https://github.com/Adrian-Edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="github" alt="" />
              </a>
            </div>
          </div>
          <div className="footer-second-column">
            <Link className="remove-format-footer">
              <p>About Us</p>
            </Link>
            <Link className="remove-format-footer" to="/Contact">
              <p>Contact</p>
            </Link>
            <Link className="remove-format-footer" to="/clients">
              <p>Testimonials</p>
            </Link>
          </div>
        </div>
        <div className="footer-first2">
          <div className="footer-second-column">
            <Link className="remove-format-footer">
              <p>Legal Stuff</p>
            </Link>
            <Link className="remove-format-footer">
              <p>Privacy</p>
            </Link>
            <Link className="remove-format-footer">
              <p>Privacy</p>
            </Link>
          </div>
          <div className="footer-last-column">
            <Link className="remove-format-footer">
              <p>Search something ... </p>
            </Link>

            <input type="search"></input>
            <Link className="remove-format-footer">
              <p> All right reserved © BWD</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
