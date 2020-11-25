import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import StoreContext from '../store';
import { useHistory } from 'react-router-dom';
import '../scss/SignUpModal.scss';

const useStyles = makeStyles({
    icon: {
        width: "26.25px",
        height: "53px",
        color: "white"
    }
});

function SignUpModal() {
    const classes = useStyles();
    const context = useContext(StoreContext);
    const history = useHistory();

    const formState = {
        name: '',
        email: '',
        password: '',
        userName: '',
        ethAddress: ''
    };

    const errState = {
        emailError: '',
        ethAddressError: '',
        userNameError: ''
    }

    const [userFields, setUserField] = useState(formState);
    const [emailError, setEmailError] = useState('');
    const [ethAddressError, setEthAddressError] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [errorFields, setErrorFields] = useState(errState);

    const handleSubmit = async e => {
        e.preventDefault();
        const reply = await context.createAccount(userFields);
        const json = await reply.json();
        if (reply.ok) {
            const { token, userName } = json;
            context.createSession(token, userName);
            history.push('/home');
        } else {
            const emailErr = json.errors.messages.filter(message => message.includes('email'))[0];
            const userNameErr = json.errors.messages.filter(message => message.includes('username'))[0];
            const ethAddressErr = json.errors.messages.filter(message => message.includes('ethereum'))[0];
            let count = 0;
            [emailErr, userNameErr, ethAddressErr].forEach(err => {
                if (err !== '' && err !== undefined) count++;
            })
            const emailErrState = emailErr === undefined ? '' : emailErr;
            const ethAddressErrState = ethAddressErr === undefined ? '' : ethAddressErr;
            const userNameErrState = userNameErr === undefined ? '' : userNameErr;
            setEmailError(emailErrState);
            setEthAddressError(ethAddressErrState);
            setUserNameError(userNameErrState);
            const modal = document.querySelector('.sign-up-modal');
            modal.classList.add(`signup-errors-${count}`);
            const errors = {emailError: emailErrState, ethAddressError: ethAddressErrState, userNameError: userNameErrState};
            setErrorFields(errors);
        }
    }

    const handleChange = e => {
        const modal = document.querySelector('.sign-up-modal');
        const count = Object.values(errorFields).filter(err => err !== '').length;
        const errName = e.target.name + 'Error';
        if (Object.keys(errorFields).includes(errName) && errorFields[errName] !== '') {
            if (count > 0) modal.classList.toggle(`signup-errors-${count}`);
            if (count > 1) modal.classList.toggle(`signup-errors-${count - 1}`);
            setErrorFields({...errorFields, [errName]: ''});
        }
        setUserField(fields => ({...fields, [e.target.name]: e.target.value}));
        switch (e.target.name) {
            case 'userName':
                setUserNameError('');
                break;
            case 'email':
                setEmailError('');
                break;
            case 'ethAddress':
                setEthAddressError('');
                break;
            default:
                break;
        }
    }

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
                    <form className="sign-up-modal-form" onSubmit={handleSubmit}>
                        <TextField 
                            variant="filled"
                            label="Name"
                            name="name"
                            value={userFields.name}
                            onChange={handleChange}
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
                            label="Username"
                            name="userName"
                            value={userFields.userName}
                            onChange={handleChange}
                            error={userNameError !== ''}
                            helperText={userNameError === '' ? '' : userNameError}
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
                            name="email"
                            value={userFields.email}
                            onChange={handleChange}
                            error={emailError !== ''}
                            helperText={emailError === '' ? '' : emailError}
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
                            name="password"
                            value={userFields.password}
                            onChange={handleChange}
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
                            name="ethAddress"
                            value={userFields.ethAddress}
                            onChange={handleChange}
                            error={ethAddressError !== ''}
                            helperText={ethAddressError === '' ? '' : ethAddressError}
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
                        <button className="create-account-btn" type="submit">
                                <span>Create account</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;