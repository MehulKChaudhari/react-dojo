import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid #ddd',
      padding: '1rem 0',
      marginTop: 'auto',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      fontSize: '13px',
      color: '#6c757d'
    }}>
      <p style={{ margin: 0 }}>
        Created by{' '}
        <a 
          href="https://github.com/mehulkchaudhari" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          Mehulkc
        </a>
      </p>
    </footer>
  );
};

export default Footer; 