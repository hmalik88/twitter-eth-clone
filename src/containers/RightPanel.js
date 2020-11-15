import React from "react";
import {TwitterFollowButton, TwitterTimelineEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import '../scss/RightPanel.scss';

const RightPanel = () => {
  const handleSubmit = () => {document.location.reload()}
  return (
    <div className="right-panel">
      <div className="right-panel-container">
        <div className="search">
          <SearchIcon className="searchIcon" />
          <form onSubmit={handleSubmit}>
              <input 
              id="search" 
              placeholder="Search Twitter" 
              type="text" 
              autoComplete="off" 
              />
          </form>
        </div>
        <div className="widgetContainer">
          <div className="widget-header">
            <h2>What's happening</h2>
          </div>
          <div className="widget-body">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="AndreCronjeTech"
              options={{height: 400}}
              theme="dark"
            />
            <TwitterFollowButton screenName="AndreCronjeTech" options={{size: 'large'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
