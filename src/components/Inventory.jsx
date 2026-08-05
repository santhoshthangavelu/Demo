import React, { useMemo, useState } from 'react';

const PRODUCTS = [
  { id: 'sauce-labs-backpack', name: 'Sauce Labs Backpack', price: 29.99, description: 'Carry all the things with the streamlined, easy-to-use backpack.' },
  { id: 'sauce-labs-bike-light', name: 'Sauce Labs Bike Light', price: 9.99, description: 'A red light to keep you safe on the road.' },
  { id: 'sauce-labs-bolt-t-shirt', name: 'Sauce Labs Bolt T-Shirt', price: 15.99, description: 'Get to work with a comfy shirt featuring the Sauce Labs bolt.' },
  { id: 'sauce-labs-fleece-jacket', name: 'Sauce Labs Fleece Jacket', price: 49.99, description: 'Truly the most comfortable jacket you will ever wear.' }
];

export default function Inventory() {
  const [sort, setSort] = useState('az');
  const [cart, setCart] = useState([]);

  const sortedProducts = useMemo(() => {
    const items = [...PRODUCTS];
    switch (sort) {
      case 'za':
        return items.sort((a, b) => b.name.localeCompare(a.name));
      case 'low-high':
        return items.sort((a, b) => a.price - b.price);
      case 'high-low':
        return items.sort((a, b) => b.price - a.price);
      default:
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [sort]);

  const toggleCart = (id) => {
    setCart((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <main className="inventory-page">
      <header className="inventory-header">
        <h1>Swag Labs</h1>
        <div className="cart-badge">{cart.length}</div>
      </header>
      <label htmlFor="sort">Sort</label>
      <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="az">Name (A to Z)</option>
        <option value="za">Name (Z to A)</option>
        <option value="low-high">Price (low to high)</option>
        <option value="high-low">Price (high to low)</option>
      </select>
      <section className="product-grid">
        {sortedProducts.map((product) => (
          <article key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>${product.price.toFixed(2)}</strong>
            <button onClick={() => toggleCart(product.id)}>
              {cart.includes(product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}