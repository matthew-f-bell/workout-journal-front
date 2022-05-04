import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchbar";
import { useState, useEffect } from "react";
import * as authService from "../../api/auth.service";
import "./index.css"


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    const navigate = useNavigate();

    const logout = async () => {
        authService.logout()
        window.location.reload(false);
        
    };

    const userActive = async () => {
        if(authService.currentUser()) {
        setIsLoggedIn(true)
        } else {
        setIsLoggedIn(false)
        }
    }

    useEffect(() => {
        userActive();
    }, [])

    const logoutLink = () => {
        if(isLoggedIn) { return (<Link to="/" onClick={logout} className="nav-link">Logout</Link>) }
    }

    return (
            <nav className="nav-container">
                {/* Logo for home page? */}
                <a href="/" className="nav-link">Home</a>
                <SearchBar/>
                <a href="/profile" className="nav-link">Profile</a>
                <Link to="/workouts" className="nav-link">
                    Workouts
                </Link>
                {logoutLink()}
            </nav>
    );
};

export default NavBar;