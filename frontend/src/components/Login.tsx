import React, { useState } from 'react';
import InputField from './InputField';
import { Lock, Email } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../services/authService';
import { clearError } from '../slices/authSlice';
import AuthLogo from './AuthLogo';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error: authError } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors([]);

    // Validate input lengths
    const newErrors: string[] = [];
    if (email.length < 5 || email.length > 254) {
      newErrors.push('Email must be between 5 and 254 characters long.');
    }
    if (password.length < 8 || password.length > 100) {
      newErrors.push('Password must be between 8 and 100 characters long.');
    }

    // Set errors if any
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await dispatch(login({ email, password })).unwrap();
      alert('Login successful!');
      setErrors([]); // Clear any previous errors
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
        <h2 className="h2 mb-8 text-white">Log in</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <p className="text-grey-200">
            <>
              Don't have an account?&nbsp;
              <span
                className="cursor-pointer font-bold text-grey-400"
                onClick={() => {
                  setErrors([]);
                  handleClearError();
                  navigate('/signup');
                }}
              >
                Sign up
              </span>
            </>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
