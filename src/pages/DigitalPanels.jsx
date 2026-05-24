import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';

const DigitalPanels = () => {
  const ctaRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctaRef.current.style.setProperty('--mouse-x', `${x}px`);
    ctaRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <main className="min-h-screen font-sans selection:bg-[#8E2DE2] selection:text-white text-white bg-[#0A0F1C] relative overflow-x-hidden">
      {/* Global Ambient Premium Glows (Fixed Background) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#00C6FF]/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[1000px] h-[1000px] bg-[#8E2DE2]/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-[#0072FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <SEO
        title="Smart Digital Panels | Mehza SmartTech Solutions"
        description="Transforming Schools, Offices & Public Spaces with next-generation interactive Smart Digital Panels."
        canonical="https://mehzasmarttechsolutions.com/digital-panels"
      />


      {/* Hero Section — Split layout */}
      <section className="relative w-full bg-[#0A0F1C] overflow-hidden lg:h-screen lg:min-h-[700px] flex items-center pt-32 pb-16 lg:py-0">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <AnimatedSection direction="left" className="flex flex-col items-start">
            <h1 className="font-bold text-white drop-shadow-lg text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6" style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}>
              Transforming<br />
              spaces with<br />
              <span className="italic font-light">next-gen</span> smart<br />
              <span className="relative inline-block text-white mt-1">
                displays.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="textGradPanels" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00C6FF" />
                      <stop offset="50%" stopColor="#0072FF" />
                      <stop offset="100%" stopColor="#6A11CB" />
                    </linearGradient>
                  </defs>
                  <path d="M0,4 Q50,0 100,4 T200,4" stroke="url(#textGradPanels)" strokeWidth="3" fill="none" opacity="0.9" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md font-body">
              Wall-mounted smart displays that bridge the gap between users and facility managers — in real time.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(to right, #00C6FF, #0072FF, #6A11CB)' }}
              >
                Get in Touch
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest border-2 transition-all duration-300 hover:bg-white/5 active:scale-95"
                style={{ borderColor: '#8E2DE2', color: 'white' }}
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: Illustration with ambient glow bg */}
          <AnimatedSection direction="right" delay={0.15} className="relative flex items-center justify-center">
            {/* Glow backdrop behind illustration */}
            <div className="absolute w-[480px] h-[480px] rounded-full bg-[#0072FF]/15 blur-[90px]"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#6A11CB]/20 blur-[70px] translate-x-16 translate-y-10"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#00C6FF]/10 blur-[60px] -translate-x-10 -translate-y-12"></div>
            {/* Illustration */}
            <img
              src="/assets/newline-smartboard.png"
              alt="SmartBoard Interactive Digital Panel"
              className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 40px rgba(0, 114, 255, 0.25))' }}
            />
          </AnimatedSection>
        </div>
      </section>



      {/* Solutions Bento Grid */}
      <section className="relative z-10 py-24 px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up" className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white mb-4">
              Tailored for Every Environment
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              Seamlessly integrate vivid communication and dynamic advertising into the spaces that matter most.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Schools Card */}
            <AnimatedSection direction="up" delay={0.1} className="md:col-span-8 block">
              <Link to="/digital-panels/educational-campuses" className="block h-full">
                <div className="bg-[#1A1A25] rounded-[2rem] overflow-hidden group shadow-[0_20px_40px_rgba(22,27,41,0.04)] relative h-full hover:shadow-[0_24px_48px_rgba(22,27,41,0.08)] transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    <div className="p-12 flex flex-col justify-center">
                      <h3 className="font-headline text-3xl font-bold text-white mb-4">Educational Campuses</h3>
                      <p className="font-body text-gray-400 mb-8">
                        Modernize campus connectivity. Replace static bulletin boards with vibrant digital displays that broadcast announcements, emergency alerts, and interactive maps.
                      </p>
                      <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-sm font-label text-white">
                          <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                          Centralized content management
                        </li>
                        <li className="flex items-center text-sm font-label text-white">
                          <span className="material-symbols-outlined text-primary mr-3 text-lg">check_circle</span>
                          Anti-glare protective glass
                        </li>
                      </ul>
                      <span className="inline-flex items-center text-primary font-label font-semibold">
                        Explore Products <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                      </span>
                    </div>
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        alt="Digital Boards on Campus"
                        className="absolute inset-0 w-full h-full object-cover object-[60%_center] transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A25] to-transparent hidden lg:block"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Offices Card */}
            <AnimatedSection direction="up" delay={0.2} className="md:col-span-4 block">
              <Link to="/digital-panels/corporate-offices" className="block h-full">
                <div className="bg-[#1A1A25] rounded-[2rem] p-10 flex flex-col justify-between shadow-[0_20px_40px_rgba(22,27,41,0.04)] relative overflow-hidden group h-full hover:shadow-[0_24px_48px_rgba(22,27,41,0.08)] transition-shadow duration-300">
                  <div className="relative z-10">
                    <h3 className="font-headline text-2xl font-bold text-white mb-4">Corporate Offices</h3>
                    <p className="font-body text-gray-400 text-sm mb-6">
                      Elevate internal communications with automated meeting room schedules and high-definition lobby directories.
                    </p>
                    <div className="bg-[#1A1A25] p-4 rounded-xl mb-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label text-xs font-semibold text-white">Communication Efficiency</span>
                        <span className="font-headline text-sm font-bold text-primary">+65%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#252535] rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[65%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-primary font-label font-semibold relative z-10">
                    Explore Products <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </span>
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-fixed-dim/20 rounded-full blur-2xl group-hover:bg-primary-fixed-dim/40 transition-colors duration-500"></div>
                </div>
              </Link>
            </AnimatedSection>

          </div>
        </div>
        
        {/* Gradient fade to seamlessly blend into the CTA section below */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-[#0A0F1C] pointer-events-none z-[-1]"></div>
      </section>


      {/* Custom Solution CTA */}
      <section 
        ref={ctaRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden bg-[#0A0F1C] group"
      >
        
        {/* The Container Layer */}
        <div className="relative w-full py-[12vh] px-[5%] z-10">
          
          {/* 1. Full-Height Vertical Pillar of Light (z-0 so it sits BEHIND the glass) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div 
              className="absolute top-0 h-full w-[800px] pointer-events-none transition-transform duration-100 ease-out mix-blend-screen"
              style={{
                left: 'var(--mouse-x, 50%)',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(to right, transparent 0%, rgba(0, 198, 255, 0.1) 20%, rgba(0, 198, 255, 0.4) 50%, rgba(0, 198, 255, 0.1) 80%, transparent 100%)'
              }}
            >
              {/* Inner bright core */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.15)_50%,transparent)]" />
            </div>
          </div>

          {/* 1.5. The Glassmorphic Pane (z-5: sits OVER the light pillar, blurring it realistically) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5 backdrop-blur-[40px] bg-[#0A0F1C]/30" />

          {/* 2. Base Cutout Layer (z-10 so it covers both the pillar AND the glass above the curve) */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
            <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[150px]">
              <path d="M0,250 L1200,250 L1200,0 C800,320 400,320 0,0 Z" fill="#0A0F1C" />
              <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </svg>
          </div>

          {/* 3. The Bright Curve Edge Highlight (Masked precisely to the mouse X, z-20 so it sits on top) */}
          <div className="absolute top-0 left-0 w-full h-[250px] pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div 
              className="absolute top-0 left-0 w-full h-full"
              style={{
                WebkitMaskImage: `radial-gradient(ellipse 400px 300px at var(--mouse-x, 50%) 0px, black 0%, transparent 100%)`,
                maskImage: `radial-gradient(ellipse 400px 300px at var(--mouse-x, 50%) 0px, black 0%, transparent 100%)`
              }}
            >
              {/* Bright highlighted curved line */}
              <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[150px]">
                  {/* Core bright white line */}
                  <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                  
                  {/* Blue glowing rim */}
                  <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(0,198,255,0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
                </svg>
              </div>
            </div>
          </div>

          {/* 4. The Content (z-30: on top of everything) */}
          <div className="relative z-30 max-w-4xl mx-auto flex flex-col items-center text-center mt-12 md:mt-20">
            <AnimatedSection direction="up" className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg" style={{ fontFamily: '"Sora", sans-serif' }}>
                Need a <span className="relative inline-block text-white">
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
              <p className="font-body text-gray-400 mb-12 text-lg md:text-xl max-w-2xl leading-relaxed">
                Whether for specialized environments or unique integration requirements, our team is ready to design the perfect smart infrastructure for you.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(106,17,203,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(to right, #00C6FF, #0072FF, #6A11CB)' }}
              >
                Get in Touch <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};


export default DigitalPanels;
