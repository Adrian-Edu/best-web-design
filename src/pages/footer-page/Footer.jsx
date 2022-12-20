import React from "react";
import "./Footer.css";
import Logo from "./Logo.png";
import mobile from "./mobile.png";
import whats from "./whats.png";
import linkedin from "./linkedin.png";
import github from "./github.png";

function footer() {
  return (
    <section className="footer-position">
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
            <p>About Us</p>
            <p>Contact </p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="footer-second2">
          <div className="footer-second-column">
            <p>Legal Stuff</p>
            <p>Privacy</p>

            <p>Terms of Service</p>
          </div>
          <div className="footer-last-column">
            <p>Get the best deal every time.</p>
            <input type="text"></input>
            <p>Sing Up Now.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
