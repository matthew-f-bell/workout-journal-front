import React, { useState } from 'react';
import * as AuthService from "../../api/auth.service";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AuthService.register(email, password).then(() => {
            setEmail = "";
            setPassword = "";
        });
    };


    return (
        <div>
            <div className='login'>
                <h1>Sign-Up Page</h1>
                <form method="post">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <br/>
                    <br/>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="email"
                    />
                    <br/>
                    <br/>
                    <label htmlFor="password1">
                        Password:
                    </label>
                    <br/>
                    <br/>
                    <input
                        type="password"
                        name="password1"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="password"
                    />
                    <br/>
                    <br/>
                    <input className='login-btn' type="submit" value="Sign-Up" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default SignUp;