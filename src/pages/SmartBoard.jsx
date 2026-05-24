import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const SmartBoard = () => {
  const features = [
    {
      title: "Interactive Display",
      desc: "4K UHD Resolution with 20-point multi-touch capability for seamless collaboration.",
      icon: "settings_input_hdmi",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cloud Integration",
      desc: "Sync your lessons and business presentations directly from Google Drive or OneDrive.",
      icon: "cloud_sync",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Wireless Casting",
      desc: "Share your screen instantly from any device with built-in ScreenShare Pro.",
      icon: "cast_connected",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white selection:bg-[#0072FF]/30">

      {/* Hero Section */}
      <section className="relative pt-35 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-tech-gradient opacity-10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border border-white/10 rounded-full bg-white/5 animate-pulse">
              Next-Gen Education Technology
            </span>
            <h1 className="font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.1] tracking-tighter mb-8 text-balance break-words">
              Empower Your Vision with <br />
              <span className="animated-gradient-text">SmartBoard Pro</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
              Transform your workspace with SmartTech Solutions' flagship interactive board. Designed for high-performance offices and modern classrooms.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-tech-gradient font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,114,255,0.4)]">
                Get a Quote
              </button>
              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Board Preview */}
      <section className="container mx-auto px-6 -mt-16  relative">
  {/* 🔹 Fixed SVG Filter with Animation */}
  <svg style={{ display: 'none' }}>
    <filter id="liquid-overlay">
      <feTurbulence baseFrequency="0.015" numOctaves="3" result="noise" seed="0">
        <animate 
          attributeName="baseFrequency" 
          dur="10s" 
          values="0.015;0.025;0.015" 
          repeatCount="indefinite" 
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
    </filter>
  </svg>

  <div className="premium-card p-2 group cursor-pointer overflow-hidden relative">
    <div className="relative rounded-[1.8rem] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1470"
        alt="SmartBoard Display"
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        style={{
          // Hover par filter apply hoga
          filter: 'var(--ripple-effect, none)'
        }}
      />
      
      {/* 🔹 Invisible Hover Area to trigger filter */}
      <div 
        className="absolute inset-0 z-20"
        onMouseEnter={(e) => e.currentTarget.previousSibling.style.setProperty('--ripple-effect', 'url(#liquid-overlay)')}
        onMouseLeave={(e) => e.currentTarget.previousSibling.style.setProperty('--ripple-effect', 'none')}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent pointer-events-none"></div>

      {/* Animated Sweep */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-sweep"></div>
      </div>
    </div>
    <div className="premium-card-border"></div>
  </div>
</section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.15} >
              <div className="premium-card group hover:-translate-y-3 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="w-14 h-14 rounded-2xl bg-tech-gradient flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <span className="material-symbols-outlined !text-3xl text-white">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <div className="rounded-xl overflow-hidden h-40 border border-white/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="premium-card-border"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section >

      {/* CTA Section */}
      <section section className="container mx-auto px-6 py-24" >
        <div className="premium-card bg-tech-gradient !p-12 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Upgrade your Classroom?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join 500+ institutions using SmartTech Solutions to redefine interactive learning.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
              Contact Us Today
            </button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section >

      {/* Footer Branding */}
      <footer footer className="border-t border-white/5 py-10 text-center" >
        <p className="text-gray-500 flex items-center justify-center gap-2">
          Made by <span className="text-tech-gradient font-bold">SmartTech Solutions</span> © 2026
        </p>
      </footer >
    </div >
  );
};

export default SmartBoard;