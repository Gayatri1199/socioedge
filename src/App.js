import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import SimplifyingClimate from "./components/SimplifyingClimate";
import OurUsps from "./components/OurUsps";
import OurVision from "./components/OurVision";
import OurTeam from "./components/OurTeam";
import MileStone from "./components/Milestone";
import ExpThoughts from "./components/ExpThoughts";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Services />
      <SimplifyingClimate />
      <OurUsps />
      <OurVision />
      <OurTeam />
      <MileStone />
      <ExpThoughts />
    </div>
  );
}

export default App;
