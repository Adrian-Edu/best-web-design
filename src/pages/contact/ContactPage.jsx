import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./contactpage.css";
import emailjs from "@emailjs/browser";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";
import { motion } from "framer-motion";

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

  let formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      sender.name &&
      sender.mobile &&
      sender.email &&
      sender.question !== "" &&
      sender.name.length > 2 &&
      sender.mobile.length > 9 &&
      sender.email.length > 12 &&
      sender.question.length > 20
    ) {
      setValid(true);
      emailjs
        .sendForm(
          "service_c23ccw7",
          "template_4nj9clw",
          formRef.current,
          "HpCU7YoSS5nlFrb7F"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setSubmitted(true);
  };

  useEffect(() => {
    formRef.current?.reset();
  }, [valid]);

  const buttonAnimation = {
    visible: {},
    hidden: {},
  };

  return (
    <section>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="container-contact"
        style={{ backgroundColor: `${props.background}` }}
      >
        <p
          className="header-contact animate__animated animate__flash"
          style={{ color: `${props.textColor}` }}
        >
          Get in touch with us:
        </p>
        <label style={{ color: `${props.textColor}` }}>Name</label>
        <input
          type="text"
          id="fname"
          name="user_name"
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
          type="tel"
          id="phone"
          name="user_mobile"
          placeholder="Enter phone number ..."
          pattern="[0-9]{1-14}"
          onChange={handleMobileInput}
        ></input>
        {submitted && sender.mobile.length <= 9 ? (
          <div>
            <span style={{ color: `red` }}>
              Mobile must have at least 10 numbers!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }}>Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Your email ..."
          onChange={handleEmailInput}
        ></input>
        {submitted && sender.email.length <= 12 ? (
          <div>
            <span style={{ color: `red` }}>
              Email must have at least 12 characters!
            </span>
          </div>
        ) : null}

        <label style={{ color: `${props.textColor}` }}>Question</label>
        <input
          className="contact-message"
          type="text"
          id="question"
          name="user_question"
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
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px black",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            color: "blue",
            fontWeight: 700,
            fontSize: "16px",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          disabled={submitted && valid}
          type="submit"
          className="submited"
        >
          Submit
        </motion.button>
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

        <p
          className="contact-p animate__animated animate__flash"
          style={{ color: `${props.textColor}` }}
        >
          Wanna chat with customer service? <br />
          Call 0766-775-420
        </p>
        <p className="contact-p" style={{ color: `${props.textColor}` }}>
          Contact us by email: <br /> adrian_edu@yahoo.com
        </p>
        <BackToTopButton
          background={props.background}
          textColor={props.textColor}
        />
      </form>
    </section>
  );
}

export default Contact;
