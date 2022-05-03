import { Link, Routes, Route, useNavigate } from "react-router-dom";
import SearchBar from "../searchbar";
import { useEffect } from "react";
import * as authService from "../../api/auth.service"


const NavBar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await authService.logout().then(() => {
            navigate("/");
        });
    };

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
                <Link to="/" onClick={logout}>Logout</Link>
            </nav>

        </>
    );
};

export default NavBar;