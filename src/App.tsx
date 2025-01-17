import { useState } from 'react';

function App() {

  return (
    <div className="flex h-screen">
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
      <div className="w-1/2 bg-black-100"></div>
    </div>
  );
}

export default App;
