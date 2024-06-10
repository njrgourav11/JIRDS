import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Faq from "./components/faq";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Gallery from "./components/gallery";
import Events from "./components/events";
import About from "./components/about";
import Dr from "./components/dr";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<FeatureSection />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dr-anuradha" element={<Dr />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
