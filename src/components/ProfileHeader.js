import React, { useContext } from 'react';
import leftArrow from '../assets/left-arrow.svg';
import { Link } from 'react-router-dom';
import StoreContext from '../store'
import '../scss/ProfileHeader.scss';

function ProfileHeader() {
    const context = useContext(StoreContext);

    const { tweets } = context.tweets;

    console.log(tweets);


    return(
        <div className="profile-header">
            <Link to="/home">
                <img src={leftArrow} alt="" className="header-left-arrow" />
            </Link>
            <div className="profile-header-info-container">
                <span className="profile-name">{context.userInfo['name']}</span>
                <span className="tweet-count">{tweets ? tweets.length: null} Tweets</span>
            </div>
        </div>
    )
}

export default ProfileHeader;

