import React, { useState,useEffect } from 'react';
import './HeroStyles.css';

function Hero(props) {
   const [gotopbtn, setGoToTopBtn] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", ()=> {
         if(window.scrollY > 100) {
            setGoToTopBtn(true);
         } else {
            setGoToTopBtn(false);
         }
      })
   }, []);

   const scrollUp = ()=> {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   }

   return(
      <>
         <div className={props.cName}>
            <img alt='HeroImg' src={props.heroImg} />
            <div className='hero-text'>
               <h1>{props.title}</h1>
               <p>{props.text}</p>
               <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
         </div>
         
         {gotopbtn && (
            <a className='gotopbtn' onClick={scrollUp}><i className='fas fa-arrow-up'></i></a>
         )}
      </>
   );
}

export default Hero;
