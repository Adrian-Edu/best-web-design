import React from "react";

function NotFound(props) {
  return (
    <div
      className="page-height"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <h4 style={{ color: `${props.textColor}` }}>NU GASESTI NIMIC AICI !</h4>
    </div>
  );
}

export default NotFound;
