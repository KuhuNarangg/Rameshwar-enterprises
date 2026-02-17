"use client";
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-6 text-emerald-500">
                            <Leaf size={24} />
                            <span className="font-black text-xl tracking-tight text-white uppercase">Rameshwar</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Leading the transition to sustainable energy through precision engineering and industrial innovation.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-emerald-500 uppercase tracking-widest text-xs">Contact</h4>
                        <div className="space-y-4 text-slate-300 text-sm font-medium">
                            <div className="flex items-center gap-3"><Mail size={16} /> sohamdang0@gmail.com</div>
                            <div className="flex items-center gap-3"><Phone size={16} /> +91 90535 71119</div>
                            <div className="flex items-center gap-3"><MapPin size={16} /> Rohtak, Haryana</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-emerald-500 uppercase tracking-widest text-xs">Legal</h4>
                        <p className="text-slate-500 text-xs">GST: 06ABKFR9829B1ZY</p>
                    </div>
                </div>
                <div className="pt-10 text-center text-slate-500 text-xs">
                    &copy; {new Date().getFullYear()} Rameshwar Enterprises. Built for a cleaner future.
                </div>
            </div>
        </footer>
    );
}