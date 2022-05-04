import React, { useState } from 'react';
import * as AuthService from "../../api/auth.service"

import "../../stylesheets/login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AuthService.login(email, password).then(() => {
            setEmail("");
            setPassword("");
            window.location.reload(false);
        })
        .catch(() => {
            alert("Username or Password Incorrect");
        });
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <form action="post">
                <label htmlFor="email">E-mail:</label>
                <br/>
                <br/>
                <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="email"
                />
                <br/>
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <br/>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="password"
                />
                <br/>
                <br/>
                <input className='login-btn' type="submit" value="Login" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default Login;