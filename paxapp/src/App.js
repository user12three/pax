import React, { useState } from 'react';
import Login from './login';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = (username) => {
    setLoggedInUser(username);
    // Perform actions upon successful login (e.g., redirect)
    console.log('Logged in:', username);
  };

  return (
    <div className="App">
      {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome, {loggedInUser}!</h1>
          {/* Display other content for logged-in users */}
        </div>
      )}
    </div>
  );
};

export default App;
