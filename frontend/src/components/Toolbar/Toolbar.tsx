import React from 'react';
import { Search, Create, Upload } from '@mui/icons-material';
import './Toolbar.css';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="search-container">
        <div className="search-input-wrapper">
          <Search className="ml-2 text-grey-400" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="button-container">
        <button className="action-button">
          <Create className="button-icon" />
          Create
        </button>
        <button className="action-button">
          <Upload className="button-icon" />
          Upload
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
