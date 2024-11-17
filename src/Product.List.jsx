import React from 'react';
import ProductItem from './ProductItem'; // Make sure the path is correct

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
