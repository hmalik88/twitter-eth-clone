import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import { Link } from 'react-router-dom';

function ProfileHeader() {
    return(
        <div className="profile-header">
            <Link to="/home">
                <img src={leftArrow} alt="" className="header-left-arrow" />
            </Link>
            <div className="profile-header-info-container">
                <span className="profile-name">Hassan</span>
                <span className="tweet-count">41 Tweets</span>
            </div>
        </div>
    )
}

export default ProfileHeader;

