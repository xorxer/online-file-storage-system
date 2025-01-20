import React from 'react';
import LogoSection from './components/LogoSection';
import InputField from './components/InputField';
import { Person, Lock } from '@mui/icons-material';

function App() {

  return (
    <div className="flex h-screen">
      <LogoSection />
      <div className="w-1/2 bg-black-100">
        <h2 className='h2'>Login</h2>
        <form>
          <div className="mb-4">
            <label className="bold-text block mb-2 text-white">Email</label>
            <InputField
              type="email"
              placeholder="Enter your email"
              icon={<Person />}
            />
          </div>
          <div className="mb-4">
            <label className="bold-text block mb-2 text-white">Password</label>
            <InputField
              type="password"
              placeholder="Enter your password"
              icon={<Lock />}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
