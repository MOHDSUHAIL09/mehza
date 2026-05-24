import AnimatedSection from '../components/ui/AnimatedSection';
import SEO from '../components/ui/SEO';

const About = () => {
  const accentPurple = '#8E2DE2';
  const accentCyan = '#00C6FF';
  const mainGradient = 'linear-gradient(to right, #00C6FF, #0072FF, #6A11CB)';
  const hygienePink = '#FF8890';

  return (
    <>
    {/* 🔴 Parent background changed to adaptive classes */}
<div className="min-h-screen font-sans selection:bg-[#8E2DE2] selection:text-white bg-slate-50 text-slate-800 dark:bg-[#0A0F1C] dark:text-white relative transition-colors duration-500">
  
  {/* Global Texture Overlays */}
  <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none z-0" />
  <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none z-0" />
  
  <SEO
    title="About Us | Mehza SmartTech Solutions"
    description="Mehza SmartTech Solutions is dedicated to transforming education and hygiene in schools through Smart Boards and Sanitary Pad Vending Machines."
    canonical="https://mehza.com/about"
  />

  {/* ── HERO ── */}
  <section className="relative pt-40 pb-24 px-6 lg:px-24 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(0,198,255,0.1)_0%,_transparent_65%)] pointer-events-none" />
    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center relative z-10">
      <p className="text-[#00C6FF] font-semibold tracking-[0.3em] text-xs uppercase mb-5">— Who We Are —</p>
      
      {/* 🔴 Title text color: slate-900 in light, white in dark */}
      <h1 className="font-headline font-black tracking-tighter text-slate-900 dark:text-white mb-6 transition-colors duration-500" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
        About <span style={{ background: mainGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mehza SmartTech</span>
      </h1>
      
      {/* 🔴 Description text color adjustment */}
      <p className="text-slate-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transition-colors duration-500">
        Mehza Smart Tech Solution is dedicated to transforming education and improving hygiene standards in schools
        through innovative and practical solutions. We specialize in providing <strong className="text-slate-900 dark:text-white">Smart Boards</strong> for modern
        classrooms and <strong className="text-slate-900 dark:text-white">Sanitary Pad Vending Machines</strong> to support girls' hygiene needs.
      </p>
    </AnimatedSection>
  </section>

  {/* ── ABOUT TEXT ── */}
  <section className="py-20 px-6 lg:px-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      {/* Left: Illustration */}
      <div className="w-full lg:w-1/2">
        <AnimatedSection direction="left">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg dark:shadow-none">
              <img
                src="/assets/about/vending_vector_navy.png"
                alt="Smart Hygiene Vending Illustration"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
              {/* 🔴 Badge background changed to white/slate mix in light, dark block in dark mode */}
              <p className="inline-block px-8 py-3 rounded-full bg-white dark:bg-[#1A1A25] border border-slate-200 dark:border-white/10 font-bold tracking-[0.2em] uppercase text-xs shadow-xl transition-colors duration-500" style={{ color: hygienePink }}>
                Smart Hygiene Vending
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-1/2">
        <AnimatedSection direction="right">
          {/* 🔴 Heading contrast updated */}
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-slate-900 dark:text-white transition-colors duration-500">
            Our Story
          </h2>
          {/* 🔴 Text paragraph colors adjusted */}
          <div className="space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-500">
            <p>
              Our aim is to bridge the gap where essential facilities are often missing. We believe that every child
              deserves access to smart, interactive education, and every girl should have easy and dignified access
              to hygiene products within the school environment.
            </p>
            <p>
              At Mehza, we focus on creating a positive impact by enhancing learning experiences and promoting
              health awareness. Our solutions are designed to be reliable, easy to use, and accessible, ensuring
              that schools can adopt them smoothly and effectively.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>

  {/* ── VISION & MISSION ── */}
  <section className="py-24 px-6 lg:px-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection direction="up" className="mb-16 text-center">
        {/* 🔴 Heading update */}
        <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white transition-colors duration-500">
          Our Vision &amp; Mission
        </h2>
      </AnimatedSection>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
          <div className="space-y-16">
            <AnimatedSection direction="left" delay={0.1}>
              {/* 🔴 Left border and header adaptation */}
              <div className="border-l-4 pl-10 transition-colors duration-300 hover:border-slate-400 dark:hover:border-white" style={{ borderColor: accentCyan }}>
                <h3 className="font-headline text-2xl font-black mb-4 uppercase tracking-tight text-slate-900 dark:text-white transition-colors duration-500">Vision</h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-500">
                  To ensure that every child experiences smart education and every girl has easy access to hygiene facilities.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              {/* 🔴 Left border and header adaptation */}
              <div className="border-l-4 pl-10 transition-colors duration-300 hover:border-slate-400 dark:hover:border-white" style={{ borderColor: accentPurple }}>
                <h3 className="font-headline text-2xl font-black mb-4 uppercase tracking-tight text-slate-900 dark:text-white transition-colors duration-500">Mission</h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-500">
                  To provide innovative, practical, and accessible solutions that improve both education quality
                  and hygiene standards across institutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg dark:shadow-none">
              <img
                src="/assets/about/smartboard_vector_navy.png"
                alt="Interactive Smart Boards Illustration"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
              {/* 🔴 Badge structure handles white background alignment on light mode */}
              {/* <p
                className="inline-block px-10 py-3 rounded-full bg-white dark:bg-[#1A1A25] border border-slate-200 dark:border-white/10 font-bold tracking-[0.2em] uppercase text-xs shadow-xl transition-colors duration-500"
                style={{ background: isDark ? mainGradient : undefined, WebkitBackgroundClip: !isDark ? 'initial' : 'text', WebkitTextFillColor: !isDark ? 'initial' : 'transparent' }}
              >
                <span className={!isDark ? 'text-[#00C6FF]' : ''}>Interactive Smart Boards</span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ── FOUNDER ── */}
  <section className="py-24 px-6 lg:px-24 relative overflow-hidden">
    {/* 🔴 Gradient separator dynamic adjustment split */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent transition-colors duration-500" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(142,45,226,0.08)_0%,_transparent_50%)] pointer-events-none" />
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="text-center">
        <AnimatedSection direction="up">
          <p className="text-[#00C6FF] font-semibold tracking-[0.4em] text-xs uppercase mb-4">— Meet Our Founder —</p>
          
          {/* 🔴 Founder Header name text color dynamics adjustment */}
          <h2 className="font-headline text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9] transition-colors duration-500">
            Saba <span className="md:font-playfair md:font-normal md:italic md:shimmer-text md:ml-4">Hayat</span> <br className="md:hidden" />
            <span className="shimmer-text italic font-playfair font-normal md:ml-4">Khan</span>
          </h2>
          
          {/* 🔴 Body biography texts configuration setups */}
          <div className="space-y-6 text-slate-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto transition-colors duration-500">
            <p>
              Committed to improving education and hygiene in schools, Saba's vision is to provide smart learning
              through advanced classroom solutions and ensure easy access to hygiene facilities for girls.
            </p>
            <p>
              With a purpose-driven approach, she focuses on creating impactful solutions for a smarter and healthier future, 
              ensure every child has the tools to succeed and every girl has the dignity she deserves.
            </p>
          </div>
          
          {/* 🔴 Separator tags below text handles slate configurations */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#8E2DE2] to-transparent" />
            <p className="text-slate-400 dark:text-white/60 font-headline font-bold tracking-widest uppercase text-[10px] transition-colors duration-500">The Heart of Mehza SmartTech Solutions</p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#8E2DE2] to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
</div>
    </>
  );
};

export default About;
