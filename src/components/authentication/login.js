import React, { useState, useContext } from 'react';
import { AccountContext } from './account';
import Status from './Status';
import './Signup.scss';

const Login = ({ onClose, onSwitchToSignup, onSwitchToForgot }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication here
    authenticate(email, password)
      .then(data => { console.log("Logged in", data); })
      .catch(err => { alert("Failed to login", err); })
  };

  return (
    <div className="login-overlay">
      <div className="login">
      <Status/>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <br></br>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label>
            Password
            <br></br>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <a onClick={onSwitchToForgot}>Forgot Password?</a>
          </label>
          <button className="submit" type="submit">Login</button>
          <div className="or">
            <div className="line"></div>
            <div className="or-text">or</div>
            <div className="line"></div>
          </div>
        </form>
        <button className='google'><i className="fa-brands fa-google"></i> Continue with Google</button>
        <div className='create-acc'>Don't have an account? <a onClick={onSwitchToSignup}>Sign up</a></div>
        <button className="close-button" onClick={onClose}>Continue without login</button>
      </div>
    </div>
  );
};

export default Login;
