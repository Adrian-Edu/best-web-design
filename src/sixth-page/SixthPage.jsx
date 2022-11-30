import React from "react";
import background from "../background.png";
import "./SixthPage.css";
import product from "./product.png";
import todo from "./todo.png";

function Sixth() {
  return (
    <section
      className="page-height"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <p className="header-sixth">Portofolio</p>
      </div>
      <div className="sixth-container">
        <div className="first2-fifth">
          <div className="test2">
            <p className="h10">Product website</p>
            <img src={product} className="product" alt="" />
            <button className="sixth-button">See the project</button>
          </div>
        </div>
        <div className="second2-fifth">
          <div className="test2">
            <p className="h10">Todo App</p>
            <img src={todo} className="todo" alt="" />
            <button className="sixth-button">See the project</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sixth;
