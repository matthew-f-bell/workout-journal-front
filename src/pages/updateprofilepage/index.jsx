import { currentUser } from "../../api/auth.service"
import CreateProfile from "../../components/createprofile"




const UpdateProfile = () => {
    const user = currentUser()


    return (
        <CreateProfile user={user}/>
    )
}

export default UpdateProfile;