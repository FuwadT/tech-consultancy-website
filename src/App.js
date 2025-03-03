import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import WebDevelopment from './components/services/WebDevelopment';
import SalesforceSupport from './components/services/SalesforceSupport';
import AutomatedTesting from './components/services/AutomatedTesting';
import ManagedServices from './components/services/ManagedServices';
import AIConsulting from './components/services/AIConsulting';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tech Consultancy | Professional Software Solutions</title>
        <meta name="description" content="Professional software consulting company offering web development, Salesforce support, automated testing, managed services, and AI consulting" />
        <link rel="canonical" href="https://techconsultancy.com/" />
      </Helmet>
      
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/salesforce-support" element={<SalesforceSupport />} />
          <Route path="/automated-testing" element={<AutomatedTesting />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
