import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AutomatedTesting = () => {
  return (
    <div className="service-page">
      <Helmet>
        <title>Automated Software Testing Services | Tech Consultancy</title>
        <meta name="description" content="Comprehensive automated testing solutions including test strategy, framework development, continuous integration, and performance testing." />
        <link rel="canonical" href="https://techconsultancy.com/automated-testing" />
      </Helmet>
      
      <div className="service-hero">
        <div className="container text-center">
          <h1>Automated Software Testing Services</h1>
          <p>Ensure software quality, reliability, and performance with our comprehensive testing solutions</p>
        </div>
      </div>
      
      <div className="container">
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Elevate Your Software Quality</h2>
              <p>
                In today's fast-paced development environment, manual testing alone is no longer sufficient to ensure 
                software quality. Our automated testing services help you build robust, reliable software while accelerating 
                your development cycles and reducing costs.
              </p>
              <p>
                We design and implement comprehensive testing strategies that integrate seamlessly with your development 
                process, providing continuous feedback and enabling you to deliver high-quality software with confidence.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Our Automated Testing Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Test Strategy & Planning</h3>
              <p>
                Development of comprehensive testing strategies tailored to your project needs. We help you determine 
                what to automate, select the right tools, and establish testing processes that integrate with your 
                development workflow.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Test Automation Framework Development</h3>
              <p>
                Custom framework design and implementation that provides a foundation for sustainable, maintainable 
                test automation. Our frameworks support scalability, reusability, and easy maintenance of test scripts.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Functional Test Automation</h3>
              <p>
                Automated testing of application functionality across UI, API, and service layers. We ensure your 
                software works as expected and meets all functional requirements.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Performance & Load Testing</h3>
              <p>
                Rigorous testing to verify your application's performance under various conditions. We identify 
                bottlenecks, measure response times, and ensure your system can handle expected user loads.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Continuous Integration & DevOps</h3>
              <p>
                Integration of automated tests into your CI/CD pipeline for continuous quality feedback. We help you 
                implement testing as part of your DevOps practices to catch issues early and often.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Mobile Application Testing</h3>
              <p>
                Specialized testing for mobile applications across different devices, operating systems, and network 
                conditions. We ensure your mobile apps deliver a consistent, high-quality user experience.
              </p>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Our Testing Approach</h2>
              <p>
                We follow a methodical approach to test automation that ensures comprehensive coverage and maximum ROI:
              </p>
              <ol>
                <li><strong>Assessment & Strategy:</strong> We evaluate your current testing processes and develop a strategy that aligns with your business goals and technical requirements.</li>
                <li><strong>Tool Selection:</strong> We help you select the right testing tools and technologies based on your specific needs, tech stack, and team capabilities.</li>
                <li><strong>Framework Design:</strong> We design a robust automation framework that supports maintainability, scalability, and efficient test execution.</li>
                <li><strong>Test Development:</strong> Our engineers develop automated tests that provide comprehensive coverage of your application's functionality.</li>
                <li><strong>CI/CD Integration:</strong> We integrate automated tests into your continuous integration and delivery pipeline for immediate feedback on code changes.</li>
                <li><strong>Reporting & Analytics:</strong> We implement detailed reporting mechanisms that provide clear insights into test results and application quality.</li>
                <li><strong>Knowledge Transfer:</strong> We ensure your team has the skills and knowledge to maintain and extend the automated testing solution.</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <h2 className="text-center">Technologies & Tools We Use</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="text-center mb-5">
                We leverage industry-leading testing tools and frameworks to deliver effective automation solutions:
              </p>
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <h4>UI Testing</h4>
                  <p>Selenium, Cypress, Playwright, TestCafe, Appium</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h4>API Testing</h4>
                  <p>Postman, REST Assured, SoapUI, Karate</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h4>Performance Testing</h4>
                  <p>JMeter, Gatling, LoadRunner, K6</p>
                </div>
              </div>
              <div className="row text-center mt-3">
                <div className="col-md-4 mb-4">
                  <h4>CI/CD Integration</h4>
                  <p>Jenkins, GitHub Actions, Azure DevOps, GitLab CI</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h4>Test Management</h4>
                  <p>TestRail, Zephyr, qTest, XRay</p>
                </div>
                <div className="col-md-4 mb-4">
                  <h4>Frameworks</h4>
                  <p>TestNG, JUnit, Mocha, Jest, PyTest</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="service-section">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Benefits of Our Automated Testing Services</h2>
              <ul>
                <li><strong>Faster Time to Market:</strong> Accelerate your release cycles with efficient, reliable testing processes.</li>
                <li><strong>Improved Quality:</strong> Catch bugs earlier in the development cycle when they're less costly to fix.</li>
                <li><strong>Increased Test Coverage:</strong> Run more tests in less time, ensuring comprehensive validation of your software.</li>
                <li><strong>Reduced Costs:</strong> Lower the long-term cost of testing while improving effectiveness.</li>
                <li><strong>Consistent Results:</strong> Eliminate human error and variability from the testing process.</li>
                <li><strong>Better Resource Utilization:</strong> Free up your team to focus on exploratory testing and other high-value activities.</li>
                <li><strong>Continuous Feedback:</strong> Get immediate insights into the impact of code changes on application quality.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <h2>Ready to Enhance Your Software Quality?</h2>
          <p>Contact us today to discuss how our automated testing services can help you deliver better software, faster.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutomatedTesting;
