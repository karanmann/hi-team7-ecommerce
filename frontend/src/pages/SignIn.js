import React from 'react'

import '../styles/SignIn.css';

const SignIn = () => {
  return (
      <div className="signin-container">
      <div className="signin-wrapper">
        <title>SIGN IN</title>
        <form className="signin-form">
          <input className='signin-input' placeholder="username" />
          <input className='signin-input' placeholder="password" />
          <button className='signin-button'>LOGIN</button>
          <a href='/' className='signin-link'>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href='/' className='signin-link'>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
      </div>
  )
}

export default SignIn