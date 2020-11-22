import React, { useState, useEffect } from 'react';
import { withRouter, Redirect, useHistory } from 'react-router-dom';
import LandingRoutes from "./containers/LandingRoutes";
import ProtectedRoutes from "./containers/ProtectedRoutes";
import StoreContext from './store';

function App() {
  const [user, setUser] = useState('');
  const history = useHistory();

  const createAccount = async (data) => {
    const result = await fetch('http://localhost:3000/signup', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    return result;
  }

  const createSession = token => setUser(token);

  const destroySession = () => {
    localStorage.clear();
    setUser('');
  }

  const logInUser = async (data) => {
    const result = await fetch('http://localhost:3000/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    return result;
  }

  const getTimeline = () => {
    
  }

  const getTweeths = () => {

  }

  const getLikes = () => {

  }

  const logOutUser = () => {
    destroySession();
    history.push('/');
  }

  const context = {
    logInUser: logInUser,
    getTimeline: getTimeline,
    getTweeths: getTweeths,
    logOutUser: logOutUser,
    getLikes: getLikes,
    createAccount: createAccount,
    createSession: createSession,
    user: user
  }

  useEffect(() => {
    const token = localStorage.getItem('session');
    if (token !== null) createSession(token);
  }, []);


  return (
    <>
      <StoreContext.Provider value={context}>
        {user !== '' ? <ProtectedRoutes /> : <LandingRoutes />}
      </StoreContext.Provider>
    </>
  );
}

export default withRouter(App);
