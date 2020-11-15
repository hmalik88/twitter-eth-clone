import React from 'react';
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import pin from '../assets/pin.svg';
import balloon from '../assets/balloon.svg';
import calendar from '../assets/calendar.svg';


const useStyles = makeStyles({
    avatar: {
        width: "134px",
        height: "134px",
        marginLeft: "15px",
        position: "relative",
        top: "55px"
    }
});

function ProfileBody() {

    const classes = useStyles();

    const toggleModal = () => {
        const modal = document.querySelector('.edit-profile-modal');
        const overlay = document.querySelector('.modal-overlay');
        modal.style.visibility = "visible";
        overlay.style.display = "block";
    }

    return(
        <div className="profile-body-container">
            <div className="profile-banner">
                <Avatar className={classes.avatar}/>
            </div>
            <div className="profile-info-container">
                <div className="edit-btn-container">
                    <button className="edit-btn" onClick={toggleModal}>Edit Profile</button>
                </div>
                <div className="info-container">
                    <div className="info-name"><span>Hassan</span></div>
                    <div className="info-username"><span>@hbm88</span></div>
                    <div className="user-info">
                        <div className="user-item">
                            <img src={pin} className="pin" alt="pin" />
                            <span className="u-info">
                                Brooklyn, NY
                            </span>
                        </div>
                        <div className="user-item">
                            <img src={balloon} className="balloon" alt="balloon" />
                            <span className="u-info">
                                Born December 19, 1988
                            </span>
                        </div>
                        <div className="user-item">
                            <img src={calendar} className="calendar" alt="calendar" />
                            <span>
                                Joined May 2012
                            </span>
                        </div>
                    </div>
                    <div className="follower-info">
                        <div className="f-count f-1">
                            <span className="f-num">23</span> Following
                        </div>
                        <div className="f-count">
                            <span className="f-num">14</span> Followers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody;

