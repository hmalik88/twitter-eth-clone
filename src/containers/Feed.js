import React, { useContext, Suspense } from "react";
import TweetBox from "../components/TweetBox";
import ProfileDisplay from '../containers/ProfileDisplay';
import EditProfileModal from '../components/EditProfileModal';
import StoreContext from '../store';

const Post = React.lazy(() => import('../components/Post'))

function Feed(props) {
  const { page } = props;
  const context = useContext(StoreContext);
  
  const generatePosts = () => {
    let posts = [];
    if (page === 'home') posts = context.timeline;
    else {
      switch(context.filter) {
        case 'Tweets':
          posts = context.tweets;
          break;
        case 'Tweeths':
          posts = context.tweeths;
          break;
        case 'Likes':
          posts = context.likes;
          break;
        default:
          break;
      }
    }
    return posts;
  }

  const posts = generatePosts();


  
  return (
    <div className="feed">
      {page === "profile" ? <ProfileDisplay /> : <TweetBox />}
      <Suspense fallback={<div>loading...</div>}>
        {posts.map((post) => (
          <Post
            key={posts.indexOf(post)}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            date={post.date}
          />
        ))}
      </Suspense>
        {page === "profile" ?  <EditProfileModal /> : null}
    </div>
  );
}

export default Feed;
