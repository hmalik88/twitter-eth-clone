import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import {posts} from "../data"
import sparkles from '../assets/sparkle.svg';


function Feed() {

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <img src={sparkles} className="sparkles" />
      </div>

      <TweetBox />

        {posts.map((post) => (
          <Post
            key={posts.indexOf(post)}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            date={post.date}
          />
        ))}
    </div>
  );
}

export default Feed;
