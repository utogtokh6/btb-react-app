import React from 'react';
import css from './style.module.css';
import "../../styles/variables.module.css";
import Logo from '../Logo'
import Icon from '../Icon'

 const Footer = () => {
  return (
<div className={css.Footer}>
  <div className={css.FooterTop}>
    <div className="container">
      <div className={css.row}>
        <div>
          <Logo color='black' />
        </div>
        <div>
          <h4>Location</h4>
          <p>
            48/189 Swansea Street,
            <br />
            East Victoria Park,
            <br />
            Perth WA 6101
            <br />
            <br />
            <strong>Phone:</strong> 0424107807
            <br />
            <strong>ABN:</strong> 28 662 494 064
            <br />
            <strong>Email:</strong> info@btbsteelworks.com.au
            <br />
          </p>
        </div>
        <div>
          <h4>Our Social Networks</h4>
          <p>Connect with us on our social network</p>
          <div className="social-links mt-3">
          <a href="https://www.facebook.com/profile.php?id=61556713550060" target="_blank">
          <Icon iconType="facebook" size="medium" color="secondary" />
            </a>
          <a href="https://www.instagram.com/btbsteelworks" target="_blank">
          <Icon iconType="instagram" size="medium" color="secondary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={css.FooterBottom}>
    <div className="copyright">
      © Copyright <strong />. All Rights Reserved
    </div>
  </div>
</div>

  )
}

export default Footer;
