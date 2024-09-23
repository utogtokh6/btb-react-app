//

import React from 'react';
import css from './style.module.css';

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO & Founder",
    image: "/path-to-john-image.jpg",
    description: "John has over 20 years of experience in [industry]. He founded the company to provide [mission or vision]."
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Chief Technology Officer",
    image: "/path-to-jane-image.jpg",
    description: "Jane is an expert in [field] and has been with the company for 10 years. She leads the team with innovation."
  },
  // Add more team members as needed
];

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

      {/* Team Section */}
      <section className={css.Team}>
        <h2>Meet Our Team</h2>
        <div className={css.TeamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={css.TeamCard}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className={css.Position}>{member.position}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={css.CTASection}>
        <h2>Want to Work with Us?</h2>
        <p>Contact us today to learn more about how we can help you achieve your goals.</p>
        <a href="/contact" className={css.CTAButton}>Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
