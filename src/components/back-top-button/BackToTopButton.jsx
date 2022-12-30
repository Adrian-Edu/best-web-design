import React, { useEffect, useState } from "react";
import "./BackToTopButton.css";

function BackToTopButton(props) {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
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
    props.sendFunction(backToTopButton);
  };

  return (
    <div style={{ backgroundColor: `${props.background}` }}>
      {backToTopButton ? (
        <button className="button-format" onClick={scrollUp}>
          ^
        </button>
      ) : null}
    </div>
  );
}

export default BackToTopButton;
