import React from 'react';
import { SignupFormDemo } from '../components/signup';

const UserSignUp = () => {
    return (
        <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                    filter: "blur(8px)",
                    transform: "scale(1.05)"
                }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative z-10 w-full max-w-md px-4">
                <SignupFormDemo />
            </div>
        </div>
    );
};

export default UserSignUp;