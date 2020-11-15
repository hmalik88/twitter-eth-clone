import React from 'react';
import TextField from '@material-ui/core/TextField';
import cancel from '../assets/cancel.svg';
import '../scss/EditProfileModal.scss';


function EditProfileModal() {

    const closeModal = () => {
        const modal = document.querySelector('.edit-profile-modal');
        const overlay = document.querySelector('.modal-overlay');
        modal.style.visibility = "hidden";
        overlay.style.display = "none";
    }

    return(
        <div className="edit-profile-modal">
            <div className="edit-modal-header">
                <div className="edit-header-container">
                    <div className="close-container">
                        <img src={cancel} className="edit-cancel-btn" alt="cancel" onClick={closeModal} />
                    </div>
                    <div className="header-txt-container">
                        <span>Edit profile</span>
                    </div>
                    <div className="save-btn">
                        <span>Save</span>
                    </div>
                </div>
            </div>
            <div className="edit-modal-body">
                <TextField 
                    variant="filled"
                    label="First Name"
                    value="Hassan"
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
                    value="Malik"
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
                            font: '700 13.3333px Arial',
                            autoComplete: "off"
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
            </div>
        </div>
    );
}

export default EditProfileModal;