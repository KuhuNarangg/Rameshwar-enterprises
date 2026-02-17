"use client";
import Link from 'next/link';
import { ArrowRight, Leaf, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/img1.jpg"
          alt="Biodiesel Plant"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-slate-900/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-sm font-bold uppercase tracking-[0.2em] mb-8 shadow-2xl">
            <Recycle size={16} className="text-emerald-400" />
            <span>Sustainable Energy Solutions</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter shadow-black drop-shadow-2xl">
            Turning Waste into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Green Power.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            We engineer advanced biodiesel plants that transform industrial waste into premium clean energy, powering a greener tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products" className="group bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2">
              Our Plants <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 text-white transition-all backdrop-blur-sm">
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Legal/Footer Link placeholder or minimal footer if needed? 
          User said "minimal", so maybe no big footer here, or just a small copyright at bottom.
          But Layout has a Footer. The user might scroll down to see the footer. 
          Since `min-h-screen`, the Footer will be below the fold or user scrolls to it.
          I will leave the Layout footer as is.
      */}
    </div>
  );
}