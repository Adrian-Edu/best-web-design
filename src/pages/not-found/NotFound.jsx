import React from "react";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";

function NotFound(props) {
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
        The page you requested <br />
        DOESN'T EXIST! !
      </h4>
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </div>
  );
}

export default NotFound;
