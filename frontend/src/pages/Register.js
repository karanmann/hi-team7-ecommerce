import React from 'react'

import '../styles/Register.css';

const Register = () => {
  return (
      <div className="reg-container">
          <div className="reg-wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="reg-form">
          <input  className="reg-input" placeholder="First name" />
          <input className="reg-input" placeholder="Last name" />
          <input className="reg-input" placeholder="username" />
          <input className="reg-input" placeholder="email" />
          <input className="reg-input" placeholder="password" />
          <input className="reg-input" placeholder="confirm password" />
        </form>
        <div className="reg-agreement">
          <input type="checkbox" style={{ marginRight: "10px" , marginTop:"20px"}} />
          <span>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
        </div>

        <button className="reg-button">Submit</button>
        </div>
      </div>
  )
}

export default Register