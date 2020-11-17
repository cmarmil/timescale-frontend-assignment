import headshot from "./images/headshot.jpg";
import Navbar from "./navbar";
import HeroImage from "./heroImage";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="contentContainer">
        <HeroImage />
      </div>
    </div>
  );
}

export default App;
