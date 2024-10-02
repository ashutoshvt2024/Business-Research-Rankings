import React, { useState } from 'react';
import brr_logo from '../assets/brr_logo.png';
import orcIDLogo from '../assets/orcid_logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    // Here you would typically validate login credentials
    // After successful login validation, navigate to the rankings page
    navigate('/rankings'); // Navigate to the LandingPage
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img className="brr_logo" src={brr_logo} alt="" />
        <h1 className="brr_name_login">BUSINESS RESEARCH RANKING</h1>
      </div>

      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2 className="welcome_back_font">Welcome back!</h2>
            <p className="welcome_back_font">Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Remember for 30 days</label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleLogin}>
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => window.open('https://orcid.org/signin', '_blank')}
                >
                  <img className="orcid_logo" src={orcIDLogo} alt="" />
                  Log In with ORCID
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;