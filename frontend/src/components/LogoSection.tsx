import React from 'react';

const LogoSection: React.FC = () => {
    return (
        <div className="w-1/2 bg-white">
            <div className='flex items-center ml-[1in] mt-[1in]'>
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[100px] h-[100px] mr-8"
                />
                <h2 className='h2'>Google Drive Clone</h2>
            </div>
        </div>
    );
};

export default LogoSection;
