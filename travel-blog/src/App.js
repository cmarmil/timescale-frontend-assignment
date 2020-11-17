import Navbar from "./navbar";
import HeroImage from "./heroImage";
import ProfileContent from "./profileContent";
import Footer from "./footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="contentContainer">
        <HeroImage />
        <ProfileContent />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
