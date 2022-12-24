import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./contact.css";

function Contact(props) {
  const [sender, setSender] = useState({
    name: "",
    lastname: "",
    email: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInput = (e) => {
    setSender({ ...sender, name: e.target.value });
  };

  const handleLastNameInput = (e) => {
    setSender({ ...sender, lastname: e.target.value });
  };

  const handleEmailInput = (e) => {
    setSender({ ...sender, email: e.target.value });
  };

  const handleQuestionInput = (e) => {
    setSender({ ...sender, question: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      sender.name &&
      sender.lastname &&
      sender.email &&
      sender.question !== ""
    ) {
      setValid(true);
    }

    setSubmitted(true);
  };

  let formRef = useRef();

  useEffect(() => {
    formRef.current?.reset();
  }, [submitted, valid]);

  return (
    <section>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <h1 style={{ color: `${props.textColor}` }}>Get in touch with us:</h1>
        <label style={{ color: `${props.textColor}` }}>Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name ..."
          onChange={handleNameInput}
        ></input>
        {submitted && !sender.name ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill in the name field!
            </span>
          </div>
        ) : null}
        <label style={{ color: `${props.textColor}` }}>Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name ..."
          onChange={handleLastNameInput}
        ></input>
        {submitted && !sender.lastname ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill in the last name field!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }}>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email ..."
          onChange={handleEmailInput}
        ></input>
        {submitted && !sender.email ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill your email!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }}>Question</label>
        <input
          className="contact-message"
          type="text"
          id="question"
          name="question"
          placeholder="Message ..."
          onChange={handleQuestionInput}
        ></input>
        {submitted && !sender.question ? (
          <div>
            <span style={{ color: `${props.textColor}` }}>
              Please fill the question!
            </span>
          </div>
        ) : null}

        <input type="submit" value="Submit"></input>
        {submitted && valid ? (
          <div
            style={{
              backgroundColor: "red",
              fontSize: "17px",
              fontWeight: 700,
              height: "4.5%",
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Your message has been successfully sent! You will hear from us soon!
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
