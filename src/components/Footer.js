import React from 'react';
import './FooterStyles.css';

const Footer = ()=> {
   return(
      <div className='footer'>
         <div className='top'>
            <div>
               <h1>DepSys</h1>
               <p>Check the depression levels through the <br /> social media data.</p>
            </div>
            <div>
               <a href='https://www.facebook.com/sonna.0418'><i className='fa-brands fa-facebook-square'></i></a>
               <a href='https://github.com/chankasonnadara/fyp_depression_system'><i className='fa-brands fa-github'></i></a>
               <a href='https://www.linkedin.com/in/chankasonnadara'><i className='fa-brands fa-linkedin'></i></a>
               <a href='mailto:chankasonnadara98@gmail.com'><i className='fa-solid fa-envelope'></i></a>
            </div>
         </div>

         <div className='bottom'>
            <div>
               <h4>Project</h4>
               <a href='/'>Home</a>
               <a href='/post'>Posts Depression</a>
               <a href='/comment'>Comments Depression</a>
               <a href='/about'>About Us</a>
            </div>
            <div>
               <h4>Community</h4>
               <a href='https://github.com/chankasonnadara/fyp_depression_system'>Github</a>
               <a href='/'>Project</a>
            </div>
            <div>
               <h4>Others</h4>
               <a href='#'>Terms of Service</a>
               <a href='#'>Privacy Policy</a>
               <a href='#'>License</a>
            </div>
         </div>
      </div>
   );
}

export default Footer;
