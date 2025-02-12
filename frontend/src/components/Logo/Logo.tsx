import React from 'react';

interface LogoProps {
  marginTop?: string;
  logoHeight?: string;
  logoWidth?: string;
  headingSize?: string;
}

const Logo: React.FC<LogoProps> = ({
  marginTop = 'mt-4', // Default margin-top
  logoHeight = 'h-10 md:h-12 lg:h-16', // Responsive height
  logoWidth = 'w-10 md:w-12 lg:w-16', // Responsive width
  headingSize = 'text-lg md:text-xl lg:text-2xl', // Responsive text size
}) => {
  return (
    <div className={`${marginTop} flex items-center`}>
      <img
        src="/logo.png"
        alt="Logo"
        className={`${logoHeight} ${logoWidth}`}
      />
      <div
        className={`ml-4 font-manrope ${headingSize} max-w-full flex-grow overflow-hidden text-ellipsis whitespace-nowrap`}
      >
        Google Drive Clone
      </div>
    </div>
  );
};

export default Logo;
