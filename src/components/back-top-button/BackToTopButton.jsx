import React, { useEffect, useState } from "react";
import "./BackToTopButton.css";

function BackToTopButton(props) {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ backgroundColor: `${props.background}` }}>
      <button className="button-format" onClick={scrollUp}>
        ^
      </button>
    </div>
  );
}

export default BackToTopButton;
