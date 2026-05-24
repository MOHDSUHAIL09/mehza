import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const solutionOptions = [
    { name: 'Our Solutions', path: '/solutions/solutions' },
    // { name: 'Smart Board', path: '/solutions/smart-board' },
    { name: 'Interactive Panel', path: '/solutions/interactive-panel' },
    // { name: 'Digital Panel', path: '/solutions/digital-panel' },
    { name: 'Sanitary Vending Machines', path: '/solutions/vending-machines' },
    { name: 'AMC & Services', path: '/solutions/amc-services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ease-in-out ${isScrolled ? 'pt-3.5' : 'pt-0'}`}>
  <div className={`transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center overflow
    ${isScrolled
      ? 'w-[95%] max-w-7xl bg-white/70 dark:bg-[#0A0F1C]/90 backdrop-blur-xl rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.6)] border border-slate-200/50 dark:border-white/10'
      : 'w-full max-w-full bg-[#0A0F1C]/95 backdrop-blur-2xl rounded-none border-b border-white/[0.04]'
    }`}>
    
    <div className={`flex justify-between items-center px-6 sm:px-8 md:px-12 w-full mx-auto transition-all duration-500 ${isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'}`}>
      
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">
        <Link to="/" className="flex items-center gap-3 lg:gap-4 group">
          <img
            src="/mehza-logo.png"
            alt="Mehza Logo"
            className="h-10 lg:h-10 w-auto object-contain scale-[1.8] dark:mix-blend-screen opacity-90 group-hover:opacity-100 transition-all"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 55% 55% at center, black 15%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 55% 55% at center, black 15%, transparent 100%)'
            }}
          />
          {/* <span className="text-base hidden lg:block lg:text-lg font-bold tracking-tight text-slate-900 dark:text-white font-headline whitespace-nowrap transition-colors duration-300">
            Mehza SmartTech Solutions
          </span> */}
        </Link>
      </div>

      <div className="hidden md:flex justify-center gap-4 lg:gap-8 items-center shrink-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-[#0072FF] dark:text-white font-bold border-b-2 border-[#00C6FF] pb-1 font-body text-sm transition-all'
              : 'text-slate-600 dark:text-gray-400 font-medium font-body text-sm hover:text-[#0072FF] dark:hover:text-white transition-colors'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-[#0072FF] dark:text-white font-bold border-b-2 border-[#00C6FF] pb-1 font-body text-sm transition-all'
              : 'text-slate-600 dark:text-gray-400 font-medium font-body text-sm hover:text-[#0072FF] dark:hover:text-white transition-colors'
          }
        >
          About
        </NavLink>

        {/* Dropdown Solutions Wrapper */}
        <div className="relative group py-4">
          <div className="flex items-center gap-1 cursor-pointer text-slate-600 dark:text-gray-400 font-medium font-body text-sm group-hover:text-[#0072FF] dark:group-hover:text-white transition-colors">
            Solutions
            <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-300">expand_more</span>
          </div>

          {/* Dropdown Menu Container */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
            <div className="w-60 bg-white/95 dark:bg-[#0A0F1C]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {solutionOptions.map((opt) => (
                <Link
                  key={opt.name}
                  to={opt.path}
                  className="block px-4 py-3 rounded-xl text-slate-600 dark:text-gray-400 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#00C6FF] transition-all"
                >
                  {opt.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-[#0072FF] dark:text-white font-bold border-b-2 border-[#00C6FF] pb-1 font-body text-sm transition-all'
              : 'text-slate-600 dark:text-gray-400 font-medium font-body text-sm hover:text-[#0072FF] dark:hover:text-white transition-colors'
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* Right Actions & Hamburger */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <ThemeToggle />

        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/contact"
            className="tech-gradient text-white px-6 py-2.5 rounded-xl font-label text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_10px_20px_rgba(0,109,245,0.2)] scale-95 duration-200 ease-in-out hover:scale-100"
          >
            Get in touch
          </Link>
        </div>

        {/* Hamburger Icon Color Adaptation */}
        <button
          className="md:hidden text-slate-800 dark:text-white p-2 hover:text-[#00C6FF] transition-colors flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    <div className={`md:hidden w-full transition-all duration-300 overflow-hidden bg-white dark:bg-[#0A0F1C] ${isMobileMenuOpen ? 'max-h-[80vh] py-6 opacity-100 border-t border-slate-200 dark:border-white/10' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col px-8 gap-5">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 dark:text-white font-headline text-lg hover:text-[#00C6FF] transition-colors">Home</Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 dark:text-white font-headline text-lg hover:text-[#00C6FF] transition-colors">About</Link>

        <div className="flex flex-col gap-3">
          <div
            className="flex justify-between items-center text-slate-900 dark:text-white font-headline text-lg hover:text-[#00C6FF] cursor-pointer"
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
          >
            Solutions
            <span className={`material-symbols-outlined transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}>expand_more</span>
          </div>
          <div className={`flex flex-col pl-4 gap-4 overflow-hidden transition-all duration-300 ${isSolutionsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            {solutionOptions.map((opt) => (
              <Link
                key={opt.name}
                to={opt.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 dark:text-gray-400 text-base font-body hover:text-[#00C6FF]"
              >
                {opt.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10 my-2"></div>

        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 dark:text-white font-headline text-lg hover:text-[#00C6FF] transition-colors">Contact Us</Link>

        <Link
          to="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="tech-gradient text-center text-white px-6 py-3.5 rounded-xl font-headline font-bold text-sm shadow-[0_10px_20px_rgba(0,109,245,0.2)]"
        >
          Get in touch
        </Link>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
