import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import StoreContext from '../store';
import '../scss/LoginPageForm.scss';


function LoginPageForm() {
    const context = useContext(StoreContext);
    const history = useHistory();

    const formState = {
        email: '',
        password: ''
    }

    const [userFields, setUserField] = useState(formState);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const reply = await context.logInUser(userFields);
        const json = await reply.json();
        if (reply.ok) {
            const { token, userName } = json;
            context.createSession(token, userName);
            history.push('/home');
        } else {
            const err = json.errors.message;
            if (err.includes('email'))  setEmailError(err);
            else setPasswordError(err);
        }
    }

    const handleChange = e => {
        setUserField(fields => ({...fields, [e.target.name]: e.target.value}));
        switch (e.target.name) {
            case 'email':
                setEmailError('');
                break;
            case 'password':
                setPasswordError('');
                break;
            default:
                break;
        }
    }

    return(
        <form className="login-page-form" onSubmit={handleSubmit}>
            <TextField 
                variant="filled"
                label="Email"
                name="email"
                style={{marginBottom: '15px'}}
                onChange={handleChange}
                value={userFields.email}
                error={emailError !== ''}
                helperText={emailError === '' ? '' : emailError}
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
                name="password"
                onChange={handleChange}
                value={userFields.password}
                error={passwordError !== ''}
                helperText={passwordError === '' ? '' : passwordError}
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