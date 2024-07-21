import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

const AccountContext = createContext();

const Account = (props) => {


  const getSession = async() => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if(user){


        user.getSession(async (err, session) => {
          if(err){ reject(); } //error getting session
          else{
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if(err){ reject(); } //error getting user attributes
                else{

                  //empty variable to store attributes
                  const results = {};

                  //loop to retrieve all attributes
                  for (let att of attributes)
                  {
                    const { name, value } = att;
                    results[name] = value;
                  }

                  //resolve results for getUserAttributes
                  resolve(results);

                }
              });
            });
            resolve({ user, ...session, ...attributes });
          }
        });
      }


      else{ reject(); } //if no user in userpool reject request  
    });
  }



  const authenticate = async (Username, Password) => {
      return await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool });
    
        const AuthDetail = new AuthenticationDetails({
          Username,
          Password,
        });
    
        user.authenticateUser(AuthDetail, {
          onSuccess: (data) => { console.log("onsuccess:", data); resolve(data); },
          onFailure: (err) => { alert(err); reject(err); },
          newPasswordRequired: (data) => { console.log("newpasswordrequired", data); resolve(data); }
        });
      });
  };
  return (
      <AccountContext.Provider value={{ authenticate , getSession }}>
          {props.children}
      </AccountContext.Provider>
  );
};

export { Account, AccountContext };
