// import React from 'react';
import css from './style.module.css';
import { Link } from "react-router-dom";

// const jobPositions = [
//   {
//     id: 1,
//     title: "Software Engineer",
//     description: "We are looking for a skilled software engineer with experience in [technologies] to join our team. You’ll be responsible for [responsibilities].",
//     location: "Remote",
//     applyLink: "/apply/software-engineer"
//   },
//   {
//     id: 2,
//     title: "Marketing Manager",
//     description: "Join our marketing team to help develop and execute strategies to expand our reach and engagement. Experience with [tools] is preferred.",
//     location: "New York, NY",
//     applyLink: "/apply/marketing-manager"
//   },
//   // Add more positions as needed
// ];

const JoinUs = () => {
  return (
    <div className={css.JoinUs}>
      {/* Hero Section */}
      <section className={css.Hero}>
        <div className={css.HeroContent}>
          <h1>Join Our Team</h1>
          <p>We're looking for passionate individuals to help us grow and achieve our goals. Come join us!</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className={css.WhyJoin}>
        <h2>Why Join Us?</h2>
        <p>
          At [Your Company], we believe in [core values]. Our team members enjoy [benefits, work culture, opportunities],
          and we’re always on the lookout for driven individuals who can help us grow and innovate.
        </p>
      </section>

      {/* Open Positions Section */}
      {/* <section className={css.Positions}>
        <h2>Open Positions</h2>
        <div className={css.PositionsGrid}>
          {jobPositions.map((position) => (
            <div key={position.id} className={css.PositionCard}>
              <h3>{position.title}</h3>
              <p>{position.description}</p>
              <p><strong>Location:</strong> {position.location}</p>
              <a href={position.applyLink} className={css.ApplyButton}>Apply Now</a>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Do you want join us?</h2>
        <Link to="/contact" className={css.CTAButton}>Contact Us Today</Link>
      </section>
    </div>
  );
};

export default JoinUs;
