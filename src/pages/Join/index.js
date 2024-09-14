import React, { useState } from 'react'
import css from './style.module.css';

 const Join = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Normally, you would send the form data to a server here
        alert(`Thank you ${formData.name} for your interest!`);
        // Clear the form after submission
        setFormData({ name: "", email: "", message: "" });
      };
  return (
    <div className={css.Join}>
         <h1>Join Us</h1>
      <p>
        We are excited to invite you to be a part of our community! By joining
        us, you'll get access to exclusive content, updates, and more. We
        welcome you to grow with us and be part of something amazing.
      </p>
      <p>
        Fill out the form below to express your interest, and we'll get in touch
        with you soon.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div >
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required

            />
          </label>
        </div>

        <div >
          <label>
            Why are you interested in joining? (Optional):
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}

            />
          </label>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Join;
