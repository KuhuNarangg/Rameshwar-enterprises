"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, bgImage, curveColor = 'fill-white' }) => {
    return (
        <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 w-full h-full">
                {bgImage ? (
                    <div className="relative w-full h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-emerald-900/40 to-slate-900/60" />
                    </div>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Rameshwar Enterprises
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 shadow-teal-500/50 drop-shadow-2xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Decorative Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] ${curveColor}`}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default PageHeader;
