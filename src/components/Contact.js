import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | Tech Consultancy</title>
        <meta name="description" content="Contact Tech Consultancy for professional software solutions. We're here to help with your technology needs." />
        <link rel="canonical" href="https://techconsultancy.com/contact" />
      </Helmet>
      
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact <span>Us</span></h1>
            <p>We'd love to hear from you. Reach out to discuss how we can help with your technology needs.</p>
          </div>
        </div>
      </section>
      
      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h3>Our Location</h3>
                  <p>123 Tech Street<br />San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h3>Email Us</h3>
                  <p>info@techconsultancy.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h3>Call Us</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-map-section">
        <div className="map-container">
          {/* Placeholder for a map */}
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt"></i>
            <p>Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
