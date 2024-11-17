// src/components/ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem 
          key={product.id} // Use unique id as key
          product={product} 
        />
      ))}
    </div>
  );
}

export default ProductList;
