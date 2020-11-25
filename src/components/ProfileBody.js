import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import pin from '../assets/pin.svg';
import balloon from '../assets/balloon.svg';
import calendar from '../assets/calendar.svg';
import StoreContext from '../store';


const useStyles = makeStyles({
    avatar: {
        width: "134px",
        height: "134px",
        marginLeft: "15px",
        position: "relative",
        top: "55px"
    }
});

const months = ['January', 'February', 'March', 
                'April', 'May', 'June', 'July', 
                'August', 'September', 'October',
                'November', 'December'];

function ProfileBody() {
    const context = useContext(StoreContext);
    const history = useHistory();
    const classes = useStyles();
    const { username } = useParams();

    const toggleModal = () => {
        const modal = document.querySelector('.edit-profile-modal');
        const overlay = document.querySelector('.modal-overlay');
        modal.style.visibility = "visible";
        overlay.style.display = "block";
    }

    const sanitizeDate = (dirtyDate) => {
        const date = new Date(dirtyDate);
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    const editButton = () => {
        return <button className="edit-btn" onClick={toggleModal}>Edit Profile</button>
    }

    const handleFollow = async (e) => {
        let reply;
        if (!context.userInfo['isFollowed']) reply = await context.createFollowing(username);
        else reply = await context.deleteFollowing(username);
        const json = await reply.json();
        if (reply.ok) {
            e.target.innerText = e.target.innerText == 'Following' ? 'Follow' : 'Following';
            console.log('worked');
        }
        else console.log('didn\'t work');
        history.push(`/${username}`);
    }

    const followButton = () => {
        return <button className="follow-btn" onClick={handleFollow}>{context.userInfo['isFollowed'] ? 'Following' : 'Follow'}</button>
    }

    const date = sanitizeDate(context.userInfo['joined-date']);

    const isOwnProfile = username == context.userName;

    return(
        <div className="profile-body-container">
            <div className="profile-banner">
                <Avatar className={classes.avatar}/>
            </div>
            <div className="profile-info-container">
                <div className="edit-btn-container">
                    {isOwnProfile ? editButton() : followButton()}
                </div>
                <div className="info-container">
                    <div className="info-name"><span>{context.userInfo.name}</span></div>
                    <div className="info-username"><span>@{username}</span></div>
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
                                Joined {date}
                            </span>
                        </div>
                    </div>
                    <div className="follower-info">
                        <div className="f-count f-1">
                        <span className="f-num">{context.userInfo['following']}</span> Following
                        </div>
                        <div className="f-count">
                            <span className="f-num">{context.userInfo['followers']}</span> Followers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody;

