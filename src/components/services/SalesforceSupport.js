import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SalesforceSupport = () => {
  return (
    <div className="service-page">
      <Helmet>
        <title>Salesforce Support Services | Tech Consultancy</title>
        <meta name="description" content="Expert Salesforce implementation, customization, integration, and support services to maximize your CRM investment." />
        <link rel="canonical" href="https://techconsultancy.com/salesforce-support" />
      </Helmet>
      
      <div className="service-hero">
        <div className="container text-center">
          <h1>Salesforce Support Services</h1>
          <p>Maximize your Salesforce investment with our expert implementation, customization, and support services</p>
        </div>
      </div>
      
      <div className="container">
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Unlock the Full Potential of Salesforce</h2>
              <p>
                Salesforce is a powerful platform that can transform your business operations, but maximizing its potential 
                requires expertise and strategic implementation. Our certified Salesforce consultants help you leverage the 
                platform's capabilities to streamline processes, improve customer relationships, and drive growth.
              </p>
              <p>
                Whether you're just getting started with Salesforce or looking to optimize your existing implementation, 
                our team provides the guidance and technical expertise you need to succeed.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Our Salesforce Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Salesforce Implementation</h3>
              <p>
                End-to-end implementation services tailored to your business requirements. We handle everything from initial 
                setup and configuration to data migration, user training, and go-live support.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Customization & Development</h3>
              <p>
                Custom development to extend Salesforce functionality beyond standard features. Our developers create custom 
                objects, fields, workflows, and Lightning components to match your unique business processes.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Integration Services</h3>
              <p>
                Seamless integration of Salesforce with your existing systems and third-party applications. We ensure data 
                flows smoothly across your technology ecosystem, eliminating silos and improving efficiency.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Salesforce Optimization</h3>
              <p>
                Assessment and enhancement of your existing Salesforce implementation. We identify opportunities for 
                improvement, resolve issues, and implement best practices to maximize your ROI.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Managed Support Services</h3>
              <p>
                Ongoing support and maintenance for your Salesforce environment. Our support packages include regular 
                health checks, user support, system administration, and continuous improvement recommendations.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Training & Enablement</h3>
              <p>
                Comprehensive training programs for administrators and end-users. We ensure your team has the knowledge 
                and skills to effectively use Salesforce and drive adoption across your organization.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Our Salesforce Expertise</h2>
              <p>
                Our team includes certified Salesforce professionals with expertise across the entire Salesforce ecosystem:
              </p>
              <ul>
                <li><strong>Sales Cloud:</strong> Streamline your sales process, improve pipeline visibility, and boost productivity</li>
                <li><strong>Service Cloud:</strong> Deliver exceptional customer service across all channels</li>
                <li><strong>Marketing Cloud:</strong> Create personalized customer journeys and marketing campaigns</li>
                <li><strong>Commerce Cloud:</strong> Build seamless e-commerce experiences</li>
                <li><strong>Community Cloud:</strong> Create branded portals for customers, partners, and employees</li>
                <li><strong>Einstein Analytics:</strong> Leverage AI-powered insights to make data-driven decisions</li>
                <li><strong>AppExchange Solutions:</strong> Implement and customize third-party Salesforce applications</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Our Salesforce Approach</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p>
                We follow a proven methodology for Salesforce projects that ensures successful outcomes and long-term value:
              </p>
              <ol>
                <li><strong>Discovery & Planning:</strong> We begin by understanding your business processes, challenges, and goals to define the project scope and requirements.</li>
                <li><strong>Solution Design:</strong> Our architects design a Salesforce solution that aligns with your business needs and follows platform best practices.</li>
                <li><strong>Configuration & Development:</strong> We configure and customize Salesforce to match your requirements, with a focus on scalability and maintainability.</li>
                <li><strong>Data Migration:</strong> We develop and execute a comprehensive data migration strategy to ensure clean, accurate data in your new system.</li>
                <li><strong>Testing & Quality Assurance:</strong> Rigorous testing ensures your Salesforce implementation works as expected and meets all requirements.</li>
                <li><strong>Training & Change Management:</strong> We prepare your team for the new system with tailored training and change management support.</li>
                <li><strong>Deployment & Go-Live:</strong> Smooth transition to your new Salesforce environment with minimal disruption to your business.</li>
                <li><strong>Ongoing Support:</strong> Continued assistance to ensure your Salesforce investment delivers long-term value.</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <h2>Ready to Transform Your Business with Salesforce?</h2>
          <p>Contact us today to discuss your Salesforce needs and how we can help you achieve your business objectives.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SalesforceSupport;
