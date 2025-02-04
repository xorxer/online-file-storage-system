import React from 'react';

const LogoSection: React.FC = () => {
  return (
    <div className="w-1/2 bg-white">
      <div className="ml-[1in] mt-[1in] flex items-center">
        <img src="/logo.png" alt="Logo" className="mr-8 h-[100px] w-[100px]" />
        <h2 className="h2">Google Drive Clone</h2>
      </div>
    </div>
  );
};

export default LogoSection;
