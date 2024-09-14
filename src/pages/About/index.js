import React from 'react'
import css from './style.module.css';

 const About = () => {
  return (
    <div className={css.About}>
<div className="container aos-init aos-animate" data-aos="fade-up">
  <div className="section-title">
    <h2>Our Mission</h2>
  </div>
  <div className="row content">
    <div className="col-lg-6 m-auto">
      <img src="assets/images/im13.jpg" width="100%" />
    </div>
    <div className="col-lg-6 pt-4 pt-lg-0 m-auto">
      <p>
        At BTB Steel Works, our mission is to deliver exceptional construction
        services with a commitment to efficiency, purpose, and unwavering
        dedication to safety. We endeavor to provide superior site management
        services in <strong>Perth and Western Australia</strong>, ensuring the
        well-being of our workers and clients throughout every stage of the
        process. From initial conception to final completion, we are driven by a
        relentless pursuit of excellence.
      </p>
      <h3>Why Choose BTB Steel Works:</h3>
      <ul data-aos="zoom-in" className="aos-init aos-animate">
        <li>
          <i className="bi bi-check-circle-fill" style={{ color: "#37517e" }} />{" "}
          Expert Steel Fixers: Our team of experienced steel fixers brings years
          of expertise to every project, ensuring precision, quality, and
          durability in all our work.
        </li>
        <li>
          <i className="bi bi-check-circle-fill" style={{ color: "#37517e" }} />{" "}
          Diligent Work Ethic: We approach each task with an industrious spirit,
          going above and beyond to meet deadlines, exceed expectations, and
          deliver results that stand the test of time.
        </li>
        <li>
          <i className="bi bi-check-circle-fill" style={{ color: "#37517e" }} />{" "}
          Competitive Pricing Models: We offer competitive pricing models that
          provide value for your investment without compromising on the quality
          of materials or workmanship.
        </li>
        <li>
          <i className="bi bi-check-circle-fill" style={{ color: "#37517e" }} />{" "}
          Uncompromising Standards: At BTB Steel Works, we hold ourselves to the
          highest standards of craftsmanship and professionalism, guaranteeing
          meticulous attention to detail and unparalleled customer satisfaction.
        </li>
      </ul>
      <p>
        When it comes to steel fixing services, trust BTB Steel Works to provide
        stress-free solutions that transform your vision into reality.
        Experience the difference of working with a construction company that
        prioritizes excellence, safety, and client satisfaction. Choose BTB
        Steel Works for your next project.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default About;
