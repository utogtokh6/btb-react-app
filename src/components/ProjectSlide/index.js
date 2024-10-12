import React from 'react';
import css from './style.module.css';

const ProjectSlide = ({ title, subtitle, description, imageUrl, imagePosition = 'right' }) => {
  // Flexbox чиглэл текст болон зургийг аль талд байршуулахыг тодорхойлно
  const isImageRight = imagePosition === 'right';

  return (
    <section className={`${css.ProjectSlide} ${isImageRight ? css.ImageRight : css.ImageLeft}`}>
      <div className={css.TextContainer}>
        <h2>{title}</h2>
        <p className={css.Subtitle}>{subtitle}</p>
        <p className={css.Description}>{description}</p>
      </div>
      <div className={css.ImageContainer}>
        <img src={imageUrl} alt="Slide" className={css.SlideImage} />
      </div>
    </section>
  );
};

export default ProjectSlide;
