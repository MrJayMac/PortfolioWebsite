import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if the passwords match for registration
    if (!isLogin && password !== confirmPassword) {
      setError('Make sure passwords match!');
      return;
    }
    
    // Set the endpoint based on login or signup state
    const endpoint = isLogin ? 'login' : 'signup';

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Success!");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <button onClick={() => viewLogin(false)}>Sign Up</button>
      <button onClick={() => viewLogin(true)}>Login</button>
    </div>
  );
};

export default Login;
