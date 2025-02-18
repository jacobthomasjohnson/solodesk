// app/components/Navbar.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-800/0 ${
            scrolled 
                ? 'bg-black/80 backdrop-blur-2xl border-[#1c1c1c]' 
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Logo variant="12" />
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#pricing">Pricing</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                            <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }) => (
    <Link 
        href={href}
        className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
    >
        {children}
    </Link>
);

export default Navbar;
