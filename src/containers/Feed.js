import React from "react";
import TweetBox from "../components/TweetBox";
import Post from "../components/Post";
import ProfileDisplay from '../containers/ProfileDisplay';
import {posts} from "../data"
import EditProfileModal from '../components/EditProfileModal';

function Feed(props) {
  const { page } = props;
  return (
    <div className="feed">
      {page == "profile" ? <ProfileDisplay /> : <TweetBox />}
        {posts.map((post) => (
          <Post
            key={posts.indexOf(post)}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            date={post.date}
          />
        ))}
        {page == "profile" ?  <EditProfileModal /> : null}
    </div>
  );
}

export default Feed;
