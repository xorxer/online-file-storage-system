import React from 'react';
import Profile from './Profile/Profile';
import Logo from '../Logo/Logo';
import Navbar from './Navbar/Navbar';
import Toolbar from '../Toolbar/Toolbar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      {/* Left Side */}
      <aside className="flex w-full flex-col items-start overflow-hidden bg-grey-600 p-4 md:w-1/3">
        <Logo />
        <hr className="my-1 w-full border-t-2 bg-grey-500" />
        <Profile initials="JD" name="John Doe" email="john.doe@example.com" />
        <hr className="my-1 w-full border-t-2 bg-grey-500" />
        <Navbar />
        <hr className="my-1 w-full border-t-2 bg-grey-500" />
      </aside>
      {/* Right Side - Content */}
      <main className="flex h-full w-full flex-col items-center justify-start bg-white md:w-2/3">
        <Toolbar />
        {/* Your other content here */}
      </main>
    </div>
  );
};

export default Dashboard;
