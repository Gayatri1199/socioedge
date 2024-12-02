import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ActionProjects from "./pages/ActionProjects";
import Consultancy from "./pages/Consultancy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImpactProject from "./pages/ImpactProject";
import CapacityBuilding from "./pages/CapacityBuilding";
import ContactUs from "./pages/ContactUs";
import Media from "./pages/Media";
import LiveProject from "./pages/LiveProject";
import CarbonRemoval from "./pages/CarbonRemoval";
import CarbonOffset from "./pages/CarbonOffset";
import WasteManagement from "./pages/WasteManagement";
import RenewableEnergy from "./pages/RenewableEnergy";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/actionproject" element={<ActionProjects />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/impactproject" element={<ImpactProject />} />
        <Route path="/capacitybuilding" element={<CapacityBuilding />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/liveproject" element={<LiveProject />} />
        <Route path="/carbonremoval" element={<CarbonRemoval />} />
        <Route path="/carbonoffset" element={<CarbonOffset />} />
        <Route path="/wastemanagement" element={<WasteManagement />} />
        <Route path="/renewablenergy" element={<RenewableEnergy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
