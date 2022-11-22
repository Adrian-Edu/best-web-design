import "./App.css";
import Presentation from "./PresentationPage/Presentation";
import SecondPage from "./Second Page/SecondPage";
import Navbar from "./navbar/Navbar";
import ThirdPage from "./ThirdPage/ThirdPage";

function App() {
  return (
    <section>
      <Navbar />
      <Presentation />
      <SecondPage />
      <ThirdPage />
    </section>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
