


import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const CaptainLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        if (!email || !password) {
            toast.error('Please fill in all fields');
            setLoading(false);
            return;
        }
        
        try {
            const response = await axios.post(`${process.env.URI}/captain/login`, { email, password });
            toast.success('Login successful!');
            navigate('/');
        } catch (error) {
            toast.error('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                        filter: "blur(8px)",
                        transform: "scale(1.05)"
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 w-full max-w-md px-4">
                    <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-lg bg-white dark:bg-black">
                        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">Welcome Back, Captain</h2>
                        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
                            Login to manage your team
                        </p>
                        <form className="my-8" onSubmit={handleSubmit}>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="example@domain.com" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    id="password" 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </LabelInputContainer>
                            <button
                                className="bg-black text-white w-full rounded-md h-10 font-medium hover:bg-gray-800 transition"
                                type="submit" 
                                disabled={loading}>
                                {loading ? "Logging in..." : "Login →"}
                            </button>
                        </form>
                    </div>
                </div>
                <ToastContainer position='top-right' autoClose={3000} />  
            </div>
            <Footer/>
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default CaptainLogin;
