import React from 'react';
import PropTypes from 'prop-types'; // For type checking
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Example icons
import styles from './style.module.css'; // Import CSS module

const Icon = ({ iconType, size, color }) => {
  // Map iconType to a specific icon component
  const icons = {
    twitter: <FaTwitter />,
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
  };

  // Combine classes based on size and color props
  const className = `${styles.icon} ${styles[`icon-${size}`]} ${styles[`icon-${color}`]}`;

  return <span className={className}>{icons[iconType]}</span>;
};

// PropTypes for validation
Icon.propTypes = {
  iconType: PropTypes.oneOf(['twitter', 'facebook', 'instagram']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

// Default Props
Icon.defaultProps = {
  size: 'medium',
  color: 'primary',
};

export default Icon;
