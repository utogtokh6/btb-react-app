import React from 'react';
import HomeSlide from '../../components/HomeSlide/';
import slidesData from '../../assets/data/slidesData';  // Slide өгөгдлийг импортлох

const HomeSlides = () => {
  return (
    <div>
      {slidesData.map((slide) => (
        <HomeSlide
          key={slide.id}  // ID-г key-д ашиглана
          title={slide.title}
          subtitle={slide.subtitle}
          description={slide.description}
          imageUrl={slide.imageUrl}
          imagePosition={slide.imagePosition}
        />
      ))}
    </div>
  );
};

export default HomeSlides;
