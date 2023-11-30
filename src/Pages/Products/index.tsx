import { useEffect } from 'react';

const Products = () => {
  useEffect(() => {
    localStorage.setItem('active', 'Products');
  }, []);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
