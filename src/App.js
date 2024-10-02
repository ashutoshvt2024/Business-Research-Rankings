import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RankingsPage from './components/RankingsPage';
import ArticleSearchPage from './components/ArticleSearchPage';
import InformationPage from './components/InformationPage';
import MembershipPage from './components/MembershipPage';
import JournalsPage from './components/JournalsPage';
import CalculationsPage from './components/CalculationsPage';
import FAQPage from './components/FAQPage';
import ContactInfoPage from './components/ContactInfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/article-search" element={<ArticleSearchPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/journals" element={<JournalsPage />} />
        <Route path="/calculations" element={<CalculationsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-info" element={<ContactInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;