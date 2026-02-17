"use client";
import React from 'react';
import ProductSection from '../../components/ProductSection';
import PageHeader from '../../components/PageHeader';
import { ArrowRight, Beaker, CheckCircle, Factory, Settings, Zap, Shield, Leaf } from 'lucide-react';

export default function ProductsPage() {
    return (
        <div>
            <PageHeader
                title="Biodiesel Production Plant"
                subtitle="State-of-the-art automated units designed for maximum efficiency and premium B100 output."
                bgImage="/images/img4.jpg"
            />

            {/* Technology Overview */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Core Technology</span>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">Automated Continuous Processing</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Our flagship <strong>Series-R Plants</strong> revolutionize biodiesel production by moving away from archaic batch processing. We utilize a <strong>High-Shear Hydrodynamic Cavitation</strong> reactor that ensures instant mixing of oil and catalyst at a molecular level.
                                </p>
                                <p>
                                    This advanced method reduces reaction time from hours to seconds, completely eliminating the need for massive settling tanks. The result is a compact, energy-efficient footprint that produces <strong>EN 14214 / IS 15607 standard biodiesel</strong> with 99% conversion efficiency.
                                </p>
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-center gap-2"><CheckCircle size={20} className="text-emerald-500" /> <strong>Multi-Feedstock Ready:</strong> Process UCO, Tallow, and Acid Oil simultaneously.</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={20} className="text-emerald-500" /> <strong>Zero-Effluent:</strong> Closed-loop water and methanol recovery.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-emerald-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/img6.jpg" alt="Reactor Core" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent" />
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Production Workflow</h2>
                        <p className="text-slate-500">From raw feedstock to premium fuel, our integrated 4-stage process ensures maximum purity.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-0" />

                        {[
                            { title: "Feedstock Input", icon: Factory, step: "01", color: "bg-blue-500", desc: "Automated dosing of UCO, Tallow, or Acid Oil." },
                            { title: "Nano-Cavitation", icon: Settings, step: "02", color: "bg-emerald-500", desc: "High-shear mixing for instant transesterification." },
                            { title: "Reaction & Settling", icon: Beaker, step: "03", color: "bg-purple-500", desc: "Rapid glycerin separation via centrifugal force." },
                            { title: "Dry Wash Purification", icon: CheckCircle, step: "04", color: "bg-emerald-600", desc: "Ion-exchange resin filtering for pure B100." }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center w-full md:w-64 h-64 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-md`}>
                                    <item.icon size={32} />
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs border-4 border-white">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Step-by-Step Breakdown */}
                <div className="mt-24 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">01</span>
                            Feedstock Pre-treatment
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Raw feedstock often contains impurities, moisture, and high Free Fatty Acids (FFA). Our automated pre-treatment module filters solid contaminants and reduces moisture content below 0.1%. For high-FFA oils (like Acid Oil), an acid esterification process is triggered automatically to prevent soap formation, ensuring a smooth conversion process.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">02</span>
                            Nano-Cavitation Reactor
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            This is the heart of the Series-R plant. Unlike conventional stirring tanks, our <strong>Hydrodynamic Cavitation</strong> technology creates microscopic cavities that implode with high energy. This results in intense localized temperatures and pressures, forcing immediate reaction between oil and methanol. The result? <strong>99% conversion in seconds</strong>, not hours.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">03</span>
                            Reaction & Settling
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Post-reaction, the mixture enters a high-speed centrifugal separator. Here, heavy glycerin is instantly separated from the lighter biodiesel methyl ester. This continuous separation eliminates the need for massive gravity settling tanks, saving huge amounts of floor space and reducing processing time drastically.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">04</span>
                            Dry Wash Purification
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            The final step ensures purity. We avoid water washing (which creates effluent) and instead use a specialized <strong>Ion-Exchange Resin</strong> column. This "Dry Wash" removes trace catalyst, soap, and moisture, polishing the biodiesel to meet strict EN 14214 and IS 15607 standards. The final fuel is crystal clear, stable, and ready for use.
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Highlights & Features */}
            <div className="py-20 bg-emerald-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Series-R</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Engineered for Efficiency</h2>
                        <p className="text-emerald-200/60 max-w-2xl mx-auto text-lg">Every component is designed to maximize output and minimize operational costs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: "High-FFA Handling", desc: "Process feedstocks with up to 100% FFA without soap formation.", icon: Beaker },
                            { title: "Energy Efficient", desc: "Heat recovery systems reduce thermal energy consumption by 40%.", icon: Zap },
                            { title: "Fully Automated", desc: "PLC/SCADA integration for single-touch operation and error reduction.", icon: Settings },
                            { title: "Compact Design", desc: "Skid-mounted units require minimal civil work and floor space.", icon: Leaf },
                            { title: "IS 15607 Compliant", desc: "Guaranteed output quality meeting Indian and European standards.", icon: CheckCircle },
                            { title: "Low Maintenance", desc: "Robust SS-316 construction ensures longevity and minimal downtime.", icon: Shield }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <item.icon size={32} className="text-emerald-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-emerald-200/70 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Industries We Serve */}
                    <div className="border-t border-white/10 pt-20">
                        <div className="text-center mb-16">
                            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2 block">Applications</span>
                            <h3 className="text-3xl font-black text-white">Powering Diverse Industries</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Transportation Fleets", desc: "Biodiesel is a seamless drop-in replacement for conventional diesel. Fleet operators for logistics and public transport can significantly reduce their carbon footprint and fuel costs without any engine modifications.", icon: ArrowRight },
                                { title: "Industrial Boilers", desc: "A cleaner, more efficient alternative to Furnace Oil (FO) and Light Diesel Oil (LDO). Switching to biodiesel significantly reduces sulfur and particulate emissions, helping factories meet strict environmental norms.", icon: Factory },
                                { title: "Power Generation", desc: "Reliable, high-cetane fuel for DG sets and backup generators. Whether for commercial complexes or critical infrastructure, our biodiesel ensures uninterrupted power with lower exhaust smoke.", icon: Zap },
                                { title: "Agriculture", desc: "Empowering the backbone of our economy. Our biodiesel provides a cost-effective fueling solution for tractors and irrigation pumps, helping farmers lower their operational expenses while going green.", icon: Leaf },
                                { title: "Construction & Mining", desc: "Engineered for heavy-duty performance. From earthmovers to excavators, our fuel delivers the high torque and lubricity required for machinery operating in the most demanding environments.", icon: Settings },
                                { title: "Marine & Shipping", desc: "Meeting the tides of change. Our ISO-compliant biodiesel serves as an excellent low-sulfur marine fuel, helping coastal and deep-sea vessels adhere to international maritime environmental regulations.", icon: Shield }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 bg-emerald-900/50 p-6 rounded-xl border border-emerald-800 hover:border-emerald-500 transition-colors">
                                    <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400 shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-emerald-100/70 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="py-20 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-slate-900 uppercase mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What feedstocks can your plant process?",
                                a: "Our Series-R plants are designed for maximum versatility. They can efficiently process a wide range of feedstocks including Used Cooking Oil (UCO), Acid Oil, Tallow (Animal Fat), Palm Stearin, Soyabean Oil, and other high-FFA vegetable fats. The multi-feedstock capability ensures you can always source the most improved raw materials available in the market."
                            },
                            {
                                q: "What is the warranty period and support coverage?",
                                a: "We provide a comprehensive 1-year onsite warranty for all mechanical and electrical components. This covers replacement of any defective parts and labor. We also offer extended Annual Maintenance Contracts (AMC) after the warranty period, ensuring your plant runs at peak efficiency for decades."
                            },
                            {
                                q: "Do you provide training for our operators?",
                                a: "Absolutely. We believe that a well-trained operator is key to plant longevity. Our engineers provide 2 weeks of intensive onsite training to your team during the commissioning phase. We cover standard operations, safety protocols, troubleshooting, and routine maintenance."
                            },
                            {
                                q: "What is the typical ROI for a 50KL plant?",
                                a: "Return on Investment depends on feedstock availability and prevailing diesel prices. However, due to our technology's ability to process cheaper, lower-grade feedstocks (like Acid Oil), most of our clients achieve Break-Even within 14-18 months of operation. We can provide a detailed feasibility report based on your specific location and inputs."
                            },
                            {
                                q: "Is the biodiesel produced compliant with standards?",
                                a: "Yes, the biodiesel produced from our Series-R plants meets and often exceeds European (EN 14214), American (ASTM D6751), and Indian (IS 15607) standards. The Dry Wash purification ensures moisture and particulate matter are well below permissible limits, making it safe for all diesel engines."
                            },
                            {
                                q: "What site requirements are needed for installation?",
                                a: "For a standard 30-50 TPD plant, you typically need a shed area of approximately 3000-5000 sq. ft. Our skid-mounted design minimizes the need for extensive civil foundations. You will also need standard industrial power connection and a water source for the cooling tower."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-start gap-3">
                                    <span className="text-emerald-500 text-2xl font-black">Q.</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 leading-relaxed pl-8 border-l-2 border-emerald-100 ml-1">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Technical Specs Table */}
            <div className="py-20 bg-white">
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

            {/* Quality Assurance Narrative */}
            <div className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Promise</span>
                    <h2 className="text-3xl font-black text-slate-900 mb-8">Uncompromising Quality</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Quality is not an afterthought at Rameshwar; it is the core of our manufacturing process. Every Series-R plant undergoes a rigorous <strong>50-point inspection protocol</strong> before it leaves our factory floor.
                            </p>
                            <p>
                                From the grade of Stainless Steel (SS-316/304) used in our reactors to the calibration of our sensors, we refuse to cut corners. We understand that in a chemical processing environment, reliability is safety.
                            </p>
                        </div>
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Our in-house R&D lab continuously tests our machines against varying qualities of feedstock. This ensures that whether you are using high-quality Tallow or low-grade Acid Oil, your machine performs predictably and efficiently.
                            </p>
                            <p>
                                We don't just deliver a machine; we deliver peace of mind. Our commitment to quality ensures that your downtime is minimized and your output remains consistent, batch after batch, year after year.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Existing Section */}
            <ProductSection />
        </div>
    );
}
