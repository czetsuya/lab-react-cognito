import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { useEffect } from 'react';

import Amplify, { Auth, Hub, API } from 'aws-amplify';
import awsconfig from './aws-config/awsconfig.json';
import awsauth from './aws-config/awsauth.json';

import useAuthentication from './useAuthentication.js'

function App() {

  const auth = useAuthentication();

  const signInButton = auth.signInButton;

  console.log(signInButton)

  return auth.isAuthenticated ? (
    <div>
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  ) : (
    <div>
      {auth.Cog}
      <button onClick={() => auth.signIn()}>Signin</button>
    </div>
  );
  
}

export default App;
