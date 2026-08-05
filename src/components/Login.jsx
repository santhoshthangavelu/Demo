import React, { useState } from 'react';

const VALID_USERS = {
  standard_user: 'secret_sauce',
  locked_out_user: 'secret_sauce',
  problem_user: 'secret_sauce',
  performance_glitch_user: 'secret_sauce',
  error_user: 'secret_sauce',
  visual_user: 'secret_sauce'
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Epic sadface: Username is required');
      return;
    }
    if (username === 'locked_out_user') {
      setError('Epic sadface: Sorry, this user has been locked out.');
      return;
    }
    if (VALID_USERS[username] !== password) {
      setError('Epic sadface: Username and password do not match any user in this service');
      return;
    }
    window.location.href = '/inventory.html';
  };

  return (
    <main className="login-page">
      <section className="login-box">
        <h1>Swag Labs</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user-name">Username</label>
          <input id="user-name" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error ? <div className="error-message">{error}</div> : null}
          <button type="submit">Login</button>
        </form>
        <div className="credentials">
          <p>Accepted usernames are:</p>
          <p>{Object.keys(VALID_USERS).join(', ')}</p>
          <p>Password for all users: secret_sauce</p>
        </div>
      </section>
    </main>
  );
}