import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the form data to a server here
    alert(`Message sent by ${formData.name} (${formData.email})!`);
    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Contact Form */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
                />
              </label>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
                />
              </label>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{ marginLeft: "10px", padding: "5px", width: "300px", height: "100px" }}
                />
              </label>
            </div>

            <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div style={{ flex: 1 }}>
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Eiffel+Tower,Paris+France"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
