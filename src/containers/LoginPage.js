import React, { useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import LoginPageForm from '../components/LoginPageForm';
import SignUpModal from '../components/SignUpModal';

const useStyles = makeStyles({
    icon: {
        width: "39px",
        height: "39px",
        color: "white"
    }
});

function LoginPage() {

    const [isOpen, setModal] = useState(false);

    const openSignUp = () => {
        setModal(true);
        const background = document.querySelector('.login-bg');
        background.classList.add('disabled-1');
    }

    const classes = useStyles();
    return (
        <div className="login-page">
            <div className="login-bg">
                <div className='login-form-container'>
                    <TwitterIcon className={classes.icon} />
                    <h1 className="login-text"><span>Log in to notTwitter</span></h1>
                    <LoginPageForm />
                    <div onClick={openSignUp} className="login-signup-link">Sign up for notTwitter</div>
                </div>
            </div>
            {isOpen ? <SignUpModal /> : null}
        </div>
    )
}

export default LoginPage;