"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, bgImage }) => {
    return (
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-emerald-950">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {bgImage && (
                    <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={bgImage}
                            alt={title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-emerald-950/70" />
                    </>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">{title}</h1>
                    {subtitle && <p className="text-emerald-100/80 text-lg md:text-xl font-light">{subtitle}</p>}
                </motion.div>
            </div>

            {/* Simple Bottom Border instead of Wave */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        </div>
    );
};

export default PageHeader;
