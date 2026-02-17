"use client";
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <Leaf className="text-emerald-500 group-hover:rotate-12 transition-transform" />
                            <span className="text-xl font-bold text-white tracking-tight">Rameshwar</span>
                        </Link>
                        <p className="text-emerald-300/60 text-sm leading-relaxed">
                            Pioneering sustainable energy solutions through advanced biodiesel technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-xs">Menu</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Why Us', href: '/why-us' },
                                { name: 'Products', href: '/products' },
                                { name: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-emerald-400/80 hover:text-emerald-300 text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-xs">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-emerald-300/70">
                                <MapPin size={16} className="text-emerald-500 mt-1 shrink-0" />
                                <span>Rohtak, Haryana</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-emerald-300/70">
                                <Phone size={16} className="text-emerald-500 shrink-0" />
                                <span>+91 90535 71119</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-emerald-300/70">
                                <Mail size={16} className="text-emerald-500 shrink-0" />
                                <span>sohamdang0@gmail.com</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-emerald-900/50">
                            <p className="text-emerald-500/60 text-xs font-mono">GST: 06ABKFR9829B1ZY</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-emerald-900 text-center text-emerald-500/50 text-xs">
                    &copy; {new Date().getFullYear()} Rameshwar Enterprises. All rights reserved.
                </div>
            </div>
        </footer>
    );
}