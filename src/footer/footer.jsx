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
            <div className="all4">
              <img src={mobile} className="poza" alt="" />
              <img src={whats} className="poza" alt="" />
              <img src={linkedin} className="poza" alt="" />
              <img src={github} className="poza" alt="" />
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  );
}

export default footer;
