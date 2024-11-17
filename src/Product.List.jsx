// src/ProductList.jsx
import ProductItem from './ProductItem'; // Import the ProductItem component

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
