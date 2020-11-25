import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import LandingRoutes from "./containers/LandingRoutes";
import ProtectedRoutes from "./containers/ProtectedRoutes";
import StoreContext from './store';

function App() {
  const [userToken, setUserToken] = useState('');
  const [userName, setUserName] = useState('');
  const [timeline, setTimeline] = useState([]);
  const [tweets, setTweets] = useState({});
  const [tweeths, setTweeths] = useState({});
  const [likes, setLikes] = useState({});
  const [userInfo, setUserInfo] = useState({});
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

  const createSession = (token, userName) => {
    localStorage.setItem('session', token);
    localStorage.setItem('username', userName);
    setUserToken(token);
    setUserName(userName);
  }

  const destroySession = () => {
    localStorage.clear();
    setUserToken('');
    setUserName('');
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

  const createFollowing = async (username) => {
    const result = await fetch(`http://localhost:3000/follow/${username}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      },
      method: 'POST'
    });
    return result;
  }
  
  const deleteFollowing = async (username) => {
    const result = await fetch(`http://localhost:3000/follow/${username}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      },
      method: 'DELETE'
    });
    return result;
  }

  const getTimeline = async () => {
    const result = await fetch(`http://localhost:3000/timeline`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      },
      method: 'GET'
    });
    return result;
  }

  const getTweets = async (username) => {
    const result = await fetch(`http://localhost:3000/users/${username}/tweets`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      },
      method: 'GET'
    });
    return result;
  }

  const getTweeths = async (username) => {
    const result = await fetch(`http://localhost:3000/users/${username}/tweeths`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      },
      method: 'GET'
    });
    return result;
  }

  const getLikes = async (username) => {
    const result = await fetch(`http://localhost:3000/users/${username}/likes`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      },
      method: 'GET'
    });
    return result;
  }

  const getUserInfo = async (username) => {
    const result = await fetch(`http://localhost:3000/users/${username}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-authentication-token': userToken
      }, 
      method: 'GET'
    });
    return result;
  }

  const logOutUser = () => {
    destroySession();
    history.push('/');
  }

  const context = {
    logInUser: logInUser,
    getUserInfo: getUserInfo,
    getTimeline: getTimeline,
    getTweeths: getTweeths,
    getTweets: getTweets,
    getLikes: getLikes,
    logOutUser: logOutUser,
    createAccount: createAccount,
    createSession: createSession,
    createFollowing: createFollowing,
    deleteFollowing: deleteFollowing,
    setTimeline: setTimeline,
    setTweets: setTweets,
    setLikes: setLikes,
    setTweeths: setTweeths,
    setUserInfo: setUserInfo,
    tweets: tweets,
    timeline: timeline,
    likes: likes,
    tweeths: tweeths,
    userToken: userToken,
    userName: userName,
    userInfo: userInfo
  }

  useEffect(() => {
    const token = localStorage.getItem('session');
    const userName = localStorage.getItem('username');
    if (token !== null && userName !== null) createSession(token, userName);
  }, []);


  return (
    <>
      <StoreContext.Provider value={context}>
        {userToken !== ''  ? <ProtectedRoutes /> : <LandingRoutes />}
      </StoreContext.Provider>
    </>
  );
}

export default withRouter(App);
