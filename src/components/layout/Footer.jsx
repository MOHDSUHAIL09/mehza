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

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        
        {/* Main Footer Grid - Perfect Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Column - 4 columns wide on desktop */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <img
                src="/mehza-logo.png"
                alt="Mehza Logo"
                className="h-10 w-auto object-contain scale-[1.6] mix-blend-screen"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 55% 55% at center, black 15%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 55% 55% at center, black 15%, transparent 100%)'
                }}
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide advanced Interactive Smart Boards and Smart Hygiene Solutions designed for schools, colleges, coaching institutes, and organizations.
            </p>

            {/* Social Icons - Properly Aligned */}
            <div className="flex gap-3 mt-2">
              {[
                { id: 'twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', link: 'https://x.com', color: '#1DA1F2' },
                { id: 'youtube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', link: 'https://youtube.com', color: '#FF0000' },
                { id: 'instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.981-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.78-6.981-6.981C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', link: 'https://instagram.com', color: '#E4405F' },
                { id: 'facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', link: 'https://facebook.com', color: '#1877F2' }
              ].map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  style={{ '--hover-color': social.color }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns - 8 columns wide on desktop with equal distribution */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
              
              {/* Company */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-sm font-semibold tracking-wider">COMPANY</h3>
                <ul className="flex flex-col gap-2.5">
                  <li><Link to="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-sm font-semibold tracking-wider ">SOLUTIONS</h3>
                <ul className="flex flex-col gap-2.5">
                  <li><Link to="/solutions" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">All Solutions</Link></li>
                  <li><Link to="/sanitary-vending" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Sanitary Vending</Link></li>
                  <li><Link to="/digital-panels" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Digital Panels</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-sm font-semibold tracking-wider">SUPPORT</h3>
                <ul className="flex flex-col gap-2.5">
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Privacy Policy</Link></li>
                  <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Terms of Service</Link></li>
                  <li><Link to="/compliance" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">Compliance</Link></li>
                </ul>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-sm font-semibold tracking-wider pl-3">ADDRESS</h3>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-2.5 items-start">
                    <MdLocationOn className="text-blue-400 text-base flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs leading-relaxed">Office No 325, Block A, 1st Floor, Thum Height Plot No A-16, Industrial Area Noida Sector 62, UP 201309</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <MdEmail className="text-blue-400 text-base flex-shrink-0" />
                    <a href="mailto:Info@mehzasmarttech.com" className="text-gray-400 hover:text-blue-400 text-xs transition-colors duration-300 break-all">Info@mehzasmarttech.com</a>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <MdPhone className="text-blue-400 text-base flex-shrink-0" />
                    <a href="tel:+9112069069671" className="text-gray-400 hover:text-blue-400 text-xs transition-colors duration-300">+91 12069069671</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Perfect Centered Alignment */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-gray-500 text-xs">
            © {currentYear} <span className="text-gray-300 font-medium">Mehza SmartTech Solutions</span>. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link to="/compliance" className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-300">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

