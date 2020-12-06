import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import StoreContext from '../store';
import '../scss/LandingLoginForm.scss';

function LandingLoginForm() {
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



    return (
        <div>
            <form className="landing-form" onSubmit={handleSubmit}>
                <TextField 
                    variant="filled"
                    label="Email"
                    name="email"
                    value={userFields.email}
                    style={{paddingRight: '15px'}}
                    onChange={handleChange}
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
                    value={userFields.password}
                    style={{paddingRight: '15px'}}
                    onChange={handleChange}
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
                <button type="submit" className="landing-button">
                    <span>Log in</span>
                </button>
            </form>
        </div>
    )
}

export default LandingLoginForm;