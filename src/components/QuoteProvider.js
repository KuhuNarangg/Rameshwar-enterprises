"use client";
import React, { useState } from 'react';
import QuoteModal from './QuoteModal';
import { FileText } from 'lucide-react';
import { QuoteContext } from '../context/QuoteContext';

export default function QuoteProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <QuoteContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

            {/* FAB Integrated Here accessing state */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-[140] bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:bg-emerald-600 group flex items-center justify-center"
                title="Get a Quotation"
            >
                <FileText size={24} />
                <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Request Quote
                </span>
            </button>
        </QuoteContext.Provider>
    );
}
