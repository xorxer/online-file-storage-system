import React, { useState } from 'react';
import InputField from './InputField';
import { Person, Lock, Email } from '@mui/icons-material';
import { useAppDispatch } from '../store/hooks';
import { signup } from '../services/authService';
import { clearError } from '../slices/authSlice';
import AuthLogo from './AuthLogo';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors([]);

    // Validate input lengths
    const newErrors: string[] = [];
    if (name.trim().length === 0) {
      newErrors.push('Name is required.');
    }
    if (name.length < 2 || name.length > 50) {
      newErrors.push('Name must be between 2 and 50 characters long.');
    }
    if (email.length < 5 || email.length > 254) {
      newErrors.push('Email must be between 5 and 254 characters long.');
    }
    if (password.length < 8 || password.length > 100) {
      newErrors.push('Password must be between 8 and 100 characters long.');
    }
    if (password !== confirmPassword) {
      newErrors.push('Passwords do not match.');
    }

    // Set errors if any
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await dispatch(signup({ email, password, name })).unwrap();
      alert('Registration successful!');
      setErrors([]); // Clear any previous errors
      navigate('/files');
    } catch (error) {
      console.log(error);
      setErrors(['An error occurred. Please try again.']);
    }
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <div className="flex h-screen">
      <AuthLogo />
      <div className="w-1/2 bg-black-100 p-8">
        <h2 className="h2 mb-8 text-white">Sign up</h2>
        <form onSubmit={handleSignup}>
          <>
            <label className="small-text mb-2 block text-grey-300">Name</label>
            <div className="mb-4 rounded-md border-2 border-grey-400 bg-white">
              <InputField
                type="text"
                placeholder="Enter your name"
                value={name}
                icon={<Person />}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </>
          <>
            <label className="small-text mb-2 block text-grey-300">Email</label>
            <div className="mb-4 rounded-md border-2 border-grey-400 bg-white">
              <InputField
                type="email"
                placeholder="Enter your email"
                value={email}
                icon={<Email />}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
          <>
            <label className="small-text mb-2 block text-grey-300">
              Password
            </label>
            <div className="mb-2 rounded-md border-2 border-grey-400 bg-white">
              <InputField
                type="password"
                placeholder="Enter your password"
                value={password}
                icon={<Lock />}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right">
              <a className="cursor-pointer text-blue">Forgot Password?</a>
            </div>
          </>
          <>
            <label className="small-text mb-2 block text-grey-300">
              Confirm Password
            </label>
            <div className="mb-4 rounded-md border-2 border-grey-400 bg-white">
              <InputField
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                icon={<Lock />}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
          {errors.length > 0 && (
            <div className="mb-4 text-red-500">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <button
            type="submit"
            className="bold-btn mb-4 w-full rounded-md bg-blue py-2 text-white"
          >
            Sign Up
          </button>
          <p className="text-grey-200">
            <>
              Already have an account?&nbsp;
              <span
                className="cursor-pointer font-bold text-grey-400"
                onClick={() => {
                  setErrors([]);
                  handleClearError();
                  navigate('/login');
                }}
              >
                Log in
              </span>
            </>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
