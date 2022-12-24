import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./contact.css";

function Contact(props) {
  const [sender, setSender] = useState({
    name: "",
    lastname: "",
    mobile: "",
    email: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInput = (e) => {
    setSender({ ...sender, name: e.target.value });
  };

  const handleMobileInput = (e) => {
    setSender({ ...sender, mobile: e.target.value });
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
      sender.mobile &&
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
  }, [valid]);

  return (
    <section>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <p className="header-contact" style={{ color: `${props.textColor}` }}>
          Get in touch with us:
        </p>
        <label style={{ color: `${props.textColor}` }}>Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name and last name  ..."
          onChange={handleNameInput}
        ></input>
        {submitted && sender.name.length <= 2 ? (
          <div>
            <span style={{ color: `red` }}>
              Name must have at least 3 characters!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }}>Mobile</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Your mobile number ..."
          onChange={handleMobileInput}
        ></input>
        {submitted && sender.mobile.length <= 9 ? (
          <div>
            <span style={{ color: `red` }}>
              Mobile must have at least 10 characters!
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
        {submitted && sender.email.length <= 14 ? (
          <div>
            <span style={{ color: `red` }}>
              Email must have at least 15 characters!
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
        {submitted && sender.question.length <= 20 ? (
          <div>
            <span style={{ color: `red` }}>
              Question must have at least 20 characters!
            </span>
          </div>
        ) : null}

        <input type="submit" value="Submit"></input>
        {submitted && valid ? (
          <div
            className="contact-message "
            style={{
              backgroundColor: "red",

              fontWeight: 700,
              height: "4.5%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
