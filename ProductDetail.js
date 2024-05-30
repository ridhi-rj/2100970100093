// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`} className="img-fluid" alt={product.productName} />
        </div>
        <div className="col-md-6">
          <h2>{product.productName}</h2>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
