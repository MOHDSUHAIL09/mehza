import React, { useEffect, useRef, useState } from 'react';
import {
  MdOutlineDesktopWindows,
  MdOutlineTv,
  MdOutlineDisplaySettings,
  MdOutlineVideoCall,
  MdOutlineGroups,
  MdOutlineOndemandVideo,
  MdOutlineHeadset,
  MdOutlineCode
} from "react-icons/md";
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import AnimatedSection from '../components/ui/AnimatedSection';
import Testimonials from '../components/ui/Testimonials';
import { m, useInView, animate } from 'framer-motion';
// import vendingMachineImg from '../assets/sanitary-vending.png';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons ke liye

import product01 from '../assets/product-img/product-1.jpg'
import product02 from '../assets/product-img/product-2.jpg'
import product03 from '../assets/product-img/product-3.jpg'
import product04 from '../assets/product-img/product-4.jpg'
import product05 from '../assets/product-img/product-5.jpg'
import product06 from '../assets/product-img/product-6.jpg'
import IntImg from '../assets/interactive-panel.png'
import { BsFillDpadFill } from 'react-icons/bs';
import { GiVendingMachine } from 'react-icons/gi';
import { ImDisplay } from 'react-icons/im';
import product from '../assets/product-img/d1c8a88c-5f65-44d3-9385-3874e25f50b0.png'
// import heroVending from '../assets/product-img/slider-2.jpeg'



const Counter = ({ from = 0, to, duration = 2, delay = 0, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && typeof to === 'number') {
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, delay, inView, suffix]);

  return <span ref={nodeRef}>{typeof to === 'number' ? from + suffix : to}</span>;
};



