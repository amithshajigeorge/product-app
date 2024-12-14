import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid black',
              borderRadius: '10px',
              padding: '10px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(8, 8, 8, 0.1)',
            }}
          >
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;