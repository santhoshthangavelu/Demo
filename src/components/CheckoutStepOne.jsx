import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CheckoutStepOne() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !zip.trim()) {
      setError('Error: First Name, Last Name, and Zip/Postal Code are required');
      return;
    }
    history.push('/checkout-step-two.html');
  };

  return (
    <main className="page-shell checkout-page">
      <header className="shell-header">
        <div className="brand-mark">Swag Labs</div>
        <div className="shell-title">Checkout: Your Information</div>
      </header>

      <section className="content-panel form-panel">
        <form onSubmit={submit} className="checkout-form">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="postal-code">Zip/Postal Code</label>
          <input id="postal-code" value={zip} onChange={(e) => setZip(e.target.value)} />
          {error ? <div className="error-message" role="alert">{error}</div> : null}
          <div className="button-row">
            <button type="button" className="secondary-button" onClick={() => history.push('/cart.html')}>
              Cancel
            </button>
            <button type="submit" className="primary-button">
              Continue
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
