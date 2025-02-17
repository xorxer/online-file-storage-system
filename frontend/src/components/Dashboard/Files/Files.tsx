import React from 'react';
import {
  PictureAsPdf,
  Description,
  InsertDriveFile,
  MoreVert,
} from '@mui/icons-material';
import './files.css';

interface FileItem {
  name: string;
  type: 'pdf' | 'doc' | 'file';
  size: string;
  modified: string;
}

const dummyFiles: FileItem[] = [
  { name: 'Sample1.pdf', type: 'pdf', size: '2.5 MB', modified: '2025-02-15' },
  { name: 'Sample2.docx', type: 'doc', size: '1.8 MB', modified: '2025-02-14' },
  {
    name: 'Sample3.xlsx',
    type: 'file',
    size: '3.2 MB',
    modified: '2025-02-13',
  },
];

const FileIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'pdf':
      return <PictureAsPdf className="text-custom_red" />;
    case 'doc':
      return <Description className="text-blue" />;
    default:
      return <InsertDriveFile className="text-grey-100" />;
  }
};

const Files: React.FC = () => {
  return (
    <div className="files-container">
      <h2 className="files-title">Files</h2>
      <div className="files-header">
        <div className="files-header-item w-1/2 md:w-1/2">File</div>
        <div className="files-header-item files-header-item-size w-1/4 md:w-1/4">
          Size
        </div>
        <div className="files-header-item files-header-item-modified hidden w-1/4 md:block">
          Modified
        </div>
      </div>
      {dummyFiles.map((file, index) => (
        <div key={index} className="file-item">
          <div className="file-content">
            <div className="file-icon">
              <FileIcon type={file.type} />
            </div>
            <span className="file-name">{file.name}</span>
          </div>
          <div className="file-size">{file.size}</div>
          <div className="file-modified">{file.modified}</div>
          <div className="file-more">
            <MoreVert className="text-grey-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Files;
