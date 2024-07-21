import React, { useState, useContext } from 'react';
import { AccountContext } from './account';
import Status from './Status';
import './Signup.scss';

const Forgot = ({ onClose, onSwitchToLogin }) => {

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { getSession } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication here

    getSession()
        .then(({user}) => {
            user.changePassword(password, newPassword, (err, result) => {
                if(err){ alert(err); }
                else
                { 
                    console.log(result); 
                    if (result === 'SUCCESS') { onSwitchToLogin(); }
                }
            });
        });
  };

  return (
    <div className="login-overlay">
      <div className="login">
      <Status/>
        <form onSubmit={handleSubmit}>
          <label>
            Previous Password
            <br></br>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
          <label>
            New Password
            <br></br>
            <input 
              type="password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            />
          </label>
          <button className="submit" type="submit">Change</button>
        </form>
        <button className="close-button" onClick={onClose}>Continue without login</button>
      </div>
    </div>
  );
};

export default Forgot;