import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import HomeCards from "../components/homeCards";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="navbar">
        <Navbar />
      </div>
      <Hero />
      <HomeCards />
      <Footer />
    </div>
  );
};

export default HomePage;
