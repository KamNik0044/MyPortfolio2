import React from "react"
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";



const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Get in Touch" />
      <Link to="/about">about</Link>
      <Form />
      <Footer />
      
      
    </div>
  );
};

export default Contact;
