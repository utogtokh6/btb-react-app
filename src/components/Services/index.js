import React from 'react';
import css from './style.module.css';
import { servicesData } from '../../assets/data/servicesData'; // Import service data
import ServiceCard from '../ServiceCard/'; // Import ServiceCard component

const Services = () => {
  return (
    <div>
        <div className={css.Services}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;


// import icon1 from '../../assets/images/ServicesLogo/welder.png'

// const Services = () => {
//   return (
//     <div className={css.Services}>
//       <h1>Our Services</h1>
//       <div className={css.ServicesGrid}>
//         {services.map((service) => (
//           <div key={service.id} className={css.ServiceCard}>
//             <img src={service.icon} alt={service.title} className={css.ServiceIcon} />
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
