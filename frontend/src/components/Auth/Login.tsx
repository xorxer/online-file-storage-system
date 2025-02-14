import React, { useState } from 'react';
import InputField from '../UI/InputField/InputField';
import { Lock, Email } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../services/authService';
import { clearError } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './auth.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const { loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
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
      // navigate('/files');
    } catch (error) {
      console.log(error);
      setErrors(['An error occurred. Please try again.']);
    }
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <div className="auth-container">
      <div className="auth-logo-panel">
        <Logo />
      </div>
      <div className="auth-panel">
        <h2 className="auth-header">Log in</h2>
        <form onSubmit={handleLogin}>
          <>
            <label className="input-label">Email</label>
            <div className="input-container">
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
            <label className="input-label">Password</label>
            <div className="input-container">
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
            <div className="error-message">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <button type="submit" className="auth-button" disabled={loading}>
            Login
          </button>
          <p className="text-grey-200">
            <>
              Don't have an account?&nbsp;
              <span
                className="auth-link"
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
