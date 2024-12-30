import React from 'react';
import css from './style.module.css';

const ContactGoogleMap = () => {
  return (
    <div className={css.MapContainer}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13539.900300602902!2d115.9071935220693!3d-31.961572885968216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bbbe7e53e90f%3A0x2b8d98cf5eff12d8!2s101%20Armadale%20Rd%2C%20Rivervale%20WA%206103!5e0!3m2!1sen!2sau!4v1735468719694!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactGoogleMap;
