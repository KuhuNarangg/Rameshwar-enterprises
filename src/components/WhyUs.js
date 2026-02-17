"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, FlaskConical, Fuel, ArrowDown, CheckCircle } from 'lucide-react';

const FlowNode = ({ icon: Icon, title, desc, step, isLast }) => (
    <div className="relative flex flex-col items-center text-center group">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:border-emerald-500 transition-colors duration-300">
            <Icon size={32} className="text-emerald-600" />
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                {step}
            </div>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">{desc}</p>

        {!isLast && (
            <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-40px)] h-[2px] bg-slate-200">
                <div className="absolute right-0 -top-1.5 text-slate-300">
                    <ArrowDown className="transform -rotate-90" size={16} />
                </div>
            </div>
        )}
        {!isLast && (
            <div className="md:hidden my-4 text-slate-300">
                <ArrowDown size={24} />
            </div>
        )}
    </div>
);

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-slate-200/50 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-slate-100"
                    >
                        <database size={12} className="fill-emerald-600" />
                        <span>Seamless Operations</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Why Choose <span className="text-emerald-600">Rameshwar?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        Our integrated process ensures maximum efficiency and premium B100 output with minimal waste.
                    </motion.p>
                </div>

                {/* Flow Chart */}
                <div className="mb-24">
                    <div className="grid md:grid-cols-4 gap-8 relative items-start">
                        <FlowNode
                            icon={Database}
                            step="01"
                            title="Multi-Feedstock"
                            desc="Capable of processing UCO, Acid Oil, and Vegetable Fats."
                        />
                        <FlowNode
                            icon={Filter}
                            step="02"
                            title="Pre-Treatment"
                            desc="Automated impurity removal and moisture reduction."
                        />
                        <FlowNode
                            icon={FlaskConical}
                            step="03"
                            title="Reaction"
                            desc="Precision transesterification with catalyst recovery."
                        />
                        <FlowNode
                            icon={Fuel}
                            step="04"
                            title="Premium Biofuel"
                            desc="High-grade B100 fuel ready for industrial use."
                            isLast={true}
                        />
                    </div>
                </div>

                {/* Stats / Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "98% Yield", desc: "Industry-leading conversion rates ensuring maximum profitability." },
                        { title: "24/7 Support", desc: "Round-the-clock technical assistance and plant monitoring." },
                        { title: "Zero Waste", desc: "Closed-loop systems that recycle water and catalysts." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:border-emerald-200 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
