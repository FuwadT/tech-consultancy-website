import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Tech Consultancy | Professional Software Solutions</title>
        <meta name="description" content="Professional software consulting company offering web development, Salesforce support, automated testing, managed services, and AI consulting" />
        <link rel="canonical" href="https://techconsultancy.com/" />
      </Helmet>
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Innovative Software Solutions for <span>Your Business</span></h1>
            <p>We help businesses transform their ideas into reality with cutting-edge technology and expert consulting services.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-overview section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Services</h2>
            <p>Comprehensive software solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with the latest technologies.</p>
              <Link to="/web-development" className="service-link">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Salesforce Support</h3>
              <p>Expert Salesforce implementation, customization, and support services.</p>
              <Link to="/salesforce-support" className="service-link">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-vial"></i>
              </div>
              <h3>Automated Testing</h3>
              <p>Comprehensive testing solutions to ensure your software quality.</p>
              <Link to="/automated-testing" className="service-link">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Managed Services</h3>
              <p>Ongoing support and maintenance for your critical systems.</p>
              <Link to="/managed-services" className="service-link">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI Consulting</h3>
              <p>Leverage the power of artificial intelligence for your business.</p>
              <Link to="/ai-consulting" className="service-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Tech Consultancy</h2>
              <p>We are a team of passionate technology experts dedicated to helping businesses succeed in the digital world. With years of experience across various industries, we provide tailored solutions that drive growth and innovation.</p>
              <p>Our approach combines technical expertise with a deep understanding of business needs, ensuring that our solutions not only solve technical challenges but also contribute to your overall business objectives.</p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </div>
            <div className="about-image">
              {/* Placeholder for an image */}
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Clients Say</h2>
            <p>Success stories from businesses we've helped</p>
          </div>
          
          <div className="testimonials-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Tech Consultancy transformed our outdated systems into a modern, efficient platform that has significantly improved our productivity."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>John Smith</h4>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Their Salesforce expertise helped us streamline our sales process and increase our conversion rates by 40%."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Sales Director, GrowthCo</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The automated testing solution they implemented has saved us countless hours and improved our software quality dramatically."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>CTO, InnovateSoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Transform Your Business?</h2>
            <p>Contact us today to discuss how we can help you achieve your technology goals.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
