import React from "react";
import { Avatar, Button } from "@material-ui/core";
import TwitterLogo from '../assets/Twitter_Logo_Blue.svg';

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

        <button
          href="/"
          type="submit"
          className="tweetBox-tweetButton"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetBox;