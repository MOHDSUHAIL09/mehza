import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import ScrollToTopButton from '../ui/ScrollToTopButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-500 pb-[2px] md:pb-0">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      <ScrollToTopButton />
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group flex items-center justify-end">
        {/* Tooltip */}
        <div className="absolute right-[calc(100%+16px)] bg-white text-[#0A0F1C] px-4 py-2.5 rounded-2xl text-[15px] font-bold shadow-xl opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap flex items-center justify-center">
          Contact us
          {/* Triangle pointing right */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 rounded-[2px]"></div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Radar Waves / Ping effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-0 border-2 border-[#25D366] rounded-full animate-ping opacity-50" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          
          <a 
            href="https://wa.me/918448211313" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 hover:shadow-[0_15px_25px_rgba(37,211,102,0.5)] relative z-10"
            aria-label="Chat with us on WhatsApp"
          >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
