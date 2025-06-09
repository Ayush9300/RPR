import React from 'react'
import './Signup.css'
import { MdOutlinePersonAddAlt } from "react-icons/md";

function Signup() {
  return (
    <div id="signup" onSubmit={(e)=>{
           alert("SignUp Successfully...👍")
    }}>
      <form action="">
        <span id="signuptitle">Signup Page</span>
        
        <div className="sign-list">
          <label htmlFor="name">UserName</label>
          <input type="text" id="name" required />
        </div>

        <div className="sign-list">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>

        <div className="sign-list">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required />
        </div>

        <div className="sign-list">
          <label htmlFor="confirmPass">Confirm Password</label>
          <input type="password" id="confirmPass" required />
        </div>

        <button id="signupbtn" type="submit">
          SignUp <MdOutlinePersonAddAlt />
        </button>
      </form>
    </div>
  )
}

export default Signup
