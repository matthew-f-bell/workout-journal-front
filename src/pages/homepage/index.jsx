import NavBar from "../../components/navbar";
import Profile from "../../components/profile";
import Login from "../../components/login";
import SignUp from "../../components/signup";
import { NavLink } from "react-router-dom";

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
                <>
                    <Login/>
                    <NavLink to="/register">Sign-Up</NavLink>
                </>
            )
        }
    }

    return (
        <>
            <NavBar />
            <h1>Home Page</h1>
            {homeContent()}
        </>
    )
}

export default HomePage;