import React from 'react';
import css from './style.module.css';

const ProductCard = ({ name, description, price, size, imageUrl }) => {
  return (
    <div className={css.ProductCard}>
      <img src={imageUrl} alt={name} className={css.ProductImage} />
      <div className={css.ProductContent}>
        <h3 className={css.ProductName}>{name}</h3>
        <p className={css.ProductDescription}>{description}</p>
        <p className={css.ProductSize}><strong>Size:</strong> {size}</p>
        <div className={css.ProductFooter}>
          <span className={css.ProductPrice}>{price}</span>
          <button className={css.ViewButton}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
