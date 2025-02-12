import React from 'react';
import Profile from './Profile/Profile';
import Logo from '../Logo/Logo';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side */}
      <aside className="flex w-full flex-col items-start overflow-hidden bg-grey-600 p-4 md:w-1/3 lg:w-1/4">
        <Logo />
        <hr className="my-4 w-full border-t-2 bg-grey-500" />
        <Profile initials="JD" name="John Doe" email="john.doe@example.com" />
        <hr className="my-4 w-full border-t-2 bg-grey-500" />
      </aside>

      {/* Right Side - Content */}
      <main className="flex h-full items-center justify-center bg-white md:w-2/3 lg:w-3/4">
        {/* Your other content here */}
      </main>
    </div>
  );
};

export default Dashboard;
