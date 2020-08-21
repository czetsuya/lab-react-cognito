import React from 'react';
import './App.css';

import useAuthentication from './useAuthentication.js'

import CircularUnderLoad from './Loader'

function App() {

  const auth = useAuthentication();

  if(auth.isLoading) {
    return <CircularUnderLoad></CircularUnderLoad>
  } else {
  return auth.isAuthenticated ? (
    <div>
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  ) : (
    <div>
      <button onClick={() => auth.signIn()}>Signin</button>
    </div>
  );
  }
  
}

export default App;
