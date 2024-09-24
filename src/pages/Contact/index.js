import React from 'react';
import css from './style.module.css';
import ContactForm from '../../components/ContactForm';
import ContactGoogleMap from '../../components/ContactGoogleMap';

const Contact = () => {
  return (
    <div className={css.ContactPage}>
      <div className={css.ContactWrapper}>
        <ContactForm className={css.ContactForm}/>
        <ContactGoogleMap className={css.ContactGoogleMap} />
      </div>
    </div>
  );
};

export default Contact;
