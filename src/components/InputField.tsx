// src/components/InputField.tsx
import React from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    icon: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, icon }) => {
    return (
        <div className="flex items-center border border-grey-400 rounded-md p-2 w-full">
            <span className="text-grey-300 mr-2">{icon}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full outline-none bg-transparent text-white placeholder-grey-300"
            />
        </div>
    );
};

export default InputField;
