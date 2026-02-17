"use client";
import React from 'react';
import Image from 'next/image';
import { Settings, ShieldCheck, Zap, ArrowRight, Leaf, Recycle, Factory } from 'lucide-react';
import Link from 'next/link';

export default function ProductSection() {
    return (
        <section id="plant" className="min-h-screen bg-white pt-20 pb-20">
            {/* Header Section */}
            <div className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-slate-900 mb-6">
                        The <span className="text-emerald-600">Plant.</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-500 font-medium leading-relaxed">
                        Our high-performance Biodiesel Production Plant is engineered for maximum yield, multi-feedstock flexibility, and 24/7 industrial operation.
                    </p>
                </div>
            </div>

            {/* Main Showcase */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 group">
                            <Image
                                src="/images/img5.jpg"
                                alt="Biodiesel Plant Model"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>

                        <div className="space-y-10">
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-4 border border-emerald-100">
                                    Flagship Model
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Industrial Specification</h2>
                                <p className="text-slate-500 text-lg">
                                    Designed for heavy-duty chemical processing, our plant converts waste oils and vegetable fats into premium-grade biodiesel (B100).
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { icon: Settings, title: "Automation", desc: "Fully integrated PLC control systems for precise reaction monitoring." },
                                    { icon: ShieldCheck, title: "Safety", desc: "Built to ASTM and international safety standards with multiple failsafes." },
                                    { icon: Zap, title: "Efficiency", desc: "Optimized thermal exchange for low power consumption and high fuel recovery." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                                        <item.icon className="text-emerald-600 shrink-0" size={24} />
                                        <div>
                                            <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">{item.title}</h4>
                                            <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Production Process */}
            <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">The Process</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">From raw material to refined fuel, our multi-stage transesterification process ensures B100 quality compliance.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Pre-Treatment", desc: "Removal of moisture and impurities from feedstock." },
                            { step: "02", title: "Transesterification", desc: "Chemical reaction with catalyst to separate glycerin." },
                            { step: "03", title: "Washing & Drying", desc: "Purification to remove residual catalyst and soaps." },
                            { step: "04", title: "Filtration", desc: "Final polishing to meet EN 14214 / ASTM D6751 standards." }
                        ].map((stage, i) => (
                            <div key={i} className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="text-6xl font-black text-white/5 absolute top-4 right-6 group-hover:text-emerald-500/20 transition-colors">{stage.step}</div>
                                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mb-6 text-slate-900 font-bold">
                                    <Factory size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{stage.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Environmental Benefits */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-8">Why Biofuel?</h2>
                            <p className="text-lg text-slate-500 mb-6">
                                Transitioning to biodiesel isn't just an economic choice—it's an environmental imperative. Our plants help you contribute to a greener future.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Reduces carbon footprint by up to 80%",
                                    "Biodegradable and non-toxic",
                                    "Utilizes waste oils, promoting circular economy",
                                    "Reduces dependence on fossil fuels"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <Leaf size={20} className="text-emerald-500" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-emerald-50 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center">
                            <Recycle size={80} className="text-emerald-600 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Sustainable Investment</h3>
                            <p className="text-slate-500">
                                High ROI with low environmental impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Insights / News */}
            <div className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-12">Industry Insights</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { cat: "Market Growth", title: "Biodiesel Demand Surge", text: "Global biodiesel market size is expected to reach USD 50 billion by 2030." },
                            { cat: "Policy", title: "Government Incentives", text: "New subsidies and blending mandates are driving adoption across manufacturing sectors." },
                            { cat: "Technology", title: "Next-Gen Catalysts", text: "Advancements in enzymatic transesterification are lowering production costs." }
                        ].map((news, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">{news.cat}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{news.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{news.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
