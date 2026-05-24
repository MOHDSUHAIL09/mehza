import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1C] w-full relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-[1px] w-full" style={{ background: 'linear-gradient(to right, transparent, #0072FF, #8E2DE2, transparent)' }} />

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
          {/* Brand Column - Left Side */}
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/mehza-logo.png"
                alt="Mehza Logo"
                className="h-10 w-auto object-contain scale-[1.6] mix-blend-screen"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 55% 55% at center, black 15%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 55% 55% at center, black 15%, transparent 100%)'
                }}
              />
              <div className="text-xl font-bold text-white font-headline hidden tracking-tight">
                Mehza SmartTech Solutions
              </div>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Innovating at the intersection of technology and hygiene to create a smarter, safer, and more sustainable future for all.
            </p>

            <div className="flex gap-5">
              {[
                {
                  id: 'twitter-x',
                  icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                  color: '#FFFFFF',
                  link: 'https://x.com/Mezha_SmartTech'
                },
                {
                  id: 'youtube',
                  icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                  color: '#FF0000',
                  link: 'https://www.youtube.com/@MehzaSmartTechSolution'
                },
                {
                  id: 'instagram',
                  icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.981-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.78-6.981-6.981C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
                  color: '#E4405F',
                  link: 'https://www.instagram.com/mehzasmarttechsolutions?igsh=ZzlsZGNubTRvdXpq'
                },
                {
                  id: 'facebook',
                  icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                  color: '#1877F2',
                  link: 'https://www.facebook.com/61562931813053/'
                }
              ].map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-colors duration-300 group/social relative overflow-hidden"
                  style={{
                    '--hover-color': social.color,
                    '--hover-bg': `${social.color}1a`
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover/social:opacity-30 transition-opacity duration-300 blur-md" style={{ backgroundColor: social.color }}></div>

                  <style dangerouslySetInnerHTML={{
                    __html: `
                .group\\/social:hover { 
                    color: var(--hover-color) !important; 
                    border-color: var(--hover-color) !important; 
                    background-color: var(--hover-bg) !important; 
                }
            `}} />

                  <svg className="w-5 h-5 fill-current relative z-10" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Site Map Columns - 4 Columns in Mobile also */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-12">
            {/* Site Map: Company */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-white font-headline font-bold text-sm md:text-base tracking-wide uppercase opacity-90 border-l-2 border-[#00C6FF] pl-3">Company</h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                <li><Link to="/" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Home
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
                <li><Link to="/about" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
              </ul>
            </div>

            {/* Site Map: Solutions */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-white font-headline font-bold text-sm md:text-base tracking-wide uppercase opacity-90 border-l-2 border-[#8E2DE2] pl-3">Solutions</h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                <li><Link to="/solutions" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">All Solutions
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
                <li><Link to="/sanitary-vending" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Sanitary Vending
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
                <li><Link to="/digital-panels" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Digital Panels
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
              </ul>
            </div>

            {/* Site Map: Support */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-white font-headline font-bold text-sm md:text-base tracking-wide uppercase opacity-90 border-l-2 border-white/20 pl-3">Support</h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                <li><Link to="/privacy-policy" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
                <li><Link to="/terms-and-conditions" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
                <li><Link to="/compliance" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body relative group">Compliance
                  <span className="absolute -bottom-1 left-0 w-0 h-[0.80px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
                </Link></li>
              </ul>
            </div>

            {/* Site Map: Address with React Icons */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-white font-headline font-bold text-sm md:text-base tracking-wide uppercase opacity-90 border-l-2 border-white/20 pl-3">Address</h4>
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="flex gap-2 md:gap-3 items-start">
                  <MdLocationOn className="text-[#ffff] text-base md:text-lg flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500 text-xs md:text-sm font-body leading-relaxed">Office No 325, Block A, I Thum Height Plot No A-16, Industrial Area Noida Sector 62, UP 201309</span>
                </li>
                <li className="flex gap-2 md:gap-3 items-center">
                  <MdEmail className="text-[#ffff] text-base md:text-lg flex-shrink-0" />
                  <a href="mailto:Sabahayat@Mehzasmarttech.com" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body break-all">Sabahayat@Mehzasmarttech.com</a>
                </li>
                {/* <li className="flex gap-2 md:gap-3 items-center">
                  <MdPhone className="text-[#ffff] text-base md:text-lg flex-shrink-0" />
                  <a href="tel:12069069671" className="text-gray-500 hover:text-[#00C6FF] transition-colors duration-300 text-xs md:text-sm font-body">+91 12069069671</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-gray-600 font-body text-[10px] md:text-xs tracking-wider">
            © {currentYear} <span className="text-gray-400 font-semibold">Mehza SmartTech Solutions</span>. All Rights Reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2">
            {[
              { name: 'Privacy Policy', link: '/privacy-policy' },
              { name: 'Terms & Conditions', link: '/terms-and-conditions' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-500 hover:text-[#00C6FF] text-[10px] md:text-xs font-medium tracking-widest transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00C6FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;