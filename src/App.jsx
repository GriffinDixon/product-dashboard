import React from 'react';
import ProductList from './components/ProductList'; // Ensure the path is correct based on your folder structure

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 1200, description: 'High performance laptop' },
    { id: 2, name: 'Smartphone', price: 800, description: 'Latest model smartphone' },
    { id: 3, name: 'Tablet', price: 400, description: 'Portable tablet with good display' },
    { id: 4, name: 'Headphones', price: 100, description: 'Noise-cancelling headphones' },
    { id: 5, name: 'Smartwatch', price: 250, description: 'Smartwatch with fitness tracking' },
  ];

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
