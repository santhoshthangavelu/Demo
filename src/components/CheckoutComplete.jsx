import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CheckoutComplete() {
  const history = useHistory();

  return (
    <main className="page-shell checkout-complete-page">
      <header className="shell-header">
        <div className="brand-mark">Swag Labs</div>
        <div className="shell-title">Checkout Complete</div>
      </header>

      <section className="content-panel complete-panel">
        <div className="pony-express" aria-hidden="true">🐎</div>
        <h1>Thank you for your order!</h1>
        <p>Your order has been dispatched and will arrive soon.</p>
        <button className="primary-button" onClick={() => history.push('/inventory.html')}>
          Back Home
        </button>
      </section>
    </main>
  );
}
