import React, { useState } from 'react';
import LogoSection from './LogoSection';
import InputField from './InputField';
import { Person, Lock } from '@mui/icons-material';


const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="w-1/2 bg-black-100 p-8">
            <h2 className='h2 text-white mb-8'>{isLogin ? 'Sign in' : 'Sign up'}</h2>
            <form>
                <>
                    <label className="block mb-2 text-grey-300 small-text">Email</label>
                    <div className="mb-4 border-2 border-grey-400 rounded-md bg-white">
                        <InputField
                            type="email"
                            placeholder="Enter your email"
                            icon={<Person />}
                        />
                    </div>
                </>
                <>
                    <label className="block mb-2 text-grey-300 small-text">Password</label>
                    <div className="mb-2 border-2 border-grey-400 rounded-md bg-white">
                        <InputField
                            type="password"
                            placeholder="Enter your password"
                            icon={<Lock />}
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
                                icon={<Lock />}
                            />
                        </div>
                    </>
                )}
                <button className="w-full bg-blue text-white bold-btn py-2 rounded-md mb-4">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
                <p className="text-grey-200">
                    {isLogin
                        ? (
                            <>
                                Don't have an account?&nbsp;
                                <span
                                    className="text-grey-400 font-bold cursor-pointer"
                                    onClick={() => setIsLogin(false)}
                                >Sign up</span>
                            </>
                        )
                        : (
                            <>
                                Already have an account?&nbsp;
                                <span
                                    className="text-grey-400 font-bold cursor-pointer"
                                    onClick={() => setIsLogin(true)}
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
