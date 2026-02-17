"use client";
import Link from 'next/link';
import { ArrowRight, Recycle, CheckCircle, Phone, Mail, MapPin, Factory, Leaf, Quote, Newspaper, TrendingUp, User } from 'lucide-react';
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-48 pb-12">
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

      {/* --- DISCOVER RAMESHWAR (ABOUT TEASER) --- */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/img5.jpg" alt="About Us" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-emerald-900/10" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-emerald-50 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Market Leaders</h4>
                    <p className="text-xs text-slate-500">Top Rated Since 2010</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">
                Pioneering the Future of <span className="text-emerald-600">Renewable Energy.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Rameshwar Enterprises, we believe that waste is simply energy waiting to be unlocked. Based in Rohtak, Haryana, we are India's leading manufacturers of automated Biodiesel Processing Plants.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our proprietary technology allows for the conversion of multiple feedstocks—from Used Cooking Oil (UCO) to Tallow—into premium IS 15607 compliant biodiesel. We don't just build machines; we build sustainable businesses.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 border-b-2 border-emerald-600 text-emerald-900 font-bold uppercase tracking-widest pb-1 hover:text-emerald-600 transition-colors">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION (WHITE) --- */}
      <div className="bg-slate-50">
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

      {/* --- TESTIMONIALS (LIGHT EMERALD) --- */}
      <section className="py-20 md:py-32 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-emerald-800/80 max-w-2xl mx-auto text-lg">See what our partners have to say about our technology and support.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Rameshwar's automated plant increased our production efficiency by 200%. Their support team is unmatched.",
                name: "Rajesh Kumar",
                role: "Director, GreenFuels India",
                loc: "Punjab"
              },
              {
                text: "Converting Acid Oil to B100 was a challenge until we installed the R-24 model. The ROI has been phenomenal.",
                name: "Amit Singh",
                role: "MD, EcoEnergy Solutions",
                loc: "Haryana"
              },
              {
                text: "The build quality and safety standards are world-class. Highly recommend for anyone entering the biofuel sector.",
                name: "Vikram Malhotra",
                role: "Plant Manager, BioTech Corp",
                loc: "Rajasthan"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-100 flex flex-col justify-between hover:scale-105 transition-transform">
                <div>
                  <Quote size={40} className="text-emerald-300 mb-6" />
                  <p className="text-slate-600 italic text-lg mb-8 leading-relaxed">"{item.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.role}, {item.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LATEST NEWS (WHITE) --- */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Insights</span>
              <h2 className="text-3xl md:text-5xl font-black text-emerald-950">Latest News</h2>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-emerald-900 font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Biodiesel Mandate: 5% Blending by 2030",
                date: "Oct 12, 2024",
                category: "Policy",
                desc: "Government announces new incentives for biofuel manufacturers to meet blending targets.",
                img: "/images/img4.jpg" // Reuse existing image
              },
              {
                title: "Carbon Credits: A New Revenue Stream",
                date: "Nov 05, 2024",
                category: "Business",
                desc: "How biodiesel plants can leverage carbon trading to boost profitability significantly.",
                img: "/images/img3.jpg"
              },
              {
                title: "Handling High FFA Feedstocks",
                date: "Dec 01, 2024",
                category: "Technology",
                desc: "Our new pre-treatment module effectively processes feedstocks with up to 15% FFA.",
                img: "/images/img6.jpg"
              }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    {news.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <Newspaper size={14} /> {news.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">{news.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{news.desc}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Read Article <ArrowRight size={12} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FUTURE VISION (DARK GREEN) --- */}
      <section className="py-20 md:py-32 bg-emerald-900 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Leaf size={48} className="text-emerald-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-normal">
            The Future is <span className="text-emerald-400">Green.</span> <br /> And It's Powered by You.
          </h2>
          <div className="space-y-6 text-emerald-100 text-lg md:text-xl leading-relaxed font-light">
            <p>
              As the world pivots away from fossil fuels, the demand for clean, renewable energy is skyrocketing. Biodiesel is not just an alternative; it is the immediate solution to reducing our carbon footprint without overhauling existing infrastructure.
            </p>
            <p>
              By partnering with Rameshwar Enterprises, you are not just starting a business; you are joining a global movement. A movement towards energy independence, waste reduction, and a healthier planet for future generations.
            </p>
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