// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="hero-section">
        <h1>😊😎</h1>
        <h2>Welcome to Saii World!</h2>
        <p>Your one-stop shop for everything you need. Explore our amazing products!</p>
        <a href="/list" className="explore-button">Explore Products</a>
      </div>
      <div className="features">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ Wide Range of Products</li>
          <li>✅ Affordable Prices</li>
          <li>✅ Excellent Customer Service</li>
          <li>✅ Easy Returns</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
