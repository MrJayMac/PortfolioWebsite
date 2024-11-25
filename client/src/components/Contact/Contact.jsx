import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service ID:', process.env.REACT_APP_SERVICEID);
    console.log('Template ID:', process.env.REACT_APP_TEMPLATE);
    console.log('Public Key:', process.env.REACT_APP_PUBKEY);


    emailjs
      .send(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATE,
        {
          to_name: "Joshua", 
          from_name: formData.name, 
          message: formData.message, 
          from_email: formData.email,
          reply_to: formData.email, 
        },
        process.env.REACT_APP_PUBKEY
      )
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="contact__container">
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-inputs">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-inputs">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-inputs">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
