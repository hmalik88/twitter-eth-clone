import React from 'react';
import TextField from '@material-ui/core/TextField';

function LandingLoginForm() {
    return (
        <div>
            <form>
                <TextField 
                    variant="filled"
                    label="Email"
                    style={{paddingRight: '15px'}}
                    InputLabelProps={{style: { color: 'rgb(29,161,242)', fontSize: '15px'}}}
                    InputProps={{style: {backgroundColor: 'rgb(25,39,52)'}}}
                />
                <TextField 
                    variant="filled"
                    label="Password"
                    style={{paddingRight: '15px'}}
                    InputLabelProps={{style: { color: 'rgb(29,161,242)', fontSize: '15px'}}}
                    InputProps={{style: {backgroundColor: 'rgb(25,39,52)'}}}
                />
                <button type="submit" className="landing-button">
                    <span>Log in</span>
                </button>
            </form>
        </div>
    )
}

export default LandingLoginForm;