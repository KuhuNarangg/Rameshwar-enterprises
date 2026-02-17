"use client";
import React from 'react';
import AboutSection from '../../components/AboutSection';
import PageHeader from '../../components/PageHeader';
import { Flag, Target, Users, Quote } from 'lucide-react';

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About Rameshwar"
                subtitle="Pioneering sustainable energy solutions since 2010."
                bgImage="/images/img5.jpg"
            />

            {/* Mission & Vision & Story */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro Text */}
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-wider">Engineering a Greener Future</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Rameshwar Enterprises stands at the forefront of the biofuel revolution. We don't just manufacture machinery; we engineer complete ecosystems for sustainable energy production. Our commitment goes beyond profit—we are driven by a singular purpose: to turn global waste into green power.
                        </p>
                    </div>

                    {/* Mission Focus */}
                    <div className="grid md:grid-cols-3 gap-10 mb-24">
                        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
                            <Flag className="text-emerald-600 mb-6" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To accelerate the global transition to renewable energy by providing accessible, industrial-grade biodiesel production technologies that are both economically viable and environmentally restorative.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <Target className="text-emerald-600 mb-6" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A world where industrial waste—from cooking oil to animal fats—is universally viewed as a valuable resource, powering a cleaner, carbon-neutral economy.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
                            <Users className="text-emerald-600 mb-6" size={40} />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Team</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Led by a seasoned team of chemical engineers, mechanical designers, and sustainability experts dedicated to continuous innovation and absolute client success.
                            </p>
                        </div>
                    </div>

                    {/* Our Story / Detailed Content */}
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/img3.jpg" alt="Our Facility" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-emerald-900/20" />
                            </div>
                        </div>
                        <div>
                            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Journey</span>
                            <h2 className="text-4xl font-black text-slate-900 mb-8">Decades of Innovation</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Founded in 2010, Rameshwar Enterprises began with a simple question: <strong>How can we make biodiesel production feasible for everyone?</strong> What started as a small consultancy has grown into a premier manufacturing hub for advanced biofuel plants.
                                </p>
                                <p>
                                    Over the last decade, we have refined our <strong>Continuous Transesterification Technology</strong> to handle the toughest Indian feedstocks—including high-FFA Acid Oil and Tallow—without compromising on yield.
                                </p>
                                <p>
                                    Today, our active plants across Haryana and Punjab process over <strong>500,000 liters of waste daily</strong>. We pride ourselves on being more than vendors; we are partners who walk with you from the first blueprint to the first profitable drop of fuel.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Founder's Message */}
                    <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-16 mb-24 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <Quote size={48} className="text-emerald-400 mx-auto mb-8 opacity-50" />
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                                "The Enthusiasm for Advanced Biofuel Never Stops."
                            </h2>
                            <p className="text-emerald-100 text-xl leading-relaxed italic mb-8">
                                "We don't just build machinery; we build the infrastructure for a sustainable India. Every drop of biodiesel produced is a step towards energy independence and a cleaner planet. Our commitment is to provide technology that is not just efficient, but transformative."
                            </p>
                            <div>
                                <h3 className="text-white font-bold text-lg uppercase tracking-widest">Mr. Founder Name</h3>
                                <p className="text-emerald-400 text-sm font-bold">Managing Director</p>
                            </div>
                        </div>
                    </div>

                    {/* Milestones */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our History</span>
                            <h2 className="text-3xl font-black text-slate-900">Milestones of Excellence</h2>
                        </div>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {[
                                { year: "2010", title: "Inception", desc: "Established Rameshwar Enterprises with a vision to revolutionize waste-to-energy." },
                                { year: "2015", title: "Technology Breakthrough", desc: "Developed proprietary high-shear reactor for processing Acid Oil." },
                                { year: "2018", title: "Expansion", desc: "Commissioned 50th commercial Biodiesel plant in North India." },
                                { year: "2024", title: "Global Standards", desc: "Achieved EN 14214 compliance for all new plant designs." }
                            ].map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-lg">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">{item.title}</div>
                                            <time className="font-caveat font-bold text-emerald-600">{item.year}</time>
                                        </div>
                                        <div className="text-slate-500 text-sm">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Global Presence */}
                    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-white mb-6">Our Presence</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto mb-12">
                                Headquartered in <strong>Rohtak, Haryana</strong>, we serve clients across the length and breadth of India. Our strategic location allows us to provide rapid logistical support and on-site engineering assistance.
                            </p>
                            <div className="inline-flex items-center justify-center gap-12 flex-wrap">
                                <div className="text-center">
                                    <h3 className="text-4xl font-black text-emerald-500 mb-2">100+</h3>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider">Plants Commissioned</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-black text-emerald-500 mb-2">12+</h3>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider">States Covered</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-black text-emerald-500 mb-2">24/7</h3>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider">Support Hub</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <AboutSection />
        </div>
    );
}
