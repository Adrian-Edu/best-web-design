import React from "react";
import "./Home.css";
import pozamea from "../../assets/pozamea.png";

function Home(props) {
  return (
    <section>
      <div
        className="container"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div>
          <h1 style={{ color: `${props.textColor}` }}>
            My name is Adrian Edu,{" "}
          </h1>
          <h2 style={{ color: `${props.textColor}` }}>
            I am a FrontEnd <br /> Developer
          </h2>
          <h3 style={{ color: `${props.textColor}` }}>Contact me ! </h3>
        </div>
        <div>
          <img src={pozamea} className="profilepic" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
