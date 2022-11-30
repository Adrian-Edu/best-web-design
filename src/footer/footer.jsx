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
        <div>
          <div className="footer-column">
            <img src={Logo} className="logo" alt="" />
            <div className="footer-first-column">
              <img src={mobile} className="mobile" alt="" />
              <img src={whats} className="whats" alt="" />
              <img src={linkedin} className="linkedin" alt="" />
              <img src={github} className="poza" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-second-column">
          <p>Resources</p>
          <p>About Us</p>
          <p>Contact </p>
          <p>FAQ</p>
        </div>
        <div className="footer-second-column">
          <p>Legal Stuff</p>
          <p>Privacy</p>
          <p>Policy </p>
          <p>Terms of Service</p>
        </div>
        <div className="footer-second-column">
          <p>Get the best deal every time.</p>
          <input type="text"></input>
          <p>Sing Up Now.</p>
        </div>
      </div>
    </section>
  );
}

export default footer;
