import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../scss/LandingLoginForm.scss';

function LandingLoginForm() {
    return (
        <div>
            <form className="landing-form">
                <TextField 
                    variant="filled"
                    label="Email"
                    style={{paddingRight: '15px'}}
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
                    style={{paddingRight: '15px'}}
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
                <button type="submit" className="landing-button">
                    <span>Log in</span>
                </button>
            </form>
        </div>
    )
}

export default LandingLoginForm;