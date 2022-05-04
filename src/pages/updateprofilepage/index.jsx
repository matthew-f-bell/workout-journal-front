import { currentUser } from "../../api/auth.service"
import CreateProfile from "../../components/createprofile"
import NavBar from "../../components/navbar"

import "../../stylesheets/login.css"




const UpdateProfile = () => {
    const user = currentUser()


    return (
        <div>
            <NavBar/>
            <div className="login-container">
                <CreateProfile user={user}/>
            </div>
        </div>
    )
}

export default UpdateProfile;