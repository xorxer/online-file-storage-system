import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import './profile.css'; // Ensure this file exists and imports Tailwind styles if needed
import fullConfig from '../../../util/tailwindConfig';

interface ProfileProps {
  initials: string;
  name: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ initials, name, email }) => {
  return (
    <div className="profile-container flex w-full items-center px-4 py-2">
      {/* User Profile Picture */}
      <Avatar
        sx={{
          backgroundColor: fullConfig.theme.colors.grey['700'],
          color: fullConfig.theme.colors.grey['400'],
          borderColor: fullConfig.theme.colors.grey['400'],
          border: '2px solid',
          width: { xs: 36, sm: 48, md: 56, lg: 64 },
          height: { xs: 36, sm: 48, md: 56, lg: 64 },
          marginRight: 2,
        }}
      >
        {initials}
      </Avatar>

      {/* User Information */}
      <div className="user-info flex grow flex-col">
        <span className="font-manrope text-lg font-bold md:text-xl lg:text-2xl">
          {name}
        </span>
        <span className="mt-1 font-manrope text-sm text-grey-400 md:text-base lg:text-sm">
          {email}
        </span>
      </div>

      {/* Right Arrow Icon */}
      <IconButton edge="end" aria-label="chevron right" color="inherit">
        <ChevronRight />
      </IconButton>
    </div>
  );
};

export default Profile;
