"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuote } from '../context/QuoteContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { setIsOpen: openQuote } = useQuote();

    const menuItems = [
        { name: 'Home', href: '/#home' },
        { name: 'Why Us', href: '/#why-us' },
        { name: 'The Plant', href: '/#plant' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-24 h-24 overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm">
                            <Image
                                src="/logo.jpeg"
                                alt="Logo"
                                fill
                                className="object-cover scale-150"
                            />
                        </div>
                        <span className={`font-black text-xl tracking-tighter uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                            Rameshwar<span className="text-emerald-600 font-light">.Ent</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                        <button onClick={() => openQuote(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-emerald-200">
                            Get Quotation
                        </button>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openQuote(true);
                                    }}
                                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-emerald-200"
                                >
                                    Get Quotation
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}