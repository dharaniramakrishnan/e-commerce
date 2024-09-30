import React, { useState } from 'react';
import './List.css';
import note from './note.jpeg'; // Ensure these images exist in your project
import images from './images.jpeg';
import bag from './bag.jpeg';
import pen from './pen.jpeg';
import uni from './uni.jpeg';
import sc from './sc.jpeg';

function List({ handleAddToCart }) {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: '$19.99', image: bag },
    { id: 2, name: 'Product 2', price: '$24.99', image: note },
    { id: 3, name: 'Product 3', price: '$14.99', image: images },
    { id: 4, name: 'Product 4', price: '$14.99', image: pen },
    { id: 5, name: 'Product 5', price: '$14.99', image: uni},
    { id: 6, name: 'Product 6', price: '$14.99', image: sc },
    { id: 7, name: 'Product 7', price: '$14.99', image: images }, // Fixed missing quote
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="product-list">
      <h3>Product List</h3>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Price: {product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </section>
  );
}

export default List;
