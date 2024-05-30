// src/services/api.js

const API_BASE_URL = 'http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  const response = await fetch(`${API_BASE_URL}/companies/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice }
  });
  const data=await response.json();
  return data;
};