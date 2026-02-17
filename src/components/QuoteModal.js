"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, FileText } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 m-auto w-[90%] md:w-full max-w-lg h-fit max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl z-[160] p-6 md:p-8 border border-slate-100"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-4">
                                <FileText size={24} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Request Quotation</h2>
                            <p className="text-slate-500 text-sm mt-2">Get a detailed pricing structure for your plant.</p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const data = Object.fromEntries(formData);
                                const subject = encodeURIComponent(`Quotation Request from ${data.name}`);
                                const body = encodeURIComponent(`${data.message}\n\nContact Details:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`);
                                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sohamdang0@gmail.com&su=${subject}&body=${body}`, '_blank');
                                onClose();
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <input name="name" type="text" placeholder="Full Name" required className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900" />
                            </div>
                            <div>
                                <input name="phone" type="tel" placeholder="Phone Number" required className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900" />
                            </div>
                            <div>
                                <input name="email" type="email" placeholder="Email Address" required className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900" />
                            </div>
                            <div>
                                <textarea name="message" rows={3} placeholder="Tell us about your requirements..." required className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-900"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
                                Submit Request <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
