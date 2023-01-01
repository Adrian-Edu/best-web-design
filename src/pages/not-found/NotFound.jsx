import React, { useEffect, useState } from "react";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import "./NotFound.css";

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
    <div
      className="page-height"
      style={{
        backgroundColor: `${props.background}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 style={{ color: `${props.textColor}` }}>
        The page you requested DOESN'T EXIST! <br /> The page will automatically
        <br />
        redirect in {time} seconds.
      </h4>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </div>
  );
}

export default NotFound;
