"use client";
import React from 'react';
import AboutSection from '../../components/AboutSection';
import PageHeader from '../../components/PageHeader';
import { Flag, Target, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About Rameshwar"
                subtitle="Pioneering sustainable energy solutions since 2010."
            />

            {/* Mission & Vision */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
                            <Flag className="text-emerald-600 mb-6" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To accelerate the global transition to renewable energy by providing accessible, high-efficiency biodiesel production technologies.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <Target className="text-emerald-600 mb-6" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A world where industrial waste is viewed as a valuable resource, powering a cleaner and greener economy.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
                            <Users className="text-emerald-600 mb-6" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Team</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Led by a team of chemical engineers and sustainability experts dedicated to innovation and client success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <AboutSection />
        </div>
    );
}
