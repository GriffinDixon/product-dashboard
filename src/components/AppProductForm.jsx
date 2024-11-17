// src/components/AddProductForm.jsx
import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && price && description) {
      addProduct({
        id: Date.now(), // Use timestamp as unique ID
        name,
        price: parseFloat(price), // Convert price to number
        description,
      });

      setName('');
      setPrice('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProductForm;
