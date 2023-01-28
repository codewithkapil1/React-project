import React from 'react'
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from '../components/Trip';
// import AboutImg from "../assests/2.jpg"

const Service = () => {
  return (
    <>
     <Navbar />
      <Hero
      cName="hero-mid"
      heroImg="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
      title="Service"
      btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service