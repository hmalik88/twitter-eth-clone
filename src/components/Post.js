import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import '../scss/Posts.scss';


const Post = ({ displayName, username, text, date }) => {
    return (
      <div className="post" key>
        <div className="avatar">
          <Avatar />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                {displayName}{" "}
                <span className="post-headerSpecial">
                  {<VerifiedUserIcon className="verified" />} @
                  {username} &bull; {date}
                </span>
              </h3>
            </div>
            <div className="post-headerDescription">
              {text && text.split('\n').map(str => <p key={str}>{str}</p>)}
            </div>
          </div>
          <div className="post-footer">
            <i className="far fa-comment"  />
            <i className="fas fa-retweet" />
            <i className="far fa-heart" />
            <i className="fa fa-external-link-alt"></i>
          </div>
        </div>
      </div>
    );
  }

export default Post;
