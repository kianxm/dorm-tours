import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Cards/Cards";
import LearnMore from "../components/LearnMore/LearnMore";
import Matterport from "../components/Matterport/Matterport";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
      <Matterport />
      <LearnMore />
      <Footer />
    </>
  );
}

export default Home;
