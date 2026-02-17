"use client";
import React from 'react';
import Image from 'next/image';
import {
    Users, Globe, Award, Leaf, Zap, ShieldCheck,
    Target, Eye, Microscope, Scaling, Handshake, Landmark
} from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="bg-white pt-20 pb-20">
            {/* 1. ORIGINAL SECTION (Enhanced with deeper copy) */}
            <div className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full h-[400px] lg:h-[600px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10">
                                <Image src="/images/img2.jpg" alt="About Us" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-[2rem] -z-0 hidden lg:block"></div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Driving Global <br />Sustainability Goals</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Biodiesel is a clean-burning alternative to conventional diesel, produced from renewable resources like vegetable oils and recycled cooking grease. We are dedicated to providing end-to-end solutions that empower businesses to adopt this sustainable energy source.
                            </p>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                At Rameshwar Enterprises, we view the energy transition as an industrial imperative. By converting "waste to wealth," we solve two global problems simultaneously: the management of hazardous waste oils and the urgent need for carbon-neutral industrial fuels. Our plants are designed to be the backbone of a circular economy.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Eco-Conscious", desc: "Reducing carbon footprint one plant at a time through Zero-Waste technology.", icon: Leaf },
                                    { title: "Innovation", desc: "Our R&D focuses on high-FFA feedstock conversion and thermal efficiency.", icon: Zap },
                                    { title: "Quality Assurance", desc: "Compliance with IS 15607, ASTM D6751, and EN 14214 standards.", icon: ShieldCheck }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. NEW: MISSION, VISION & VALUES (Strategic Pillar) */}
            <div className="py-24 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="bg-emerald-950 p-12 rounded-[3rem] text-white relative overflow-hidden">
                            <Target className="absolute top-10 right-10 text-emerald-500/20" size={120} />
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Target className="text-emerald-400" /> Our Mission
                            </h3>
                            <p className="text-emerald-100/80 text-lg leading-relaxed">
                                To democratize biofuel production by providing scalable, high-efficiency chemical engineering solutions that turn agricultural and industrial waste into premium energy assets. We aim to be the catalyst for a 100% renewable energy infrastructure in India and beyond.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-[3rem] text-slate-900 border border-slate-200">
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Eye className="text-emerald-600" /> Our Vision
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                To lead the global transition toward bio-industrial sovereignty, where every nation has the capability to produce its own clean fuel locally, reducing dependence on fossil fuel imports and stabilizing local energy economies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. NEW: THE TECHNICAL ADVANTAGE (Deep Dive) */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">The Core <span className="text-emerald-600">Differentiator</span></h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                                        <Microscope size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Advanced Feedstock Processing</h4>
                                        <p className="text-slate-500">Our plants aren't limited to refined oils. We have engineered proprietary pre-treatment modules that allow for the seamless processing of Acid Oils, Sludge, and High-FFA waste—drastically reducing raw material costs for our partners.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                                        <Scaling size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Modular Scalability</h4>
                                        <p className="text-slate-500">We design our plants on a modular architecture. This means your production facility can grow as your market demand increases, without requiring a complete overhaul of existing infrastructure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100">
                            <h4 className="text-2xl font-bold text-emerald-900 mb-6">Industrial Compliance</h4>
                            <p className="text-emerald-800/70 mb-6">Our engineering follows the strictest safety and environmental protocols to ensure your plant is ready for legal commissioning from day one.</p>
                            <ul className="grid grid-cols-2 gap-4">
                                {["PESO Standards", "Pollution Control Board", "ATEX Certification", "ISO 9001:2015", "Zero Liquid Discharge", "Flameproof Design"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                                        <CheckCircle2 size={16} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. ORIGINAL: Why Partner With Us? (Expanded) */}
            <div className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">A Legacy of Engineering Excellence</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Rameshwar Enterprises combines deep domain expertise with a commitment to long-term client success and national energy security.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Technical Expertise",
                                desc: "Our team consists of veteran chemical engineers and project managers specialized in transesterification and industrial automation.",
                                icon: Award
                            },
                            {
                                title: "Global Footprint",
                                desc: "We deploy localized energy solutions across diverse geographies, adapting to local feedstock availability and regulatory frameworks.",
                                icon: Globe
                            },
                            {
                                title: "Lifecycle Support",
                                desc: "From project feasibility reports and civil engineering to post-commissioning audits and feedstock sourcing assistance.",
                                icon: Users
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. NEW: INDUSTRY IMPACT (Final Strategic Note) */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[100px]" />
                        </div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Supporting the <span className="text-emerald-400">Green Hydrogen</span> & Bio-Fuel Policy</h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    We work closely with private investors and government bodies to align our projects with the National Bio-Fuel Policy. Our plants contribute directly to the reduction of crude oil imports and the enhancement of rural economies.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-emerald-400 text-sm font-bold">
                                        <Landmark size={16} /> Atmanirbhar Bharat
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-emerald-400 text-sm font-bold">
                                        <Handshake size={16} /> PPP Models
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "CO2 Offset", value: "2.5kg/Ltr" },
                                    { label: "Import Savings", value: "Millions/yr" },
                                    { label: "Job Creation", value: "Local/Rural" },
                                    { label: "Waste Diversion", value: "100%" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl text-center">
                                        <div className="text-emerald-400 font-black text-xl mb-1">{stat.value}</div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Internal small component for the checkmark
const CheckCircle2 = ({ size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);