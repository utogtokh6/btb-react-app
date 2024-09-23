// import React, { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Normally, you would send the form data to a server here
//     alert(`Message sent by ${formData.name} (${formData.email})!`);
//     // Clear the form after submission
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Contact Us</h1>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Contact Form */}
//         <div style={{ flex: 1, marginRight: "20px" }}>
//           <form onSubmit={handleSubmit}>
//             <div style={{ marginBottom: "10px" }}>
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
//                 />
//               </label>
//             </div>

//             <div style={{ marginBottom: "10px" }}>
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
//                 />
//               </label>
//             </div>

//             <div style={{ marginBottom: "10px" }}>
//               <label>
//                 Message:
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   style={{ marginLeft: "10px", padding: "5px", width: "300px", height: "100px" }}
//                 />
//               </label>
//             </div>

//             <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Google Map */}
//         <div style={{ flex: 1 }}>
//           <h3>Our Location</h3>
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Eiffel+Tower,Paris+France"
//             width="100%"
//             height="300"
//             frameBorder="0"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             aria-hidden="false"
//             tabIndex="0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';
import css from './style.module.css';

const Contact = () => {
  return (
    <div className={css.Contact}>
      <h1>Contact Us</h1>
      <div className={css.ContactContainer}>
        {/* Холбоо барих маягт */}
        <div className={css.ContactForm}>
          <h2>Get In Touch</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name.." required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email.." required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Write something.." required></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>

        {/* Байршлын зураг */}
        <div className={css.ContactMap}>
          <h2>Our Location</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.95373631592114!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3f83d%3A0x4086cb110d2561!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1611294864804!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
