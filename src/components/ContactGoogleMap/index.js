import React from 'react';
import css from './style.module.css';

const ContactGoogleMap = () => {
  return (
    <div className={css.MapContainer}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434844699!2d144.963054815715!3d-37.8162139797511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf72e0f0e2b9b3bff!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1631102277152!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactGoogleMap;
