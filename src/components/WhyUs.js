"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Database, Filter, FlaskConical, Fuel, ArrowDown,
    TrendingUp, Settings, ShieldCheck, Zap, Award,
    CheckCircle2, Beaker, Factory, Gauge, Leaf, ShieldAlert, Cpu
} from 'lucide-react';

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-white relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 1. HERO HEADER */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-6 tracking-tight">
                        Engineering <span className="text-emerald-600">Bio-Industrial</span> Sovereignty
                    </h2>
                    <p className="text-emerald-800/80 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Rameshwar Enterprises delivers end-to-end EPC (Engineering, Procurement, and Construction) solutions for high-yield biodiesel production, optimized for the unique chemical profile of Indian feedstocks.
                    </p>
                </div>

                {/* 2. THE TECHNICAL DEEP DIVE (Written Info) */}
                <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">The "Multi-Stage" Chemical Advantage</h3>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Most conventional plants struggle with <strong>Acid Oil</strong> and <strong>Used Cooking Oil (UCO)</strong> due to high Free Fatty Acid (FFA) content. When high-FFA oil hits a standard catalyst, it creates soap, which destroys yield and clogs machinery.
                            </p>
                            <p>
                                Our proprietary <strong>Dual-Phase Esterification</strong> process pre-treats these acids, converting them into biodiesel <em>before</em> the main reaction starts. This turns a waste product into a primary yield driver, allowing you to process lower-grade, cheaper feedstocks that your competitors cannot use.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {[
                                    "Elimination of soap formation via acid-catalyst pre-treatment",
                                    "High-shear cavitation technology for 99% molecular contact",
                                    "Vacuum distillation for crystal-clear B100 clarity",
                                    "Real-time PLC adjustment for feedstock density shifts"
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-800">
                                        <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20"><Beaker size={120} /></div>
                        <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-8">Performance Comparison</h4>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2 italic text-slate-400">Yield Efficiency</div>
                                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[98.5%] flex items-center px-4 text-[10px] font-bold">RAMESHWAR (98.5%)</div>
                                </div>
                                <div className="h-4 bg-slate-800 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-slate-500 w-[82%] flex items-center px-4 text-[10px] font-bold">INDUSTRY AVG (82%)</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-black text-emerald-400">98%</div>
                                    <div className="text-[10px] uppercase text-slate-400 font-bold">Methanol Recovery</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-black text-emerald-400">&lt; 0.1%</div>
                                    <div className="text-[10px] uppercase text-slate-400 font-bold">Moisture Content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEW SECTION: FEEDSTOCK VERSATILITY EXPLRAINED */}
                <div className="mb-32">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">Feedstock <br /><span className="text-emerald-600">Flexibility</span></h3>
                            <p className="text-slate-500 leading-relaxed">
                                The biggest risk in biodiesel production is the fluctuating price of raw materials. Our plants are "Feedstock Agnostic," meaning you can switch raw materials based on market pricing without hardware changes.
                            </p>
                        </div>
                        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                            <div className="p-6 border-l-4 border-emerald-500 bg-slate-50">
                                <h4 className="font-bold text-slate-900 mb-2">Used Cooking Oil (UCO)</h4>
                                <p className="text-sm text-slate-600">Our system handles high-polymerized oils from industrial fryers, ensuring the breakdown of complex carbon chains into clean-burning methyl esters.</p>
                            </div>
                            <div className="p-6 border-l-4 border-emerald-500 bg-slate-50">
                                <h4 className="font-bold text-slate-900 mb-2">Non-Edible Oils</h4>
                                <p className="text-sm text-slate-600">Efficiently process Jatropha, Pongamia, and Neem oils. Our pre-filtration stage removes non-glyceride gums that usually choke standard reactors.</p>
                            </div>
                            <div className="p-6 border-l-4 border-emerald-500 bg-slate-50">
                                <h4 className="font-bold text-slate-900 mb-2">Animal Fats & Tallow</h4>
                                <p className="text-sm text-slate-600">Integrated heat-trace piping keeps high-pour-point fats in a liquid state, preventing solidification and ensuring smooth continuous flow.</p>
                            </div>
                            <div className="p-6 border-l-4 border-emerald-500 bg-slate-50">
                                <h4 className="font-bold text-slate-900 mb-2">Acid Oil / Sludge</h4>
                                <p className="text-sm text-slate-600">Convert refinery waste into profit. Our dual-catalyst system manages FFAs up to 40%, a feat impossible for basic batch-process plants.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. PRODUCTION WORKFLOW (Condensed Flowchart) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl font-black uppercase tracking-widest text-slate-900">Integrated Process Flow</h3>
                        <p className="text-slate-500">Continuous flow system from raw waste to IS-Certified fuel</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                        {[
                            { icon: Database, title: "Feedstock", sub: "Acid Oil / UCO" },
                            { icon: Filter, title: "Refining", sub: "Centrifugal Separation" },
                            { icon: FlaskConical, title: "Reaction", sub: "Transesterification" },
                            { icon: Zap, title: "Purification", sub: "Dry Washing/Vacuum" },
                            { icon: Fuel, title: "Output", sub: "Grade B100" }
                        ].map((item, i, arr) => (
                            <React.Fragment key={i}>
                                <div className="flex flex-col items-center group w-full">
                                    <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                        <item.icon size={32} />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <div className="font-bold text-slate-900">{item.title}</div>
                                        <div className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">{item.sub}</div>
                                    </div>
                                </div>
                                {i !== arr.length - 1 && (
                                    <div className="hidden md:block text-slate-200">
                                        <ArrowDown className="rotate-[-90deg]" size={24} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* NEW SECTION: THE BRAINS - PLC & AUTOMATION */}
                <div className="mb-32 bg-slate-900 rounded-[3rem] overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <Cpu className="text-emerald-500 mb-6" size={48} />
                            <h3 className="text-3xl font-bold text-white mb-6">Autonomous Operation via <span className="text-emerald-500">Smart-Flow PLC</span></h3>
                            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    Modern biodiesel production is a game of variables. A slight change in temperature or methanol ratio can ruin an entire batch. Our plants eliminate human error through a <strong>Fully Automated SCADA Control System.</strong>
                                </p>
                                <p>
                                    Sensors at every stage monitor flow rates, pH levels, and pressure. If the system detects an anomaly, it auto-corrects the chemical dosage in milliseconds. You can monitor your entire plant's health, daily output, and utility consumption directly from your smartphone.
                                </p>
                            </div>
                        </div>
                        <div className="bg-emerald-600 p-12 md:p-16 flex flex-col justify-center text-white">
                            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <ShieldAlert /> Safety & Redundancy
                            </h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="font-black text-emerald-900">01</div>
                                    <div>
                                        <span className="block font-bold">Auto-Shutdown Protocols</span>
                                        <span className="text-sm text-emerald-100">Zero-leakage magnetic pumps and automatic emergency vents in case of pressure spikes.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="font-black text-emerald-900">02</div>
                                    <div>
                                        <span className="block font-bold">Flame-Proof Design</span>
                                        <span className="text-sm text-emerald-100">All electrical components are IP-65 certified and flame-proof to ensure safety in high-methanol environments.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="font-black text-emerald-900">03</div>
                                    <div>
                                        <span className="block font-bold">Remote Diagnostics</span>
                                        <span className="text-sm text-emerald-100">Our engineers can dial into your system remotely to patch software or diagnose mechanical issues.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. TECHNICAL SPECIFICATIONS TABLE */}
                <div className="mb-32">
                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
                        <div className="bg-slate-900 p-8 text-white">
                            <h3 className="text-2xl font-bold">Plant Capability Matrix</h3>
                            <p className="text-slate-400 text-sm">Industrial scale options tailored for municipal and private ventures.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-black tracking-widest">
                                        <th className="p-6 border-b">Feature</th>
                                        <th className="p-6 border-b">RE-Series (50 KLPD)</th>
                                        <th className="p-6 border-b">RE-Series (100+ KLPD)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    <tr className="border-b hover:bg-emerald-50/30 transition-colors">
                                        <td className="p-6 font-bold">Operational Mode</td>
                                        <td className="p-6">Semi-Continuous</td>
                                        <td className="p-6">Fully Automated (PLC/SCADA)</td>
                                    </tr>
                                    <tr className="border-b hover:bg-emerald-50/30 transition-colors">
                                        <td className="p-6 font-bold">Power Consumption</td>
                                        <td className="p-6">~0.18 kWh/Litre</td>
                                        <td className="p-6">~0.15 kWh/Litre (Heat recovery)</td>
                                    </tr>
                                    <tr className="border-b hover:bg-emerald-50/30 transition-colors">
                                        <td className="p-6 font-bold">By-Product Purity</td>
                                        <td className="p-6">80% Crude Glycerin</td>
                                        <td className="p-6">95% Pharma-Grade Glycerin</td>
                                    </tr>
                                    <tr className="border-b hover:bg-emerald-50/30 transition-colors">
                                        <td className="p-6 font-bold">Compliance</td>
                                        <td className="p-6">IS 15607</td>
                                        <td className="p-6">IS 15607 / ASTM D6751 / EN 14214</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* NEW SECTION: CIRCULAR ECONOMY & ZERO WASTE */}
                <div className="mb-32 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <Leaf className="text-emerald-600 mb-2" />
                                <h5 className="font-bold text-slate-900 italic">Methanol Recovery</h5>
                                <p className="text-xs text-slate-500">98% of excess methanol is condensed and reused in the next cycle, cutting raw material costs by 12%.</p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <Gauge className="text-emerald-600 mb-2" />
                                <h5 className="font-bold text-slate-900 italic">Glycerin Refining</h5>
                                <p className="text-xs text-slate-500">Convert the byproduct glycerin into technical-grade liquid, creating a secondary revenue stream of ₹15-20/Litre.</p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <ShieldCheck className="text-emerald-600 mb-2" />
                                <h5 className="font-bold text-slate-900 italic">Zero Liquid Discharge</h5>
                                <p className="text-xs text-slate-500">Our dry-washing system uses specialized resins instead of water, eliminating the need for expensive ETP plants.</p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <Factory className="text-emerald-600 mb-2" />
                                <h5 className="font-bold text-slate-900 italic">Small Footprint</h5>
                                <p className="text-xs text-slate-500">Vertical modular design requires 30% less land area compared to conventional horizontal plants.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 uppercase">The <span className="text-emerald-600">Zero-Waste</span> Philosophy</h3>
                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                            <p>
                                At Rameshwar Enterprises, we believe that waste is simply a misplaced resource. Our plants are designed to operate as a <strong>Closed-Loop Ecosystem.</strong>
                            </p>
                            <p>
                                While other plants produce contaminated wastewater and low-purity waste, our proprietary "Dry Wash" purification technology ensures that every single input is accounted for. This not only makes your plant more profitable but also ensures you are compliant with the strictest environmental regulations without the headache of wastewater management.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 5. WRITTEN INFO: THE "EPC" PARTNERSHIP */}
                <div className="grid md:grid-cols-3 gap-12 bg-emerald-50 rounded-[3rem] p-12">
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-black text-emerald-950 mb-6 uppercase tracking-tight">Turnkey EPC Delivery Model</h3>
                        <p className="text-emerald-800/80 text-lg leading-relaxed mb-6">
                            Building a biodiesel plant is not just about buying a reactor; it is about site-specific engineering. Our <strong>Engineering, Procurement, and Construction (EPC)</strong> model ensures that your project is handled by one single point of accountability.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-emerald-900 mb-2">Phase I: Engineering</h4>
                                <p className="text-sm text-emerald-800/60">P&ID Diagrams, Civil structural design, and electrical load balancing for local grid standards.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-900 mb-2">Phase II: Installation</h4>
                                <p className="text-sm text-emerald-800/60">On-site assembly, pipeline pressure testing, and multi-stage leak detection audits.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-emerald-600 rounded-3xl p-8 text-white flex flex-col justify-center">
                        <Award size={40} className="mb-4" />
                        <h4 className="text-xl font-bold mb-4">Post-Commissioning Support</h4>
                        <p className="text-emerald-50 text-sm leading-relaxed mb-6">
                            We provide a 1-year operational hand-holding period where our engineers are available 24/7 for remote PLC troubleshooting.
                        </p>
                        <div className="text-xs font-black uppercase tracking-widest opacity-60">Uptime Guarantee: 99.2%</div>
                    </div>
                </div>
            </div>
        </section>
    );
}