import React, { useEffect, useState } from "react";
import "./BackToTopButton.css";

function BackToTopButton(props) {
<<<<<<< HEAD
  const [backToTopButton, setBackToTopButton] = useState(false);
=======
  const [backToTopButton, setBackToTopButton] = useState("");
>>>>>>> 6799f034e07be7b483b5b078c65e5ccfb968a972

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
