import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

/* ─── Floating Orb Background ────────────────────────────── */
const OrbBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <m.div
      animate={{
        translate: ['0px 0px', '40px -60px', '-30px 40px', '0px 0px'],
        scale: [1, 1.05, 0.95, 1]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle, #00C6FF 0%, transparent 65%)', filter: 'blur(100px)' }}
    />
    <m.div
      animate={{
        translate: ['0px 0px', '-50px 30px', '40px -50px', '0px 0px'],
        scale: [1, 1.08, 0.92, 1]
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      className="absolute top-1/3 -right-60 w-[600px] h-[600px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, #8E2DE2 0%, transparent 65%)', filter: 'blur(120px)' }}
    />
    <m.div
      animate={{
        translate: ['0px 0px', '30px -40px', '-20px 30px', '0px 0px'],
        scale: [1, 1.03, 0.97, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-10"
      style={{ background: 'radial-gradient(circle, #0072FF 0%, transparent 65%)', filter: 'blur(90px)' }}
    />
  </div>
);

const Solutions = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const products = [
    {
      id: 'digital-panels',
      title: 'Digital Interactive Panels',
      tagline: 'The Future of Collaborative Learning',
      desc: 'Seamlessly bridge the gap between physical and digital collaboration. Our 4K interactive panels offer ultra-low latency touch and integrated smart tools for schools and boardrooms.',
      features: [
        { icon: 'monitor', label: '4K Ultra HD Display' },
        { icon: 'pan_tool_alt', label: 'Multi Touch Technology' },
        { icon: 'wifi', label: 'Wireless Connectivity' },
        { icon: 'videocam', label: 'Integrated 4K Camera' }
      ],
      image: '/assets/newline-smartboard.png',
      accent: '#0072FF',
      icon: 'touch_app'
    },
    {
      id: 'sanitary-vending',
      title: 'Smart Sanitary Vending',
      tagline: 'Hygiene, Automated and Monitored',
      desc: 'Ensure essential hygiene access with our IoT-enabled vending solutions. Real-time monitoring ensures zero downtime and automated restocking alerts.',
      features: [
        { icon: 'health_and_safety', label: 'Hygienic & Safe' },
        { icon: 'gesture', label: 'Easy to Use Interface' },
        { icon: 'bolt', label: 'Low Power Consumption' },
        { icon: 'shield_lock', label: 'Vandal-Proof Build' }
      ],
      image: '/assets/sanitary-vending-mehza.png',
      accent: '#8E2DE2',
      icon: 'sensors'
    }
  ];

  const spaces = [
    {
      title: 'Schools & Colleges',
      desc: 'Smart classrooms & hygiene facilities',
      icon: 'school',
      accent: '#00C6FF',
      details: 'Enhancing student engagement with 4K panels and promoting dignity with IoT hygiene dispensers.',
      image: '/assets/schools-colleges.png'
    },
    {
      title: 'Corporate Offices',
      desc: 'Premium meeting rooms & wellness',
      icon: 'corporate_fare',
      accent: '#8E2DE2',
      details: 'Streamlining collaboration with wireless casting and elevating office culture with premium care.',
      image: '/assets/corporate-offices.png'
    },
    {
      title: 'Public Spaces',
      desc: 'Airports, Malls, Railway Stations',
      icon: 'train',
      accent: '#0072FF',
      details: 'Heavy-duty dispensers and digital information hubs designed for high-traffic environments.',
      image: '/assets/public-spaces.png'
    },
    {
      title: 'Healthcare',
      desc: 'Patient education & hygiene',
      icon: 'medical_services',
      accent: '#6A11CB',
      details: 'Sterile-focused digital interfaces and touchless hygiene solutions for clinics and hospitals.',
      image: '/assets/healthcare-clinics.png'
    }
  ];

  return (
  <main ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-white selection:bg-[#0072FF]/30 relative overflow-x-hidden transition-colors duration-500">
  <SEO title="Solutions | Mehza SmartTech" description="Classy and intelligent smart solutions for modern facilities." />

  {/* ── STYLE INJECTIONS ── */}
  {/* 🔴 Dynamic class support inside style template literal tags */}
  <style>{`
    .shimmer-text { background: linear-gradient(90deg, #00C6FF, #0072FF, #8E2DE2, #6A11CB, #00C6FF); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; }
    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    
    /* 🔴 Premium card styles updated to switch borders and glass bg adaptively based on theme context */
    .premium-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border: 1px solid rgba(0,0,0,0.06); position: relative; overflow: hidden; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
    .dark .premium-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
    
    .premium-card:hover { transform: translateY(-5px); border-color: rgba(0,0,0,0.15); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
    .dark .premium-card:hover { border-color: rgba(255,255,255,0.12); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
    
    .scan-overlay::after { content:''; position:absolute; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,rgba(0,198,255,0.4),transparent); animation: scanLine 4s linear infinite; }
    @keyframes scanLine { 0%{transform:translateY(-100%)} 100%{transform:translateY(500px)} }
  `}</style>

  {/* ── AMBIENT BACKGROUND ── */}
  <OrbBackground />

  {/* Noise texture overlay */}
  <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")` }} />

  {/* ── HERO SECTION ── */}
  <section className="relative min-h-screen md:min-h-[100svh] flex items-start overflow-hidden pt-[12vh] md:pt-[15vh] z-10">
    <div className="max-w-7xl mx-auto px-6 w-full relative">

      {/* Left Side Decorative Elements */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-[#00C6FF]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">
        {/* Left text — Spread across first viewport on mobile */}
        <AnimatedSection direction="left" className="w-full relative z-20 min-h-[75vh] md:min-h-0 flex flex-col justify-between pt-4 pb-12 md:py-0">
          {/* 🔴 Text color changes to slate-900 in light theme and white in dark theme */}
          <h1 className="font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.1] tracking-tighter mb-8 text-balance break-words text-slate-900 dark:text-white transition-colors duration-500">
            Where Tech<br />
            <span className="shimmer-text block mt-2">Meets Purpose</span>
          </h1>

          {/* 🔴 Paragraph typography text color slate-600 vs dark:text-gray-400 */}
          <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10 w-full max-w-lg lg:max-w-md xl:max-w-xl font-medium opacity-80 text-balance transition-colors duration-500">
            We make technology that actually cares about people. We help schools and businesses upgrade their spaces with interactive boards for better teamwork, and provide accessible hygiene solutions that offer peace of mind.
          </p>

          {/* Feature Highlights */}
          <div className="flex items-center gap-10 mb-12 py-2">
            <div className="flex flex-col">
              {/* 🔴 Sub headers text colors set */}
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">Smart</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#00C6FF]">Integration</span>
            </div>
            {/* 🔴 Vertical divider borders optimized */}
            <div className="w-px h-10 bg-slate-200 dark:bg-white/10 transition-colors duration-500" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">Built</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#8E2DE2]">for Impact</span>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-white/10 transition-colors duration-500" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">Zero</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#00C6FF]">Friction</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <button
              onClick={() => document.getElementById('products-showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8E2DE2] text-white font-bold text-xs md:text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(0,114,255,0.3)] hover:scale-105 transition-all active:scale-95"
            >
              Explore Products
            </button>
            {/* 🔴 Variant link text element colors dynamic support */}
            <Link
              to="/contact"
              className="w-full md:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full border-2 text-slate-800 dark:text-white font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95"
              style={{ borderColor: '#8E2DE2' }}
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>

        {/* Right — Immersive Visual (Hidden on mobile) */}
        <AnimatedSection direction="none" className="hidden md:block w-full pb-8 md:pb-0">
          <div className="relative group w-full h-[clamp(300px,50vh,750px)] md:h-[clamp(450px,75vh,750px)] flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.15)_0%,transparent_60%)] pointer-events-none z-0 mix-blend-screen" />
              
              {/* 🔴 Logo graphic uses dynamic mix-blend utility filter layers */}
              <img
                src="/logo2.png"
                alt=""
                className="w-[110%] max-w-[700px] h-auto object-contain dark:mix-blend-screen opacity-40 dark:opacity-60 scale-[1.2] md:scale-[1.4] lg:scale-[1.6] transition-all duration-1000 relative z-0"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at center, black 30%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 50% 50% at center, black 30%, transparent 100%)'
                }}
              />
            </div>

            {/* Foreground: Product Composition */}
            <div className="relative flex items-center justify-center lg:justify-end w-full h-full z-10 pointer-events-none lg:translate-x-[15%] lg:translate-y-[5%]">
              <m.div
                initial={isMobile ? false : { opacity: 0 }}
                whileInView={isMobile ? false : { opacity: 1, x: 20, y: -10 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-[45%] lg:w-[50%] z-20"
              >
                <img
                  src="/assets/mehza-smartboard.png"
                  alt="Mehza Smartboard"
                  className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-[#00C6FF]/20 blur-2xl rounded-full" />
              </m.div>

              <m.div
                initial={isMobile ? false : { opacity: 0 }}
                whileInView={isMobile ? false : { opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="relative w-[32%] lg:w-[38%] z-10 -ml-[8%] lg:-ml-[12%]"
              >
                <img
                  src="/assets/sanitary-vending-mehza.png"
                  alt="Mehza Sanitary Vending Machine"
                  className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-[#8E2DE2]/20 blur-2xl rounded-full" />
              </m.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>

  {/* ── PRODUCT SHOWCASE ── */}
  <section id="products-showcase" className="relative z-10 pt-16 md:pt-12 pb-10 px-6 max-w-7xl mx-auto">
    <div className="mb-12 relative z-20">
      <AnimatedSection direction="up">
        {/* 🔴 Header tags adjusted to use slate-900 in light mode */}
        <h2 className="font-black font-headline text-slate-900 dark:text-white tracking-tighter transition-colors duration-500" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.75rem)' }}>
          Our <span className="relative inline-block">Solutions
            <svg className="absolute bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,4 Q50,0 100,4 T200,4" stroke="url(#solGrad)" strokeWidth="2.5" fill="none" opacity="0.9" />
            </svg>
          </span>
        </h2>
      </AnimatedSection>
    </div>

    {products.map((product, idx) => (
      <div key={product.id} className={`${idx === 0 ? '' : 'mt-12 md:mt-32'} mb-8 md:mb-20`}>
        {/* Integrated Mobile Card Component */}
        <div className="md:hidden">
          <AnimatedSection direction="up" disabled={isMobile}>
            <div className="premium-card p-6 flex flex-col items-center gap-6 relative overflow-hidden" onMouseMove={handleMouseMove}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

              <div className="w-full relative flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/10 to-transparent blur-xl opacity-40" />
                <img src={product.image} alt={product.title} className="w-4/5 h-auto max-h-[250px] object-contain relative z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]" />
              </div>

              {/* 🔴 Content color changes for light layout profiles */}
              <div className="w-full relative z-10 text-center">
                <h3 className="text-2xl font-black font-headline leading-tight mb-2 tracking-tight text-slate-900 dark:text-white transition-colors duration-500">{product.title}</h3>
                <p className="text-sm text-[#0072FF] dark:text-[#00C6FF] font-headline italic mb-3 opacity-90 transition-colors duration-500">{product.tagline}</p>
                <p className="text-[13px] text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-4 opacity-80 transition-colors duration-500">{product.desc}</p>

                {/* Compact Icons Features Wrapper */}
                <div className="flex justify-center gap-4 mb-6">
                  {product.features.slice(0, 3).map((f, index) => {
                    const gradients = ["from-[#00C6FF] to-[#0072FF]", "from-[#8E2DE2] to-[#4A00E0]", "from-[#2dd4bf] to-[#0d9488]"];
                    return (
                      <div key={f.label} className="relative group p-[1px] rounded-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index % gradients.length]} opacity-40 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500`}></div>
                        {/* 🔴 Inner container colors updated */}
                        <div className="relative w-11 h-11 rounded-full bg-white dark:bg-[#0F1322]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl z-10 transition-colors duration-500">
                          <span className="material-symbols-outlined !text-xl" style={{ background: `linear-gradient(135deg, ${product.accent} 30%, ${product.accent}cc 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            {f.icon}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link to={`/${product.id}`} className="inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8E2DE2] text-white font-bold text-[10px] tracking-widest uppercase shadow-lg hover:scale-105 active:scale-95 transition-all">
                  View Details
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop Split Layout (Alternating) */}
        <div className={`hidden md:flex flex-row items-center gap-16 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
          <div className="w-1/2">
            <AnimatedSection direction={idx % 2 === 0 ? 'left' : 'right'} disabled={isMobile}>
              <div className="premium-card p-10 lg:p-12 group" onMouseMove={handleMouseMove}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* 🔴 Headers update */}
                <h2 className="relative z-10 text-3xl md:text-5xl font-headline font-black mb-4 leading-tight text-slate-900 dark:text-white transition-colors duration-500">{product.title}</h2>
                <p className="relative z-10 text-lg md:text-xl text-[#0072FF] dark:text-[#00C6FF] font-headline italic mb-4 opacity-80 transition-colors duration-500">{product.tagline}</p>
                <p className="relative z-10 text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 transition-colors duration-500">{product.desc}</p>

                {/* Desktop Features List Grid Layout */}
                <div className="relative z-10 flex flex-wrap gap-x-4 md:gap-x-8 gap-y-8 mb-8 justify-center">
                  {product.features.map((f, index) => {
                    const gradients = ["from-[#00C6FF] to-[#0072FF]", "from-[#8E2DE2] to-[#4A00E0]", "from-[#FDC830] to-[#F37335]", "from-[#2dd4bf] to-[#0d9488]"];
                    return (
                      <div key={f.label} className="flex flex-col items-center text-center gap-4 group/feature flex-1 min-w-[28%] sm:min-w-[0] max-w-[120px]">
                        <div className="relative w-[clamp(3rem,5vw,4rem)] h-[clamp(3rem,5vw,4rem)] flex items-center justify-center shrink-0">
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${gradients[index % gradients.length]} opacity-20 group-hover/feature:opacity-100 group-hover/feature:animate-spin-slow transition-all duration-700 p-[1.5px]`}>
                            {/* 🔴 Dynamic internal core bg color tracking */}
                            <div className="w-full h-full rounded-full bg-white dark:bg-[#0A0F1C] transition-colors duration-500"></div>
                          </div>
                          <div className="absolute inset-[2px] rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl z-10 overflow-hidden transition-colors duration-500">
                            <div className={`absolute -inset-2 bg-gradient-to-tr ${gradients[index % gradients.length]} dark:opacity-40 group-hover/feature:opacity-20 transition-opacity duration-500 blur-md`}></div>
                          </div>
                          <span className="material-symbols-outlined text-[clamp(1.4rem,2.5vw,1.8rem)] relative z-20 transition-all duration-500 group-hover/feature:scale-110" style={{
                                  background: `linear-gradient(135deg, #fff 40%, ${product.accent} 100%)`,
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  fontVariationSettings: "'wght' 300"
                                }}>
                            {f.icon}
                          </span>
                        </div>
                        <span className="text-[clamp(9px,0.8vw,11px)] font-bold text-slate-500 dark:text-gray-400/80 uppercase tracking-[0.1em] leading-tight group-hover/feature:text-[#0072FF] dark:group-hover/feature:text-white group-hover/feature:tracking-[0.15em] transition-all duration-300">{f.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="relative z-50 flex flex-wrap justify-center mt-auto w-full pt-6 gap-6 border-t border-slate-200 dark:border-white/5 pointer-events-auto transition-colors duration-500">
                  {/* 🔴 Dynamic primary buttons config mapping states updates */}
                  <Link to={`/${product.id}`} className="px-10 py-4 block rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-xs tracking-widest uppercase hover:scale-105 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative z-50">
                    Know More
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="w-1/2 relative group">
            <AnimatedSection direction="none" disabled={isMobile}>
              <div className="relative perspective-2000">
                <m.div whileHover={{ rotateY: idx % 2 === 0 ? -15 : 15, rotateX: 10, scale: 1.05 }} className="relative z-10 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40" />
                  <img src={product.image} alt={product.title} className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]" />
                  <m.div animate={isMobile ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] right-[5%] w-20 h-20 rounded-3xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/20 flex items-center justify-center z-20 transition-colors duration-500">
                    <span className="material-symbols-outlined text-slate-800 dark:text-white opacity-40 dark:opacity-30 text-4xl">{product.icon}</span>
                  </m.div>
                </m.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(0,114,255,0.1)_0%,transparent_70%)] pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    ))}
  </section>

  {/* ── SITUATIONAL SHOWCASE ── */}
  <section className="relative z-10 pt-4 pb-12">
    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
      <AnimatedSection direction="up">
        {/* 🔴 Header elements adapt tracking */}
        <h2 className="font-black mb-8 leading-tight tracking-tighter text-slate-900 dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.75rem)' }}>
          Solutions For <span className="relative inline-block">
            <span className="text-slate-900 dark:text-white">Every Situation</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,4 Q50,0 100,4 T200,4" stroke="url(#solGrad)" strokeWidth="2.5" fill="none" opacity="0.9" />
            </svg>
          </span>
        </h2>
      </AnimatedSection>
    </div>

    <div className="space-y-0">
      {spaces.map((space, i) => (
        <div key={space.title} className="relative group overflow-hidden last:border-0">
          <div className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} h-[50vh] lg:h-auto lg:min-h-[55vh]`}>
            <div className="w-120 w-1/2 lg:w-[60%] relative overflow-hidden">
              <m.div initial={isMobile ? false : { scale: 1.1 }} whileInView={isMobile ? false : { scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute inset-0">
                <img src={space.image} alt={space.title} className="w-full h-full object-cover grayscale-[30%] md:group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0F1C] via-transparent to-transparent opacity-60 lg:hidden" />
              </m.div>
            </div>

            <div className="w-1/2 lg:w-[40%] flex items-center relative z-10">
              <div className={`px-4 py-16 md:p-8 lg:p-12 ${i % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} h-full flex flex-col`}>
                <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} disabled={isMobile} className="h-full">
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-1">
                      {/* 🔴 Stacking content layers textual updates */}
                      <h3 className="text-2xl md:text-[2.6rem] font-black tracking-tight leading-tight text-slate-900 dark:text-white transition-colors duration-500">{space.title}</h3>
                      <p className="text-[#0072FF] dark:text-[#00C6FF] text-[9px] md:text-base font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500">{space.desc}</p>
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-base md:text-2xl leading-relaxed font-medium transition-colors duration-500">{space.details}</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
          {/* 🔴 Connecting grid section line gradient border dynamic configs tracking */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent transition-colors duration-500" />
        </div>
      ))}
    </div>
  </section>

  {/* ── FINAL CTA ── */}
  <div className="relative">
    {/* 🔴 Overlay blending logic matching light container types updates */}
    <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-slate-50 dark:to-[#0A0F1C] pointer-events-none z-[5] -translate-y-full transition-colors duration-500"></div>

    <section className="relative overflow-hidden group" onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); const x = e.clientX - rect.left; e.currentTarget.style.setProperty('--mouse-x', `${x}px`); }}>
      <div className="relative w-full pt-[10vh] pb-[8vh] md:py-[15vh] px-[5%] z-10">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 h-full w-[800px] pointer-events-none transition-transform duration-100 ease-out mix-blend-screen" style={{ left: 'var(--mouse-x, 50%)', transform: 'translateX(-50%)', background: 'linear-gradient(to right, transparent 0%, rgba(0, 198, 255, 0.1) 20%, rgba(0, 198, 255, 0.4) 50%, rgba(0, 198, 255, 0.1) 80%, transparent 100%)' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.15)_50%,transparent)]" />
          </div>
        </div>

        {/* 🔴 Core pane glass overlays dynamic tracking configuration layers setup */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5 backdrop-blur-[40px] bg-white/40 dark:bg-[#0A0F1C]/30 transition-colors duration-500" />

        {/* Mobile Cutout Layer */}
        <div className="block md:hidden absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
          <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M0,250 L1200,250 L1200,0 C800,160 400,160 0,0 Z" className="fill-white dark:fill-[#0A0F1C] transition-colors duration-500" />
            <path d="M1200,0 C800,160 400,160 0,0" fill="none" className="stroke-slate-200/50 dark:stroke-white/[0.05]" strokeWidth="1" />
          </svg>
        </div>

        {/* Desktop Cutout Layer */}
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
                <path d="M1200,0 C800,160 400,160 0,0" fill="none" stroke="rgba(0,198,255,0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
              </svg>
            </div>
            <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
              <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-400 dark:stroke-white/0.8" strokeWidth="2" />
                <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(0,198,255,0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-30">
          <AnimatedSection direction="up">
            {/* 🔴 Secondary headings dynamic tracking update */}
            <h2 className="font-headline font-black mb-8 text-balance leading-[0.9] tracking-tighter text-slate-900 dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>Ready to Craft <br /><span className="shimmer-text italic font-playfair font-normal">the Future?</span></h2>
            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 opacity-70 font-medium leading-relaxed transition-colors duration-500">Join the new standard of smart infrastructure. Our engineers are ready to tailor a solution for your facility.</p>
            <div className="flex justify-center">
              <Link to="/contact" className="px-8 py-4 rounded-full text-white font-bold text-base uppercase tracking-widest shadow-[0_0_40px_rgba(0,114,255,0.3)] transition-all duration-300 hover:scale-105 flowing-gradient-bg border border-white/10">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
</main>
  );
};

export default Solutions;
