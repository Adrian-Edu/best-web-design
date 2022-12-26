import React from "react";

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
    </div>
  );
}

export default NotFound;
