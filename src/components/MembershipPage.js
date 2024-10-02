import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/MembershipPage.css'; // Make sure to create this CSS file for styling

function MembershipPage() {
  return (
    <div className="membership-page">
      <Header />
      <div className="membership-content">
        {/* My Memberships Section */}
        <section className="membership-section">
          <h2>My Memberships</h2>
          <table className="membership-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Billing</th>
                <th>Expiration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IS Rankings 2023 (free membership)</td>
                <td>$0.00 now.</td>
                <td>Change Cancel</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* My Account Section */}
        <section className="account-section">
          <h2>My Account</h2>
          <div className="account-details">
            <p><strong>Username:</strong> ashutoshpocham@vt.edu</p>
            <p><strong>Email:</strong> ashutoshpocham@vt.edu</p>
          </div>
        </section>

        {/* Past Invoices Section */}
        <section className="invoices-section">
          <h2>Past Invoices</h2>
          <table className="invoices-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Level</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>September 7, 2024</td>
                <td>IS Rankings 2023 (free membership)</td>
                <td>$0.00</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default MembershipPage;