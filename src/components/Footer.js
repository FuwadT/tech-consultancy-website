import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tech Consultancy</h3>
            <p>Professional software solutions for businesses of all sizes. We help you transform your ideas into reality.</p>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/web-development">Web Development</Link></li>
              <li><Link to="/salesforce-support">Salesforce Support</Link></li>
              <li><Link to="/automated-testing">Automated Testing</Link></li>
              <li><Link to="/managed-services">Managed Services</Link></li>
              <li><Link to="/ai-consulting">AI Consulting</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94105</p>
              <p>Email: info@techconsultancy.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tech Consultancy. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
