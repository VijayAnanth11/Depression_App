import React from 'react';
import './SignupStyles.css';

function Signup() {
   return(
      <div class="container-signup">
         <h1 className='heading'>Signup</h1>
         <form className='signup-form' action='#' >
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
         </form>
         <div className='terms'>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"> I agree to these <a href=''>Terms & Conditions</a></label>
         </div>
         <button type="submit" className='signup'>Signup</button>

         <div className='member'>
            Already a member?
            <a href='./login'>
               <span>Login Here</span>
            </a>
         </div>
      </div>
   );
}

export default Signup;
