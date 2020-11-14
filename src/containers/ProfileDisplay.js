import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileBody from '../components/ProfileBody'

function ProfileDisplay() {
    return(
        <div className="profile-container">
            <ProfileHeader />
            <ProfileBody />
        </div>

    )
}

export default ProfileDisplay;