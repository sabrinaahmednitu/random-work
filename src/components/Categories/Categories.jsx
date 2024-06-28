import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div>
      <h1>Top Rated Products</h1>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.details}</p>
            <img src={`https://6valley.6amtech.com/storage/app/public/product/${product.thumbnail}`} alt={product.name} />
            <p>Price: ${product.unit_price}</p>
            <p>Stock: {product.current_stock}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Categories;