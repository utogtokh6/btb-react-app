//

import React from 'react';
import css from './style.module.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={css.About}>
      {/* Hero Section */}
      <section className={css.Hero}>
        {/* <div className={css.HeroContent}> */}
          {/* <h1>About Us</h1> */}
          {/* <p>At BTB Steel Works, our mission is to deliver exceptional construction services with a commitment to efficiency, purpose, and unwavering dedication to safety. We endeavor to provide superior site management services in Perth and Western Australia, ensuring the well-being of our workers and clients throughout every stage of the process. From initial conception to final completion, we are driven by a relentless pursuit of excellence.</p> */}
        {/* </div> */}
      </section>

      {/* Mission Statement Section */}
      <section className={css.Mission}>
        <h2>About BTB Steel Works</h2>
        <p>
        At BTB Steel Works, our mission is to deliver exceptional construction services with a steadfast commitment to efficiency, purpose, and unwavering dedication to safety. We pride ourselves on providing top-tier site management services across Perth and Western Australia, prioritizing the well-being of our workers and clients at every stage of the process. From concept to completion, we are driven by an uncompromising pursuit of excellence.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Why Choose BTB Steel Works?</h2>
        <div>
        <h3>Expert Steel Fixers</h3>
        <p>Our skilled team of steel fixers brings years of expertise to every project, ensuring precision, durability, and top-quality workmanship.</p>
        <h3>Diligent Work Ethic</h3>
        <p>We approach every task with determination and care, consistently meeting deadlines, exceeding expectations, and delivering results built to last.</p>
        <h3>Competitive Pricing Models</h3>
        <p>We offer cost-effective solutions without sacrificing the quality of materials or craftsmanship, ensuring maximum value for your investment.</p>
        <h3>Uncompromising Standards</h3>
        <p>At BTB Steel Works, we hold ourselves to the highest standards of professionalism, guaranteeing meticulous attention to detail and unparalleled customer satisfaction.</p>
        </div>
        <Link to="/contact" className={css.CTAButton}>Get in Touch</Link>
      </section>
    </div>
  );
};

export default About;
