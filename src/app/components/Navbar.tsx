"use client";
import React, { useState } from 'react';
import Logo from '@/assets/Logo.svg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Menu, X } from 'lucide-react';

const navBarLinks = [
    { name: 'Destinations', path: '#' },
    { name: 'Hotels', path: '#' },
    { name: 'Flights', path: '#' },
    { name: 'Bookings', path: '#' },
    { name: 'Login', path: '#' },
    { name: 'Signup', path: '#' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(navBarLinks[0].name); // Default active link

    return (
        <div className="z-50 relative" >
            <div className="py-6 flex justify-between items-center ">
                {/* Logo */}
                <img src={Logo.src} alt="Logo" />

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-14 items-center">
                    {navBarLinks.map((link, index) => (
                        <li key={index}>
                            {link.name === 'Signup' ? (
                                <Link href={link.path}>
                                    <Button variant="outline">Signup</Button>
                                </Link>
                            ) : (
                                <Link
                                    href={link.path}
                                    className={`text-sm font-medium ${activeLink === link.name ? 'text-primary' : 'text-foreground'} hover:underline hover:underline-offset-4 hover:text-[#DF6951] transition-all duration-300 ease-in-out`}
                                    onClick={() => setActiveLink(link.name)} // Set active link
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li>EN</li>
                </ul>

                {/* Mobile Menu Icon */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute left-0 right-0 top-full bg-red-500 z-50 p-5 rounded-lg shadow-md lg:hidden">
                    <div className="flex flex-col space-y-4">
                        {navBarLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                {link.name === 'Signup' ? (
                                    <Button variant="outline" className="w-full">
                                        {link.name}
                                    </Button>
                                ) : (
                                    <Link
                                        href={link.path}
                                        className="text-sm font-medium text-foreground hover:underline hover:underline-offset-4 hover:text-[#DF6951] transition-all duration-300 ease-in-out"
                                        onClick={() => {
                                            setActiveLink(link.name); // Set active link on click
                                            setMenuOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                        <span className="text-sm font-medium">EN</span>
                    </div>
                </div>
            )}
        </div>
    );
}
