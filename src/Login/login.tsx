// Login.tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import logo from '../oct.png'
// import SendIcon from '@mui/icons-material/Send';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('don');
    const [password, setPassword] = useState('123');

    const handleLogin = () => {
        // Basic validation for the sake of example
        if (username && password) {
            // Simulate successful login by calling the onLogin callback
            onLogin(username, password);
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <h1> 🔐</h1>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button variant="contained" onClick={handleLogin}> → </Button>

        </div>
    );
};

export default Login;
