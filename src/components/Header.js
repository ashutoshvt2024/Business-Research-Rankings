import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import brr_logo from '../assets/brr_logo.png'; // Adjust the path as necessary
import '../styles/Header.css'; // Include CSS for styling

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogoClick = () => {
    navigate('/'); // Redirects to the login page
  };

  const handleLogout = () => {
    // Add any additional logout logic here, like clearing user data or tokens
    navigate('/'); // Redirect to the login page
  };

  return (
    <header className="header">
    <div className='header_left_half'>
      <img 
        src={brr_logo} 
        alt="Logo" 
        className="header-logo" 
        onClick={handleLogoClick} // Navigate to login page on logo click
        style={{ cursor: 'pointer' }} // Optional: cursor style to indicate clickable element
      />
      <h1 className="header-title">Business Research Ranking</h1>
      </div>
      <nav className="header-nav">
        <Link to="/rankings" className="nav-link">RANKINGS</Link>
        <Link to="/article-search" className="nav-link">ARTICLE SEARCH</Link>
        <div className="nav-link dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className="dropdown-toggle">INFORMATION</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/journals" className="dropdown-item">Journals</Link></li>
              <li><Link to="/calculations" className="dropdown-item">Calculations</Link></li>
              <li><Link to="/faq" className="dropdown-item">Frequently Asked Questions</Link></li>
              <li><Link to="/contact-info" className="dropdown-item">Contact Info</Link></li>
            </ul>
          )}
        </div>
        <Link to="/membership" className="nav-link">MEMBERSHIP</Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button> {/* Logout button */}
      </nav>
    </header>
  );
}

export default Header;