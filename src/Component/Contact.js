import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_j1gqme9', 'template_bl7tmlm', formData, 'wfXLLuPLJfP7b5ROM')
      .then((result) => {
        console.log(result.text);
        alert('Message sent!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again.');
      });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Send
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
