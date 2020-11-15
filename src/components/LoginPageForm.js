import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../scss/LoginPageForm.scss';


function LoginPageForm() {
    return(
        <form className="login-page-form">
            <TextField 
                variant="filled"
                label="Email"
                style={{marginBottom: '15px'}}
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
            <button type="submit" className="login-form-btn">
                <span>Log in</span>
            </button>
        </form>
    )
}

export default LoginPageForm;