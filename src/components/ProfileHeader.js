import React from 'react';
import leftArrow from '../assets/left-arrow.svg';

function ProfileHeader() {
    return(
        <div className="profile-header">
            <img src={leftArrow} alt="" className="header-left-arrow" />
            <div className="profile-header-info-container">
                <span className="profile-username">Hassan</span>
                <span classNamee="tweet-count">41 Tweets</span>
            </div>
        </div>
    )
}

export default ProfileHeader;

