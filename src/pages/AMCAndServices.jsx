import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Link } from 'react-router-dom';

const AMCAndServices = ({ isMobile }) => {

    const amcPlans = [
        {
            title: "Smart-Support Basic",
            type: "Remote Support",
            color: "#00C6FF", // Cyan Theme
            glowColor: "rgba(0, 198, 255, 0.15)",
            icon: "headset_mic",
            services: ["24/7 Remote Diagnostics", "Firmware Updates", "Priority Email Support"]
        },
        {
            title: "Smart-Care Pro",
            type: "Annual Maintenance",
            color: "#A855F7", // Purple Theme
            glowColor: "rgba(168, 85, 247, 0.15)",
            icon: "engineering",
            services: ["Basic + On-site Visits", "Hardware Health Check", "Preventive Maintenance"]
        },
        {
            title: "Smart-Secure Elite",
            type: "Zero-Downtime Cover",
            color: "#10B981", // Emerald Theme
            glowColor: "rgba(16, 185, 129, 0.15)",
            icon: "verified_user",
            services: ["Pro + Replacement Parts", "4-Hour SLA Response", "SLA-driven Guaranteed Uptime"]
        }
    ];

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // CSS variables update for mouse tracking
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
       <>
         {/* 🔴 Parent container changed to dynamic background and text utilities for Light/Dark support */}
<div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0A0F1C] dark:text-white selection:bg-[#0072FF]/30 transition-colors duration-500">

    {/* --- HERO SECTION --- */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
                {/* 🔴 Top badge layer border and background adjustment */}
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border border-slate-200 dark:border-white/10 rounded-full bg-white dark:bg-white/5 shadow-sm transition-colors duration-500 text-slate-800 dark:text-white">
                    SmartTech Solutions Service Division
                </span>
                
                {/* 🔴 Hero header text switches color smoothly */}
                <h1 className="font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.1] tracking-tighter mb-8 text-balance break-words text-slate-900 dark:text-white transition-colors duration-500">
                    Zero Downtime  <br />
                    <span className="animated-gradient-text">Maximized Performance.</span>
                </h1>
                
                {/* 🔴 Main descriptions text color adjustments */}
                <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-balance transition-colors duration-500">
                    Premium Annual Maintenance Contracts (AMC) and Support Services designed to keep your Interactive Panels and Smart Hardware running flawlessly.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-tech-gradient font-semibold hover:scale-105 transition-transform text-white shadow-[0_0_20px_rgba(0,114,255,0.4)]">
                        Request Service
                    </button>
                    {/* 🔴 Secondary button borders tweaked */}
                    <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-800 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center gap-2 transition-colors duration-500">
                        <span className="material-symbols-outlined">play_circle</span> View Plans
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* --- GLOWING SERVICE PLANS GRID --- */}
    {/* 🔴 Background strip section dividing line updated */}
    <section className="py-32 px-6 relative bg-white/40 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto">
            <AnimatedSection direction="up">
                {/* 🔴 Title mapping configurations update */}
                <h2 className="font-black font-headline text-center text-slate-900 dark:text-white tracking-tighter font-bold transition-colors duration-500"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3.75rem)' }} >
                    Our <span className="relative inline-block">Support Ecosystem
                        <svg className="absolute bottom-1 left-0 w-full" viewBox="0 0 200 7" preserveAspectRatio="none">
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
                <p className="text-slate-500 dark:text-gray-400 text-center mb-10 transition-colors duration-500">Choose a care package tailored to your infrastructure</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 px-6 py-20">
                {amcPlans.map((item, index) => (
                    <AnimatedSection key={index} direction="up" delay={index * 0.2} className="relative z-10" disabled={isMobile}>
                        {/* 🔴 premium-card class will automatically adapt via global CSS updates */}
                        <div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                            }}
                            style={{
                                '--theme-color': item.color,
                                '--glow-color': item.glowColor
                            }}
                            className="premium-card group hover:-translate-y-3 transition-all duration-500 bg-white/70 dark:bg-[#0F1322]/80 backdrop-blur-xl rounded-[2rem] p-10 overflow-hidden relative shadow-xl border border-slate-200 dark:border-white/5 hover:border-[var(--theme-color)]/50"
                        >
                            {/* Mouse Tracking Glow Effect */}
                            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--glow-color), transparent 40%)` }} />

                            <div className="relative z-10">
                                {/* Icon box scaling updates */}
                                <div style={{ backgroundColor: `${item.color}1A`, borderColor: `${item.color}33` }}
                                    className="w-16 h-16 mb-8 rounded-2xl flex items-center justify-center border group-hover:scale-110 group-hover:border-[var(--theme-color)]/50 transition-all duration-500" >
                                    <span className="material-symbols-outlined !text-3xl" style={{ color: item.color, fontVariationSettings: "'FILL' 1" }}>
                                        {item.icon}
                                    </span>
                                </div>

                                {/* 🔴 Card sub heading texts color adapt content layout */}
                                <h3 className="text-2xl lg:text-3xl font-black font-headline text-slate-900 dark:text-white mb-2 uppercase tracking-tight group-hover:text-[var(--theme-color)] transition-colors duration-500">
                                    {item.title}
                                </h3>
                                <p style={{ color: item.color }} className="text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-80" >
                                    {item.type}
                                </p>

                                {/* Services List items configuration */}
                                <div className="space-y-4 mb-10">
                                    {item.services.map((service, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div style={{ backgroundColor: `${item.color}80` }}
                                                className="w-1.5 h-1.5 rounded-full group-hover:scale-125 transition-all shadow-[0_0_8px_transparent] group-hover:shadow-[var(--theme-color)]" />
                                            {/* 🔴 List textual item updates color based on toggle hooks state */}
                                            <span className="text-slate-600 dark:text-gray-400 font-medium text-sm lg:text-base leading-relaxed group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors duration-500">
                                                {service}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Dynamic upgrade buttons layer */}
                                <button
                                    style={{ borderColor: `${item.color}33`, backgroundColor: `${item.color}0D` }}
                                    className="w-full py-4 rounded-xl border text-slate-800 dark:text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[var(--theme-color)] hover:text-white hover:border-transparent transition-all duration-500 shadow-sm" >
                                    Upgrade Plan
                                </button>
                            </div>

                            <div style={{ backgroundColor: `${item.color}0D` }} className="absolute -right-6 -top-6 w-40 h-40 rounded-full blur-[50px] group-hover:opacity-40 transition-all duration-700" />
                            <div style={{ background: `linear-gradient(to top, ${item.color}66, transparent)` }} className="absolute right-10 top-10 w-px h-20 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:h-28" />
                            <div style={{ background: `linear-gradient(to left, ${item.color}66, transparent)` }} className="absolute right-10 top-10 w-20 h-px opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-28" />
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>

    {/* --- SERVICE PROCESS SECTION (Support Path Timeline) --- */}
    <section className="py-32 px-6">
        <div className="container mx-auto">
            {/* 🔴 Dynamic premium card style container support added template line */}
            <div className="premium-card !p-0 overflow-hidden group border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-[#0F1322]/50 backdrop-blur-sm transition-colors duration-500">
                <div className="grid lg:grid-cols-2">
                    <div className="p-12 md:p-24 flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-tech-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>

                        <AnimatedSection direction="left">
                            {/* 🔴 Process section main heading contrast configuration */}
                            <h2 className="text-4xl md:text-5xl font-black font-headline text-slate-900 dark:text-white mb-16 tracking-tight transition-colors duration-500">
                                Our <span className="text-tech-gradient">Support Process</span>
                            </h2>
                        </AnimatedSection>

                        {/* Timeline Track Line Element */}
                        <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-[1.75rem] before:w-[2px] before:bg-gradient-to-b before:from-blue-500/30 before:via-purple-500/30 before:to-transparent">
                            {[
                                { icon: "call", title: "Raise Ticket", desc: "Contact our dedicated helpline or use our online portal.", color: "from-blue-500 to-cyan-400" },
                                { icon: "analytics", title: "Remote Diagnostics", desc: "Engineers analyze issues remotely using smart sensors.", color: "from-purple-500 to-pink-500" },
                                { icon: "engineering", title: "Site Visit", desc: "Priority technician dispatched for physical repair.", color: "from-orange-500 to-yellow-500" },
                                { icon: "check_circle", title: "Resolution", desc: "Issue resolved, hardware tested, and ticket closed.", color: "from-emerald-500 to-teal-400" }
                            ].map((step, i) => (
                                <AnimatedSection key={i} direction="up" delay={i * 0.2} className="flex gap-8 items-start relative z-10 group/step" >
                                    <div className="relative shrink-0">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg group-hover/step:scale-110 transition-transform duration-500`}>
                                            {/* 🔴 Core internal step container updates adaptive colors */}
                                            <div className="w-full h-full rounded-[0.9rem] bg-white dark:bg-[#0A0F1C]/80 backdrop-blur-md flex items-center justify-center transition-colors duration-500">
                                                <span className={`material-symbols-outlined !text-2xl bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                                                    {step.icon}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-md opacity-20 group-hover/step:opacity-40 transition-opacity`}></div>
                                    </div>

                                    <div className="pt-2">
                                        {/* 🔴 Step data titles and description text toggle profiles */}
                                        <h4 className="font-bold text-2xl mb-2 text-slate-900 dark:text-white group-hover/step:text-[#0072FF] dark:group-hover/step:text-blue-400 transition-colors duration-500">
                                            {step.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-gray-400 font-medium text-base leading-relaxed transition-colors duration-500">
                                            {step.desc}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Visual Panel */}
                    <div className="relative min-h-[500px] overflow-hidden lg:block hidden">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                            alt="Tech Collaboration"
                        />
                        {/* 🔴 Dark overlay blending logic modified to work perfectly on dual conditions switcher updates */}
                        <div className="absolute inset-0 bg-slate-900/40 dark:bg-[#0A0F1C]/60 mix-blend-multiply transition-colors duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white dark:to-[#0A0F1C] transition-colors duration-500"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex items-center justify-center animate-pulse transition-colors duration-500">
                                <span className="material-symbols-outlined !text-6xl text-blue-500/60">speed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* --- FOOTER CTA SECTION --- */}
    <div className="relative">
        {/* 🔴 Light mode gradient blend panel separator matching core states */}
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-slate-50 dark:to-[#0A0F1C] pointer-events-none z-[5] -translate-y-full transition-colors duration-500"></div>
        
        <section className="relative overflow-hidden group" onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); const x = e.clientX - rect.left; e.currentTarget.style.setProperty('--mouse-x', `${x}px`); }}>
            <div className="relative w-full pt-[10vh] pb-[8vh] md:py-[15vh] px-[5%] z-10">

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 h-full w-[800px] pointer-events-none transition-transform duration-100 ease-out mix-blend-screen" style={{ left: 'var(--mouse-x, 50%)', transform: 'translateX(-50%)', background: 'linear-gradient(to right, transparent 0%, rgba(115, 0, 255, 0.1) 20%, rgba(115, 0, 255, 0.4) 50%, rgba(115, 0, 255, 0.1) 80%, transparent 100%)' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.15)_50%,transparent)]" />
                    </div>
                </div>

                {/* 🔴 Cutout Glass panel tweaks support light translucent look */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5 backdrop-blur-[40px] bg-white/40 dark:bg-[#0A0F1C]/30 transition-colors duration-500" />

                {/* Mobile Cutout */}
                <div className="block md:hidden absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
                    <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                        <path d="M0,250 L1200,250 L1200,0 C800,160 400,160 0,0 Z" className="fill-white dark:fill-[#0A0F1C] transition-colors duration-500" />
                        <path d="M1200,0 C800,160 400,160 0,0" fill="none" className="stroke-slate-200/50 dark:stroke-white/[0.05]" strokeWidth="1" />
                    </svg>
                </div>

                {/* Desktop Cutout */}
                <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
                    <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                        <path d="M0,250 L1200,250 L1200,0 C800,320 400,320 0,0 Z" className="fill-white dark:fill-[#0A0F1C] transition-colors duration-500" />
                        <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-200/50 dark:stroke-white/[0.05]" strokeWidth="1" />
                    </svg>
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(0,198,255,0.08)_0%,_transparent_70%)] pointer-events-none z-0" />

                <div className="absolute top-0 left-0 w-full h-[250px] pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ WebkitMaskImage: `radial-gradient(ellipse 400px 300px at var(--mouse-x, 50%) 0px, black 0%, transparent 100%)`, maskImage: `radial-gradient(ellipse 400px 300px at var(--mouse-x, 50%) 0px, black 0%, transparent 100%)` }}>
                        <div className="block md:hidden absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                            <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                                <path d="M1200,0 C800,160 400,160 0,0" fill="none" className="stroke-slate-400 dark:stroke-white/0.8" strokeWidth="2" />
                                <path d="M1200,0 C800,160 400,160 0,0" fill="none" stroke="rgba(115, 0, 255, 0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
                            </svg>
                        </div>
                        <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                            <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                                <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-400 dark:stroke-white/0.8" strokeWidth="2" />
                                <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(115, 0, 255, 0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-30">
                    <AnimatedSection direction="up">
                        {/* 🔴 Bottom headers text colors update */}
                        <h2 className="font-headline font-black mb-8 text-balance leading-[0.9] tracking-tighter text-slate-900 dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>Ready to Craft <br /><span className="animated-gradient-text italic font-playfair font-normal">the Future?</span></h2>
                        <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 opacity-70 font-medium leading-relaxed transition-colors duration-500">Join the new standard of smart infrastructure. Our engineers are ready to tailor a solution for your facility.</p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-8 py-4 rounded-full text-white font-bold text-base uppercase tracking-widest shadow-[0_0_40px_rgba(0,114,255,0.3)] transition-all duration-300 hover:scale-105 flowing-gradient-bg border border-white/10">Contact Us</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    </div>

    {/* --- FOOTER --- */}
    {/* 🔴 Border layer and text modifications for light view alignment */}
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 text-center px-6 relative transition-colors duration-500">
        <p className="text-slate-400 dark:text-gray-600 font-medium tracking-[0.3em] uppercase text-xs transition-colors duration-500">
            SmartTech Solutions Support Division | Innovation for Society
        </p>
    </footer>
</div>
       </>
    );
};

export default AMCAndServices;