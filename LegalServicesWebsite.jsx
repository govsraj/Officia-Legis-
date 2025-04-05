import React from 'react';

const LegalServicesWebsite = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '20px', borderRadius: '10px' }}>
        <h1>Officia Legis Govind Gaurav</h1>
        <p>Advocate | Delhi NCR</p>
      </header>

      <section style={{ marginTop: '30px' }}>
        <h2>About Me</h2>
        <p>
          I, Govind Gaurav, am an advocate practicing across Delhi NCR. I specialize in Banking & Insurance, Taxation,
          Mergers & Acquisitions, and Property-related legal matters.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Practice Areas</h2>
        <ul>
          <li>Banking & Insurance Law</li>
          <li>Taxation Law</li>
          <li>Merger & Acquisition</li>
          <li>Property Disputes & Documentation</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:govindgaurav@example.com">govindgaurav@example.com</a></p>
        <p>Location: Delhi NCR</p>
      </section>

      <footer style={{ marginTop: '40px', fontSize: '14px', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} Officia Legis - Govind Gaurav. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LegalServicesWebsite;
