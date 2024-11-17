import React from 'react';

function ProductItem({ name, price, description }) {
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Price: </strong>${price}</p>
    </div>
  );
}

export default ProductItem;
