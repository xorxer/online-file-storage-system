import React from 'react';

interface AuthLogoProps {
  marginLeft?: string;
  marginTop?: string;
}

const AuthLogo: React.FC<AuthLogoProps> = ({
  marginLeft = 'ml-[1in]',
  marginTop = 'mt-[1in]',
}) => {
  return (
    <div className={`${marginLeft} ${marginTop} flex items-center`}>
      <img src="/logo.png" alt="Logo" className="mr-8 h-[100px] w-[100px]" />
      <h2 className="h2">Google Drive Clone</h2>
    </div>
  );
};

export default AuthLogo;
