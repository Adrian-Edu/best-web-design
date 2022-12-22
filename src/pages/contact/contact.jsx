import React from "react";
import "./contact.css";

function contact(props) {
  return (
    <section>
      <div
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <label style={{ color: `${props.textColor}` }} for="fname">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
        <label style={{ color: `${props.textColor}` }} for="lname">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        ></input>
        <label style={{ color: `${props.textColor}` }} for="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email is.."
        ></input>
        <label style={{ color: `${props.textColor}` }} for="subject">
          Topic
        </label>
        <select id="country" name="country">
          <option value="customer">Customer service</option>
          <option value="requisition">Requisition for offers</option>
          <option value="other">Other</option>
        </select>
        <label style={{ color: `${props.textColor}` }} for="fname">
          Question
        </label>
        <input
          style={{ color: `${props.textColor}`, height: "200px" }}
          type="text"
          id="fname"
          name="firstname"
          placeholder="Message..."
        ></input>
        <input type="submit" value="Submit"></input>
        <p className="contact-p" style={{ color: `${props.textColor}` }}>
          Wanna chat with customer service? <br />
          Call 0766-775-420
        </p>
        <p className="contact-p" style={{ color: `${props.textColor}` }}>
          Contact us by email: <br /> adrian_edu@yahoo.com
        </p>
      </div>
    </section>
  );
}

export default contact;
