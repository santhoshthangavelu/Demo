import React from 'react';
import { useHistory } from 'react-router-dom';

const ITEMS = [
  { name: 'Sauce Labs Backpack', price: 29.99 },
  { name: 'Sauce Labs Bike Light', price: 9.99 },
];

const TAX_RATE = 0.08;

export default function CheckoutStepTwo() {
  const history = useHistory();
  const itemTotal = ITEMS.reduce((sum, item) => sum + item.price, 0);
  const tax = itemTotal * TAX_RATE;
  const total = itemTotal + tax;

  return (
    <main className="page-shell checkout-page">
      <header className="shell-header">
        <div className="brand-mark">Swag Labs</div>
        <div className="shell-title">Checkout: Overview</div>
      </header>

      <section className="content-panel overview-panel">
        <div className="overview-list">
          {ITEMS.map((item) => (
            <div key={item.name} className="overview-row">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="totals-block">
          <div>Item total: ${itemTotal.toFixed(2)}</div>
          <div>Tax: ${tax.toFixed(2)}</div>
          <div className="grand-total">Total: ${total.toFixed(2)}</div>
        </div>
        <div className="button-row">
          <button className="secondary-button" onClick={() => history.push('/checkout-step-one.html')}>
            Cancel
          </button>
          <button className="primary-button" onClick={() => history.push('/checkout-complete.html')}>
            Finish
          </button>
        </div>
      </section>
    </main>
  );
}
