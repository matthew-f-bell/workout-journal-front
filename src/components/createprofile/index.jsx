import React, { useState } from "react";
import * as AuthService from "../../api/auth.service"

const CreateProfile = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [userHeight, setUserHeight] = useState("");
    const [userWeight, setUserWeight] = useState("");
    const [image, setImage] = useState("");

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
            <div>
                <h2>Create Your Profile</h2>
                <form method="post">
                    <label htmlFor="first-name">
                        First Name:
                    </label>
                    <input 
                        type="text"
                        name="first-name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={props.first_name}
                        required 
                    />
                    <label htmlFor="last-name">
                        Last Name:
                    </label>
                    <input 
                        type="text"
                        name="first-name" 
                        onChange={(e) => setLastName(e.target.value)}
                        value={props.last_name}
                        required 
                    />
                    <label htmlFor="user-height">
                        Height:
                    </label>
                    <input 
                        type="number" 
                        name="user-height" 
                        onChange={(e) => setUserHeight(e.target.value)}
                        value={props.userHeight}
                        required 
                    />
                    <label htmlFor="user-weight">
                        Weight: 
                    </label>
                    <input 
                        type="number" 
                        name="user-weight" 
                        onChange={(e) => setUserWeight(e.target.value)}
                        value={props.userWeight}
                        required 
                    />
                    <label htmlFor="profile-pic">
                        Profile Picture:
                    </label>
                    <input 
                        type="file" 
                        name="profile-pic" 
                        accept="image/" 
                        onChange={(e) => setImage(e.target.value)}
                        value={props.image}
                    />
                    <input type="submit" value="Save" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default CreateProfile;