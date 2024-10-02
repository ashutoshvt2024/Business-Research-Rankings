import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/JournalsPage.css'; // Make sure this path is correct

function JournalsPage() {
  return (
    <div className="journals-page">
      <Header />
      <div className="content">
        <div className="journals-info">
          <h2>Journals</h2>
          <p>
            This Software Service tracks publications in 8 leading IS journals
            in the AIS Senior Scholars’ basket of journals. At present, the
            database includes data for the years 1990-2023. The journals and
            their most current issues included in the database are:
          </p>
          <table className="journals-table">
            <thead>
              <tr>
                <th>Journal</th>
                <th>Year</th>
                <th>Volume</th>
                <th>Issue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>European Journal of Information Systems</td>
                <td>2023</td>
                <td>32</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Information Systems Journal</td>
                <td>2023</td>
                <td>33</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Information Systems Research</td>
                <td>2023</td>
                <td>34</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Journal of Information Technology</td>
                <td>2023</td>
                <td>38</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Journal of Management Information Systems</td>
                <td>2023</td>
                <td>40</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Journal of Strategic Information Systems</td>
                <td>2023</td>
                <td>32</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Journal of the Association for Information Systems</td>
                <td>2023</td>
                <td>24</td>
                <td>6</td>
              </tr>
              <tr>
                <td>MIS Quarterly</td>
                <td>2023</td>
                <td>47</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          <p>
            Rankings are provided by varying criteria, including geographic
            location, journal, and type of ranking method (for more details
            about ranking options, please see the “Calculation” page). Quick
            selections for common journal groupings and 3 or 5-year windows are
            provided, but it is possible to search by any combination of
            journals and years. Additionally, the database can be searched by
            university, author, and article keywords.
          </p>
          
          <h3>Included Journals</h3>
          <p>EJIS, ISJ, ISR, JAIS, JMIS, MISQ, JSIS, JIT</p>
        </div>

        {/* Conveyor Belt Section */}
        <div className="journals-carousel">
          <div className="carousel-track">
            <img
              src="path/to/journal1.png" // Replace with actual image paths
              alt="Journal 1"
              className="carousel-image"
            />
            <img
              src="path/to/journal2.png" // Replace with actual image paths
              alt="Journal 2"
              className="carousel-image"
            />
            <img
              src="path/to/journal3.png" // Replace with actual image paths
              alt="Journal 3"
              className="carousel-image"
            />
            {/* Add more images as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JournalsPage;