import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

interface ProfileProps {
  initials: string;
  name: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ initials, name, email }) => {
  return (
    <div className="mx-auto flex max-w-lg items-center p-4">
      {/* User Profile Picture */}
      <Avatar
        sx={{
          width: '3.5rem', // Adjust the size as needed
          height: '3.5rem',
          fontSize: '1.25rem', // Adjust the font size as needed
          backgroundColor: '#2F80ED',
        }}
      >
        {initials}
      </Avatar>

      {/* User Information */}
      <div className="ml-4 flex flex-col">
        <span className="text-black text-lg font-medium">{name}</span>
        <span className="text-sm text-gray-500">{email}</span>
      </div>

      {/* Right Arrow Icon */}
      {/* <IconButton edge="end" aria-label="chevron right" href="#" color="inherit"> */}
      <ChevronRight />
      {/* </IconButton> */}
    </div>
  );
};

export default Profile;
