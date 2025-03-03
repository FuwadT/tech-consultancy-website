import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ManagedServices = () => {
  return (
    <div className="service-page">
      <Helmet>
        <title>Managed IT Services | Tech Consultancy</title>
        <meta name="description" content="Comprehensive managed IT services including infrastructure management, cloud services, cybersecurity, and 24/7 technical support." />
        <link rel="canonical" href="https://techconsultancy.com/managed-services" />
      </Helmet>
      
      <div className="service-hero">
        <div className="container text-center">
          <h1>Managed IT Services</h1>
          <p>Proactive technology management and support to keep your business running smoothly</p>
        </div>
      </div>
      
      <div className="container">
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Focus on Your Business, Leave IT to Us</h2>
              <p>
                In today's technology-driven business environment, maintaining a reliable, secure, and efficient IT 
                infrastructure is critical to your success. Our managed services provide comprehensive IT support and 
                management, allowing you to focus on your core business activities while we handle your technology needs.
              </p>
              <p>
                We take a proactive approach to IT management, continuously monitoring your systems, identifying potential 
                issues before they cause problems, and ensuring your technology aligns with your business objectives.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Our Managed Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>IT Infrastructure Management</h3>
              <p>
                Comprehensive management of your entire IT infrastructure, including servers, networks, storage, and 
                end-user devices. We ensure your systems are optimized, up-to-date, and running efficiently.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Cloud Services Management</h3>
              <p>
                Expert management of your cloud environments, whether public, private, or hybrid. We optimize your cloud 
                resources, control costs, and ensure seamless integration with your on-premises systems.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Cybersecurity Services</h3>
              <p>
                Robust security solutions to protect your business from evolving threats. Our services include threat 
                monitoring, vulnerability management, security assessments, and incident response.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Help Desk & Technical Support</h3>
              <p>
                24/7 technical support for your team, providing quick resolution to IT issues and minimizing downtime. 
                Our support team is available via phone, email, and chat to assist with any technology challenges.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Backup & Disaster Recovery</h3>
              <p>
                Comprehensive data protection solutions to safeguard your critical business information. We implement 
                robust backup systems and disaster recovery plans to ensure business continuity in any situation.
              </p>
            </div>
            
            <div className="service-card">
              <h3>IT Strategy & Consulting</h3>
              <p>
                Strategic technology guidance aligned with your business goals. Our consultants help you plan your IT 
                roadmap, make informed technology decisions, and maximize the value of your IT investments.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Our Managed Services Approach</h2>
              <p>
                We deliver our managed services through a structured, proactive approach that ensures consistent, 
                high-quality support for your business:
              </p>
              <ol>
                <li><strong>Assessment & Planning:</strong> We begin by thoroughly assessing your current IT environment, understanding your business needs, and developing a tailored service plan.</li>
                <li><strong>Implementation:</strong> Our team implements the necessary tools, processes, and systems to effectively manage your IT infrastructure.</li>
                <li><strong>Proactive Monitoring:</strong> We continuously monitor your systems to identify and address potential issues before they impact your business.</li>
                <li><strong>Regular Maintenance:</strong> Scheduled maintenance activities keep your systems secure, up-to-date, and performing optimally.</li>
                <li><strong>Responsive Support:</strong> When issues do arise, our support team provides rapid resolution to minimize disruption to your business.</li>
                <li><strong>Strategic Reviews:</strong> Regular service reviews ensure our support continues to align with your evolving business needs.</li>
                <li><strong>Continuous Improvement:</strong> We constantly refine our processes and implement new technologies to enhance the quality and efficiency of our services.</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Benefits of Our Managed Services</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h4>Predictable IT Costs</h4>
                  <p>Convert variable IT expenses into fixed monthly costs, making budgeting more predictable and eliminating unexpected expenses.</p>
                </div>
                <div className="col-md-6 mb-4">
                  <h4>Reduced Downtime</h4>
                  <p>Proactive monitoring and maintenance minimize system failures and disruptions, keeping your business running smoothly.</p>
                </div>
                <div className="col-md-6 mb-4">
                  <h4>Enhanced Security</h4>
                  <p>Comprehensive security measures protect your data and systems from cyber threats, reducing your risk of breaches and data loss.</p>
                </div>
                <div className="col-md-6 mb-4">
                  <h4>Improved Efficiency</h4>
                  <p>Optimized systems and streamlined processes improve performance and productivity across your organization.</p>
                </div>
                <div className="col-md-6 mb-4">
                  <h4>Access to Expertise</h4>
                  <p>Leverage the knowledge and experience of our specialized IT professionals without the cost of hiring a full in-house team.</p>
                </div>
                <div className="col-md-6 mb-4">
                  <h4>Focus on Core Business</h4>
                  <p>Free up your internal resources to concentrate on strategic initiatives and revenue-generating activities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Service Level Agreements</h2>
              <p>
                Our managed services are backed by clear, comprehensive Service Level Agreements (SLAs) that define our 
                commitments to your business. Our SLAs typically include:
              </p>
              <ul>
                <li><strong>Response Time Guarantees:</strong> Defined timeframes for responding to and resolving issues based on severity.</li>
                <li><strong>System Availability Targets:</strong> Commitments to maintain specified levels of uptime for critical systems.</li>
                <li><strong>Regular Reporting:</strong> Detailed reports on system performance, incident resolution, and service delivery.</li>
                <li><strong>Escalation Procedures:</strong> Clear processes for escalating issues when necessary to ensure timely resolution.</li>
                <li><strong>Continuous Improvement Metrics:</strong> Targets for ongoing enhancement of service quality and efficiency.</li>
              </ul>
              <p>
                We tailor our SLAs to meet your specific business requirements, ensuring our services align with your 
                operational needs and priorities.
              </p>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <h2>Ready to Transform Your IT Management?</h2>
          <p>Contact us today to discuss how our managed services can help you achieve a more reliable, secure, and efficient IT environment.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManagedServices;
