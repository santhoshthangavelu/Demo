import React from 'react';
import { useHistory } from 'react-router-dom';

const CART_ITEMS = [
  {
    id: 'sauce-labs-backpack',
    name: 'Sauce Labs Backpack',
    price: 29.99,
    quantity: 1,
  },
  {
    id: 'sauce-labs-bike-light',
    name: 'Sauce Labs Bike Light',
    price: 9.99,
    quantity: 1,
  },
];

export default function Cart() {
  const history = useHistory();
  const itemCount = CART_ITEMS.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page-shell cart-page">
      <header className="shell-header">
        <div className="brand-mark">Swag Labs</div>
        <button className="back-link" onClick={() => history.push('/inventory.html')}>
          Continue Shopping
        </button>
      </header>

      <section className="content-panel">
        <h1>Your Cart</h1>
        <div className="cart-summary">{itemCount} Items</div>
        <div className="cart-list">
          {CART_ITEMS.map((item) => (
            <article key={item.id} className="cart-item">
              <div>
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="cart-item-right">
                <strong>${item.price.toFixed(2)}</strong>
                <button className="secondary-button">Remove</button>
              </div>
            </article>
          ))}
        </div>
        <footer className="cart-footer">
          <div>Subtotal: ${subtotal.toFixed(2)}</div>
          <button className="primary-button" onClick={() => history.push('/checkout-step-one.html')}>
            Checkout
          </button>
        </footer>
      </section>
    </main>
  );
}
