import React from 'react';
import ProjectSlide from '../ProjectSlide';
import ProjectsData from '../../assets/data/projectsData';  // Slide өгөгдлийг импортлох


const ProjectSlides = () => {
  return (
    <div>
      {ProjectsData.map((slide) => (
        <ProjectSlide
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

export default ProjectSlides;
