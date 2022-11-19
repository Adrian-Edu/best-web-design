import "./App.css";
import Presentation from "./PresentationPage/Presentation";
import SecondPage from "./Second Page/SecondPage";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <section className="App">
      <Navbar />
      <Presentation />
      <SecondPage />
    </section>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
