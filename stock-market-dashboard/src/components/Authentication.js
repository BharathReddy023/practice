import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const Authentication = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (userData) => {
    // Implement registration logic (e.g., API call)
    console.log('Register:', userData);
  };

  const handleLogin = (userData) => {
    // Implement login logic (e.g., API call)
    console.log('Login:', userData);
  };

  return (
    <div>
      <h2>{isRegistered ? 'Login' : 'Register'}</h2>
      {isRegistered ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <RegistrationForm onRegister={handleRegister} />
      )}
      <p onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
      </p>
    </div>
  );
};

export default Authentication;
