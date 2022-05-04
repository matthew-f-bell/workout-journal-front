import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as AuthService from "../../api/auth.service"

import "../../stylesheets/login.css"


const CreateProfile = (props) => {
    let [first_name, setFirstName] = useState("");
    let [last_name, setLastName] = useState("");
    let [userHeight, setUserHeight] = useState("");
    let [userWeight, setUserWeight] = useState("");
    let [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AuthService.updateProfile(first_name, last_name, userHeight, userWeight, image).then(() => {
            setFirstName = "";
            setLastName = "";
            setUserHeight = "";
            setUserWeight = "";
            setImage = "";
        })
    }


    return (
        <div>
            <div className="login">
                <h2>Create Your Profile</h2>
                <form method="put">
                    <label htmlFor="first-name">
                        First Name:
                    </label>
                    <br/>
                    <br/>
                    <input 
                        type="text"
                        name="first-name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={props.first_name}
                        required 
                    />
                    <br/>
                    <br/>
                    <label htmlFor="last-name">
                        Last Name:
                    </label>
                    <br/>
                    <br/>
                    <input 
                        type="text"
                        name="first-name" 
                        onChange={(e) => setLastName(e.target.value)}
                        value={props.last_name}
                        required 
                    />
                    <br/>
                    <br/>
                    <label htmlFor="user-height">
                        Height:
                    </label>
                    <br/>
                    <br/>
                    <input 
                        type="number" 
                        name="user-height" 
                        onChange={(e) => setUserHeight(e.target.value)}
                        value={props.userHeight}
                        required 
                    />
                    <br/>
                    <br/>
                    <label htmlFor="user-weight">
                        Weight: 
                    </label>
                    <br/>
                    <br/>
                    <input 
                        type="number" 
                        name="user-weight" 
                        onChange={(e) => setUserWeight(e.target.value)}
                        value={props.userWeight}
                        required 
                    />
                    <br/>
                    <br/>
                    <label htmlFor="profile-pic">
                        Profile Picture:
                    </label>
                    <br/>
                    <br/>
                    <input 
                        type="file" 
                        name="profile-pic" 
                        accept="image/" 
                        onChange={(e) => setImage(e.target.value)}
                        value={props.image}
                    />
                    <br/>
                    <br/>
                    <input className="login-btn" type="submit" value="Save" onClick={handleSubmit} />
                    <br/>
                    <br/>
                    <button className="signup-btn"><NavLink to="/profile"> <div className="signup">Cancel</div></NavLink></button>
                </form>
            </div>
        </div>
    )
}

export default CreateProfile;