import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
      cName="hero"
      heroImg="https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg"
      title="Your Journey Your story"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
};

export default Home;
