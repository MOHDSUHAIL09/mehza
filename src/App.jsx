import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import SanitaryVending from './pages/SanitaryVending';
import DigitalPanels from './pages/DigitalPanels';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import LoadingScreen from './components/ui/LoadingScreen';
import VendingCategory from './pages/VendingCategory';

import { LazyMotion, domAnimation } from 'framer-motion';
import SmartBoard from './pages/SmartBoard';
import DigitalPanel from './pages/DigitalPanel';
import AMCAndServices from './pages/AMCAndServices';
import InteractivePanel from './pages/InteractivePanel';
import SanitaryVendingMachine from './pages/SanitaryVendingMachine';
import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <CustomCursor/>
      <SmoothScroll/>
      <HelmetProvider>
      {/* <LoadingScreen /> */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="/solutions/solutions" element={<Solutions />} />
            <Route path="/solutions/smart-board" element={<SmartBoard />} />
            <Route path="/solutions/digital-panel" element={<DigitalPanel />} />
            <Route path="/solutions/vending-machines" element={<SanitaryVendingMachine />} />
            <Route path="/solutions/amc-services" element={<AMCAndServices />} />
            <Route path="/solutions/interactive-panel" element={<InteractivePanel />} />
            <Route path="sanitary-vending" element={<SanitaryVending />} />
            <Route path="sanitary-vending/:categorySlug" element={<VendingCategory />} />
            <Route path="digital-panels" element={<DigitalPanels />} />
            <Route path="digital-panels/:categorySlug" element={<VendingCategory />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      </HelmetProvider>
    </LazyMotion>
  );
}

export default App;