import React, { useState } from 'react';
import TwitterLogo from '../assets/Twitter_Logo_Blue.svg';
import SearchIcon from '../assets/white-search.svg';
import UsersIcon from '../assets/users.svg';
import SpeechIcon from '../assets/speech.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import LandingLoginForm from '../components/LandingLoginForm';
import SignUpModal from '../components/SignUpModal';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    icon: {
        width: "41.25px",
        height: "41.25px",
        color: "white"
    }
});

function LandingPage() {

    const [isOpen, setModal] = useState(false);

    const classes = useStyles();

    const toggleSignUpModal = () =>{
        setModal(true);
        const blinder = document.querySelector('.blinders');
        blinder.classList.add('disabled');
    }

    return(
        <div className="landing">
            <div className="blinders">
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
                    <div className="landing-right-info">
                        <TwitterIcon className={classes.icon} />
                        <div className="lr-txt-1">
                            <span>See what's happening in the world right now</span>
                        </div>
                        <div className="lr-txt-2">
                            <span>Join notTwitter today.</span>
                        </div>
                        <div className={"sign-up-link"} onClick={toggleSignUpModal}>
                            <div className="sign-up-btn">
                                <span>Sign up</span>
                            </div>
                        </div>
                        <Link className={"log-in-link"}>
                            <div className="log-in-btn">
                                <span>Log in</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        {isOpen ? <SignUpModal /> : null}
        </div>
    )
}

export default LandingPage;