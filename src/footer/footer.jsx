import React from "react";
import "./Footer.css";
import Logo from "./Logo.png";

function footer() {
  return (
    <section className="footer-position">
      <div className="footer">
        <div>
          <div className="footer-column">
            <img src={Logo} className="logo" alt="" />
            <div className="all4">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
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
