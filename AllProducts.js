// src/pages/AllProducts.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

const AllProducts = () => {
  const [filters, setFilters] = useState({
    company: 'MZ',
    category: 'Laptop',
    top: 10,
    minPrice: 1,
    maxPrice: 10000
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Company</label>
            <select name="company" className="form-control" onChange={handleInputChange}>
              <option value="MZ">MZ</option>
              <option value="FLP">FLP</option>
              <option value="SNP">SNP</option>
              <option value="PWN">PWN</option>
              <option value="AZO">AZO</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label>Category</label>
            <select name="category" className="form-control" onChange={handleInputChange}>
              <option value="Phone">Phone</option>
              <option value="Computer">Computer</option>
              <option value="TV">TV</option>
              <option value="Earphone">Earphone</option>
              <option value="Tablet">Tablet</option>
              <option value="Charger">Charger</option>
              <option value="Mouse">Mouse</option>
              <option value="Keypad">Keypad</option>
              <option value="Bluetooth">Bluetooth</option>
              <option value="Pendrive">Pendrive</option>
              <option value="Remote">Remote</option>
              <option value="Speaker">Speaker</option>
              <option value="Headset">Headset</option>
              <option value="Laptop">Laptop</option>
              <option value="PC">PC</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label>Top N</label>
            <input type="number" name="top" className="form-control" value={filters.top} onChange={handleInputChange} />
          </div>
          <div className="form-group col-md-2">
            <label>Min Price</label>
            <input type="number" name="minPrice" className="form-control" value={filters.minPrice} onChange={handleInputChange} />
          </div>
          <div className="form-group col-md-2">
            <label>Max Price</label>
            <input type="number" name="maxPrice" className="form-control" value={filters.maxPrice} onChange={handleInputChange} />
          </div>
        </div>
        <ProductList {...filters} />
      </div>
    </div>
  );
};

export default AllProducts;
