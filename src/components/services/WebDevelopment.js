import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <div className="service-page">
      <Helmet>
        <title>Web Development Services | Tech Consultancy</title>
        <meta name="description" content="Custom web development services including responsive websites, web applications, e-commerce solutions, and progressive web apps." />
        <link rel="canonical" href="https://techconsultancy.com/web-development" />
      </Helmet>
      
      <div className="service-hero">
        <div className="container text-center">
          <h1>Web Development Services</h1>
          <p>Custom web solutions designed to elevate your online presence and drive business growth</p>
        </div>
      </div>
      
      <div className="container">
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Building Digital Experiences That Matter</h2>
              <p>
                In today's digital landscape, your website is often the first interaction customers have with your brand. 
                Our web development team creates custom, high-performance websites and web applications that make a lasting impression 
                and drive results for your business.
              </p>
              <p>
                Whether you need a simple informational website, a complex web application, or an e-commerce platform, 
                our experienced developers use the latest technologies and best practices to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Our Web Development Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Responsive Website Design</h3>
              <p>
                Mobile-friendly websites that look and function perfectly on all devices, from smartphones to desktops.
                Our responsive designs ensure your site provides an optimal user experience regardless of screen size.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Custom Web Applications</h3>
              <p>
                Tailored web applications built to address your specific business challenges and streamline operations.
                From customer portals to internal tools, we develop solutions that enhance efficiency and productivity.
              </p>
            </div>
            
            <div className="service-card">
              <h3>E-commerce Solutions</h3>
              <p>
                Robust online stores that drive sales and provide seamless shopping experiences. Our e-commerce platforms
                include secure payment processing, inventory management, and customer relationship features.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Progressive Web Apps (PWAs)</h3>
              <p>
                The best of both worlds: websites with app-like functionality. PWAs offer offline capabilities, 
                push notifications, and fast loading times, enhancing user engagement and conversion rates.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Content Management Systems</h3>
              <p>
                User-friendly CMS implementations that empower your team to update and manage website content without technical expertise.
                We work with WordPress, Drupal, and custom CMS solutions.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Website Maintenance & Support</h3>
              <p>
                Ongoing maintenance services to keep your website secure, up-to-date, and performing optimally.
                Our support packages include regular updates, security monitoring, and technical assistance.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Our Development Process</h2>
              <p>
                We follow a structured, collaborative approach to web development that ensures your project is delivered on time, 
                within budget, and to your exact specifications:
              </p>
              <ol>
                <li><strong>Discovery & Planning:</strong> We begin by understanding your business goals, target audience, and project requirements.</li>
                <li><strong>Design & Prototyping:</strong> Our designers create wireframes and visual mockups for your approval before development begins.</li>
                <li><strong>Development:</strong> Our developers build your website or application using clean, efficient code and modern frameworks.</li>
                <li><strong>Testing & Quality Assurance:</strong> Rigorous testing across devices and browsers ensures a flawless user experience.</li>
                <li><strong>Deployment:</strong> We handle the technical aspects of launching your site or application.</li>
                <li><strong>Ongoing Support:</strong> Our relationship continues after launch with maintenance and support services.</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Technologies We Use</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="text-center mb-5">
                We leverage the latest web technologies and frameworks to build modern, high-performance digital solutions:
              </p>
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <h4>Frontend</h4>
                  <p>React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h4>Backend</h4>
                  <p>Node.js, Python, PHP, Ruby on Rails, .NET, Java</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h4>Databases</h4>
                  <p>MongoDB, MySQL, PostgreSQL, SQL Server, Firebase</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <h2>Ready to Start Your Web Development Project?</h2>
          <p>Contact us today to discuss your requirements and how we can help bring your vision to life.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/portfolio" className="btn btn-secondary">View Our Portfolio</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;
