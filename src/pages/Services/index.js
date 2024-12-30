import React from 'react';
import css from './style.module.css';
import Services from "../../components/Services";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className={css.Services}>
      {/* Intro Section */}
      <h1>Our Sevices</h1>
      {/* Service Cards Section */}
      <section className={css.ServiceCards}>
        <Services />
      </section>

      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Want to Learn More?</h2>
        <p>
          Contact us today to find out how our services can help you achieve your goals.
        </p>
        <Link to="/contact" className={css.CTAButton}>Contact Us Today</Link>
      </section>
    </div>
  );
};

export default ServicesPage;
