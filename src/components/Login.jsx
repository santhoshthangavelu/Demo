import React, { useState } from 'react';
import { USERS } from '../data/products';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setError('Epic sadface: Username is required');
      return;
    }

    if (!password.trim()) {
      setError('Epic sadface: Password is required');
      return;
    }

    if (username === 'locked_out_user') {
      setError('Epic sadface: Sorry, this user has been locked out.');
      return;
    }

    if (USERS[username] !== password) {
      setError('Epic sadface: Username and password do not match any user in this service');
      return;
    }

    window.location.href = '/inventory.html';
  };

  return (
    <main className="login-page">
      <section className="login-container">
        <div className="login-brand">Swag Labs</div>
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="user-name">Username</label>
            <input
              id="user-name"
              name="user-name"
              autoComplete="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
            />

            {error ? <div className="error-message" role="alert">{error}</div> : null}
            <button type="submit" className="primary-button">Login</button>
          </form>

          <aside className="credentials-panel" aria-label="Login credentials">
            <p className="panel-title">Accepted usernames are:</p>
            <ul>
              {Object.keys(USERS).map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
            <p className="panel-title">Password for all users:</p>
            <p>secret_sauce</p>
          </aside>
        </div>
      </section>
    </main>
  );
}