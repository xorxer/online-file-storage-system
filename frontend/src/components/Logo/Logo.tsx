import React from 'react';
import './logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src="/logo.png" alt="Logo" className="logo-image" />
      <h1 className="logo-text">Google Drive Clone</h1>
    </div>
  );
};

export default Logo;
