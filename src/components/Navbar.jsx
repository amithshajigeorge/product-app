import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
        backgroundColor: 'black',
      }}
    >
      <h1>Product Management</h1>
      <div>
        <Link
          to="/"
          style={{
            margin: '0 15px',
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Home
        </Link>
        <Link
          to="/add-product"
          style={{
            margin: '0 15px',
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;