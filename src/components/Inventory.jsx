import React, { useMemo, useState } from 'react';
import { PRODUCTS, SORT_OPTIONS, sortProducts } from '../data/products';

export default function Inventory() {
  const [sort, setSort] = useState('az');
  const [cart, setCart] = useState([]);

  const sortedProducts = useMemo(() => sortProducts(PRODUCTS, sort), [sort]);

  const toggleCart = (id) => {
    setCart((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <main className="inventory-page">
      <header className="inventory-header">
        <div>
          <div className="brand-mark">Swag Labs</div>
          <div className="inventory-subtitle">Products</div>
        </div>
        <button className="cart-button" aria-label={`Cart has ${cart.length} items`}>
          Cart <span className="cart-badge">{cart.length}</span>
        </button>
      </header>

      <section className="inventory-toolbar">
        <label htmlFor="sort">Sort Products</label>
        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          {Object.entries(SORT_OPTIONS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </section>

      <section className="product-grid">
        {sortedProducts.map((product) => {
          const inCart = cart.includes(product.id);
          return (
            <article key={product.id} className="product-card">
              <div className="product-image" aria-hidden="true" />
              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="product-footer">
                  <strong>${product.price.toFixed(2)}</strong>
                  <button className={inCart ? 'secondary-button' : 'primary-button'} onClick={() => toggleCart(product.id)}>
                    {inCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}