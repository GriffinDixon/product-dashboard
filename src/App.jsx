import { useState } from 'react';
import './App.css'; // Keep the styling import if you're using it

// Add imports for your components
import ProductList from './ProductList'; // Assuming ProductList component
import AddProductForm from './AddProductForm'; // Assuming AddProductForm component

function App() {
  // Default list of products
  const products = [
    { id: 1, name: 'Laptop', price: 1200, description: 'A high-performance laptop.' },
    { id: 2, name: 'Smartphone', price: 800, description: 'A smartphone with a decent camera.' },
    { id: 3, name: 'Tablet', price: 400, description: 'A portable tablet for work and fun.' },
    { id: 4, name: 'Headphones', price: 100, description: 'Noise-canceling headphones.' },
    { id: 5, name: 'Smartwatch', price: 250, description: 'A smartwatch with health tracking.' },
  ];

  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* Render ProductList and pass products as props */}
      <ProductList products={products} />
      <AddProductForm />
    </div>
  );
}

export default App;
