import React from 'react';
import css from './style.module.css';
import { iconMap } from '../../assets/data/iconMap';
const ServiceCard = ({ image, title, description, icon }) => {
    const IconComponent = iconMap[icon];
  return (
    <div className={css.ServiceCard}>
      <div className={css.ImageContainer}>
        <img src={image} alt={title} className={css.ServiceImage} />
      </div>
      <div className={css.ServiceContent}>
        <div className={css.IconOverlay}>
        {IconComponent && <IconComponent />}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
