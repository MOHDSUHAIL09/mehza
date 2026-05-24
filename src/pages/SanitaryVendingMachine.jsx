

import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import vendCompact from '../assets/vending/vend-compact.png'
import vendMax from '../assets/vending/vend-max.png'
import vendIndustirial from '../assets/vending/smart-vending.png'
import heroVending from '../assets/vending/hero-vending.png'
import { motion } from 'framer-motion';


const SanitaryVendingMachine = ({ isMobile }) => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    const features = [
        {
            icon: "sensors",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            title: "Low Stock Alerts",
            desc: "Automatic SMS/Email notifications when inventory falls below 10%."
        },
        {
            icon: "payments",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            title: "Cashless Payments",
            desc: "Integrated QR Code for UPI, Paytm, and Credit Card payments."
        },
        {
            icon: "monitoring",
            color: "text-cyan-500",
            bgColor: "bg-cyan-500/10",
            title: "Cloud Dashboard",
            desc: "Track sales and machine health in real-time from anywhere."
        }
    ];

    const machines = [
        {
            title: "Smart-Vend Compact",
            capacity: "25-30 Pads",
            color: "from-cyan-500 to-blue-500",
            img: vendCompact,
            features: ["Wall Mounted", "Battery Backup", "Coin/Token Operated"]
        },
        {
            title: "Smart-Vend Max",
            capacity: "60-100 Pads",
            color: "from-purple-500 to-pink-500",
            img: vendMax,
            features: ["LCD Display", "Spiral Mechanism", "UPI/QR Integration"]
        },
        {
            title: "Smart-Vend Industrial",
            capacity: "200+ Pads",
            color: "from-orange-500 to-red-500",
            img: vendIndustirial,
            features: ["Heavy Duty Steel", "Dual Selection", "Cloud Monitoring"]
        }
    ];

    return (
       <>
       {/* 🔴 Parent changed to adaptive canvas bg-slate-50 / text-slate-800 */}
<div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0A0F1C] dark:text-white overflow-hidden transition-colors duration-500">

    {/* --- HERO SECTION --- */}
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#6A11CB22,transparent_50%)]"></div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
            <AnimatedSection direction="left" className="text-center lg:text-left">
                <span className="text-tech-gradient font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                    SmartTech Solutions Hygiene Division
                </span>
                {/* 🔴 Text color slate-900 in light mode, white in dark mode */}
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] font-black tracking-tighter mb-8 text-slate-900 dark:text-white transition-colors duration-500">
                    Automating <span className="animated-gradient-text">Health & Hygiene</span> for All
                </h1>
                {/* 🔴 Paragraph color text-slate-600 in light mode */}
                <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 w-full max-w-lg lg:max-w-md xl:max-w-xl font-medium opacity-80 text-balance transition-colors duration-500">
                    Advanced, IoT-enabled Sanitary Napkin Vending Machines designed for schools, colleges, offices, and public spaces.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8E2DE2] text-white font-bold text-xs md:text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(0,114,255,0.3)] hover:scale-105 transition-all active:scale-95">
                        Inquiry Now
                    </button>
                    {/* 🔴 Dynamic border and text color for secondary button */}
                    <button
                        className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full border-2 text-slate-800 dark:text-white border-[#8E2DE2] font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95"
                    >
                        Download Brochure
                    </button>
                </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative mt-8 lg:mt-0">
                <div className="relative group">
                    <img
                        src={heroVending}
                        alt="Main Vending Machine"
                        className="w-full max-w-md mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_50px_rgba(0,198,255,0.3)] group-hover:dark:drop-shadow-[0_0_60px_rgba(106,17,203,0.5)] transition-all duration-700"
                    />
                    {/* 🔴 Floating badge background and border adjustments */}
                    <div className="absolute top-10 right-0 bg-white/90 dark:bg-[#0F1322]/90 border border-slate-200 dark:border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-xl animate-bounce-slow transition-colors duration-500">
                        <p className="text-tech-gradient font-bold text-xl">99.9%</p>
                        <p className="text-[10px] text-slate-500 dark:text-gray-400 uppercase font-semibold">Uptime Reliability</p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    </section>

    {/* --- PREMIUM GLOW CARDS SECTION --- */}
    {/* 🔴 Section divider line update border-slate-200 */}
    <section className="py-16 md:py-24 px-4 md:px-6 relative bg-white/40 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto">
            <AnimatedSection direction="up">
                {/* 🔴 Title context update text-slate-900 */}
                <h2 className="font-black font-headline text-center text-slate-900 dark:text-white tracking-tighter mb-4 transition-colors duration-500"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3.75rem)' }}>
                    Choose Your <span className="relative inline-block">Model
                        <svg className="absolute bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00C6FF" />
                                    <stop offset="100%" stopColor="#8E2DE2" />
                                </linearGradient>
                            </defs>
                            <path d="M0,4 Q50,0 100,4 T200,4" stroke="url(#solGrad)" strokeWidth="2.5" fill="none" opacity="0.9" />
                        </svg>
                    </span>
                </h2>
                <p className="text-slate-500 dark:text-gray-400 text-center mb-12 transition-colors duration-500">Tailored solutions for every environment</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {machines.map((item, index) => (
                    <AnimatedSection key={index} direction="up" delay={index * 0.2}>
                        <div className="relative group p-[1px] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                            
                            {/* Animated Border Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-flow`}></div>

                            {/* 🔴 Card layout background changes to clean white glass in light theme */}
                            <div className="relative bg-white dark:bg-[#0F1322] rounded-[2.5rem] p-8 h-full z-10 transition-colors duration-500 shadow-md dark:shadow-none">
                                <div className="h-48 md:h-64 flex items-center justify-center mb-6">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:drop-shadow-none"
                                    />
                                </div>

                                {/* 🔴 Heading adaptive text color slate-900 */}
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-[#0072FF] dark:group-hover:text-blue-400 transition-colors duration-500">{item.title}</h3>
                                <p className="text-[10px] text-slate-400 dark:text-gray-500 mb-4 md:mb-6 uppercase tracking-widest font-black transition-colors duration-500">Capacity: {item.capacity}</p>

                                <ul className="space-y-2 md:space-y-3">
                                    {item.features.map((f, i) => (
                                        /* 🔴 Checklist labels text weight and color adaptation */
                                        <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-gray-400 text-xs md:text-sm transition-colors duration-500">
                                            <span className="material-symbols-outlined text-green-500 text-base">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* 🔴 Responsive Pricing Button border states */}
                                <button className={`w-full mt-6 md:mt-8 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white group-hover:text-white group-hover:bg-gradient-to-r ${item.color} font-bold transition-all duration-300`}>
                                    Get Pricing
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>

    {/* --- FEATURES & TECHNOLOGY --- */}
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto">
            {/* 🔴 .premium-card from index.css automatically switches background overlay */}
            <div className="premium-card !p-0 overflow-hidden relative border border-slate-200 dark:border-transparent">
                <div className="grid lg:grid-cols-2">
                    
                    <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
                            {/* 🔴 Header text adapt context text-slate-900 */}
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-slate-900 dark:text-white transition-colors duration-500">
                                Smart IoT Features
                            </motion.h2>

                            <div className="space-y-8 md:space-y-10">
                                {features.map((feature, index) => (
                                    <motion.div key={index} variants={itemVariants} className="flex flex-row gap-4 md:gap-6 group">
                                        {/* 🔴 Background badge mapping shift slate-100 to transparent slots */}
                                        <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl ${feature.bgColor} bg-opacity-20 dark:bg-opacity-100 flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                            <span className={`material-symbols-outlined !text-3xl ${feature.color}`}>
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <div>
                                            {/* 🔴 Sub features texts styling adjustments */}
                                            <h3 className="font-bold mb-2 text-slate-900 dark:text-white transition-colors duration-500">{feature.title}</h3>
                                            <p className="text-slate-600 dark:text-gray-400 transition-colors duration-500">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Tech Image Overlay */}
                    <div className="bg-tech-gradient relative overflow-hidden hidden lg:block">
                        <motion.img
                            initial={{ scale: 1.2, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.4 }} // Adjusted overlay opacity for light background compatibility
                            transition={{ duration: 1.5 }}
                            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1200"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                            alt="Tech"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-20">
                            <div className="text-center">
                                <span className="material-symbols-outlined !text-9xl animate-pulse text-white/40">health_and_safety</span>
                                <h3 className="text-3xl font-bold mt-4 text-white">Safe. Secure. Seamless.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* --- FOOTER CTA --- */}
    <section className="relative py-20 md:py-28 px-4 md:px-6 text-center overflow-hidden">
        {/* Transparent Pad Background Vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-[0.04] dark:opacity-[0.03] pointer-events-none select-none z-0">
            <img
                src="/pad.png"
                alt="Product Background"
                className="w-full h-auto object-contain rotate-[-15deg] scale-150"
            />
        </div>

        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full"></div>

        <AnimatedSection direction="up">
            <div className="inline-block p-[2px] rounded-full bg-tech-gradient mb-6 md:mb-8 scale-90 md:scale-100">
                {/* 🔴 Badge center core adapts color classes */}
                <div className="bg-white dark:bg-[#0A0F1C] px-5 py-2 md:px-8 md:py-2 rounded-full border border-slate-200/40 dark:border-transparent transition-colors duration-500">
                    <p className="text-xs md:text-sm font-bold tracking-wider text-slate-800 dark:text-white whitespace-nowrap transition-colors duration-500">
                        Join 200+ Smart Locations
                    </p>
                </div>
            </div>

            {/* 🔴 Main heading color context */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-balance max-w-4xl mx-auto leading-[1.2] px-2 text-slate-900 dark:text-white transition-colors duration-500">
                Ready to Install <span className="bg-tech-gradient bg-clip-text text-transparent">Smart Hygiene</span> in Your Facility?
            </h2>

            <div className="px-6 w-full md:w-auto flex justify-center">
                <button className="
                    w-full max-w-[280px] py-4 px-6 text-base
                    md:max-w-none md:w-auto md:py-5 md:px-12 md:text-xl
                    bg-tech-gradient rounded-full font-bold text-white transition-all
                    shadow-[0_10px_25px_rgba(0,114,255,0.25)]
                    hover:scale-105 active:scale-95 uppercase tracking-wider
                ">
                    Contact SmartTech Solutions
                </button>
            </div>
        </AnimatedSection>
    </section>

</div>
       </>
    );
};

export default SanitaryVendingMachine;