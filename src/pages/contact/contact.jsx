import React, { useState } from "react";
import "./contact.css";

function Contact(props) {
  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    question: "",
  });

  const [messageSubmit, setMessageSubmit] = useState(false);

  const handleNameInput = (e) => {
    setMessage({ ...message, firstname: e.target.value });
  };

  const handleLastNameInput = (e) => {
    setMessage({ ...message, lastname: e.target.value });
  };

  const handleEmailInput = (e) => {
    setMessage({ ...message, email: e.target.value });
  };

  const handleQuestionInput = (e) => {
    setMessage({ ...message, question: e.target.value });
  };

  const handleSubmit = (e) => {
    e.prevent.default();
    setMessageSubmit(true);
  };

  return (
    <section>
      <div
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <h1 style={{ color: `${props.textColor}` }}>Get in touch with us:</h1>

        <label
          style={{ color: `${props.textColor}` }}
          for="fname"
          onChange={handleNameInput}
        >
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name is..."
        ></input>
        <label style={{ color: `${props.textColor}` }} for="lname">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name is..."
          onChange={handleLastNameInput}
        ></input>
        <label style={{ color: `${props.textColor}` }} for="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email is..."
          onChange={handleEmailInput}
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
          className="contact-message"
          type="text"
          id="question"
          name="question"
          placeholder="Message..."
          onChange={handleQuestionInput}
        ></input>
        <input type="submit" value="Submit"></input>
        {messageSubmit ? (
          <div style={{ color: `${props.textColor}` }} for="fname">
            Your message has been successfully sent!
          </div>
        ) : null}

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

export default Contact;
