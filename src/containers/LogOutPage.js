import React from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    icon: {
        width: '39px',
        height: '39px',
        marginBottom: '15px',
        color: 'white'
    }
})

function LogOutPage() {
    const classes = useStyles();
    return(
        <div className="logout-page">
            <div className="logout-modal">
                <TwitterIcon className={classes.icon} />
                <div className="logout-header"><span>Log out of notTwitter?</span></div>
                <div className="logout-text">
                    You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.
                </div>
                <div className="logout-buttons">
                    <Link to="/home" className={'home-link'}>
                        <button className="cancel-btn">
                            <span>Cancel</span>
                        </button>
                    </Link>
                    <button className="logout-btn"><span>Log out</span></button>
                </div>
            </div>
        </div>
    )
}

export default LogOutPage;