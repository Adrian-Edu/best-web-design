import React, { useEffect, useState } from "react";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import "./NotFound.css";
import error404svg from "../../assets/Error404.gif";

function NotFound(props) {
  const [time, setTime] = useState(5);

  React.useEffect(() => {
    time > 0 && setInterval(() => setTime(time - 1), 1000);
  });

  function RedirectExample() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.location.replace("https://best-web-design.vercel.app/");
      }, 5000);
      return () => clearTimeout(timeout);
    }, []);
  }

  RedirectExample();

  return (
    <section
      className="page-height-notfount"
      style={{
        backgroundColor: `${props.background}`,
      }}
    >
      <p className="error-p-first" style={{ color: `${props.textColor}` }}>
        Page not found!
      </p>
      <img className="error404pic" src={error404svg} alt="error404svg" />
      <p className="error-p" style={{ color: `${props.textColor}` }}>
        The page will automatically redirect in {time} seconds.
      </p>
      <a
        style={{ color: `${props.textColor}` }}
        className="author"
        href="https://storyset.com/internet"
      >
        Internet illustrations by Storyset
      </a>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default NotFound;
