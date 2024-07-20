import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import './Signup.scss';

const Login = ({ onClose, onSwitchToSignup }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication here

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    })

    const AuthDetail = new AuthenticationDetails({
      Username: email,
      Password: password
    })

    user.authenticateUser(AuthDetail, {
      onSuccess: (data) => { console.log("onsuccess:", data); },
      onFailure: (err) => { alert(err); },
      newPasswordRequired: (data) => { console.log("newpasswordrequired", data); }
    });
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
          <button className="submit" type="submit">Login</button>
          <div className="or">
            <div className="line"></div>
            <div className="or-text">or</div>
            <div className="line"></div>
          </div>
        </form>
        <button className='google'><img alt='G'></img>Continue with Google</button>
        <div className='create-acc'>Don't have an account? <a onClick={onSwitchToSignup}>Sign up</a></div>
        <button className="close-button" onClick={onClose}>Continue without login</button>
      </div>
    </div>
  );
};

export default Login;
