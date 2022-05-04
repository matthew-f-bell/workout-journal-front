import { NavLink } from "react-router-dom";
import NavBar from "../../components/navbar";
import SignUp from "../../components/signup";

import "../../stylesheets/login.css"

const SignupPage = () => {

    return (
        <div>
            <NavBar />
            <div className="login-container">
            <h1>Sign-Up</h1>
            <SignUp />
            <br/>
            <div className="signup-btn"><NavLink to="/"><div className="signup">Or Login Instead</div></NavLink></div>
            </div>
        </div>
    )
}

export default SignupPage;