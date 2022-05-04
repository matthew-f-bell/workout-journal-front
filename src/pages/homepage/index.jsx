import NavBar from "../../components/navbar";
import Profile from "../../components/profile";
import Login from "../../components/login";
import SignUp from "../../components/signup";
import { NavLink } from "react-router-dom";

import "../../stylesheets/login.css"

const HomePage = (props) => {

    const homeContent = () => {
        if(props.loggedIn) {
            return (
                <>
                    <h2>Welcome to Workout Journal</h2>
                </>
            )
        } else {
            return (
                <div className="login-container">
                    <Login/>
                    <br/>
                    <button className="signup-btn"><NavLink to="/register"><div className="signup">Sign-Up</div></NavLink></button>
                </div>
            )
        }
    }

    return (
        <>
            <NavBar />
            {homeContent()}
        </>
    )
}

export default HomePage;