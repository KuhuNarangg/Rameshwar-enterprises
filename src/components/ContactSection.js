"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Minimal Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Side: Contact Details */}
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4 md:mb-6 tracking-tight">Get in <span className="text-emerald-600">Touch</span></h1>
                        <p className="text-base md:text-lg text-emerald-800/80 mb-8 md:mb-12 max-w-md leading-relaxed">
                            Connect with our engineering team for a personalized technical consultation regarding your biodiesel requirements.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-emerald-900">Phone</p>
                                    <p className="text-base md:text-lg text-emerald-700">+91 90535 71119</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-emerald-900">Email</p>
                                    <p className="text-base md:text-lg text-emerald-700 break-all md:break-normal">sohamdang0@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-emerald-900">Location</p>
                                    <p className="text-base md:text-lg text-emerald-700">Rohtak, Haryana</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 h-fit"
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
                            className="space-y-4 md:space-y-5"
                        >
                            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-sm font-semibold text-emerald-900 ml-1">Full Name</label>
                                    <input name="name" type="text" placeholder="John Doe" required className="w-full px-4 py-3 md:px-5 md:py-3 rounded-xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-emerald-900 placeholder:text-emerald-900/30 text-sm md:text-base" />
                                </div>
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-sm font-semibold text-emerald-900 ml-1">Phone</label>
                                    <input name="phone" type="tel" placeholder="+91..." className="w-full px-4 py-3 md:px-5 md:py-3 rounded-xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-emerald-900 placeholder:text-emerald-900/30 text-sm md:text-base" />
                                </div>
                            </div>

                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-sm font-semibold text-emerald-900 ml-1">Corporate Email</label>
                                <input name="email" type="email" placeholder="email@company.com" required className="w-full px-4 py-3 md:px-5 md:py-3 rounded-xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-emerald-900 placeholder:text-emerald-900/30 text-sm md:text-base" />
                            </div>

                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-sm font-semibold text-emerald-900 ml-1">Message</label>
                                <textarea name="message" rows={4} placeholder="Your requirements..." required className="w-full px-4 py-3 md:px-5 md:py-3 rounded-xl bg-emerald-50/50 border border-emerald-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-emerald-900 placeholder:text-emerald-900/30 resize-none text-sm md:text-base"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-emerald-600 text-white py-3 md:py-4 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/20 active:scale-95">
                                Send Inquiry <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
