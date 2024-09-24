import React from 'react';
import css from './style.module.css';
import ProductsComp from '../../components/ProductsComp';

// const products = [
//   {
//     id: 1,
//     name: "Product One",
//     description: "This is an amazing product that helps you solve [problem].",
//     price: "$49.99",
//     image: "/path-to-product1-image.jpg"
//   },
//   {
//     id: 2,
//     name: "Product Two",
//     description: "This product is designed to provide [feature] and improve your [aspect].",
//     price: "$79.99",
//     image: "/path-to-product2-image.jpg"
//   },
//   {
//     id: 3,
//     name: "Product Three",
//     description: "Experience the best of [feature] with this premium product.",
//     price: "$99.99",
//     image: "/path-to-product3-image.jpg"
//   },
//   // Add more products as needed
// ];

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
