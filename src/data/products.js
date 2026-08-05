export const USERS = {
  standard_user: 'secret_sauce',
  locked_out_user: 'secret_sauce',
  problem_user: 'secret_sauce',
  performance_glitch_user: 'secret_sauce',
  error_user: 'secret_sauce',
  visual_user: 'secret_sauce',
};

export const PRODUCTS = [
  {
    id: 'sauce-labs-backpack',
    name: 'Sauce Labs Backpack',
    price: 29.99,
    description:
      'Carry all the things with the streamlined, easy-to-use backpack designed for the road, the office, and the weekend.',
  },
  {
    id: 'sauce-labs-bike-light',
    name: 'Sauce Labs Bike Light',
    price: 9.99,
    description:
      'A bright red light to keep you safe on your commute with a quick-release mount and long battery life.',
  },
  {
    id: 'sauce-labs-bolt-t-shirt',
    name: 'Sauce Labs Bolt T-Shirt',
    price: 15.99,
    description:
      'A comfortable cotton t-shirt featuring the legendary Sauce Labs bolt logo in a classic fit.',
  },
  {
    id: 'sauce-labs-fleece-jacket',
    name: 'Sauce Labs Fleece Jacket',
    price: 49.99,
    description:
      'A warm and durable fleece jacket with a clean silhouette, perfect for cooler demo environments.',
  },
  {
    id: 'sauce-labs-onesie',
    name: 'Sauce Labs Onesie',
    price: 7.99,
    description:
      'An easy, lightweight onesie for optimized comfort when you need an all-in-one demo-ready outfit.',
  },
  {
    id: 'test.allthethings()-t-shirt-(red)',
    name: 'Test.allTheThings() T-Shirt (Red)',
    price: 15.99,
    description:
      'A classic red shirt for testers who like fast feedback, readable labels, and memorable swag.',
  },
];

export const SORT_OPTIONS = {
  az: 'Name (A to Z)',
  za: 'Name (Z to A)',
  low-high: 'Price (low to high)',
  high-low: 'Price (high to low)',
};

export function sortProducts(products, sort) {
  const list = [...products];
  switch (sort) {
    case 'za':
      return list.sort((a, b) => b.name.localeCompare(a.name));
    case 'low-high':
      return list.sort((a, b) => a.price - b.price);
    case 'high-low':
      return list.sort((a, b) => b.price - a.price);
    default:
      return list.sort((a, b) => a.name.localeCompare(b.name));
  }
}

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}
