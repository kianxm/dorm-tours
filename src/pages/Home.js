import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Cards/Cards";
import Matterport from "../components/Matterport/Matterport";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Matterport />
    </>
  );
}

export default Home;
