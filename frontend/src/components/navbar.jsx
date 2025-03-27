import React, { useEffect, useState } from "react";
import { logoutUser } from "../../api/api";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkAuth = () => {
        const cookies = document.cookie.split("; ");
        const authCookie = cookies.find(row => row.startsWith("token="));
        setIsLoggedIn(!!authCookie);
    };

    useEffect(() => {
        checkAuth(); 

        window.addEventListener("storage", checkAuth);
        return () => window.removeEventListener("storage", checkAuth);
    }, []); 
    const handleLogout = async () => {
        await logoutUser(); 
        setTimeout(() => {
            checkAuth(); 
        }, 100);
    };

    return (
        <nav className="fixed w-full top-0 z-50">
            <div className="bg-gray-900 backdrop-blur-md bg-opacity-90 px-4 py-3 shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-white text-2xl font-bold">
                        <a href="/" className="flex items-center space-x-2">
                            <span className="text-blue-500">Cab</span>ify
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                            <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
                            <li><a href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
                        </ul>
                        <div>
                            {isLoggedIn ? (
                                <button 
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                                >
                                    Logout
                                </button>
                            ) : (
                                <a 
                                    href="/signup"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Get Started
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Home</a>
                            <a href="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">About</a>
                            <a href="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Services</a>
                            <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
                            {isLoggedIn ? (
                                <button 
                                    onClick={handleLogout}
                                    className="block w-full text-left px-3 py-2 text-red-500 hover:text-red-400 transition-colors duration-300"
                                >
                                    Logout
                                </button>
                            ) : (
                                <a href="/signup" className="block px-3 py-2 text-blue-500 hover:text-blue-400 transition-colors duration-300">
                                    Get Started
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
