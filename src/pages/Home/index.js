//
import React from 'react';
import css from './style.module.css';
import Services from '../../components/Services';
import Clients from '../../components/Clients';

const Home = () => {
  return (
    <div className={css.Home}>
      {/* Hero Section */}
      <section className={css.Hero}>
        <div className={css.HeroContent}>
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop solution for [Your Service/Business].</p>
          <a href="/contact" className={css.CTAButton}>Get in Touch</a>
        </div>
      </section>
      {/* Features Section */}
      <section className={css.Serives}>
          <Services />
      </section>
      <section className={css.Clients}>
          <Clients/>
      </section>
      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Ready to Get Started?</h2>
        <a href="/contact" className={css.CTAButton}>Contact Us Today</a>
      </section>
    </div>
  );
};

export default Home;
