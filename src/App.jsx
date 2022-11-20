import "./App.css";
import Presentation from "./presentation-page/Presentation";
import SecondPage from "./second-page/SecondPage";
import Navbar from "./navbar/Navbar";
import ThirdPage from "./third-page/ThirdPage";
import FourthPage from "./fourth-page/FourtPage";

function App() {
  return (
    <section>
      <Navbar />
      <Presentation />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </section>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
