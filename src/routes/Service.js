import React from 'react';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import PostImg from '../assets/post-bg.jpg';
import Footer from '../components/Footer';
import ContactForm_Posts from '../components/ContactForm_Posts';

function Service() {
   return(
      <>
         <Navbar />
         <Hero
            cName="hero-mid"
            heroImg={PostImg}
            title="Detect Depression Through The Posts"
            btnClass="hide"
         />
         <ContactForm_Posts />
         <Footer />
      </>
   );
}

export default Service;
