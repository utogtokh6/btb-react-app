import React from 'react';
import css from './style.module.css';
import ProductsComp from '../../components/ProductsComp';

const Products = () => {
  return (
    <div className={css.Products}>
      <h1>Our Products</h1>
      <div >
        <ProductsComp />
      </div>
    </div>
  );
};

export default Products;
