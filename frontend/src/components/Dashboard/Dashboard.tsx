import React from 'react';
import Profile from './Profile';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Full Height Background */}
      <div className="flex w-1/3 items-center justify-center bg-grey-600">
        <div className="h-full w-full">
          <Profile initials="JD" name="John Doe" email="john.doe@example.com" />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex h-full w-2/3 items-center justify-center bg-white">
        {/* Your other content here */}
      </div>
    </div>
  );
};

export default Dashboard;
