import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/CalculationsPage.css'; // Make sure this path is correct

function CalculationsPage() {
  return (
    <div className="calculations-page">
      <Header />
      <div className="content">
        <div className="calculation-info">
          <h2>Calculation</h2>
          <p>
            All four methods are available to rank authors. The first two
            methods are available to rank universities.
          </p>
          <ul>
            <li>
              <strong>Normal count:</strong> Every coauthor of a paper receives
              a score of 1. His/her school of affiliation receives a maximum
              score of 1 for each paper, even if there are multiple authors from
              the same school.
            </li>
            <li>
              <strong>Adjusted count:</strong> Single-authored papers result in
              the school of affiliation and author being credited with a score
              of 1. If there are multiple authors from different schools, each
              school gets a score of p/n, where p is the number of authors from
              the same school and n is the total number of authors on the paper;
              and each author gets a score (credit) of 1/n. If an author lists
              multiple affiliations, each of the schools that author is
              affiliated with gets a corresponding scaled score. For example, if
              one of the n authors lists m affiliations, each school that author
              is affiliated with gets a score of 1/nm.
            </li>
            <li>
              <strong>Weighted count:</strong> Papers are given a reduced weight
              based on the number of authors. 1 point is given to
              single-authored papers, 0.7 points are given to papers with two
              authors, 0.5 points are given to papers with three authors, and
              0.3 points are given to papers with four or more authors.
            </li>
            <li>
              <strong>Straight count:</strong> Only the first author is given
              credit for a paper.
            </li>
          </ul>
          <p>
            <strong>Reference:</strong> Chua, C., Cao, L., Cousins, K., and
            Straub, D. “Measuring Researcher-Production in Information Systems,”
            Journal of the Association for Information Systems (3), 2002,
            145-215.
          </p>
        </div>

        {/* Images Section */}
        <div className="images-section">
          <img
            src="path/to/image1.jpg" // Replace with actual image paths
            alt="Calculation Example 1"
            className="calculation-image"
          />
          <img
            src="path/to/image2.jpg" // Replace with actual image paths
            alt="Calculation Example 2"
            className="calculation-image"
          />
          <img
            src="path/to/image3.jpg" // Replace with actual image paths
            alt="Calculation Example 3"
            className="calculation-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CalculationsPage;