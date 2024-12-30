// import React from 'react';
import css from './style.module.css';
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className={css.JoinUs}>
      {/* Hero Section */}
      <section className={css.Hero}>

      </section>

      {/* Why Join Us Section */}
      <section className={css.WhyJoin}>
        <h2>Why Join Us?</h2>
        <p>
          At [Your Company], we believe in [core values]. Our team members enjoy [benefits, work culture, opportunities],
          and we’re always on the lookout for driven individuals who can help us grow and innovate.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Do you want join us?</h2>
        <Link to="/contact" className={css.CTAButton}>Contact Us Today</Link>
      </section>
    </div>
  );
};

export default JoinUs;
