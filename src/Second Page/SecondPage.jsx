import React from "react";
import "./SecondPage.css";
import secondslicepicture from "./secondslidepicture.png";
import background from "../background.png";

function SecondPage() {
  return (
    <section
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h4 className="secondpagetext">
          It is essential for any business <br /> to have a professional online{" "}
          <br /> presence. <br />
        </h4>

        <h5>
          Using thelatest technologies, <br /> I will create a fully responsive{" "}
          <br />
          website.
        </h5>
      </div>
      <div>
        <img src={secondslicepicture} className="secondpicture" alt="" />
      </div>
    </section>
  );
}

export default SecondPage;
/*


function SecondPage() {
  return (
    <section
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h3 className="secondpagetext">
          It is essential for <br /> any business to have <br /> a professional
          online <br /> presence. Using the <br /> latest technologies, <br /> I
          will create a fully responsive website.
        </h3>
      </div>
      <div>
    <img src={secondslicepicture} className="secondpicture" alt="" />
      </div>
    </section>
  );
}

export default SecondPage;


*/
