"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Factory, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafaf9]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-100/40 blur-[120px]" />
                <div className="absolute bottom-[0%] -right-[5%] w-[30%] h-[40%] rounded-full bg-emerald-100/40 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-emerald-100">
                            <Zap size={12} className="fill-emerald-600" />
                            <span>Premium Engineering</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.95] mb-6 tracking-tighter">
                            Pure <br /><span className="text-emerald-600">Bio-Fuel.</span>
                        </h1>
                        <p className="text-lg text-slate-500 mb-10 max-w-md font-medium">
                            End to end solutions from raw material to selling.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/#plant" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-slate-200">
                                View Plants
                            </Link>
                            <Link href="/#contact" className="px-10 py-5 rounded-2xl font-bold border-2 border-slate-200 hover:bg-white text-slate-700 transition-all">
                                Contact
                            </Link>
                        </div>
                    </motion.div>

                    <div className="relative hidden lg:block">
                        <div className="relative bg-slate-900 rounded-[3rem] p-10 aspect-square flex flex-col justify-between overflow-hidden shadow-2xl group">
                            {/* Background Gradient & Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-100" />
                            <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-500/30 transition-colors duration-500" />

                            {/* Decorative Icon Background */}
                            <Factory className="absolute -right-10 -bottom-10 w-80 h-80 text-white/5 rotate-12" />

                            {/* Top Badge */}
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    System Active
                                </div>
                                <div className="text-slate-500 font-mono text-xs">V.2.4.0</div>
                            </div>

                            {/* Center Visual / Stats */}
                            <div className="relative z-10 grid grid-cols-2 gap-4 my-auto">
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Daily Output</div>
                                    <div className="text-2xl font-black text-white">50KL</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
                                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Efficiency</div>
                                    <div className="text-2xl font-black text-emerald-400">98.5%</div>
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-900/50">
                                    <Droplets size={28} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-1">Model R-24</h3>
                                <p className="text-slate-400 text-sm">Automated multi-feedstock transesterification unit.</p>
                            </div>
                        </div>

                        {/* Floating elements behind */}
                        <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-slate-200 rounded-full blur-xl opacity-50 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}