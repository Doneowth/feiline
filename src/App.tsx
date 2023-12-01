import React, {useState} from 'react';
import logo3 from './oct.png';
import './App.css';
import Login from './Login/login';
import Home from './Home/home';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user: string) => {
        setLoggedIn(true);
        setUsername(user);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
    };
  return (
    <div className="App">
      <header className="App-header">
          <div>
              {loggedIn ? (
                  <Home username={username} onLogout={handleLogout} />
              ) : (
                  <>
                      <img src={logo3} className="App-logo" alt="logo" />
                      <Login onLogin={handleLogin} />
                  </>
              )}
          </div>
      </header>
    </div>
  );
}

export default App;
