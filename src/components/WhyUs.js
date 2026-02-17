"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, FlaskConical, Fuel, ArrowDown, CheckCircle, TrendingUp, Settings, ShieldCheck } from 'lucide-react';

const FlowNode = ({ icon: Icon, title, desc, step, isLast }) => (
    <div className="relative flex flex-col items-center text-center group">
        <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 relative z-10 border-2 border-slate-100 group-hover:border-emerald-500 transition-all duration-300 group-hover:scale-105">
            <Icon size={40} className="text-emerald-600" />
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                {step}
            </div>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 max-w-[220px] leading-relaxed">{desc}</p>

        {!isLast && (
            <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-40px)] h-[3px] bg-slate-200">
                <div className="absolute right-0 -top-1.5 text-slate-300">
                    <ArrowDown className="transform -rotate-90" size={20} />
                </div>
            </div>
        )}
        {!isLast && (
            <div className="md:hidden my-6 text-slate-300">
                <ArrowDown size={32} />
            </div>
        )}
    </div>
);

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-white relative overflow-hidden">
            {/* Minimal Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 shadow-sm text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-100"
                    >
                        <TrendingUp size={12} className="fill-emerald-600" />
                        <span>Seamless Operations</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-emerald-950 mb-8 tracking-tight"
                    >
                        Why Choose <span className="text-emerald-600">Rameshwar?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-800/80 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        Our integrated process ensures maximum efficiency and premium B100 output with minimal waste. We don't just build plants; we engineer sustainable success.
                    </motion.p>
                </div>

                {/* Detailed Flow Chart */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold text-center text-slate-900 mb-16 uppercase tracking-widest">The Production Workflow</h3>
                    <div className="grid md:grid-cols-4 gap-8 relative items-start">
                        <FlowNode
                            icon={Database}
                            step="01"
                            title="Multi-Feedstock Input"
                            desc="Capable of simultaneously processing various feedstocks like UCO, Acid Oil, Tallow, and Vegetable Fats without reconfiguration."
                        />
                        <FlowNode
                            icon={Filter}
                            step="02"
                            title="Advanced Pre-Treatment"
                            desc="Automated multi-stage filtration removes impurities, lowers FFA content, and reduces moisture to <0.1% for optimal reaction."
                        />
                        <FlowNode
                            icon={FlaskConical}
                            step="03"
                            title="Transesterification"
                            desc="Precision-controlled reaction with catalyst recovery system. High-shear mixing ensures 98.5% conversion efficiency."
                        />
                        <FlowNode
                            icon={Fuel}
                            step="04"
                            title="Premium Biofuel (B100)"
                            desc="Final purification yields high-grade B100 biodiesel meeting IS 15607 standards, ready for direct industrial or automotive use."
                            isLast={true}
                        />
                    </div>
                </div>

                {/* Stats / Features Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: TrendingUp,
                            title: "98% Conversion Yield",
                            desc: "Our proprietary reactor design ensures industry-leading conversion rates, maximizing your profit per liter of feedstock."
                        },
                        {
                            icon: Settings,
                            title: "24/7 Remote Monitoring",
                            desc: "IoT-enabled PLC allows our engineering team to monitor plant health remotely and provide instant support."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Zero Waste Technology",
                            desc: "Closed-loop systems recycle water and methanol. By-products like Glycerin are purified for additional revenue streams."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-emerald-200 hover:shadow-2xl transition-all group"
                        >
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
