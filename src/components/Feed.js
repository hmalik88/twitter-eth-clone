import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import {posts} from "../data"

function Feed(props) {
  return (
    <div className="feed">
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
