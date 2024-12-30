import React from 'react';
import css from './style.module.css';
import clients from '../../assets/data/clientsData';

const Clients = () => {
  return (
    <div className={css.Clients}>
      <h1>Our Clients</h1>
      <div className={css.ClientsGrid}>
        {clients.map((client) => (
          <a
            key={client.id}
            href={client.website}
            target="_blank"
            rel="noopener noreferrer"
            className={css.ClientCard}
          >
            <img
              src={client.logo}
              alt={client.name}
              className={css.ClientLogo}
              onMouseOver={(e) => e.currentTarget.src = client.logo}
              onMouseOut={(e) => e.currentTarget.src = client.logo}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
