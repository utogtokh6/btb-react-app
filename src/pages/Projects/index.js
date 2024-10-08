import React from 'react';
import css from './style.module.css';
import HomeSlides from "../../components/HomeSlides";

const ProjectsPage = () => {
  return (
    <div className={css.Services}>
      {/* Intro Section */}
      <section className={css.Intro}>
        <h1>Our Projects</h1>
        <p>
          We offer a wide range of high-quality services to meet your needs.
          Whether you’re looking for [specific service] or [another service], we’ve got you covered.
        </p>
      </section>

      {/* Service Cards Section */}
      <section className = {css.HomeSlides}>
        <HomeSlides/>
      </section>

      {/* Call to Action Section */}

    </div>
  );
};

export default ProjectsPage;
