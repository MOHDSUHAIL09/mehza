import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

const SanitaryVending = () => {
  const ctaRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    ctaRef.current.style.setProperty('--mouse-x', `${x}px`);
  }, []);
  return (
    <>
{/* 🔴 Parent wrapper updated to adaptive bg-slate-50 / text-slate-800 properties */}
<main className="min-h-screen font-sans selection:bg-[#8E2DE2] selection:text-white text-slate-800 bg-slate-50 dark:bg-[#0A0F1C] dark:text-white relative overflow-x-hidden transition-colors duration-500">
  {/* Global Ambient Premium Glows (Fixed Background) */}
  <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#00C6FF]/5 rounded-full blur-[140px]"></div>
    <div className="absolute bottom-[20%] right-[-10%] w-[1000px] h-[1000px] bg-[#8E2DE2]/10 rounded-full blur-[150px]"></div>
    <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-[#0072FF]/5 rounded-full blur-[100px]"></div>
  </div>

  <SEO
    title="Smart Sanitary Vending | Mehza SmartTech Solutions"
    description="Empowering Schools, Offices & Public Spaces with IoT-enabled Sanitary Pad Vending Machines & Smart Digital Panels."
    canonical="https://mehzasmarttechsolutions.com/sanitary-vending"
  />

  {/* Hero Section */}
  {/* 🔴 Hero bg set dynamically for dark/light mode texture alignment */}
  <section className="relative w-full min-h-screen pt-32 pb-24 flex items-center bg-slate-900 dark:bg-black overflow-hidden transition-colors duration-500">
    <div className="absolute inset-0 z-0 pointer-events-none select-none bg-slate-900 dark:bg-black transition-colors duration-500">
      <img
        src="/assets/hero-bg.jpeg"
        alt="Futuristic technology background"
        className="w-full h-full object-cover blur-[6px] opacity-30 dark:opacity-40"
      />
    </div>
    <AnimatedSection direction="up" className="max-w-5xl mx-auto px-8 relative z-10 w-full flex flex-col items-center justify-center text-center mt-24">
      <div className="space-y-8 flex flex-col items-center">
        {/* 🔴 Hero text elements are perfectly visible as white overlays over standard dark banner sections */}
        <h1 className="font-bold text-white drop-shadow-lg text-5xl sm:text-6xl lg:text-7xl leading-[1.15] tracking-tight" style={{ fontFamily: '"Sora", sans-serif' }}>
          Making hygiene<br />
          <span className="relative inline-block text-white">
            accessible
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
              <defs>
                <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C6FF" />
                  <stop offset="50%" stopColor="#0072FF" />
                  <stop offset="100%" stopColor="#6A11CB" />
                </linearGradient>
              </defs>
              <path d="M0,4 Q50,0 100,4 T200,4" stroke="url(#textGrad)" strokeWidth="3" fill="none" opacity="0.9" />
            </svg>
          </span> everywhere<br />
          using <span className="italic font-light">smart technology.</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Link
            to="/contact"
            className="px-10 py-5 rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(to right, #00C6FF, #0072FF, #6A11CB)' }}
          >
            Get in Touch
          </Link>
          <Link
            to="/contact"
            className="px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest border-2 transition-all duration-300 hover:bg-white/5 active:scale-95 text-white"
            style={{ borderColor: '#8E2DE2' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </AnimatedSection>
  </section>


  {/* Solutions Bento Grid */}
  <section className="relative z-10 py-24 px-8 bg-transparent">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <AnimatedSection direction="up">
          {/* 🔴 Grid main title text color matches template layers text-slate-900 */}
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-500">
            Tailored for Every Space
          </h2>
          {/* 🔴 Paragraph updates directly text-slate-600 */}
          <p className="font-body text-slate-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500">
            Seamless integration of clinical-grade hygiene tech into the environments that matter most.
          </p>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Schools Card */}
        <AnimatedSection direction="up" delay={0.1} className="md:col-span-8 block">
          <Link to="/sanitary-vending/educational-campuses" className="block h-full">
            {/* 🔴 Card background switches from pure custom white card to deep dark box background template */}
            <div className="bg-white dark:bg-[#1A1A25] rounded-[2rem] overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(22,27,41,0.04)] border border-slate-200 dark:border-transparent relative h-full hover:shadow-[0_24px_48px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_24px_48px_rgba(22,27,41,0.08)] transition-all duration-500 min-h-[50vh] md:min-h-[56vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="p-12 flex flex-col justify-center">

                  {/* 🔴 Text fields text-slate-900 / text-slate-600 adaptive */}
                  <h3 className="font-headline text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Educational Campuses</h3>
                  <p className="font-body text-slate-600 dark:text-gray-400 mb-8 transition-colors duration-500">
                    Promoting hygiene and dignity for students. Ensure washrooms are consistently stocked, reducing absenteeism and fostering a supportive learning environment.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {/* 🔴 List values contrast set correctly */}
                    <li className="flex items-center text-sm font-label text-slate-700 dark:text-white transition-colors duration-500">
                      <span className="material-symbols-outlined text-[#0072FF] mr-3 text-lg">check_circle</span>
                      Vandal-resistant casing
                    </li>
                    <li className="flex items-center text-sm font-label text-slate-700 dark:text-white transition-colors duration-500">
                      <span className="material-symbols-outlined text-[#0072FF] mr-3 text-lg">check_circle</span>
                      Automated inventory alerts for janitorial staff
                    </li>
                  </ul>
                  <span className="inline-flex items-center text-[#0072FF] dark:text-[#00C6FF] font-label font-semibold transition-colors duration-500">
                    Explore Products <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </span>
                </div>
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    alt="School Environment"
                    className="absolute inset-0 w-full h-full object-cover object-[60%_center] transition-transform duration-700 group-hover:scale-105"
                    src="/assets/edu-campus.jpg"
                  />
                  {/* 🔴 Linear masking panel matches dark/light states dynamically via conditional classes */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#1A1A25] to-transparent hidden lg:block transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Offices Card */}
        <AnimatedSection direction="up" delay={0.2} className="md:col-span-4 block">
          <Link to="/sanitary-vending/corporate-offices" className="block h-full">
            <div className="rounded-[2rem] border border-slate-200 dark:border-transparent overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(22,27,41,0.04)] group hover:shadow-[0_24px_48px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_24px_48px_rgba(22,27,41,0.08)] transition-shadow duration-300 h-[48svh] min-h-[48svh] max-h-[48svh] md:h-full md:min-h-[56vh] md:max-h-none">
              {/* Full background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/corporate-office.jpg"
                  alt="Corporate Office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* 🔴 Overlay transparency handles white base on light switches */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-[#0A0F1C] dark:via-[#0A0F1C]/80 to-transparent transition-colors duration-500"></div>
              </div>
              {/* Text content at bottom */}
              <div className="relative z-10 p-10 flex flex-col justify-end h-full">
                {/* 🔴 Headers dynamic toggling text-slate-900 / dark:text-white */}
                <h3 className="font-headline text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">Corporate Offices</h3>
                <p className="font-body text-slate-600 dark:text-gray-400 text-sm mb-6 transition-colors duration-500">
                  Enhancing workplace wellness and employee care with discreet, premium hygiene touchpoints.
                </p>
                {/* 🔴 Embedded micro stat card updates to light glassmorphism panel style */}
                <div className="bg-white/90 dark:bg-[#0A0F1C]/60 backdrop-blur-sm p-4 rounded-xl mb-8 border border-slate-200 dark:border-transparent transition-colors duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label text-xs font-semibold text-slate-800 dark:text-white transition-colors duration-500">Staff Satisfaction</span>
                    <span className="font-headline text-sm font-bold text-[#0072FF] dark:text-[#00C6FF] transition-colors duration-500">+42%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-[#252535] rounded-full overflow-hidden transition-colors duration-500">
                    <div className="h-full bg-gradient-to-r from-[#00C6FF] to-[#8E2DE2] w-[42%] rounded-full"></div>
                  </div>
                </div>
                <span className="inline-flex items-center text-[#0072FF] dark:text-[#00C6FF] font-label font-semibold transition-colors duration-500">
                  Explore Products <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Public Places Card */}
        <AnimatedSection direction="up" delay={0.3} className="md:col-span-12 block">
          <Link to="/sanitary-vending/public-spaces" className="block h-full">
            <div className="bg-white dark:bg-[#1A1A25] rounded-[2rem] border border-slate-200 dark:border-transparent overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(22,27,41,0.04)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_24px_48px_rgba(22,27,41,0.08)] transition-all duration-500 h-[48svh] min-h-[48svh] max-h-[48svh] md:h-auto md:min-h-[45vh] md:max-h-none">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Public Space"
                  className="w-full h-full object-cover object-[center_80%] opacity-60 dark:opacity-70"
                  src="/assets/public-space-alt.jpg"
                />
                {/* 🔴 Overlay transparency updates gradient mapping */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 dark:from-[#0A0F1C] dark:via-[#0A0F1C]/90 to-transparent transition-colors duration-500"></div>
              </div>
              <div className="relative z-10 px-8 pt-10 pb-3 md:p-16 flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-2xl mb-10 md:mb-0">
                  {/* 🔴 Text values config update */}
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">High-Traffic Public Spaces</h3>
                  <p className="font-body text-slate-600 dark:text-white text-base md:text-lg mb-6 md:mb-8 transition-colors duration-500">
                    Making essential hygiene products accessible in malls, stations, and airports. Our high-capacity units are designed for durability and minimal maintenance overhead.
                  </p>
                  <span className="inline-block bg-slate-900 dark:bg-[#0A0F1C] text-[#00C6FF] font-label font-semibold px-8 py-3.5 rounded-xl transition-colors duration-500">
                    Explore Products
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

      </div>
    </div>
    
    {/* Gradient fade to seamlessly blend into the CTA section below */}
    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-slate-50 dark:to-[#0A0F1C] pointer-events-none z-[-1] transition-colors duration-500"></div>
  </section>


  {/* Custom Solution CTA */}
  <section 
    ref={ctaRef}
    onMouseMove={handleMouseMove}
    className="relative overflow-hidden bg-white dark:bg-[#0A0F1C] group transition-colors duration-500"
  >
    {/* The Container Layer */}
    <div className="relative w-full py-[12vh] px-[5%] z-10">
      
      {/* 1. Full-Height Vertical Pillar of Light */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute top-0 h-full w-[800px] pointer-events-none transition-transform duration-100 ease-out mix-blend-screen"
          style={{
            left: 'var(--mouse-x, 50%)',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, transparent 0%, rgba(0, 198, 255, 0.1) 20%, rgba(0, 198, 255, 0.4) 50%, rgba(0, 198, 255, 0.1) 80%, transparent 100%)'
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.15)_50%,transparent)]" />
        </div>
      </div>

      {/* 1.5. The Glassmorphic Pane */}
      {/* 🔴 Glass panel handles white transparent backdrop layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5 backdrop-blur-[40px] bg-white/40 dark:bg-[#0A0F1C]/30 transition-colors duration-500" />

      {/* 2. Base Cutout Layer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
        <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[150px]">
          <path d="M0,250 L1200,250 L1200,0 C800,320 400,320 0,0 Z" className="fill-white dark:fill-[#0A0F1C] transition-colors duration-500" />
          <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-200/50 dark:stroke-white/[0.05]" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. The Bright Curve Edge Highlight */}
      <div className="absolute top-0 left-0 w-full h-[250px] pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            WebkitMaskImage: `radial-gradient(ellipse 400px 300px at var(--mouse-x, 50%) 0px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(ellipse 400px 300px at var(--mouse-x, 50%) 0px, black 0%, transparent 100%)`
          }}
        >
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[150px]">
              <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-400 dark:stroke-white/0.8" strokeWidth="2" />
              <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(0,198,255,0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
            </svg>
          </div>
        </div>
      </div>

      {/* Static Center Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(0,198,255,0.08)_0%,_transparent_70%)] pointer-events-none z-0" />

      <AnimatedSection direction="up" className="max-w-3xl mx-auto flex flex-col items-center relative z-30 pt-[6vh]">
        {/* 🔴 Custom texts updates text-slate-900 */}
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg text-center md:text-left transition-colors duration-500" style={{ fontFamily: '"Sora", sans-serif' }}>
          Need a <span className="relative inline-block text-slate-900 dark:text-white">
            custom
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ctaTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C6FF" />
                  <stop offset="50%" stopColor="#0072FF" />
                  <stop offset="100%" stopColor="#6A11CB" />
                </linearGradient>
              </defs>
              <path d="M0,4 Q50,0 100,4 T200,4" stroke="url(#ctaTextGrad)" strokeWidth="4" fill="none" opacity="0.9" />
            </svg>
          </span> solution?
        </h2>
        {/* 🔴 Body description switches perfectly */}
        <p className="text-slate-600 dark:text-gray-300 font-medium mb-12 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center transition-colors duration-500">
          Whether for specialized environments or unique integration requirements, our team is ready to design the perfect smart infrastructure for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(106,17,203,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
            style={{ background: 'linear-gradient(to right, #00C6FF, #0072FF, #6A11CB)' }}
          >
            Get in Touch <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
</main>
    </>
  );
};


export default SanitaryVending;

