import React from 'react';
import Header from './Header';
import Footer from './Footer';
//import '../styles/ArticleSearchPage.css'; // Create a CSS file if needed for styling

function ArticleSearchPage() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2>Article Search Page</h2>
        {/* Add content specific to the Article Search page */}
      </div>
      <Footer />
    </div>
  );
}

export default ArticleSearchPage;