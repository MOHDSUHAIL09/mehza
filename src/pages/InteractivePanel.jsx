import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import IntImg from '../assets/interactive-panel.png'

const InteractivePanel = ({ isMobile }) => {
    // Mouse Position Tracking for Glassmorphism Effects
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const keyFeatures = [
        "Wireless Screen Sharing",
        "Android / Windows Compatibility",
        "Digital Whiteboard with Smart Tools",
        "Remote Teaching Support",
        "Durable & Low Maintenance"
    ];

    const quickSpecs = [
        { icon: "4k", label: "4K Ultra HD Display", color: "from-blue-400 to-cyan-300" },
        { icon: "touch_app", label: "Multi-touch & Smooth Writing", color: "from-purple-500 to-pink-400" },
        { icon: "school", label: "Built-in Educational Tools", color: "from-amber-400 to-orange-500" },
        { icon: "language", label: "Internet Enabled for Live Learning", color: "from-emerald-400 to-teal-300" },
        { icon: "volume_up", label: "Powerful In-built Speakers", color: "from-red-500 to-rose-400" },
        { icon: "group_add", label: "Easy to Use for Teachers & Students", color: "from-indigo-400 to-blue-500" }
    ];

    const perfectFor = [
        { icon: "corporate_fare", label: "Schools & Colleges" },
        { icon: "psychology_alt", label: "Coaching Institutes" },
        { icon: "model_training", label: "Training Centers" },
        { icon: "groups", label: "Corporate Meetings" }
    ];

    return (
     <>
      {/* 🔴 Parent changed to adaptive canvas bg-slate-50 / text-slate-800 */}
           <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0A0F1C] dark:text-white overflow-hidden transition-colors duration-500">

    {/* --- BACKGROUND DYNAMIC ANIMATION --- */}
    <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 dark:bg-blue-900/15 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 dark:bg-purple-900/15 blur-[120px] animate-pulse delay-1000"></div>
    </div>

    <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-screen md:min-h-[100svh] flex items-center justify-center pt-24 md:pt-[15vh] z-10 px-4 md:px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#6A11CB22,transparent_50%)]"></div>
            <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
                <AnimatedSection direction="left" className="text-center lg:text-left">
                    <span className="text-tech-gradient font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4 block">
                        Upgrade to Smart Learning
                    </span>
                    {/* 🔴 Title text color switches to slate-900 in light layout */}
                    <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] font-black tracking-tighter mb-6 md:mb-8 text-slate-900 dark:text-white transition-colors duration-500">
                        Budget <span className="animated-gradient-text">Friendly</span> Interactive Panel
                    </h1>
                    {/* 🔴 Paragraph color updates seamlessly to text-slate-600 */}
                    <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl leading-relaxed mb-8 md:mb-10 w-full max-w-lg mx-auto lg:mx-0 font-medium opacity-80 text-balance transition-colors duration-500">
                        Advanced, IoT-enabled Sanitary Napkin Vending Machines designed for schools, colleges, offices, and public spaces.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8E2DE2] text-white font-bold text-xs md:text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(0,114,255,0.3)] hover:scale-105 transition-all active:scale-95">
                            Book a Demo
                        </button>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="right" className="relative mt-8 md:mt-0">
                    <div className="relative group">
                        <div className="absolute -inset-10 bg-tech-gradient opacity-10 blur-[60px] md:blur-[100px] group-hover:opacity-20 transition-opacity duration-1000"></div>
                        {/* 🔴 Clean soft image shadow wrapper for light canvas surfaces */}
                        <img
                            src={IntImg}
                            alt="Mehza Interactive Panel in Classroom"
                            className="relative z-10 w-full h-auto max-w-[300px] md:max-w-none mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* --- 2. QUICK SPECS GRID (Adaptive Glassmorphism cards layer) --- */}
        {/* 🔴 Background card panel strip support updates to border-slate-200 */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative bg-white/40 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {quickSpecs.map((spec, index) => (
                        <AnimatedSection key={index} direction="up" delay={index * 0.1} className="h-full">
                            <div
                                style={{ '--spec-gradient': `linear-gradient(to bottom right, ${spec.color.split(' ')[1]}, ${spec.color.split(' ')[3]})` }}
                                /* 🔴 .premium-card handles the dynamic dark/light card template directly from index.css styles */
                                className="premium-card group h-full flex flex-col items-center text-center !p-6 md:!p-8 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[1px] bg-gradient-to-br ${spec.color} pointer-events-none`}>
                                    <div className="w-full h-full bg-white dark:bg-[#030712] rounded-[1.7rem] transition-colors duration-500"></div>
                                </div>

                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${spec.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-30`}></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* 🔴 Mini card inner container background shifts seamlessly to slate-100/80 on white theme */}
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 md:mb-6 relative overflow-hidden group-hover:scale-110 transition-all duration-500`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-[2px]`}></div>
                                        <span className={`material-symbols-outlined !text-2xl md:!text-3xl bg-gradient-to-br ${spec.color} bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all`}>
                                            {spec.icon}
                                        </span>
                                    </div>

                                    {/* 🔴 Custom labels switch contrast correctly */}
                                    <p className="text-slate-700 dark:text-gray-300 text-[11px] md:text-sm font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                                        {spec.label}
                                    </p>
                                </div>

                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[40px] pointer-events-none`}></div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* --- 3. DUAL GRID: KEY FEATURES & PERFECT FOR --- */}
        <section className="py-20 md:py-32 px-4 md:px-6">
            <div className="container mx-auto grid lg:grid-cols-2 gap-10 md:gap-16">

                {/* Key Features Component */}
                <AnimatedSection direction="left">
                  <div className="p-[1px] rounded-[2rem] md:rounded-[3rem] flowing-gradient-bg opacity-70">
                    {/* 🔴 Dynamic core container background switches from white block layout to #0A0F1C */}
                    <div className="bg-white dark:bg-[#0A0F1C] rounded-[1.9rem] md:rounded-[2.9rem] p-6 md:p-12 transition-colors duration-500">
                        {/* 🔴 Text context layers setup updates to text-slate-900 */}
                        <h2 className="text-2xl md:text-5xl font-black mb-8 md:mb-12 tracking-tight text-slate-900 dark:text-white flex items-center gap-3 transition-colors duration-500">
                            <span className="material-symbols-outlined text-blue-500 !text-3xl md:!text-5xl">featured_play_list</span>
                            Key Features
                        </h2>
                        <ul className="space-y-4 md:space-y-6">
                            {keyFeatures.map((feature, i) => (
                                <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                                    {/* 🔴 List item borders update */}
                                    <li className="flex gap-3 items-center p-4 md:p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-slate-100/80 dark:hover:bg-white/10 transition-all group">
                                        <span className="material-symbols-outlined text-green-500 bg-green-500/10 p-1.5 md:p-2 rounded-lg text-sm md:text-base group-hover:scale-110 transition-transform">check_circle</span>
                                        <span className="text-slate-700 dark:text-gray-200 text-sm md:text-lg font-medium transition-colors duration-500">{feature}</span>
                                    </li>
                                </AnimatedSection>
                            ))}
                        </ul>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Perfect For & Image Grid */}
                <div className="space-y-8 md:space-y-12">
                    <AnimatedSection direction="right">
                        {/* 🔴 Custom wrapper elements config support */}
                        <div className="premium-card p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-[#0F1322]/60 !rounded-[2rem]">
                            {/* 🔴 Header tags configuration update */}
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-balance flex items-center gap-4 text-center md:text-left text-slate-900 dark:text-white transition-colors duration-500">
                                <span className="material-symbols-outlined text-purple-500 !text-3xl md:!text-5xl">groups_3</span>
                                Perfect For
                            </h2>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-4 flex-grow">
                                {perfectFor.map((item, i) => (
                                    /* 🔴 Non active children updates text-slate-600 */
                                    <div key={i} className="flex gap-2 items-center text-slate-600 dark:text-gray-400 group/item">
                                        <span className="material-symbols-outlined text-purple-400 text-base group-hover/item:scale-125 transition-transform">{item.icon}</span>
                                        <span className="text-[11px] md:text-sm font-semibold group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="premium-card-border"></div>
                        </div>
                    </AnimatedSection>

                    {/* Staggered Images Showcase */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 group h-full shadow-md">
                                <img src="/school.jfif" alt="Classroom usage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="up" delay={0.4}>
                            <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 group h-full shadow-md">
                                <img src="/coaching.jfif" alt="Corporate usage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 4. PRICING & TRUST SECTION --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative">
            <div className="container mx-auto">
                {/* 🔴 Glassmorphism card color background parameters mapped safely dynamically via style sheets */}
                <div className="premium-card !p-0 !rounded-[2rem] md:!rounded-[4rem] overflow-hidden group border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0F1322]/80" >
                    <div className="grid md:grid-cols-12 items-center relative z-10">

                        {/* Special Price Block */}
                        <div className="md:col-span-5 relative group/image overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center justify-center p-6 md:p-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10 group-hover/image:opacity-80 transition-all duration-700"></div>

                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
                                        alt="Interactive Smart Panel"
                                        className="rounded-[1.5rem] md:rounded-[2.5rem] w-full max-w-[240px] md:max-w-md object-cover transform group-hover/image:rotate-2 transition-transform duration-700 shadow-xl"
                                    />

                                    {/* Floating Interaction Badges */}
                                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 md:-left-10 bg-white/80 dark:bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 dark:border-white/20 shadow-xl hidden sm:block">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                            {/* 🔴 Floating label typography color correction layers */}
                                            <span className="text-xs font-bold tracking-widest text-slate-800 dark:text-white uppercase transition-colors duration-500">Live Monitoring</span>
                                        </div>
                                    </motion.div>

                                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-6 -right-6 md:-right-10 bg-white/90 dark:bg-[#0A0F1C]/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl hidden sm:block">
                                        <div className="flex flex-col gap-1">
                                            <span className="material-symbols-outlined text-blue-500 dark:text-blue-400">language</span>
                                            <p className="text-[10px] text-slate-500 dark:text-gray-400 font-black uppercase transition-colors duration-500">Global Connectivity</p>
                                            <p className="text-lg font-bold text-slate-900 dark:text-white leading-none transition-colors duration-500">IoT READY</p>
                                        </div>
                                    </motion.div>

                                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-slate-900/10 dark:from-[#0A0F1C]/40 to-transparent pointer-events-none"></div>
                                </motion.div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-[1px] md:w-[2px] md:h-full bg-gradient-to-r md:bg-gradient-to-b from-[#6A11CB] to-[#00C6FF] opacity-30"></div>
                        </div>

                        {/* Contact & Trust */}
                        <div className="md:col-span-7 p-6 md:p-16 space-y-8 md:space-y-12">
                            <AnimatedSection direction="up">
                                {/* 🔴 Header color setups update */}
                                <h4 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 italic tracking-tight text-center md:text-left text-slate-900 dark:text-white transition-colors duration-500">Choose Quality. <span className="text-blue-500">Choose Confidence.</span></h4>

                                <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
                                    {[
                                        { icon: "verified", t: "Premium Quality" },
                                        { icon: "headset_mic", t: "Trusted Support" },
                                        { icon: "memory", t: "Advanced Tech" }
                                    ].map((trust, i) => (
                                        /* 🔴 Light layout cards background updates to bg-slate-50 */
                                        <div key={i} className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 p-4 md:p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all group/trust shadow-sm">
                                            <span className="material-symbols-outlined !text-xl md:!text-3xl text-slate-400 dark:text-gray-500 group-hover/trust:text-blue-500 dark:group-hover/trust:text-blue-400 group-hover/trust:scale-110 transition-all">{trust.icon}</span>
                                            <p className="text-[9px] md:text-xs text-slate-500 dark:text-gray-500 mt-2 font-bold uppercase tracking-widest group-hover/trust:text-slate-900 dark:group-hover/trust:text-white transition-colors">{trust.t}</p>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            {/* Contact Info Footer Details */}
                            <AnimatedSection direction="up" delay={0.2} className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors duration-500">
                                <div className="flex gap-4 items-center">
                                    <span className="material-symbols-outlined text-purple-500 dark:text-purple-400 !text-3xl">call</span>
                                    <div className="text-center sm:text-left">
                                        <p className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest transition-colors duration-500">CALL US NOW</p>
                                        <p className="text-lg md:text-xl font-black text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-500">+91 84482 11313</p>
                                    </div>
                                </div>
                                <a href="mailto:https://mehzasmarttech.com/" target='_blank' rel='noreferrer' className="text-slate-500 dark:text-gray-400 text-xs md:text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">language</span> mehzasmarttech.com
                                </a>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
                <div className="premium-card-border"></div>
            </div>
        </section>

        {/* --- 5. MINIMAL FOOTER --- */}
        {/* 🔴 Separator borders configured with slate-200 */}
        <footer className="py-12 border-t border-slate-200 dark:border-white/5 text-center px-6 relative transition-colors duration-500">
            <p className="text-slate-400 dark:text-gray-600 font-medium tracking-[0.1em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs transition-colors duration-500">
                © 2026 Mehza SmartTech Solutions | Innovation for Smart Education
            </p>
        </footer>
    </div>
</div>
     </>
    );
};

export default InteractivePanel;