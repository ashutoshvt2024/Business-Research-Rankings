import React from 'react';
import Header from './Header';
import Footer from './Footer';
//import '../styles/InformationPage.css'; // Create a CSS file if needed for styling

function InformationPage() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2>Information Page</h2>
        {/* Add content specific to the Information page */}
      </div>
      <Footer />
    </div>
  );
}

export default InformationPage;