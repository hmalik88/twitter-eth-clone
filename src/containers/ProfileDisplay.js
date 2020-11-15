import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileBody from '../components/ProfileBody'
import ProfileFilter from '../components/ProfileFilter';
import '../scss/ProfileDisplay.scss';

function ProfileDisplay() {
    return(
        <div className="profile-container">
            <ProfileHeader />
            <ProfileBody />
            <ProfileFilter />
        </div>
    )
}

export default ProfileDisplay;