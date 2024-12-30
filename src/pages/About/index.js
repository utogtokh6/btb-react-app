//

import React from 'react';
import css from './style.module.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={css.About}>
      {/* Hero Section */}
      <section className={css.Hero}>
        <div className={css.HeroContent}>
          <h1>About Us</h1>
          <p>We are a passionate team dedicated to providing the best [service/product] to our customers.</p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className={css.Mission}>
        <h2>Our Mission</h2>
        <p>
          At [Your Company], our mission is to [state your mission]. We believe in [core values] and work hard every day
          to ensure that our clients get the best possible service.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Want to Work with Us?</h2>
        <p>Contact us today to learn more about how we can help you achieve your goals.</p>
        <Link to="/contact" className={css.CTAButton}>Get in Touch</Link>
      </section>
    </div>
  );
};

export default About;
