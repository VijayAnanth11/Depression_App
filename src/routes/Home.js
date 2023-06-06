import React from 'react';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import MainImage from '../assets/background.jpg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home() {
   return(
      <>
         <Navbar />
         <Hero
            cName="hero"
            heroImg={MainImage}
            title="Depression Detecting System"
            text="Check depression level through the social media data"
         />
         <Destination />
         <Trip />
         <Footer />
      </>
   );
}

export default Home;
