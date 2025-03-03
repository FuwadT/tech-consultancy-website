import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <h1>Tech Pros</h1>
          </NavLink>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/web-development" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Web Development
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/salesforce-support" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Salesforce Support
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/automated-testing" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Automated Testing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/managed-services" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                Managed Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ai-consulting" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                AI Consulting
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="contact-button">
          <NavLink to="/contact" className="btn btn-contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
