import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const DigitalPanel = ({ isMobile }) => {
  const specs = [
    { label: "Resolution", value: "4K Ultra HD (3840 x 2160)", icon: "grid_view" },
    { label: "Touch Points", value: "40-Point Infrared Touch", icon: "touch_app" },
    { label: "Brightness", value: "450 nits High Brightness", icon: "light_mode" },
    { label: "System", value: "Android 13.0 / Windows 11", icon: "terminal" }
  ];

  const features = [
    {
      title: "Zero-Bonding Technology",
      desc: "Pen-on-paper writing experience with no gap between the glass and the LCD panel.",
      icon: "edit_note",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
    },
    {
      title: "Anti-Glare 7H Glass",
      desc: "Toughened glass with anti-glare coating to protect eyes and ensure visibility from all angles.",
      icon: "visibility",
      img: "https://images.unsplash.com/photo-1626908013943-df94de54984c?q=80&w=800"
    },
    {
      title: "Built-in 8-Array Mic",
      desc: "Crystal clear audio for video conferencing with AI noise reduction up to 12 meters.",
      icon: "mic",
      img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      
       <section className="relative pt-35 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-tech-gradient opacity-10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
       
            <h1 className="font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.1] tracking-tighter mb-8 text-balance break-words">
              The Ultimate <br />
              <span className="animated-gradient-text">Digital Experience</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
              Next-generation Interactive Flat Panels designed for seamless collaboration in corporate boardrooms and smart classrooms.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-tech-gradient font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,114,255,0.4)]">
                Book a Demo
              </button>
              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-all flex items-center gap-2"> Technical Specs
              </button>
            </div>
          </div>
        </div>
      </section>

 
      {/* Hardware Preview Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="premium-card !p-2 group">
                <div className="relative overflow-hidden rounded-[1.8rem]">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" 
                    alt="Digital Panel Hardware" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/40 to-transparent"></div>
                </div>
                <div className="premium-card-border"></div>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection direction="right">
                <h2 className="text-4xl font-bold mb-6">Designed for <span className="text-tech-gradient">Modern Workspaces</span></h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  SmartTech Solutions' Digital Panel integrates the power of a computer, whiteboard, and wireless projector into one sleek device.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                      <span className="material-symbols-outlined text-blue-400 text-3xl">{spec.icon}</span>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{spec.label}</p>
                        <p className="font-semibold">{spec.value}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="container mx-auto text-center mb-16">
          {/* <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <div className="h-1.5 w-24 bg-tech-gradient mx-auto rounded-full"></div>
          </AnimatedSection> */}
            <AnimatedSection direction="up">
            <h2 
              className="font-black font-headline text-white tracking-tighter"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.75rem)' }}
            >
              Powerful <span className="relative inline-block">
                Features
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
          </AnimatedSection>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              direction="up" 
              delay={index * 0.2}
              className="h-full"
            >
              <div className="premium-card group h-full flex flex-col">
                <div className="mb-6 overflow-hidden rounded-2xl h-48">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-blue-500">{feature.icon}</span>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 flex-grow leading-relaxed">
                  {feature.desc}
                </p>
                <div className="premium-card-border"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Video / Call to Action Section */}
      <section className="py-32 px-6">
        <AnimatedSection direction="none" threshold={0.5}>
          <div className="max-w-6xl mx-auto flowing-gradient-bg p-1 rounded-[3rem]">
            <div className="bg-[#0A0F1C] rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to revolutionize <br/> your collaboration?</h2>
                <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-2xl">
                  Contact Sales Team
                </button>
              </div>
              
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
};

export default DigitalPanel;