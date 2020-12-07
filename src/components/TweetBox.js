import React, { useState, useContext } from "react";
import { Avatar } from "@material-ui/core";
import { checkForEth, checkForAt, processMatches, isTweeth } from '../TweetUtils';
import Loader from 'react-loader-spinner';
import TwitterLogo from '../assets/Twitter_Logo_Blue.svg';
import StoreContext from '../store';
import '../scss/TweetBox.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function TweetBox() {

  const [isToggled, setToggle] = useState(false);
  const [isRetweet, setRetweet] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [tweet, setTweet] = useState('');
  const context = useContext(StoreContext);
  const { setTagging, isTagging, setOffset } = context;

  const handleChange = async e => {
    setTweet(e.target.innerText);
    const text = e.target.innerText;
    const ethMatches = checkForEth(text);
    const atMatches = checkForAt(text);
    const shouldToggle = isTweeth(text);
    const lastTag = atMatches.length ? atMatches[atMatches.length - 1] : null;
    const list = await processUserList(lastTag, text)
    if (!isTagging && lastTag && lastTag.end === text.length + 1 && list.length) {
      const tweetInput = document.querySelector('.tweet-input');
      const offset = tweetInput.offsetHeight === 40 ? '125px' : 133 + (tweetInput.offsetHeight - 40) + 'px';
      setOffset(offset);
      setTagging(true);
    }
    else if (isTagging && lastTag && !list.length) setTagging(false)
    else if (isTagging && !lastTag) setTagging(false);
    else if (isTagging && text[text.length - 1] !== ' ') await processUserList(lastTag, text);
    else if (isTagging && text[text.length - 1] === ' ') setTagging(false);
    else if (tweet[tweet.length - 1] === '@' && text.length !== 1 && text[text.length - 1] !== ' ' && list.length) {
      const tweetInput = document.querySelector('.tweet-input');
      const offset = tweetInput.offsetHeight === 40 ? '125px' : 133 + (tweetInput.offsetHeight - 40) + 'px';
      setOffset(offset);
      setTagging(true);
    }
    const mergedMatches = [...ethMatches, ...atMatches].sort((a,b) => a.start - b.start);
    const tweethIcon = document.querySelector('.eth-animation');
    if (mergedMatches.length) processMatches(mergedMatches, e.target, text);
    else if (e.target.innerText === '\n') {
      e.target.firstChild.remove();
      document.execCommand('foreColor', true, 'white');
    }
    if ((shouldToggle && !isToggled) || (!shouldToggle && isToggled)) toggleTweeth({target: tweethIcon});
  }

  const handleAnimationEnd = e => {
    e.target.classList.toggle('is-animating');
    e.target.classList.toggle('eth-selected');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const container = document.querySelector('.eth-btn-container');
    const div = document.querySelector('.tweet-input');
    container.style.paddingRight = '50px';
    setTimeout(async () => {
      const tweetData = {};
      tweetData['content'] = tweet;
      tweetData['isTweeth'] = isToggled;
      tweetData['isRetweet'] = isRetweet;
      const reply = await context.createTweet(tweetData);
      const json = await reply.json();
      if (reply.ok) console.log('went through');
      else console.log('something wrong');
      setTweet('');
      div.innerText = '';
      setLoading(false);
      container.style.paddingRight = '0px';
    }, 1000);
  }


  const toggleTweeth = (e) => {
    const btn = document.querySelector('.tweetBox-tweetButton');
    if (isToggled) {
      setToggle(false);
      e.target.classList.toggle('eth-selected');
      setTweet('');
      btn.innerText = 'Tweet';
    } else {
      e.target.classList.toggle('is-animating');
      setToggle(true);
      setTweet('$eth');
      btn.innerText = 'Tweeth';
    }
  }

  const processUserList = async (match, text) => {
    if (!match) return [];
    const userTag = text.slice(match.start, match.end).split('@')[1];
    const res = await context.getUsers(userTag);
    const json = await res.json();
    return json;
  }

  return (
    <div className="tweetbox-container">
      <div className="tweetBox">
        <form className="tweet-form" onSubmit={handleSubmit}>
          <div className="tweetBox-input">
            <Avatar src={TwitterLogo} />
            <div className="tweet-input" spellCheck="false" contentEditable="true" onInput={handleChange} placeholder="What's happening"></div>
          </div>
          <div className="tweetbox-input-btm">
            <div className="tweetbox-input-btm-inner">
              <div className="eth-btn-container">
                <div className='eth-animation' onClick={toggleTweeth} onAnimationEnd={handleAnimationEnd}></div>
                {isLoading ? <Loader type="Oval" color="rgb(29,161,242)" height={30} width={30} /> : (
                <button
                  href="/"
                  type="submit"
                  className="tweetBox-tweetButton"
                >
                  Tweet
                </button>)}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default TweetBox;