import React from 'react';
import css from './style.module.css';
import ProjectSlides from '../../components/ProjectSlides';

const ProjectsPage = () => {
  return (
    <div className={css.Services}>
      <h1>Our Services</h1>
      {/* Intro Section */}
      <section className={css.Intro}>
        {/* <h1>Our Projects</h1> */}
        {/* <p>
          We offer a wide range of high-quality services to meet your needs.
          Whether you’re looking for [specific service] or [another service], we’ve got you covered.
        </p> */}
      </section>

      {/* Service Cards Section */}
      <section className = {css.HomeSlides}>
        <ProjectSlides/>
      </section>

      {/* Call to Action Section */}

    </div>
  );
};

export default ProjectsPage;
