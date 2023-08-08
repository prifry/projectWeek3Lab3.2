import React from 'react';
import ContactForm from './ContactForm';// Import the ContactForm component


const ContactPage = () => {
  // The ContactPage component renders the contact form and related content
  return (
    <div>
      <h1>Contact Priscila</h1>
      <p>Please fill out the form below to get in touch with Me.</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;