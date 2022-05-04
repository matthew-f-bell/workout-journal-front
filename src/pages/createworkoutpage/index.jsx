import { NavLink } from "react-router-dom";
import CreateWorkout from "../../components/createworkout";
import NavBar from "../../components/navbar";
import "../../stylesheets/login.css"

const CreateWorkoutPage = () => {
    return(
        <>  
            <NavBar />
            <div className="login-container">
                <CreateWorkout />
            </div>
        </>
    )
}

export default CreateWorkoutPage;