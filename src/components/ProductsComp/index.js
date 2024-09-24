import React from 'react';
import ProductCard from '../ProductCard/';
import productsData from '../../assets/data/productsData';
import css from './style.module.css';

const ProductsComp = () => {
  return (
    <section className={css.ProductPage}>
    <h1 className={css.PageTitle}>Our Products</h1>
    <div className={css.ProductGrid}>
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          size={product.size}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  </section>
  );
};

export default ProductsComp;
