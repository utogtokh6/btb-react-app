//
import React from 'react';
import css from './style.module.css';
import Services from '../../components/Services';
import Clients from '../../components/Clients';
import HomeSlides from '../../components/HomeSlides';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={css.Home}>

      <section className={css.Hero}>
        <div className={css.HeroContent}>
          <h1>We strive to be the preferred contractor for wind turbine foundation construction, driving success in renewable energy ventures</h1>
       </div>
      </section>

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
        <Link to="/contact" className={css.CTAButton}>Contact Us Today</Link>
      </section>
    </div>
  );
};

export default Home;
