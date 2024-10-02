import React, { useState } from 'react';
import Header from './Header'; // Assuming Header is a pre-defined component
import Footer from './Footer'; // Assuming Footer is a pre-defined component
import '../styles/RankingsPage.css'; // Assuming RankingsPage.css includes the necessary styles

function RankingsPage() {
  const [displayBy, setDisplayBy] = useState('University');
  const [sortBy, setSortBy] = useState('Normal');
  const [journal, setJournal] = useState('');
  const [region, setRegion] = useState('Worldwide');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Handler to remove a selected filter
  const removeFilter = (filterType) => {
    switch (filterType) {
      case 'journal':
        setJournal('');
        break;
      case 'region':
        setRegion('Worldwide');
        break;
      case 'startDate':
        setStartDate('');
        break;
      case 'endDate':
        setEndDate('');
        break;
      case 'displayBy':
        setDisplayBy('University');
        break;
      case 'sortBy':
        setSortBy('Normal');
        break;
      default:
        break;
    }
  };

  const handleDisplayResults = () => {
    // Handle displaying results based on the filters
    console.log({
      displayBy,
      journal,
      startDate,
      endDate,
      region,
      sortBy,
    });
  };

  return (
    <div className="landing-page">
      <Header />

      <div className="content">
        {/* Results Section */}
        <div className="results-section">
          <h2>Rankings</h2>
          <table className="rankings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>University</th>
                <th>Normal Count</th>
                <th>Adjusted Count</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Temple University</td>
                <td>36</td>
                <td>11.63</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>3</td>
                <td>McGill University</td>
                <td>20</td>
                <td>9.07</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr><tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr><tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr><tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr><tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr><tr>
                <td>2</td>
                <td>University of Texas at Dallas</td>
                <td>22</td>
                <td>11.52</td>
                <td>USA</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Filters Section */}
        <aside className="filters-section">
          <h2>Filters</h2>

          <div className="filter-group">
            <div className="radio-group">
            <label>Display:</label>
              <input
                type="radio"
                id="university"
                name="displayBy"
                value="University"
                checked={displayBy === 'University'}
                onChange={() => setDisplayBy('University')}
              />
              <label htmlFor="university">University</label>

              <input
                type="radio"
                id="author"
                name="displayBy"
                value="Author"
                checked={displayBy === 'Author'}
                onChange={() => setDisplayBy('Author')}
              />
              <label htmlFor="author">Author</label>
            </div>
            {displayBy !== 'University' && (
              <div className="selected-filter">
                Selected: {displayBy} <button onClick={() => removeFilter('displayBy')}>X</button>
              </div>
            )}
          </div>

          <div className="filter-group">
            <label>Journals:</label>
            <select
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
            >
              <option value="">Select a Journal</option>
              <option value="Journal 1">Journal 1</option>
              <option value="Journal 2">Journal 2</option>
              <option value="Journal 3">Journal 3</option>
            </select>
            {journal && (
              <div className="selected-filter">
                Selected: {journal} <button onClick={() => removeFilter('journal')}>X</button>
              </div>
            )}
          </div>

          <div className="filter-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            {startDate && (
              <div className="selected-filter">
                Selected: {startDate} <button onClick={() => removeFilter('startDate')}>X</button>
              </div>
            )}
          </div>

          <div className="filter-group">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            {endDate && (
              <div className="selected-filter">
                Selected: {endDate} <button onClick={() => removeFilter('endDate')}>X</button>
              </div>
            )}
          </div>

          <div className="filter-group">
            <label>Region:</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="Worldwide">Worldwide</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
            </select>
            {region !== 'Worldwide' && (
              <div className="selected-filter">
                Selected: {region} <button onClick={() => removeFilter('region')}>X</button>
              </div>
            )}
          </div>

          <div className="filter-group">
            <label>Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Normal">Normal</option>
              <option value="Adjusted">Adjusted</option>
              <option value="Weighted">Weighted</option>
              <option value="Straight">Straight</option>
            </select>
            {sortBy !== 'Normal' && (
              <div className="selected-filter">
                Selected: {sortBy} <button onClick={() => removeFilter('sortBy')}>X</button>
              </div>
            )}
          </div>

          <button className="display-results-button" onClick={handleDisplayResults}>
            Display Results
          </button>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default RankingsPage;