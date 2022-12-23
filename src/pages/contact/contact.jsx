import React, { useState } from "react";
import "./contact.css";

function Contact(props) {
  const [message, setMessage] = useState({
    name: "",
    surname: "",
    email: "",
    question: "",
  });

  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorQuestion, setErrorQuestion] = useState(false);
  const [messageSubmit, setMessageSubmit] = useState(false);
  const [submit, setSubmit] = useState("");

  const handleNameInput = (e) => {
    setMessage({ ...message, name: e.target.value });
  };

  const handleSurnameInput = (e) => {
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
    setMessageSubmit(true);

    setSubmit(
      message.name +
        " " +
        message.surname +
        " " +
        message.email +
        " " +
        message.question
    );

    if (
      message.name === "" &&
      message.surname === "" &&
      message.email === "" &&
      message.question === ""
    ) {
      return (
        setErrorName(true) +
        setErrorSurname(true) +
        setErrorQuestion(true) +
        setErrorEmail(true)
      );
    } else if (message.name === "") {
      return setErrorName(true);
    } else if (message.surname === "") {
      return setErrorSurname(true);
    } else if (message.email === "") {
      return setErrorEmail(true);
    } else if (message.question === "") {
      return setErrorQuestion(true);
    } else {
      setMessageSubmit(true) && setErrorName(false);
      setErrorSurname(false);
      setErrorEmail(false);
      setErrorQuestion(false);
    }

    setErrorName(false);
    setErrorSurname(false);
    setErrorEmail(false);
    setErrorQuestion(false);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <h1 style={{ color: `${props.textColor}` }}>Get in touch with us:</h1>

        <label
          style={{ color: `${props.textColor}` }}
          for="fname"
          onChange={handleNameInput}
        >
          Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name is..."
        ></input>
        {errorName ? (
          <div>
            <span>Please fill in the name field!</span>
          </div>
        ) : null}
        <label style={{ color: `${props.textColor}` }} for="lname">
          Surname
        </label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your surname is..."
          onChange={handleSurnameInput}
        ></input>
        {errorSurname ? (
          <div>
            <span>Please fill in the surname field! </span>{" "}
          </div>
        ) : null}
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
        {errorEmail ? (
          <div>
            <span>Please fill your email!</span>{" "}
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
          placeholder="Message..."
          onChange={handleQuestionInput}
        ></input>
        {errorQuestion ? (
          <div>
            <span>Please fill the question!</span>{" "}
          </div>
        ) : null}
        <input type="submit" value="Submit"></input>
        {messageSubmit ? (
          <div style={{ color: `${props.textColor}` }} for="fname">
            Your message has been successfully sent!
          </div>
        ) : null}

        {messageSubmit ? (
          <div>
            <p>{submit}</p>
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
