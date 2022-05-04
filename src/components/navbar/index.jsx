import { Link, Routes, Route, useNavigate } from "react-router-dom";
import SearchBar from "../searchbar";
import { useState, useEffect } from "react";
import * as authService from "../../api/auth.service"


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    const navigate = useNavigate();

    const logout = async (e) => {
        await authService.logout().then(() => {
            navigate("/");
        });
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
        if(isLoggedIn) { return (<Link to="/" onClick={logout}>Logout</Link>) }
    }

    return (
        <>
            <nav>
                {/* Logo for home page? */}
                <a href="/">Home</a>
                <SearchBar/>
                <a href="/profile">Profile</a>
                <Link to="/workouts">
                    Workouts
                </Link>
                <a href="">Groups</a>
                {logoutLink()}
            </nav>

        </>
    );
};

export default NavBar;