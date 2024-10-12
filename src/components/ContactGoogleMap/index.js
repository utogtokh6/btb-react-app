import React from 'react';
import css from './style.module.css';

const ContactGoogleMap = () => {
  return (
    <div className={css.MapContainer}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7560466264126!2d115.91191151173268!3d-31.993167624263574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bc711cfbcbdd%3A0x2d7d1977f8343c7c!2sUnit%2048%2F189%20Swansea%20St%20E%2C%20East%20Victoria%20Park%20WA%206101!5e1!3m2!1sen!2sau!4v1728728820443!5m2!1sen!2sau"
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
