import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  icon,
  onChange,
  className = '',
  inputClassName = '',
  iconClassName = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`flex w-full items-center rounded-md border border-grey-400 p-2 ${className}`}
    >
      <span className={`mr-2 text-grey-300 ${iconClassName}`}>{icon}</span>
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border-grey-400 bg-white font-manrope text-grey-400 placeholder-grey-400 outline-none ${inputClassName}`}
        autoComplete={type === 'password' ? 'new-password' : 'off'}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-grey-300 focus:outline-none"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </button>
      )}
    </div>
  );
};

export default InputField;
