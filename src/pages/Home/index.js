//
import React from 'react';
import css from './style.module.css';
import Services from '../../components/Services';
import Clients from '../../components/Clients';
import HomeSlides from '../../components/HomeSlides';

const Home = () => {
  return (
    <div className={css.Home}>
      <section className = {css.HomeSlides}>
        <HomeSlides/>
      </section>
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
