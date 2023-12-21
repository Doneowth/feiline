import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login/login';
import Home from './Home/home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Article from "./Article/Article";

const markdownFilePath = `${process.env.PUBLIC_URL}/test.md`;


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username: string, password: string) => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', JSON.stringify(true));
        setUsername(username);
        // Navigate to home page and update the URL
        // navigate('/', { replace: true });
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.setItem('loggedIn', JSON.stringify(false));
        setUsername('');
        // return <Navigate to="/login" replace />
        // navigate('/login', { replace: true });
    };

    // Check local storage on component mount
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('loggedIn');
        if (storedLoginStatus) {
            setLoggedIn(JSON.parse(storedLoginStatus));
        }
    }, []);

    return (
        <div className="App">
           <header className="App-header">
                <Router>
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                username && loggedIn ? (
                                    <Navigate to="/" replace />
                                ) : (
                                    <Login onLogin={handleLogin} />
                                )
                            }
                        />
                        <Route
                            path="/"
                            element={
                                username && loggedIn ? (
                                    <Home username={username} onLogout={handleLogout} />
                                ) : (
                                    // Redirect to the login page if not logged in
                                    // <Login onLogin={handleLogin} />
                                    <Navigate to="/login" replace />
                                )
                            }
                        />
                        <Route path="/article/1" element={<Article markdownFile={markdownFilePath} username={username} onLogout={handleLogout} />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
