import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import SEO from '../components/ui/SEO';
import InquiryForm from '../components/forms/InquiryForm';

const Contact = ({isDark}) => {
  return (
    <>
      {/* 🔴 Parent wrapper updated to adaptive bg-slate-50 / text-slate-800 keys */}
<div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0A0F1C] dark:text-white relative transition-colors duration-500">
  <SEO
    title="Contact Us | Mehza SmartTech Solutions"
    description="Get in touch with Mehza SmartTech Solutions. Request a free demo, ask for a quote, or inquire about our smart hygiene solutions."
    canonical="https://mehzasmarttechsolutions.com/contact"
  />

  {/* ── GET IN TOUCH HEADING + FORM SECTION ───────────────────────── */}
  {/* 🔴 Background updated with responsive dark/light solid styling */}
  <section
    className="pt-28 pb-20 px-8 md:px-16 transition-colors duration-500"
    style={{ background: isDark ? 'linear-gradient(135deg, #0A0F1C 0%, #0D1530 60%, #1a0a3c 100%)' : 'transparent' }}
  >
    {/* Heading */}
    <div className="max-w-7xl mx-auto mb-12 text-center">
      {/* 🔴 Text color slate-900 in light layout profile */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="font-headline text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-3 transition-colors duration-500"
      >
        Get in Touch
      </motion.h1>
      {/* 🔴 Description subtext adaptive balancing text-slate-500 */}
      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}
        className="text-slate-500 dark:text-white/60 text-lg transition-colors duration-500"
      >
        We're Here to Answer Your Questions and Guide Your Success
      </motion.p>
    </div>

    {/* Two-column: form (80%) + sidebar (20%) */}
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">

      {/* LEFT: Form card — 80% */}
      <AnimatedSection direction="left" delay={0.1} className="w-full lg:w-4/5">
        {/* 🔴 Form container card handles white opaque/translucent layout glass pattern on light version toggle switches */}
        <div className="bg-white dark:bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-2xl border border-slate-200 dark:border-white/5 relative overflow-hidden transition-all duration-500">
          {/* Subtle background glow for form */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="mb-10 relative z-10">
            {/* 🔴 Main card header switches font color profile */}
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">Send a Message</h2>
            <p className="text-slate-400 dark:text-white/40 text-base transition-colors duration-500">We typically respond within 24 hours.</p>
          </div>
          <InquiryForm formType="contact" />
          <div className="mt-6 text-center">
            {/* 🔴 Links updates to charcoal colors directly */}
            <p className="text-xs text-gray-400">
              By contacting us, you agree to our{' '}
              <a href="#" className="font-semibold text-slate-700 dark:text-white hover:underline transition-colors">Terms of service</a>
              {' '}and{' '}
              <a href="#" className="font-semibold text-slate-700 dark:text-white hover:underline transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* RIGHT: Office Hours + Connect With Us — 20% */}
      <AnimatedSection direction="right" delay={0.25} className="w-full lg:w-1/5 flex flex-col gap-6">

        {/* Office Hours */}
        {/* 🔴 Card layers update container type block details */}
        <div className="bg-white dark:bg-white/[0.02] backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-2xl border border-slate-200 dark:border-white/5 transition-all duration-500">
          <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">Office Hours</h3>
          <div className="space-y-5">
            {[
              { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
              { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
              { day: 'Sunday', hours: 'Closed' },
            ].map((row, i, arr) => (
              <div key={row.day}>
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#6366f1' }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    {/* 🔴 Row texts adapt cleanly */}
                    <p className="text-slate-900 dark:text-white font-bold text-sm transition-colors duration-500">{row.day}</p>
                    <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-500">{row.hours}</p>
                  </div>
                </div>
                {/* 🔴 Internal line separator layout */}
                {i < arr.length - 1 && <div className="mt-5 border-t border-slate-200 dark:border-white/5 transition-colors duration-500"/>}
              </div>
            ))}
          </div>
        </div>

        {/* Connect With Us */}
        {/* 🔴 Container style properties map dynamic shadows */}
        <div className="bg-white dark:bg-white/[0.02] backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-2xl border border-slate-200 dark:border-white/5 transition-all duration-500">
          <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-500">Connect With Us</h3>
          <div className="flex flex-col gap-3">
            {[
              {
                name: 'Facebook', href: 'https://www.facebook.com/people/Mehza-smart-tech-solutions/61562931813053/', active: false,
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
              },
              {
                name: 'Youtube', href: 'https://www.youtube.com/@MehzaSmartTechSolution', active: false,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 fill-current">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                ),
              },
              {
                name: 'WhatsApp', href: 'https://wa.me/918448211313', active: false,
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
              },
              {
                name: 'Email', href: 'mailto:Info@Mehzasmarttech.com', active: true,
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V6.783l10 8.12 10-8.12V19H2z"/>
                  </svg>
                ),
              },
              {
                name: 'Instagram', href: 'https://www.instagram.com/mehzasmarttechsolutions?igsh=ZzlsZGNubTRvdXpq', active: false,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
              },
              {
                name: 'Twitter', href: 'https://www.instagram.com/mehzasmarttechsolutions?igsh=ZzlsZGNubTRvdXpq', active: false,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                /* 🔴 Social link rows styles with clear slate and background tracking triggers */
                className={`flex items-center gap-4 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-md ${
                  s.active
                    ? 'text-white shadow-lg'
                    : 'text-slate-700 dark:text-white bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/5'
                }`}
                style={s.active ? { background: '#6366f1' } : {}}
              >
                <span className={s.active ? 'text-white' : 'text-slate-500 dark:text-white transition-colors duration-500'}>{s.icon}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>

    {/* ── FIND US ON MAP ────────────────────────────────────────── */}
    <div className="max-w-6xl mx-auto px-6 mt-32 pb-20">
      <AnimatedSection direction="up" className="text-center mb-10">
        {/* 🔴 Maps segment main heading configuration tweaks */}
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-500">Find Us on Map</h2>
        <p className="text-slate-500 dark:text-gray-400 text-base transition-colors duration-500">
          Office No. 325, Block A, I Thum Height, Plot A-16, Industrial Area, Noida Sector 62, UP 201309
        </p>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        {/* 🔴 Border layer sync matching background theme variables values */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 transition-colors duration-500" style={{ height: '400px' }}>
          <iframe
            title="Mehza Office – I Thum, Noida Sector 62"
            src="https://maps.google.com/maps?q=28.6281154,77.3702571&z=17&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 gap-3">
          {/* 🔴 Address description fields alignment */}
          <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm transition-colors duration-500">
            <svg className="w-4 h-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            <span>Office No. 325, Block A, I Thum Height, Plot A-16, Industrial Area, Noida Sector 62, UP 201309</span>
          </div>
          <a
            href="https://maps.app.goo.gl/toKJpg2wSy3JuMPm8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
            </svg>
            Open in Google Maps
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
</div>
    </>
  );
};

export default Contact;
