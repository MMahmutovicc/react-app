import React, { useState } from "react";
import { loginUser } from "../api";
import '../styles/Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const data = await loginUser(username, password);
            alert("Login successful: " + JSON.stringify(data));
        } catch (error) {
            setErrorMessage("Invalid login credentials");
        }
    };

    return (
        <div id="formaDugme">
            <h2>Login</h2>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button id="dugme" aria-label="login" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
