import React from 'react';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import CommentImg from '../assets/comment-bg.jpg';
import Footer from '../components/Footer';
import ContactForm_Comment from '../components/ContactForm_Comment';

function Contact() {
   return(
      <>
         <Navbar />
         <Hero
            cName="hero-mid"
            heroImg={CommentImg}
            title="Detect Depression Through The Comments"
            btnClass="hide"
         />
         <ContactForm_Comment />
         <Footer />
      </>
   );
}

export default Contact;

