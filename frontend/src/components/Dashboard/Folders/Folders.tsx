import React from 'react';
import {
  FolderOutlined as FolderIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import './folders.css';

const dummyFolders = [
  'Documents',
  'Pictures',
  'Videos',
  'Music',
  'Downloads',
  'Projects',
  'Work',
  'Personal',
];

const Folders: React.FC = () => {
  return (
    <div className="folders-container">
      <h2 className="folders-title">Folders</h2>
      <div className="folders-grid">
        {dummyFolders.map((folder, index) => (
          <div key={index} className="folder-item">
            <div className="folder-content">
              <FolderIcon className="mr-2" />
              <span>{folder}</span>
            </div>
            <MoreVertIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folders;
