import React, { useState } from "react";
import "./contact.css";

function Contact(props) {
  const [message, setMessage] = useState({
    name: "",
    lastname: "",
    email: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInput = (e) => {
    setMessage({ ...message, name: e.target.value });
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
    e.preventDefault();

    if (
      message.name &&
      message.lastname &&
      message.email &&
      message.question !== ""
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <h1 style={{ color: `${props.textColor}` }}>Get in touch with us:</h1>
        <label style={{ color: `${props.textColor}` }} for="fname">
          Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name ..."
          onChange={handleNameInput}
        ></input>
        {submitted && !message.name ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill in the name field!
            </span>
          </div>
        ) : null}
        <label style={{ color: `${props.textColor}` }} for="lname">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name ..."
          onChange={handleLastNameInput}
        ></input>
        {submitted && !message.lastname ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill in the last name field!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }} for="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email ..."
          onChange={handleEmailInput}
        ></input>
        {submitted && !message.email ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill your email!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }} for="fname">
          Question
        </label>
        <input
          className="contact-message"
          type="text"
          id="question"
          name="question"
          placeholder="Message ..."
          onChange={handleQuestionInput}
        ></input>
        {submitted && !message.question ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill the question!
            </span>
          </div>
        ) : null}

        <input type="submit" value="Submit"></input>
        {submitted && valid ? (
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
      </form>
    </section>
  );
}

export default Contact;
