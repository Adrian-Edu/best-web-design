import React from "react";
import Home from "../home/Home";
import BackToTopButton from "../../components/back-top-button/BackToTopButton";

function AllComponents(props) {
  return (
    <section>
      <Home background={props.background} textColor={props.textColor} />
      <BackToTopButton
        background={props.background}
        textColor={props.textColor}
      />
    </section>
  );
}

export default AllComponents;
