// src/App.js
import React, { useState } from 'react';
import LoginPage from './component/LoginPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <div className="app">
      <h1>Task Management App</h1>
      {user ? (
        <div>
          <h2>Welcome, {user}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
