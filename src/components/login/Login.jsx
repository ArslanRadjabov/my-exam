import React, { useState } from 'react'
import './login.scss'
import logo from '../../imgs/logo.png'
import { Link, useNavigate } from 'react-router-dom'



function Login1() {
    let [navigate, setNavigate] = useState(true)
  return (
   <>
   {
       navigate ? <div className='Login'>
       <div className='login_d-flex'>
       <img className='logo-img' src={logo} alt="ss"/>
       <h2>Medium</h2>
       </div>


       <h1>Almost there!</h1>
       <p>Finish creating your accaount for the full Medium experience</p>

       <form className='InputTextCenter'>
           <label htmlFor="name">
               Your full name
           </label>
           <input name='name' className='nameInput' type="text" required placeholder='enter name' />
           <label htmlFor="email">
               Your email
              
           </label>
           <input name='email' className='nameInput' type="email" required placeholder='enter email address'/>
           <button className='submitBtn' type='submit' onClick={() => setNavigate(!navigate)}>submit</button>
       </form>
   </div> : ""
   }
   </>
  )
}

export default Login1