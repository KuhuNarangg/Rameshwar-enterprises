"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="bg-white pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Side: Contact Details */}
                    <div>
                        <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter italic mb-8">Get in <br /><span className="text-emerald-600">Touch.</span></h1>
                        <p className="text-lg text-slate-500 mb-12 max-w-md">
                            Connect with our engineering team for a personalized technical consultation regarding your biodiesel requirements.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                                    <p className="text-lg font-black text-slate-900">+91 90535 71119</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                                    <p className="text-lg font-black text-slate-900">sohamdang0@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-black text-slate-900">Rohtak, Haryana</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100"
                    >
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const data = Object.fromEntries(formData);
                                const subject = encodeURIComponent(`Inquiry from ${data.name}`);
                                const body = encodeURIComponent(`${data.message}\n\nContact Details:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`);
                                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sohamdang0@gmail.com&su=${subject}&body=${body}`, '_blank');
                            }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                                    <input name="name" type="text" placeholder="John Doe" required className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone</label>
                                    <input name="phone" type="tel" placeholder="+91..." className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Corporate Email</label>
                                <input name="email" type="email" placeholder="email@company.com" required className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                                <textarea name="message" rows={4} placeholder="Your requirements..." required className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                                Send Inquiry <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
