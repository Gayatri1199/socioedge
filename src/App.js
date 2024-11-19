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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
