import React from "react";
import PortofolioPageOne from "../portofolio-page-one/PortofolioPageOne";
import PortofolioPageTwo from "../portofolio-page-two/PortofolioPageTwo";
import Navbar from "../navbar/Navbar";

function portofolio() {
  return (
    <section>
      <Navbar />
      <PortofolioPageOne />
      <PortofolioPageTwo />
    </section>
  );
}

export default portofolio;
