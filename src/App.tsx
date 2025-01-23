import React, { useState } from 'react';
import LogoSection from './components/LogoSection';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <div className="flex h-screen">
      <LogoSection />
      <AuthForm />
    </div>
  );
}

export default App;
