// Home.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <HeroSection />
        <FeatureSection />
        <Testimonials />        
      </div>
    </>
  );
};

export default Home;
