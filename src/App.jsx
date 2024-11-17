// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.99, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 25.50, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 14.75, description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', price: 30.00, description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', price: 22.99, description: 'Description of Product 5' }
  ]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;