const Home = () => {
  const darkBg = '#0A0F1C';
  const accentPurple = '#8E2DE2';
  const mainGradient = 'linear-gradient(to right, #00C6FF, #0072FF, #6A11CB)';
  const techBlueStart = '#00C6FF';
  const hygienePink = '#FF8890';

  const ctaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctaRef.current.style.setProperty('--mouse-x', `${x}px`);
    ctaRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const slides = [
    {
      id: 1,
      title: <>Transforming  <span style={{ color: '#00C6FF' }}>Education </span><br /> & <span style={{ color: '#8E2DE2' }}> Hygiene.</span></>,
      // image: "/assets/slider/slider-2.jpeg",
      desc: "At Mehza, we combine innovation, education, and care to create intelligent technology solutions for schools, colleges, offices, and institutions.",
    },
    {
      id: 2,
      title: <>Sanitary <span style={{ color: '#00C6FF' }}></span> Pad  Vending <br /><span style={{ color: '#8E2DE2' }}>Machines.</span></>,
      desc: "A Sanitary Pad Vending Machine is an automated machine designed to provide easy, quick, and hygienic access to sanitary pads in schools, colleges, offices, hospitals, and public places",
      // image: "/assets/slider/slider-2.jpeg",
    },
    {
      id: 3,
      title: <>Smart Learning<span style={{ color: '#00C6FF' }}> Safe </span> <br /> <span style={{ color: '#8E2DE2' }}>Future.</span></>,
      desc: "Transforming Education & Hygiene With Smart Technology Interactive Smart Boards | Digital Learning Solutions | Sanitary Pad Vending Machines",
      // image: "/assets/slider/slider-2.jpeg",
    }
  ];
  

  // Products list for icon section
  const productsList = [
    { id: 0, name: "Interactive Displays", icon: <MdOutlineDesktopWindows size={45} /> },
    { id: 1, name: "Flat Panel Display", icon: <ImDisplay size={45} /> },
    { id: 5, name: "Sanitary Pad Vending Machine", icon: <GiVendingMachine size={45} /> },
    { id: 2, name: "Studio Setup", icon: <MdOutlineHeadset size={45} /> },
    { id: 3, name: "Accessories", icon: <MdOutlineOndemandVideo size={45} /> },
    { id: 4, name: "Unified Communication", icon: <MdOutlineVideoCall size={45} /> },

  ];
  const [current, setCurrent] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  // Auto Slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <main className="min-h-screen font-sans selection:bg-[#8E2DE2] selection:text-white text-white relative overflow-x-clip">
      <SEO
        title="Mehza SmartTech Solutions | Smart Hygiene for Every Space"
        description="Deploy intelligent hygiene infrastructure across schools, offices, and public spaces."
        canonical="https://mehza.com/"
      />



{/* ──New HERO SECTION ───────────────────────────────────────── */}
<section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center md:justify-start mt-2">
  {/* Static Background Image - No animation */}
  <div className="absolute inset-0 z-0">
    {/* Desktop Image - hidden on mobile */}
    <img
      src="/assets/slider/home-1.png"
      className="w-full h-full object-cover hidden md:block"
      alt="Hero Background Desktop"
    />
    {/* Mobile Image - hidden on desktop */}
    <img
      src="/assets/slider/home-2.png"
      className="w-full h-full object-cover block md:hidden"
      alt="Hero Background Mobile"
      style={{marginTop: "40px"}}
    />
  </div>

  {/* Black Shadow/Overlay for dark/sad effect */}
  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-black/20 to-black/10" />
  
  {/* Additional Dark Overlay for better text readability */}
  <div className="absolute inset-0 z-[1] bg-black/10" />

  {/* Content container */}
  <div className="container mx-auto px-6 md:px-[10%] relative z-10">
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl md:ml-0"
      >
        <motion.h1
          className="font-headline font-black leading-[1.05] tracking-tighter text-white text-[10vw] sm:text-6xl md:text-[5vw] mb-6 text-left"
            style={{
    fontWeight: '700',marginTop: "50px"
  }}
        >
          {slides[current].title}
        </motion.h1>

<motion.p
  className="text-white font-bold max-w-2xl leading-relaxed text-base md:text-xl mb-10 text-balance text-left"
  style={{
    fontWeight: '700'
  }}
>
  {slides[current].desc}
</motion.p>

        <div className="flex flex-wrap items-center gap-4 justify-start">
          <Link
            to="/solutions"
            className="px-8 py-4 rounded-full text-white font-bold text-sm tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 flowing-gradient-bg"
          >
            Explore Solutions
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold text-sm tracking-widest transition-all hover:bg-white/10 active:scale-95 backdrop-blur-md"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute bottom-12 md:bottom-auto md:right-12 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-4 z-40">
    <button
      onClick={prevSlide}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00C6FF] hover:border-transparent hover:scale-110 transition-all duration-300 backdrop-blur-md bg-black/20"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={nextSlide}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00C6FF] hover:border-transparent hover:scale-110 transition-all duration-300 backdrop-blur-md bg-black/20"
    >
      <ChevronRight size={24} />
    </button>
  </div>

  {/* Dots Indicator */}
  <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-40">
    {slides.map((_, i) => (
      <div
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-1 transition-all duration-700 rounded-full cursor-pointer ${
          current === i ? 'h-12 bg-[#00C6FF]' : 'h-4 bg-white/30'
        }`}
      />
    ))}
  </div>

  {/* Scroll Indicator */}
  <div
    className="peer absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 w-[140px] md:w-[200px] h-[60px] z-30 flex flex-col items-center justify-end cursor-pointer group"
    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
  >
    <span className="text-[8px] md:text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5 md:mb-1 transition-transform duration-500 group-hover:-translate-y-1">
      Scroll
    </span>
    <span className="material-symbols-outlined text-[#0072FF] text-[16px] md:text-[22px] transition-transform duration-500 group-hover:translate-y-1">
      arrow_downward
    </span>
  </div>

  {/* Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none origin-bottom transition-transform duration-500 md:peer-hover:scale-y-[1.15]">
    {/* Mobile version */}
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block md:hidden w-full h-[80px]">
      <path d="M 0,0 C 100,100 300,105 400,105 C 450,105 500,40 600,40 C 700,40 750,105 800,105 C 900,105 1100,100 1200,0 L 1200,120 L 0,120 Z" fill="#ffffff" />
    </svg>
    {/* Desktop version */}
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative hidden md:block w-full h-[120px]">
      <path d="M 0,5 C 200,120 400,110 500,110 C 550,110 550,40 600,40 C 650,40 650,110 700,110 C 800,110 1000,120 1200,5 L 1200,120 L 0,120 Z" fill="#ffffff" />
    </svg>
  </div>
</section>




      {/* Our products */}
      <section style={{ paddingBottom: '3rem' }}>
        <div
          style={{
            paddingTop: '4vh',
            paddingBottom: '3vh',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              color: '#000',
              fontSize: '40px',
              fontWeight: '700'
            }}
          >
            Our <span style={{ color: '#00C6FF' }}> Products </span>
          </div>
        </div>

        {/* Container */}
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}
        >
          {/* Cards */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >

            {/* Card 1 - Interactive Displays */}
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <div
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={product01}
                    alt="Interactive Displays"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#1a2a3a'
                    }}
                  >
                    Interactive Displays
                  </h3>
                  <p
                    style={{
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    Smart interactive display solutions for classrooms, offices,
                    and meeting rooms with touch-enabled collaboration features.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Sanitary Pad Vending Machine */}
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <div
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={product02}
                    alt="Sanitary Pad Vending Machine"
                    style={{
                      width: '100%',
                      height: '100%',

                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#1a2a3a'
                    }}
                  >
                    Sanitary Pad Vending Machine
                  </h3>
                  <p
                    style={{
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    Automated vending machines designed for schools, colleges,
                    hospitals, and public places for easy sanitary pad access.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - School Management System */}
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <div
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={product03}
                    alt="School Management System"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#1a2a3a'
                    }}
                  >
                    School Management Software
                  </h3>
                  <p
                    style={{
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    Complete school ERP solution for attendance, fees,
                    examinations, student records, and online communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Website Applications */}
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <div
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={product04}
                    alt="Website Applications"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#1a2a3a'
                    }}
                  >
                    Website Applications
                  </h3>
                  <p
                    style={{
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    Modern responsive websites and web applications built for
                    businesses, startups, schools, and e-commerce platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 - Accessories */}
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <div
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={product05}
                    alt="Accessories"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#1a2a3a'
                    }}
                  >
                    Accessories
                  </h3>
                  <p
                    style={{
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    High-quality accessories and support equipment designed to
                    improve productivity and workspace efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 - Studio Setup */}
            <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
              <div
                style={{
                  height: '100%',
                  border: 'none',
                  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img
                    src={product06}
                    alt="Studio Setup"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      marginBottom: '16px',
                      color: '#1a2a3a'
                    }}
                  >
                    Studio Setup
                  </h3>
                  <p
                    style={{
                      color: '#6c757d',
                      lineHeight: '1.7',
                      margin: 0
                    }}
                  >
                    Professional studio setup solutions including lighting,
                    audio systems, cameras, and streaming equipment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Products Icon List Section - 8 products with icons */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            padding: "0 20px", // Responsive padding
          }}
          className="products-grid-desktop"
        >
          {productsList.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "85px",
                  height: "85px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                  background:
                    activeProduct === product.id
                      ? "linear-gradient(180deg, #1f74d8, #53c3e6)"
                      : "#ededed",
                  color: activeProduct === product.id ? "#fff" : "#555",
                }}
                className="product-icon-desktop"
              >
                {product.icon}
              </div>

              <p
                style={{
                  marginTop: "12px",
                  textAlign: "center",
                  fontSize: "10px",
                  fontWeight: "500",
                  lineHeight: "14px",
                  color: activeProduct === product.id ? "#1f74d8" : "#111",
                  maxWidth: "90px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="product-name-desktop"
              >
                {product.name}
              </p>
            </div>
          ))}
        </div>

        <style jsx>{`
    @media (min-width: 769px) {
      .products-grid-desktop {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
      }
      
      .product-icon-desktop {
        width: 120px !important;
        height: 120px !important;
      }
      
      .product-name-desktop {
        font-size: 13px !important;
        line-height: 20px !important;
        max-width: 180px !important;
      }
    }
  `}</style>
      </section>

      {/* ── MASSIVE CONTINUOUS BACKGROUND WRAPPER ────────────────────── */}
      <div className="w-full relative overflow-hidden ">

        {/* Interactive Flat Panel Display */}
        <section className="relative min-h-screen md:min-h-[100svh] flex items-center justify-center z-10 px-4 md:px-8">
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
            <AnimatedSection direction="right" className="relative mt-8 md:mt-0">
              <div className="relative group">
                
                {/* 🔴 Clean soft image shadow wrapper for light canvas surfaces */}
                <img
                  src={IntImg}
                  alt="Mehza Interactive Panel in Classroom"
                  className="relative z-10 w-full h-auto  md:max-w-none mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="lg:text-left">
              <span className="text-tech-gradient font-bold tracking-[0.1em] uppercase text-[0px] md:text-sm mb-4 block">
                4K Ultra HD display with full channel 4K UI
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-[1.1] font-black tracking-tighter mb-4 md:mb-6 text-slate-900 dark:text-white transition-colors duration-500">
                Interactive <span className="animated-gradient-text">Flat Panel</span> Display
              </h1>

              {/* Sub Heading - Display Specifications */}
              <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-gray-300 mb-4">
                4K Ultra HD | Multi-Touch | Smart Collaboration
              </h2>


              {/* Display Features Heading */}
              <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-4">
                Display & Technical Specifications:
              </h3>

              {/* Features Grid */}
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-10 max-w-3xl">
                {/* ✅ SCREEN SIZES - SABSE PEHLE */}
                <div className="col-span-1 sm:col-span-2 mb-2">
                  <div className="flex justify-around flex-wrap items-center gap-3 p-3 bg-gradient-to-r from-[#00C6FF]/5 to-[#8E2DE2]/5 rounded-xl border border-[#00C6FF]/20">
                    <span className="text-[#00C6FF] font-bold text-sm uppercase tracking-wider">Available Sizes:</span>
                    {["55\"", "65\"", "75\"", "86\"", "98\"", "110\""].map((size) => (
                      <span
                        key={size}
                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00C6FF]/10 to-[#8E2DE2]/10 text-[#00C6FF] font-bold text-sm border border-[#00C6FF]/30"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>3.2mm anti-glare toughened glass with high haze OC</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Clearer display against ambient light interference</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Front: Type-C ×1 + USB 3.0 ×3 + HDMI IN ×1 + Touch USB ×1</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Supports switching with multiple channels</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Wireless projection support (AirPlay, Miracast, Google Cast)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>2mm high precision infrared touch control for smooth writing</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Supports dual pens and dual colour displays</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Easy multi-person collaboration</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Split screen support for parallel tasks</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Wider scenes and multi-tasking capability</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Automating Health & Hygiene for All */}
        <section className="relative flex items-center justify-center px-4 sm:px-9">
          <div className="container mx-auto lg:grid lg:grid-cols-2 gap-12 items-center z-10 flex flex-col lg:flex-row">

            {/* Mobile pe image pehle, desktop pe right mein */}
            <div className="order-1 lg:order-2 w-full">
              <AnimatedSection direction="right" className="relative mt-0">
                <div className="relative group flex justify-center items-center">
                  <img
                    src={product02}
                    alt="Main Vending Machine"
                    style={{
                      width: "100%",
                      maxWidth: "700px",
                      height: "auto",
                      objectFit: "contain",
                      margin: "0 auto",
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
                      transition: "all 0.7s ease"
                    }}
                    className="dark:drop-shadow-[0_0_50px_rgba(0,198,255,0.3)] group-hover:dark:drop-shadow-[0_0_60px_rgba(106,17,203,0.5)]"
                  />
                  <div
                    className="absolute bg-white/90 dark:bg-[#0F1322]/90 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md shadow-xl animate-bounce-slow transition-colors duration-500"
                    style={{
                      top: "-32px",
                      right: "1px",
                      padding: "20px 28px",
                    }}
                  >
                    <p className="text-tech-gradient font-bold text-3xl lg:text-4xl">99.9%</p>
                    <p className="text-xs lg:text-sm text-slate-500 dark:text-gray-400 uppercase font-semibold whitespace-nowrap">
                      Uptime Reliability
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Text Content - Mobile pe baad mein, desktop pe left mein */}
            <div className="order-2 lg:order-1 w-full">
              <AnimatedSection direction="left" className="lg:text-left">
                <span className="text-tech-gradient font-bold tracking-[0.1em] uppercase text-sm mb-4 block">
                  SmartTech Solutions Hygiene Division
                </span>

                <h1 className="text-5xl md:text-5xl font-bold leading-[1.1] font-black tracking-tighter mb-8 text-slate-900 dark:text-white transition-colors duration-500">
                  Automating <span className="animated-gradient-text">Health & <br />Hygiene</span> for All
                </h1>

                <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-6 w-full max-w-lg lg:max-w-md xl:max-w-xl font-medium opacity-80 text-balance transition-colors duration-500">
                  Advanced, IoT-enabled Sanitary Napkin Vending Machines designed for schools, colleges, offices, and public spaces.
                </p>

                {/* Vending Machine Models */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Our Vending Machine Models:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Model 1 - Smart-Vend Compact */}
                    <div className="bg-white dark:bg-[#0F1322] border border-slate-200 dark:border-white/10 rounded-xl p-4 transition-all hover:scale-105">
                      <h4 className="text-base font-bold text-[#1f74d8] mb-2">Smart-Vend Compact</h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 font-semibold mb-2">CAPACITY: 25-30 PADS</p>
                      <ul className="text-xs text-slate-600 dark:text-gray-400 space-y-1">
                        <li>✓ Wall Mounted</li>
                        <li>✓ Battery Backup</li>
                        <li>✓ Coin/Token Operated</li>
                      </ul>
                    </div>

                    {/* Model 2 - Smart-Vend Max */}
                    <div className="bg-white dark:bg-[#0F1322] border border-slate-200 dark:border-white/10 rounded-xl p-4 transition-all hover:scale-105">
                      <h4 className="text-base font-bold text-[#1f74d8] mb-2">Smart-Vend Max</h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 font-semibold mb-2">CAPACITY: 60-100 PADS</p>
                      <ul className="text-xs text-slate-600 dark:text-gray-400 space-y-1">
                        <li>✓ LCD Display</li>
                        <li>✓ Spiral Mechanism</li>
                        <li>✓ UPI/QR Integration</li>
                      </ul>
                    </div>

                    {/* Model 3 - Smart-Vend Industrial */}
                    <div className="bg-white dark:bg-[#0F1322] border border-slate-200 dark:border-white/10 rounded-xl p-4 transition-all hover:scale-105">
                      <h4 className="text-base font-bold text-[#1f74d8] mb-2">Smart-Vend Industrial</h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 font-semibold mb-2">CAPACITY: 200+ PADS</p>
                      <ul className="text-xs text-slate-600 dark:text-gray-400 space-y-1">
                        <li>✓ Heavy Duty Steel</li>
                        <li>✓ Dual Selection</li>
                        <li>✓ Cloud Monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8E2DE2] text-white font-bold text-xs md:text-sm tracking-widest uppercase shadow-[0_10px_30px_rgba(0,114,255,0.3)] hover:scale-105 transition-all active:scale-95">
                    Inquiry Now
                  </button>
                  <button className="w-full sm:w-auto text-center px-8 py-4 md:px-10 md:py-4 rounded-full border-2 text-slate-800 dark:text-white border-[#8E2DE2] font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95">
                    Download Brochure
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Accessories */}
        <section className="relative min-h-screen md:min-h-[100svh] flex items-center justify-center  md:pt-[1vh] z-10 px-4 md:px-8">
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
            <AnimatedSection direction="right" className="relative mt-8 md:mt-0">
              <div className="relative group">
                <div className="absolute -inset-10 bg-tech-gradient opacity-10 blur-[60px] md:blur-[100px] group-hover:opacity-20 transition-opacity duration-1000"></div>
                {/* 🔴 Image same rakhi hai */}
                <img
                  src={product}
                  alt="Product Image"
                  className="relative z-10 w-full h-auto  md:max-w-none mx-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="lg:text-left">
              {/* ✅ Ye "Accessories" kar diya */}
              <span className="text-tech-gradient font-bold tracking-[0.1em] uppercase text-[0px] md:text-sm mb-4 block">
                Accessories
              </span>

              {/* Main Heading - Accessories */}
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-[1.1] font-black tracking-tighter mb-4 md:mb-6 text-slate-900 dark:text-white transition-colors duration-500">
                Premium <span className="animated-gradient-text">Tech Accessories</span>
              </h1>

              {/* ✅ Ab saare accessories ke features honge - Camera, Headphone, Mobile, Tablet, Game */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-10 max-w-3xl">

                {/* Camera Section */}
                <div className="col-span-1 sm:col-span-2 mb-1">
                  <div className="flex items-center gap-2 text-[#00C6FF] font-semibold text-sm uppercase tracking-wider">
                    <span>📷 CAMERA ACCESSORIES</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>4K Ultra HD Webcam with Auto-Focus & Noise Cancellation Mic</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Tripod Stand, Ring Light, Lens Kit (Wide/Angle/Macro)</span>
                </div>

                {/* Headphone Section */}
                <div className="col-span-1 sm:col-span-2 mb-1 mt-2">
                  <div className="flex items-center gap-2 text-[#00C6FF] font-semibold text-sm uppercase tracking-wider">
                    <span>🎧 HEADPHONES & AUDIO</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Wireless Over-Ear Headphones with 40H Battery & ANC</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>True Wireless Earbuds (IPX7, Low Latency Gaming Mode)</span>
                </div>

                {/* Mobile & Tablet Section */}
                <div className="col-span-1 sm:col-span-2 mb-1 mt-2">
                  <div className="flex items-center gap-2 text-[#00C6FF] font-semibold text-sm uppercase tracking-wider">
                    <span>📱 MOBILE & TABLET</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>MagSafe Power Bank (20W PD, 10000mAh) + Fast Charging Adapter</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Stylus Pen (Palm Rejection, 4096 Pressure Levels) for Tablet</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Folio Case + Tempered Glass + Keyboard Cover</span>
                </div>

                {/* Gaming Section */}
                <div className="col-span-1 sm:col-span-2 mb-1 mt-2">
                  <div className="flex items-center gap-2 text-[#00C6FF] font-semibold text-sm uppercase tracking-wider">
                    <span>🎮 GAMING ACCESSORIES</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Mechanical RGB Gaming Keyboard (Hot-Swappable, Red/Brown/Blue Switches)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>High-DPI Gaming Mouse (26K Sensor, 8 Programmable Buttons)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-gray-400">
                  <span className="text-[#00C6FF] mt-0.5">✓</span>
                  <span>Controller Grip, Charging Dock, and Cooling Fan for Mobile Gaming</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>







        {/* ── HOW IT WORKS ────────────────────────────────── */}
        <section className=" relative bg-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0072FF]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="w-[90%] max-w-screen-xl mx-auto relative z-10">
            <AnimatedSection direction="up" className="text-center mb-10" disabled={isMobile}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0072FF] block">Process</span>
              <h2 className="font-black font-headline text-slate-800 dark:text-white tracking-tighter" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>
                Up & Running in <span className="text-[#0072FF]">3 Steps</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {[
                { step: '01', icon: 'location_on', title: 'Initial Consultation', color: '#0072FF', desc: 'It all starts with a simple conversation. Reach out to our team, and we’ll schedule a quick call to learn about your current infrastructure, discuss your goals, and tailor a plan that fits your exact requirements.' },
                { step: '02', icon: 'precision_manufacturing', title: 'Hardware Setup', color: '#6A11CB', desc: 'Leave the heavy lifting to us. We handle all the wiring, mounting, and getting your systems online with zero disruption to your space. You won\'t have to lift a finger.' },
                { step: '03', icon: 'support_agent', title: 'Implementation & Support', color: '#0072FF', desc: 'We ensure a smooth transition from installation to daily use. Once your hardware is live, we provide hands-on training for your staff to ensure seamless operation. With our dedicated support team, we stay committed to maintaining your facility\'s standards for years to come.' },
              ].map(({ step, icon, title, color, desc }, i) => (
                <AnimatedSection key={step} direction="up" delay={i * 0.15} disabled={isMobile}>
                  <div className="relative bg-white dark:bg-[#0F1322] border border-slate-200 dark:border-white/[0.06] rounded-3xl p-8 lg:p-10 h-full group hover:-translate-y-2 group-hover:border-[#0072FF]/30 dark:group-hover:border-white/15 transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]
                   dark:shadow-none dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden mt-0">
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.06] dark:opacity-[0.04] pointer-events-none group-hover:opacity-[0.1] transition-all duration-700 transition-opacity duration-500 rotate-[-15deg] group-hover:scale-110 group-hover:rotate-[-5deg]">
                      <img
                        src="/single-pad.png"
                        alt="bg-decoration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute top-4 right-6 font-black font-headline text-[5rem] leading-none select-none pointer-events-none z-0 transition-colors duration-500" style={{ color: color + '25' }}>{step}</div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: color + '20', border: `1px solid ${color}20` }}>
                      <span className="material-symbols-outlined text-2xl" style={{ color }}>{icon}</span>
                    </div>
                    <h3 className="font-black font-headline text-white text-xl mb-3 tracking-tight">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl" style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────── */}
        <div className="relative">
          <Testimonials />
          {/* Gradient fade to seamlessly blend into the CTA section below */}
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-[#0A0F1C] pointer-events-none z-10"></div>
        </div>

        <section
          ref={ctaRef}
          onMouseMove={handleMouseMove}
          /* 🔴 Background dynamic mode update: bg-white in light, bg-[#0A0F1C] in dark */
          className="relative overflow-hidden bg-white dark:bg-[#0A0F1C] group transition-colors duration-500"
        >
          {/* The Container Layer */}
          <div className="relative w-full pt-[10vh] pb-[8vh] md:py-[12vh] px-[5%] z-10">

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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.15)_50%,transparent)]" />
              </div>
            </div>

            {/* 1.5. The Glassmorphic Pane (z-5: sits OVER the light pillar, blurring it realistically) */}
            {/* 🔴 Glass backdrop panel switches to white tint on light theme */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5 backdrop-blur-[40px] bg-white/40 dark:bg-[#0A0F1C]/30 transition-colors duration-500" />

            {/* 2. Base Cutout Layer (z-10 so it covers both the pillar AND the glass above the curve) */}
            {/* 2. Base Cutout Layer (Mobile) */}
            <div className="block md:hidden absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
              <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                {/* 🔴 Cutout SVG shape matching background fill property color parameters */}
                <path d="M0,250 L1200,250 L1200,0 C800,160 400,160 0,0 Z" className="fill-white dark:fill-[#0A0F1C] transition-colors duration-500" />
                <path d="M1200,0 C800,160 400,160 0,0" fill="none" className="stroke-slate-200/50 dark:stroke-white/[0.05]" strokeWidth="1" />
              </svg>
            </div>

            {/* 2. Base Cutout Layer (Desktop) */}
            <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none rotate-180 z-10">
              <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                {/* 🔴 Cutout SVG shape matching desktop background fill property color parameters */}
                <path d="M0,250 L1200,250 L1200,0 C800,320 400,320 0,0 Z" className="fill-white dark:fill-[#0A0F1C] transition-colors duration-500" />
                <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-200/50 dark:stroke-white/[0.05]" strokeWidth="1" />
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
                {/* Mobile Highlight Rim */}
                <div className="block md:hidden absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                  <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                    {/* 🔴 Rim overlay stroke tweaks */}
                    <path d="M1200,0 C800,160 400,160 0,0" fill="none" className="stroke-slate-400 dark:stroke-white/0.8" strokeWidth="2" />
                    <path d="M1200,0 C800,160 400,160 0,0" fill="none" stroke="rgba(0,198,255,0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
                  </svg>
                </div>

                {/* Desktop Highlight Rim */}
                <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                  <svg viewBox="0 0 1200 250" preserveAspectRatio="none" className="relative block w-full h-[150px]">
                    {/* 🔴 Rim overlay stroke tweaks desktop layout configuration */}
                    <path d="M1200,0 C800,320 400,320 0,0" fill="none" className="stroke-slate-400 dark:stroke-white/0.8" strokeWidth="2" />
                    <path d="M1200,0 C800,320 400,320 0,0" fill="none" stroke="rgba(0,198,255,0.6)" strokeWidth="6" style={{ filter: 'blur(3px)' }} />
                  </svg>
                </div>
              </div>
            </div>

            {/* Static Center Glow (Subtle ambient blue light) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(0,198,255,0.08)_0%,_transparent_70%)] pointer-events-none z-0" />

            <AnimatedSection direction="up" className="max-w-3xl mx-auto text-center relative z-30 pt-[2vh] md:pt-[6vh]" disabled={isMobile}>
              {/* 🔴 Title auto adjustment color classes text-slate-900 / dark:text-white */}
              <h2 className="font-black font-headline text-slate-900 dark:text-white tracking-tighter mb-5 transition-colors duration-500" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Ready to Modernise<br />
                <span className="animated-gradient-text">Your Facility?</span>
              </h2>

              {/* 🔴 Description auto adjustment color classes text-slate-600 / dark:text-gray-300 */}
              <p className="text-slate-600 dark:text-gray-300 font-medium mb-10 text-base md:text-lg leading-relaxed max-w-xl mx-auto transition-colors duration-500">
                Join 50+ institutions across India using Mehza SmartTech to run cleaner, smarter spaces.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-full text-white font-bold text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(0,114,255,0.4)] transition-all duration-300 hover:scale-105 flowing-gradient-bg border border-white/10">
                  Get in Touch
                </Link>
                {/* 🔴 Dynamic border and text color adjustment setup on non-gradient variant button layout */}
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest border-2 text-slate-800 dark:text-white border-slate-300 dark:border-transparent transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95"
                  style={{ borderColor: accentPurple }}
                >
                  Learn About Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-[8vh]py-[8vh] bg-white relative pb-5">
          <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="flex flex-wrap justify-center items-center gap-y-12 gap-x-4 md:gap-8 lg:justify-between text-center">

              <div className="flex flex-col items-center justify-center min-w-[140px] md:w-auto flex-1">
                <span className="text-4xl md:text-5xl font-headline font-black mb-3 text-[#0072FF] tracking-tight transition-transform duration-500 hover:scale-110">
                  <Counter to={5000} suffix="+" duration={2} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Users Served Daily</span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[140px] md:w-auto flex-1 border-l border-gray-100 md:border-0">
                <span className="text-4xl md:text-5xl font-headline font-black mb-3 text-[#0072FF] tracking-tight transition-transform duration-500 hover:scale-110">
                  <Counter to={50} suffix="+" duration={2} delay={0.2} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Partner Institutions</span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[140px] md:w-auto flex-1">
                <span className="text-4xl md:text-5xl font-headline font-black mb-3 text-[#0072FF] tracking-tight transition-transform duration-500 hover:scale-110">
                  <Counter to={100} suffix="k+" duration={2} delay={0.4} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Dispenses Logged</span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[140px] md:w-auto flex-1 border-l border-gray-100 md:border-0">
                <span className="text-4xl md:text-5xl font-headline font-black mb-3 text-[#0072FF] tracking-tight transition-transform duration-500 hover:scale-110">
                  <Counter to={30} suffix="%" duration={2} delay={0.6} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Cost Savings</span>
              </div>

              <div className="flex flex-col items-center justify-center min-w-[140px] md:w-auto flex-1 lg:flex-none">
                <span className="text-4xl md:text-5xl font-headline font-black mb-3 text-[#0072FF] tracking-tight transition-transform duration-500 hover:scale-110">
                  <Counter to={10} suffix="+" duration={2} delay={0.8} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Cities Covered</span>
              </div>

            </div>
          </div>
        </section>

        {/* ── MARQUEE TRUST STRIP ─────────────────────────── */}
        <div className="w-full py-5  border-b border-white/[0.04] overflow-hidden relative">
          <div className="flex animate-[marquee_35s_linear_infinite] whitespace-nowrap gap-12 w-max">
            {[
              { icon: 'school', label: 'Schools & Colleges' },
              { icon: 'corporate_fare', label: 'Corporate Offices' },
              { icon: 'local_hospital', label: 'Hospitals & Clinics' },
              { icon: 'local_mall', label: 'Malls & Retail' },
              { icon: 'flight', label: 'Airports' },
              { icon: 'account_balance', label: 'Government Buildings' },
              { icon: 'festival', label: 'Event Venues' },
              { icon: 'hotel', label: 'Hotels & Hospitality' },
              { icon: 'school', label: 'Schools & Colleges' },
              { icon: 'corporate_fare', label: 'Corporate Offices' },
              { icon: 'local_hospital', label: 'Hospitals & Clinics' },
              { icon: 'local_mall', label: 'Malls & Retail' },
              { icon: 'flight', label: 'Airports' },
              { icon: 'account_balance', label: 'Government Buildings' },
              { icon: 'festival', label: 'Event Venues' },
              { icon: 'hotel', label: 'Hotels & Hospitality' },
            ].map(({ icon, label }, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 text-white shrink-0 select-none">
                <span className="material-symbols-outlined text-[18px] text-slate-600  dark:text-white/80" style={{ fontVariationSettings: "'wght' 300" }}>{icon}</span>
                <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 dark:text-white uppercase">{label}</span>
                <span className="ml-8 text-white/40">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;