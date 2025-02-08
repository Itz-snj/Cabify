import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <a href="/">Cabify</a>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/home" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                    <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
                <div>
                    <a href="/UserLogin" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;