import React from 'react';
import css from './style.module.css';
import Logo from '../Logo'

 const FooterTop = () => {
  return (
<div className={css.Footer}>
  <div className={css.FooterTop}>
    <div className="container">
      <div className={css.row}>
        <div className={css.Logo} >
          <Logo color='black' />
        </div>
        <div>
          <h4>Location</h4>
          <p>
            101 Armadale Rd,
            <br />
            Rivervale,
            <br />
            WA 6103
            <br />
          </p>
        </div>
        <div>
           <h4>Contacts</h4>
          <p>
            <strong>Phone:</strong> 0424107807
            <br />
            <strong>ABN:</strong> 28 662 494 064
            <br />
            <strong>Email:</strong> info@btbsteelworks.com.au
            <br />
            </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default FooterTop;
