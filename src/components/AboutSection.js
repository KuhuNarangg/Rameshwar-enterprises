"use client";
import React from 'react';
import Image from 'next/image';
import { Users, Globe, Award, Leaf, Zap, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="bg-white pt-20 pb-20">
            {/* User's New Section */}
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
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Biodiesel is a clean-burning alternative to conventional diesel, produced from renewable resources like vegetable oils and recycled cooking grease. We are dedicated to providing end-to-end solutions that empower businesses to adopt this sustainable energy source.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Eco-Conscious", desc: "Reducing carbon footprint one plant at a time.", icon: Leaf },
                                    { title: "Innovation", desc: "Continuous R&D in biofuel technologies.", icon: Zap },
                                    { title: "Quality Assurance", desc: "International standard compliance.", icon: ShieldCheck }
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

            {/* Why Choose Us */}
            <div className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Why Partner With Us?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            We bring decades of engineering expertise to the biofuel industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Expertise", desc: "Years of specialized experience in biodiesel plant manufacturing.", icon: Award },
                            { title: "Global Reach", desc: "Serving clients across multiple continents with tailored solutions.", icon: Globe },
                            { title: "Support", desc: "Comprehensive after-sales support and technical assistance.", icon: Users }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
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
        </section>
    );
}
