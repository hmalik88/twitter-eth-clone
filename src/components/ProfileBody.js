import React from 'react';
import { Avatar } from "@material-ui/core";

function ProfileBody() {
    return(
        <div className="profile-body-container">
            <div className="profile-banner">

            </div>
            <div className="profile-info-container">
                <div className="edit-btn-container">
                    <button>Edit Profile</button>
                </div>
                <div className="info-container">
                    <span>Hassan</span>
                    <span>@shizbksillest</span>
                    <div className="user-info">
                        <img src={} alt="" className="pin" />
                        <span>
                            Brooklyn, NY
                        </span>
                        <img src={} alt="" className="balloon" />
                        <span>
                            Born December 19, 1988
                        </span>
                        <img src={} alt="" className="calendar" />
                        <span>
                            Joined May 2012
                        </span>
                    </div>
                    <div className="follower-info">
                        <div>
                            <span>23</span> Following
                        </div>
                        <div>
                            <span>14</span> Following
                        </div>
                    </div>
                </div>
            </div>
            <Avatar />
        </div>
    )
}

export default ProfileBody;

