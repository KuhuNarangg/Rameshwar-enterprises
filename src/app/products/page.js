"use client";
import React from 'react';
import ProductSection from '../../components/ProductSection';
import PageHeader from '../../components/PageHeader';
import { ArrowRight, Beaker, CheckCircle, Factory, Settings } from 'lucide-react';

export default function ProductsPage() {
    return (
        <div>
            <PageHeader
                title="Biodiesel Production Plant"
                subtitle="State-of-the-art automated units designed for maximum efficiency and premium B100 output."
            />

            {/* Process Flow Chart */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Production Workflow</h2>
                        <p className="text-slate-500">From feedstock to fuel, our integrated 4-stage process.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-0" />

                        {[
                            { title: "Feedstock", icon: Factory, step: "01", color: "bg-blue-500" },
                            { title: "Pre-Treatment", icon: Settings, step: "02", color: "bg-emerald-500" },
                            { title: "Reaction", icon: Beaker, step: "03", color: "bg-purple-500" },
                            { title: "Purification", icon: CheckCircle, step: "04", color: "bg-emerald-600" }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center w-full md:w-64">
                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-md`}>
                                    <item.icon size={32} />
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs border-4 border-white">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-slate-900">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Technical Specs Table */}
            <div className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 text-center">Technical Specifications</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left">
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { label: "Daily Capacity", value: "50 KL / 100 KL / 350 KL" },
                                    { label: "Feedback Types", value: "UCO, Acid Oil, Tallow, Vegetable Fats" },
                                    { label: "Reaction Type", value: "Multi-stage Transesterification" },
                                    { label: "Automation Level", value: "Fully PLC Controlled (SCADA Optional)" },
                                    { label: "Power Consumption", value: "Low (Heat Recovery System Included)" },
                                    { label: "Area Required", value: "2500 sq. ft. (min)" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="p-6 font-bold text-slate-700 w-1/3">{row.label}</td>
                                        <td className="p-6 text-slate-600 font-mono">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Existing Section */}
            <ProductSection />
        </div>
    );
}
