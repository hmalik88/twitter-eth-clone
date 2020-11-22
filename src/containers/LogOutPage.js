import React, { useContext } from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import StoreContext from '../store';
import '../scss/LogOutPage.scss';

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
    const context = useContext(StoreContext);
    const history = useHistory();

    const handleClick = () => context.logOutUser();

    const handleCancel = () => history.goBack();


    return(
        <div className="logout-page">
            <div className="logout-modal">
                <TwitterIcon className={classes.icon} />
                <div className="logout-header"><span>Log out of notTwitter?</span></div>
                <div className="logout-text">
                    You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.
                </div>
                <div className="logout-buttons">
                    <button className="cancel-btn" onClick={handleCancel}>
                        <span>Cancel</span>
                    </button>
                    <button className="logout-btn" onClick={handleClick}><span>Log out</span></button>
                </div>
            </div>
        </div>
    )
}

export default LogOutPage;