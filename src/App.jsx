import "./App.css";
import Presentation from "./presentation-page/Presentation";
import SecondPage from "./second-page/SecondPage";
import Navbar from "./navbar/Navbar";
import ThirdPage from "./third-page/ThirdPage";
import FourthPage from "./fourth-page/FourtPage";
import FifthPage from "./fifth-page/FifthPage";
import Sixth from "./sixth-page/SixthPage";
import SeventhPage from "./seventh-page/SeventhPage";
import EighthPage from "./eighth-page/EighthPage";

function App() {
  return (
    <section>
      <Navbar />
      <Presentation />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <Sixth />
      <SeventhPage />
      <EighthPage />
    </section>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
