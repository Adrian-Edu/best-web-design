import React, { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("../src/pages/home/Home.jsx"));
const WebDesign = lazy(() => import("./pages/web-design/WebDesign"));
const Skills = lazy(() =>
  import("./components/../pages/skills-page/SkillsPage")
);
const Services = lazy(() =>
  import("./components/../pages/services-page/Services")
);
const StepsPage = lazy(() =>
  import("./components/../pages/steps-page/StepsPage")
);
const Portfolio = lazy(() =>
  import("./components/../pages/portfolio/Portfolio")
);
const AllComponents = lazy(() =>
  import("./pages/all-components/AllComponents")
);
const ClientsTestimonials = lazy(() =>
  import("./pages/clients-testimonials/ClientsTestimonials")
);
const AboutMe = lazy(() => import("./pages/about-me/AboutMe"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const Contact = lazy(() => import("./pages/contact/ContactPage"));

function App() {
  const [switchBackgroundColor, setSwitchBackgroundColor] = useState("#151B54");
  const [switchTextColor, setswitchTextColor] = useState("#FFFFFF");

  const getImage = (image) => {
    setSwitchBackgroundColor(image);
  };

  const getTextColor = (color) => {
    setswitchTextColor(color);
  };

  return (
    <>
      <Navbar sendImage={getImage} sendTextColor={getTextColor} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AllComponents
              background={switchBackgroundColor}
              textColor={switchTextColor}
            />
          }
        />
        <Route
          path="home"
          element={
            <Suspense>
              <Home
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="webdesign"
          element={
            <Suspense>
              <WebDesign
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="skills"
          element={
            <Suspense>
              <Skills
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense>
              <Services
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="steps"
          element={
            <Suspense>
              <StepsPage
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="portfolio"
          element={
            <Suspense>
              <Portfolio
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="Contact"
          element={
            <Suspense>
              <Contact
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="clients"
          element={
            <Suspense>
              <ClientsTestimonials
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="about-me"
          element={
            <Suspense>
              <AboutMe
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFound
                background={switchBackgroundColor}
                textColor={switchTextColor}
              />
            </Suspense>
          }
        />
      </Routes>
      <Footer background={switchBackgroundColor} textColor={switchTextColor} />
    </>
  );
}

export default App;
