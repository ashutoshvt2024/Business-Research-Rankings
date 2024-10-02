import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/FAQPage.css'; // Assuming this path is correct for the CSS file

function FAQPage() {
  return (
    <div className="faq-page">
      <Header />
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is the annual licensing fee for this service?</h3>
          <p>Free for the remainder of this year’s (2024) access.</p>
        </div>

        <div className="faq-item">
          <h3>What is the correct citation format for the use of rankings from the list?</h3>
          <p>
            The format for the citation is similar to what is typically used for web sites: Rankings Based on Association for Information Systems’ (AIS) List of High-quality Journals. Journals used: [list the journals you’ve used in the rankings search], Period of rankings: [list the year range], http://www.aisresearchrankings.org, Accessed date: [date].
            <br />
            <strong>Example:</strong> Rankings Based on Association for Information Systems’ (AIS) List of High-quality Journals. Journals: ISR, MISQ, Period: 2021-2023, http://www.aisresearchrankings.org, Accessed date: March 1, 2024.
          </p>
        </div>

        <div className="faq-item">
          <h3>Am I allowed to print, publish or distribute rankings lists?</h3>
          <p>
            We refer you to the end-user license agreement for detailed information. You are allowed to print lists and share them internally within your organization. However, you are not allowed to post full or partial rankings lists on websites or published materials. You may use up to five illustrations of schools and individuals above and below your organization on any rankings list. Please read the end-user license agreement carefully.
          </p>
        </div>

        <div className="faq-item">
          <h3>Am I allowed to share my user ID and password with others?</h3>
          <p>
            The user ID and password allow access to one individual. Sharing the user ID and password with individuals and organizations is prohibited. Please read the end-user license agreement carefully.
          </p>
        </div>

        <div className="faq-item">
          <h3>Will other information systems journals be added?</h3>
          <p>
            The current service is based on the AIS Senior Scholars’ basket of eight journals. We are aware that 3 journals have been added to the list of journals. We expect that next year’s data will include these newly added journals, with data from 2024 moving forward.
          </p>
        </div>

        <div className="faq-item">
          <h3>Will data for articles for years before 1990 be added?</h3>
          <p>There is no plan at this time to add older data.</p>
        </div>

        <div className="faq-item">
          <h3>When will data for 2024 be available?</h3>
          <p>
            As noted in the end-user license agreement, rankings based on 2024 data are not part of this year’s license.
          </p>
        </div>

        <div className="faq-item">
          <h3>What does the score or adjusted score mean?</h3>
          <p>
            It is a way of distributing credit to different authors of a multi-authored paper. It is 1/n where n is the number of authors. For more details, please see the Calculation page of the site where this is described.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are editorials excluded?</h3>
          <p>Only peer-reviewed articles are included. Consequently, editorials are excluded.</p>
        </div>

        <div className="faq-item">
          <h3>Are opinion papers excluded?</h3>
          <p>
            Not usually. If it is clear that the paper was subject to a review process, it has been included. In some cases, a call has been made about inclusion/exclusion. If you are an author or editor and can speak to any particular paper to help correct our data, it would be most welcome and appreciated.
          </p>
        </div>

        <div className="faq-item">
          <h3>What if I find errors in data?</h3>
          <p>
            MVR will make a good faith effort to ensure that the data used in the rankings are accurate in every way. However, from time to time, errors may occur. If you find any errors, please report them to MVR with sufficient corroborating evidence and sufficient information to remedy the error. Once such information has been received and reviewed by MVR to its satisfaction, we will make every effort to correct the errors, typically within 4 weeks.
          </p>
        </div>

        <div className="faq-item">
          <h3>How frequently are error corrections incorporated into the database?</h3>
          <p>
            The typical timeframe is about 4 weeks provided the necessary information is provided, as specified in the end-user license agreement. However, it could take longer.
          </p>
        </div>

        <div className="faq-item">
          <h3>Why have my rankings changed since the last time I checked it?</h3>
          <p>
            Although rare, errors in the data are possible. When such errors are corrected, frequently, rankings may change to reflect the new data.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are the rankings based on university or school?</h3>
          <p>
            The rankings are based on the university. So, a university housing the same disciplinary scholars in different schools will have rankings based on all publications from that university in the journal set.
          </p>
        </div>

        <div className="faq-item">
          <h3>What if I have questions, comments, or other feedback?</h3>
          <p>Please email us at aisresearchrankings@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQPage;