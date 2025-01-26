import React, { useState } from 'react';
import InputField from './InputField';
import { Person, Lock, Email } from '@mui/icons-material';


const AuthForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate confirm password
        console.log("Password: " + password + " Confirm: " + confirmPassword);
        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            if (isLogin) {
                // await login(email, password);
                alert('Login successful!');
            } else {
                // await register(email, password, name);
                alert('Registration successful!');
            }
            setError(''); // Clear any previous errors
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    }


    return (
        <div className="w-1/2 bg-black-100 p-8">
            <h2 className='h2 text-white mb-8'>{isLogin ? 'Sign in' : 'Sign up'}</h2>
            <form onSubmit={handleSubmit}>
                <>
                    {!isLogin && (
                        <>
                            <label className="block mb-2 text-grey-300 small-text">Name</label>
                            <div className="mb-4 border-2 border-grey-400 rounded-md bg-white">
                                <InputField
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    icon={<Person />}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                </>
                <>
                    <label className="block mb-2 text-grey-300 small-text">Email</label>
                    <div className="mb-4 border-2 border-grey-400 rounded-md bg-white">
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
                    <label className="block mb-2 text-grey-300 small-text">Password</label>
                    <div className="mb-2 border-2 border-grey-400 rounded-md bg-white">
                        <InputField
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            icon={<Lock />}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {isLogin && (
                        <div className="mb-4 text-right">
                            <a
                                className="text-blue cursor-pointer"
                            >Forgot Password?</a>
                        </div>
                    )}
                </>
                {!isLogin && (
                    <>
                        <label className="block mb-2 text-grey-300 small-text">Confirm Password</label>
                        <div className="mb-4 border-2 border-grey-400 rounded-md bg-white">
                            <InputField
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                icon={<Lock />}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </>
                )}
                {error && (
                    <p className="text-red-500 mb-4">{error}</p>
                )}
                <button
                    type="submit"
                    className="w-full bg-blue text-white bold-btn py-2 rounded-md mb-4"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
                <p className="text-grey-200">
                    {isLogin
                        ? (
                            <>
                                Don't have an account?&nbsp;
                                <span
                                    className="text-grey-400 font-bold cursor-pointer"
                                    onClick={() => {
                                        setIsLogin(!isLogin)
                                        setError('')
                                    }}
                                >Sign up</span>
                            </>
                        )
                        : (
                            <>
                                Already have an account?&nbsp;
                                <span
                                    className="text-grey-400 font-bold cursor-pointer"
                                    onClick={() => {
                                        setIsLogin(!isLogin)
                                        setError('')
                                    }}
                                >Sign in</span>
                            </>
                        )
                    }
                </p>
            </form>
        </div>
    );
}

export default AuthForm;
