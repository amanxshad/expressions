import React, { useState } from 'react';
import UserPool from '../UserPool';
import './Signup.scss';

const Signup = ({ onClose, onSwitchToLogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication here

    UserPool.signUp(email, password, [], null, (err, data) => {
      if(err){
        alert(err);
      }
      console.log(data);
    })
  };

  return (
    <div className="login-overlay">
      <div className="login">
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
            <a>Forgot Password?</a>
          </label>
          <button className="submit" type="submit">Sign in</button>
          <div className="or">
            <div className="line"></div>
            <div className="or-text">or</div>
            <div className="line"></div>
          </div>
        </form>
        <button className='google'><img alt='G'></img>Continue with Google</button>
        <div className='create-acc'>Already have an account? <a onClick={onSwitchToLogin}>Login</a></div>
        <button className="close-button" onClick={onClose}>Continue without Signup</button>
      </div>
    </div>
  );
};

export default Signup;
