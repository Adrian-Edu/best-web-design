import React from "react";
import "./contact.css";

function contact(props) {
  return (
    <section>
      <div
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <p style={{ color: `${props.textColor}` }}>Mobile: 0766.775.420</p>
        <p style={{ color: `${props.textColor}` }}>
          E-mail: adrian_edu@yahoo.com
        </p>
        <p style={{ color: `${props.textColor}` }}>
          Linkedin: https://www.linkedin.com/in/adrian-edu/
        </p>
      </div>
    </section>
  );
}

export default contact;
