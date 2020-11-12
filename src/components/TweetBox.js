import React from "react";
import { Avatar, Button } from "@material-ui/core";
import TwitterLogo from '../assets/Twitter_Logo_Blue.svg';
import ethNormal from '../assets/normal-eth.svg';
import isEth from '../assets/is-eth.svg';
import ethSuccess from '../assets/success-eth.svg';
import ethError from '../assets/error-eth.svg';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form className="tweet-form">
        <div className="tweetBox-input">
          <Avatar src={TwitterLogo} />
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="tweetbox-input-btm">
          <div className="tweetbox-input-btm-inner">
            <div className="eth-btn-container">
              <img src={ethNormal} alt ="" className="eth" />
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
  );
}

export default TweetBox;