import React from 'react';
import css from './style.module.css';
import client1Logo from '../../assets/images/Clients/arc-removebg.png';
import client1HoverLogo from '../../assets/images/Clients/arc-removebg.png';
import client2Logo from '../../assets/images/Clients/cisco.png';
import client2HoverLogo from '../../assets/images/Clients/cisco.png';
import client3Logo from '../../assets/images/Clients/hanseen.png';
import client3HoverLogo from '../../assets/images/Clients/hanseen.png';

const clients = [
  {
    id: 1,
    name: "Client One",
    logo: client1Logo,
    hoverLogo: client1HoverLogo,
    website: "https://www.arcreo.com.au/"
  },
  {
    id: 2,
    name: "Client Two",
    logo: client2Logo,
    hoverLogo: client2HoverLogo,
    website: "https://www.client2.com"
  },
  {
    id: 3,
    name: "Client Three",
    logo: client3Logo,
    hoverLogo: client3HoverLogo,
    website: "https://www.hanssen.com.au/"
  },
  // Add more clients as needed
];

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
              onMouseOver={(e) => e.currentTarget.src = client.hoverLogo}
              onMouseOut={(e) => e.currentTarget.src = client.logo}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
