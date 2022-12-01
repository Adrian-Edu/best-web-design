import React from "react";
import background from "../background.png";
import "./PortofolioPageOne.css";
import product from "./product.png";
import todo from "./todo.png";

function PortofolioPageOne() {
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

            <a
              href={"https://lading-page-12.adrianedu.repl.co/"}
              target="_blank"
              rel="noreferrer"
            >
              <button className="sixth-button"> See the project </button>
            </a>
          </div>
        </div>
        <div className="second2-fifth">
          <div className="test2">
            <p className="h10">Todo App</p>
            <img src={todo} className="todo" alt="" />

            <a
              href={"https://todo-app-dun-phi.vercel.app/"}
              target="_blank"
              rel="noreferrer"
            >
              <button className="sixth-button"> See the project </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortofolioPageOne;
