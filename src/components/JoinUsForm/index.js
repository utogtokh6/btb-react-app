import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import css from './style.module.css';

const JoinUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'skills':
        setSkills(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const result = await emailjs.sendForm(
          'service_bcn7p6h',
          'template_qeqmnaw',
          e.target,
          '2YBbHIWUzqkiaFAcU'
        );
        console.log('Success:', result.text);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error:', error.text);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!name) errors.name = 'Name is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) errors.email = 'Email is required';
    else if (!emailRegex.test(email)) errors.email = 'Please enter a valid email address';

    const phoneRegex = /^[+]?[0-9]{10,12}$/;
    if (!phone) errors.phone = 'Phone number is required';
    else if (!phoneRegex.test(phone)) errors.phone = 'Please enter a valid phone number';

    if (!skills) errors.skills = 'Skills are required';
    if (!message) errors.message = 'Message is required';

    return errors;
  };

  return (
    <div className={css.JoinUsForm}>
      <h1>Join Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={css.InputGroup}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className={errors.name ? css.ErrorInput : ''}
          />
          {errors.name && <p className={css.ErrorMessage}>{errors.name}</p>}
        </div>

        <div className={css.InputGroup}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className={errors.email ? css.ErrorInput : ''}
          />
          {errors.email && <p className={css.ErrorMessage}>{errors.email}</p>}
        </div>

        <div className={css.InputGroup}>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className={errors.phone ? css.ErrorInput : ''}
          />
          {errors.phone && <p className={css.ErrorMessage}>{errors.phone}</p>}
        </div>

        <div className={css.InputGroup}>
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={handleInputChange}
            placeholder="Skills"
            className={errors.skills ? css.ErrorInput : ''}
          />
          {errors.skills && <p className={css.ErrorMessage}>{errors.skills}</p>}
        </div>

        <div className={css.InputGroup}>
          <textarea
            name="message"
            value={message}
            onChange={handleInputChange}
            placeholder="Tell us about yourself"
            className={errors.message ? css.ErrorInput : ''}
          />
          {errors.message && <p className={css.ErrorMessage}>{errors.message}</p>}
        </div>

        <button type="submit" className={css.SubmitButton}>
          Submit
        </button>

        {isSubmitted && <p className={css.ThankYouMessage}>Thank you for applying! We will get back to you soon.</p>}
      </form>
    </div>
  );
};

export default JoinUsForm;
