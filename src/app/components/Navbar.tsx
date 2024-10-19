import React from 'react';
import Logo from '@/assets/Logo.svg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navBarLinks = [
    {
        name: 'Destinations',
        path: '#',
    },
    {
        name: 'Hotels',
        path: '#',
    },
    {
        name: 'Flights',
        path: '#',
    },
    {
        name: 'Bookings',
        path: '#',
    },
    {
        name: 'Login',
        path: '#',
    },
    {
        name: 'Signup',
        path: '#',
    },
];

export default function Navbar() {
    return (
        <div className='z-10'>
            <div className=' py-10  flex justify-between items-center w-full'>
                <img src={Logo.src} alt="Logo" />
                <ul className='flex space-x-20 items-center'>
                    {navBarLinks.map((link, index) => (
                        <li key={index}>
                            {link.name === 'Signup' ? (
                                <Link href={link.path}>
                                    <Button variant={'outline'}>Signup</Button>
                                </Link>
                            ) : (
                                <Link href={link.path}>{link.name}</Link>
                            )}
                        </li>
                    ))}
                    <li>EN</li>
                </ul>
            </div>


        </div>
    );
}
