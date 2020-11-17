import React from 'react';
import ProfileBody from '../components/ProfileBody'
import ProfileFilter from '../components/ProfileFilter';
import '../scss/ProfileDisplay.scss';

function ProfileDisplay() {
    return(
        <div className="profile-container">
            <ProfileBody />
            <ProfileFilter />
        </div>
    )
}

export default ProfileDisplay;