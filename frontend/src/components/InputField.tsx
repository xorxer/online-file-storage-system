import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    icon: React.ReactNode;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
        <div className={`flex items-center border border-grey-400 rounded-md p-2 w-full ${className}`}>
            <span className={`text-grey-300 mr-2 ${iconClassName}`}>{icon}</span>
            <input
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full outline-none bg-white text-grey-400 placeholder-grey-400 border-grey-400 font-manrope ${inputClassName}`}
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
