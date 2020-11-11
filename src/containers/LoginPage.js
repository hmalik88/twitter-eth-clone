import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        width: "39px",
        color: "white"
    }
});

function LoginPage() {
    const classes = useStyles();
    return (
        <>
            <div className="login-bg">
                <div className='login-form-container'>
                    <TwitterIcon className={classes.icon} />
                    <h1 className="login-text"><span>Log in to notTwitter</span></h1>
                </div>
            </div>
        </>
    )
}

export default LoginPage;