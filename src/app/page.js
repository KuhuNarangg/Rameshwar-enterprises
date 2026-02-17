"use client";
import Link from 'next/link';
import { ArrowRight, Recycle, CheckCircle, Phone, Mail, MapPin, Factory, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION (GREEN) --- */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/img1.jpg"
            alt="Biodiesel Plant"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-900/60" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-2xl">
              <Recycle size={14} className="text-emerald-400" />
              <span>Sustainable Energy Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight md:leading-[0.95] mb-6 md:mb-8 tracking-tighter shadow-black drop-shadow-2xl">
              Turning Waste into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Green Power.</span>
            </h1>

            <p className="text-lg md:text-2xl text-emerald-100 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
              We engineer advanced biodiesel plants that transform industrial waste into premium clean energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link href="/products" className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2">
                Our Plants <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg border-2 border-emerald-400/30 hover:bg-emerald-400/10 text-white transition-all backdrop-blur-sm">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- VIDEO SECTION (WHITE) --- */}
      <div className="bg-white">
        <VideoSection
          videoSrc="/videos/process.mp4"
          title="Engineering Excellence"
          subtitle="Watch our state-of-the-art biodiesel production process in action."
        />
      </div>

      {/* --- WHY US TEASER (LIGHT GREEN) --- */}
      <section className="py-16 md:py-24 bg-emerald-50 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-4 md:mb-6">Why Choose Rameshwar?</h2>
            <p className="text-emerald-800/80 max-w-2xl mx-auto text-sm md:text-base">Industry-leading technology designed for maximum yield and minimal downtime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {[
              { title: "98% Yield", desc: "Highest conversion rates in the market." },
              { title: "24/7 Support", desc: "Round-the-clock technical assistance." },
              { title: "Zero Waste", desc: "Closed-loop eco-friendly systems." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-lg">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-emerald-950 mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-emerald-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/why-us" className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors text-sm md:text-base">
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* --- PRODUCT TEASER (WHITE) --- */}
      <section className="py-16 md:py-24 bg-white relative text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-emerald-100">
                {/* Using img2 for variety, or reuse img1 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/img2.jpg" alt="Plant" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-emerald-900/10" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                <Factory size={12} />
                <span>Flagship Model</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-4 md:mb-6">Model R-24 <br /><span className="text-emerald-600">Automated Plant</span></h2>
              <p className="text-emerald-800 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Our fully automated multi-feedstock unit is designed for industrial-scale production. Capable of processing UCO, acid oil, and tallow with precision.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-emerald-700 text-sm md:text-base">
                <li className="flex items-center justify-center md:justify-start gap-3"><Leaf size={16} className="text-emerald-500" /> 50KL / 100KL Daily Capacity</li>
                <li className="flex items-center justify-center md:justify-start gap-3"><Leaf size={16} className="text-emerald-500" /> PLC Controlled Operation</li>
                <li className="flex items-center justify-center md:justify-start gap-3"><Leaf size={16} className="text-emerald-500" /> B100 Standard Output</li>
              </ul>
              <Link href="/products" className="inline-block bg-emerald-950 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-emerald-800 hover:text-white transition-all shadow-lg">
                View Full Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT TEASER (GREEN) --- */}
      <section className="py-16 md:py-24 bg-emerald-950 relative overflow-hidden text-center border-t border-emerald-900">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8">Ready to Start Your Project?</h2>
          <p className="text-emerald-200/60 text-lg md:text-xl mb-8 md:mb-12">Get in touch with our engineering team for a free consultation and quote.</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-sm md:text-base">
            <div className="flex items-center gap-3 text-white">
              <Phone className="text-emerald-500 w-5 h-5" /> +91 90535 71119
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="text-emerald-500 w-5 h-5" /> sohamdang0@gmail.com
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-emerald-500 w-5 h-5" /> Rohtak, Haryana
            </div>
          </div>

          <Link href="/contact" className="inline-block bg-white text-emerald-950 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-emerald-50 transition-all shadow-2xl scale-100 hover:scale-105">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}