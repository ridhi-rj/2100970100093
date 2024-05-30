// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import Navbar from '../components/Navbar';
import { fetchProducts } from '../services/api';

const ProductPage = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProducts('MZ', 'Laptop', 10, 1, 10000); // Fetch from any category or company as per your logic
      const foundProduct = data.find(p => p.productName === productName);
      setProduct(foundProduct);
    };
    getProduct();
  }, [productName]);

  return (
    <div>
      <Navbar />
      {product ? <ProductDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductPage;
