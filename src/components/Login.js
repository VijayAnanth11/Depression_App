import React from 'react';
import './LoginStyles.css';

function Login() {
   return(
      <div class="container-login">
         <h1 className='heading'>Login</h1>
         <form className='signup-form' action='#' >
            <input type="email" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password' />
         </form>
         <div className='recover'>
            <a href='./forgetpassword'>Forget Password?</a>
         </div>
         <button type='submit' className='signin'>Signin</button>
         <div className='member'>
            Create an Account?
            <a href='./signup'>
               <span>Register Here</span>
            </a>
         </div>
      </div>
   );
}

export default Login;
