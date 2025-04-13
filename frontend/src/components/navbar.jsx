import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5, 
                staggerChildren: 0.1 
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const mobileMenuVariants = {
        closed: { 
            opacity: 0,
            height: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren"
            }
        },
        open: { 
            opacity: 1,
            height: 'auto',
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const mobileItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.nav 
            className="fixed w-full top-0 z-50"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <motion.div 
                className={`bg-gray-900 backdrop-blur-md px-4 py-3 shadow-lg ${
                    scrolled ? 'bg-opacity-95' : 'bg-opacity-80'
                }`}
                animate={{
                    backgroundColor: scrolled ? 'rgba(17, 24, 39, 0.95)' : 'rgba(17, 24, 39, 0.8)',
                    boxShadow: scrolled ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                }}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <motion.div 
                        className="text-white text-2xl font-bold"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="/" className="flex items-center space-x-2">
                            <motion.span 
                                className="text-blue-500"
                                animate={{ 
                                    color: ['#3b82f6', '#60a5fa', '#3b82f6'],
                                    transition: { 
                                        duration: 3, 
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }
                                }}
                            >
                                Cab
                            </motion.span>ify
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                                <motion.li
                                    key={item}
                                    variants={itemVariants}
                                    custom={index}
                                >
                                    <motion.a 
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-gray-300 hover:text-white transition-colors duration-300"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Get Started</a>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button 
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={toggleMenu}
                        variants={itemVariants}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="md:hidden overflow-hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {['Home', 'About', 'Services', 'Contact', 'Get Started'].map((item, index) => (
                                    <motion.a 
                                        key={item}
                                        href={item === 'Home' ? '/' : item === 'Get Started' ? '/UserLogin' : `/${item.toLowerCase()}`}
                                        className={`block px-3 py-2 ${
                                            item === 'Get Started' 
                                                ? 'text-blue-500 hover:text-blue-400' 
                                                : 'text-gray-300 hover:text-white'
                                        } transition-colors duration-300`}
                                        variants={mobileItemVariants}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;