import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import TwitterLogo from '../assets/Twitter_Logo_Blue.svg';
import ethNormal from '../assets/normal-eth.svg';
import isEth from '../assets/is-eth.svg';
import unselectedEth from '../assets/unselected-eth.svg';
import ethSuccess from '../assets/success-eth.svg';
import ethError from '../assets/error-eth.svg';
import sparkles from '../assets/sparkle.svg';
import '../scss/TweetBox.scss';

function TweetBox() {

  const [isToggled, setToggle] = useState(false);
  const [tweet, setTweet] = useState('');

  const handleChange = e => {
    setTweet(e.target.value);
  }

  const handleHover = e => {
    if (!isToggled) e.target.src = ethNormal;
  }

  const handleLeave = e => {
    if (!isToggled) e.target.src = unselectedEth;
  }

  const toggleTweeth = e => {
    const btn = document.querySelector('.tweetBox-tweetButton');
    if (isToggled) {
      setToggle(false);
      e.target.src = ethNormal;
      setTweet('');
      btn.innerText = 'Tweet';
    } else {
      setToggle(true);
      e.target.src = isEth;
      setTweet('$eth');
      btn.innerText = 'Tweeth';
    }
  }

  return (
    <div className="tweetbox-container">
      <div className="feed-header">
        <h2>Home</h2>
        <img src={sparkles} className="sparkles" />
      </div>
      <div className="tweetBox">
        <form className="tweet-form">
          <div className="tweetBox-input">
            <Avatar src={TwitterLogo} />
            <input
              placeholder="What's happening?"
              type="text"
              value={tweet}
              onChange={handleChange}
            />
          </div>
          <div className="tweetbox-input-btm">
            <div className="tweetbox-input-btm-inner">
              <div className="eth-btn-container">
                <img src={unselectedEth} 
                  alt ="" 
                  className="eth" 
                  onClick={toggleTweeth} 
                  onMouseOver={handleHover}
                  onMouseLeave={handleLeave} 
                />
                <button
                  href="/"
                  type="submit"
                  className="tweetBox-tweetButton"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default TweetBox;