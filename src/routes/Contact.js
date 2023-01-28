import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/contact.jpg"
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <>
    <Navbar />
      <Hero
      cName="hero-mid"
      heroImg={AboutImg}
      title="Contact"
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact