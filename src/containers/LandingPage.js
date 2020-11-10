import React from 'react';
import TwitterLogo from '../assets/Twitter_Logo_Blue.svg';
import SearchIcon from '../assets/white-search.svg';
import UsersIcon from '../assets/users.svg';
import SpeechIcon from '../assets/speech.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import LandingLoginForm from '../components/LandingLoginForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        width: "41.25px",
        height: "41.25px",
        color: "white"
    }
});

function LandingPage() {
    const classes = useStyles();
    return(
        <div className="landing">
            <div className="landing-left">
                <img src={TwitterLogo} alt="" className="landing-logo" />
                <div className="left-landing-info">
                    <div className="info-1">
                        <img src={SearchIcon} className="search-icon" alt="" />
                        <div><span>Follow your interests.</span></div>
                    </div>
                    <div className="info-2">
                        <img src={UsersIcon} className="users-icon" alt="" />
                        <div><span>Hear what people are talking about.</span></div>
                    </div>
                    <div className="info-3">
                        <img src={SpeechIcon} className="speech-icon" alt="" />
                        <div><span>Join the conversation.</span></div>
                    </div>
                </div>
            </div>
            <div className="landing-right">
                <LandingLoginForm />
                <div>
                    <TwitterIcon className={classes.icon} />
                    <span>See what's happening in the world right now</span>
                    <div>
                        <span>Join Twitter today.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;