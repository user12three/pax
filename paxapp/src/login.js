import React from 'react';
import LoginForm from './loginform';

const Login = ({ onLogin }) => {
  const handleLogin = async (username, password) => {
    try {
      // Simulate sending user data to the backend (json-server)
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Here, you would typically handle the response from the server
      // For simplicity, we won't handle the response in this example

      onLogin(username); // Pass the username to indicate successful login
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <LoginForm handleLogin={handleLogin} />;
};

export default Login;
