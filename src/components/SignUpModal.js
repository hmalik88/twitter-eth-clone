import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    icon: {
        width: "26.25px",
        height: "53px",
        color: "white"
    }
});

function SignUpModal() {
    const classes = useStyles();
    return(
        <div className="sign-up-modal">
            <div className="modal-header-container">
                <div className="modal-header">
                    <TwitterIcon className={classes.icon}/>
                </div>
            </div>
            <div className="modal-rest">
                <div className="sign-up-info-container">
                    <div className="modal-label">
                        <span>Create your account</span>
                    </div>
                    <form className="sign-up-modal-form">
                        <TextField 
                            variant="filled"
                            label="First Name"
                            style={{marginBottom: '15px', marginTop: '15px'}}
                            InputLabelProps={{
                                style: { 
                                    color: 'rgb(29,161,242)', 
                                    fontSize: '15px'
                                }
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: 'rgb(25,39,52)', 
                                    color: 'white', 
                                    font: '700 13.3333px Arial'
                                }
                            }}
                        />
                        <TextField 
                            variant="filled"
                            label="Last Name"
                            style={{marginBottom: '15px', marginTop: '15px'}}
                            InputLabelProps={{
                                style: { 
                                    color: 'rgb(29,161,242)', 
                                    fontSize: '15px'
                                }
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: 'rgb(25,39,52)', 
                                    color: 'white', 
                                    font: '700 13.3333px Arial'
                                }
                            }}
                        />
                        <TextField 
                            variant="filled"
                            label="Email"
                            style={{marginBottom: '15px', marginTop: '15px'}}
                            InputLabelProps={{
                                style: { 
                                    color: 'rgb(29,161,242)', 
                                    fontSize: '15px'
                                }
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: 'rgb(25,39,52)', 
                                    color: 'white', 
                                    font: '700 13.3333px Arial'
                                }
                            }}
                        />
                        <TextField 
                            variant="filled"
                            label="Password"
                            type="password"
                            style={{marginBottom: '15px', marginTop: '15px'}}
                            InputLabelProps={{
                                style: { 
                                    color: 'rgb(29,161,242)', 
                                    fontSize: '15px'
                                }
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: 'rgb(25,39,52)', 
                                    color: 'white', 
                                    font: '700 13.3333px Arial'
                                }
                            }}
                        />
                        <TextField 
                            variant="filled"
                            label="Eth Address"
                            style={{marginBottom: '15px', marginTop: '15px'}}
                            InputLabelProps={{
                                style: { 
                                    color: 'rgb(29,161,242)', 
                                    fontSize: '15px'
                                }
                            }}
                            InputProps={{
                                style: {
                                    backgroundColor: 'rgb(25,39,52)', 
                                    color: 'white', 
                                    font: '700 13.3333px Arial'
                                }
                            }}
                        />
                        <button className="create-account-btn">
                                <span>Create account</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;