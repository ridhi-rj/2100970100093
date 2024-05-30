// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

const ProductList = ({ company, category, top, minPrice, maxPrice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(company, category, top, minPrice, maxPrice);
      setProducts(data);
    };
    getProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={`${product.productName}-${product.price}`}>
            <div className="card mb-4 shadow-sm">
              <img src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`} className="card-img-top" alt={product.productName} />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">Discount: {product.discount}%</p>
                <p className="card-text">Availability: {product.availability}</p>
                <Link to={`/product/${product.productName}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
