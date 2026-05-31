import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";

import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Videos from "./pages/Videos";
import WarehouseSolution from "./pages/WarehouseSolution";
import logoImg from "./assets/image.png";
import { MapPin } from "lucide-react";
import HowItWorks from "./pages/HowItWorks";
import PropertyTypes from "./pages/PropertyTypes";

// Inner layout that re-initializes jQuery theme on every route change
function Layout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Hide the preloader once the layout is ready
    if (window.hidePageLoader) {
      window.hidePageLoader();
    }

    // Call initTheme once after React renders the new route
    const timer = setTimeout(() => {
      try {
        if (window.initTheme && window.jQuery) {
          window.initTheme(window.jQuery);
          window.dispatchEvent(new Event('resize'));
        }
      } catch (err) {
        console.error("Theme init error on Layout:", err);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

    return (
    <>
    {/*==================================================*/}
    {/* Start Solar Panel  Header Section */}
    {/*==================================================*/}
    <header className="custom-dark-navbar" id="sticky-header" style={{position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000, background: 'transparent'}}>
      <div className="container-fluid px-[50px]">
        <div className="row align-items-center justify-content-between py-3">
          {/* Logo */}
          <div className="col-auto">
            <div className="logo">
              <Link to="/">
                <img 
                  src={logoImg} 
                  alt="TechOps Global Logo" 
                  style={{height: '42px', width: 'auto', filter: 'invert(1)', mixBlendMode: 'screen'}} 
                  loading="lazy" 
                />
              </Link>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="col-auto d-none d-lg-flex">
            <nav className="d-flex align-items-center gap-4 custom-nav-links">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Warehouse", path: "/solutions/warehouse" },
                { name: "Property Types", path: "/property-types" },
                { name: "How It Works", path: "/how-it-works" }
              ].map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-decoration-none uppercase tracking-wider hover-orange transition-all"
                  style={{
                    fontSize: '14px', 
                    fontWeight: '800',
                    color: isActive(link.path) ? '#ff7a00' : '#ffffff',
                    borderBottom: isActive(link.path) ? '2px solid #ff7a00' : '2px solid transparent',
                    paddingBottom: '4px'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Area: Button & Hamburger */}
          <div className="col-auto d-flex align-items-center gap-4">
            <Link 
              to="/contact" 
              className="d-none d-md-inline-flex text-decoration-none align-items-center justify-content-center px-4 py-2.5" 
              style={{
                background: '#ff7a00',
                border: '1px solid #ff7a00', 
                color: '#000000', 
                fontSize: '14px', 
                fontWeight: '800', 
                letterSpacing: '1px', 
                borderRadius: '4px'
              }}
            >
              GET SITE ASSESSMENT
            </Link>
            
            <button 
              className="mobile-nav-toggle flex items-center justify-center p-0" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <i className={isMobileMenuOpen ? "bi bi-x" : "bi bi-list"} style={{ fontSize: '2rem', color: '#fff' }}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Wrapper (Hidden on Desktop) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="custom-mobile-nav-menu d-lg-none" 
            style={{background: '#161821', position: 'absolute', top: '100%', left: 0, width: '100%', borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 999}}
          >
            <div className="solar-menu" style={{padding: '20px'}}>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'15px'}}>
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Warehouse", path: "/solutions/warehouse" },
                  { name: "Property Types", path: "/property-types" },
                  { name: "How It Works", path: "/how-it-works" }
                ].map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover-orange"
                      style={{
                        color: isActive(link.path) ? '#ff7a00' : '#ffffff',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '14px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    {/*==================================================*/}
    {/* End Solar Panel  Header Section */}
    {/*==================================================*/}

    {/* Page Content — swaps between Home and About */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/solutions/warehouse" element={<WarehouseSolution />} />
      <Route path="/property-types" element={<PropertyTypes />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>

    {/*==================================================*/}
    {/* Start Solar Panel  Footer  Section */}
    {/*==================================================*/} 
      <footer className="bg-[#05070a] pt-16 pb-8 border-t border-white/5 mt-auto">
        <div className="w-full px-[50px]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            
            <div className="col-span-2 lg:col-span-2 pr-12">
              <img src={logoImg} alt="TechOps Global" className="h-8 object-contain mb-6" style={{ filter: 'invert(1)', mixBlendMode: 'screen' }} />
              <p className="text-white text-[22px] leading-relaxed mb-6 font-light">
                AI-powered energy infrastructure developer specializing in behind-the-meter solar, battery storage, and VPP solutions across the PJM markets.
              </p>
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center text-[17px] cursor-pointer hover:border-white transition-colors">in</div>
                 <div className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center text-[17px] cursor-pointer hover:border-white transition-colors">X</div>
                 <div className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center text-[17px] cursor-pointer hover:border-white transition-colors">YT</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">SOLUTIONS</h4>
              <ul className="space-y-3">
                {["Warehouse & Logistics", "Idle Land", "Parking Lots", "Battery Storage", "VPP & Markets"].map(l => (
                  <li key={l}>
                    <Link to={l === "Warehouse & Logistics" ? "/solutions/warehouse" : "#"} className="text-white text-[20px] hover:text-gray-300 transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">COMPANY</h4>
              <ul className="space-y-3">
                {["About Us", "Leadership", "Careers", "News", "Contact Us"].map(l => {
                  let path = "#";
                  if (l === "About Us") path = "/about";
                  if (l === "Contact Us") path = "/contact";
                  return (
                    <li key={l}>
                      <Link to={path} className="text-white text-[20px] hover:text-gray-300 transition-colors">
                        {l}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">RESOURCES</h4>
              <ul className="space-y-3">
                {["Case Studies", "Whitepapers", "Blog", "FAQs", "Investor Relations"].map(l => (
                  <li key={l}><Link to="#" className="text-white text-[22px] hover:text-gray-300 transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">CONTACT US</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-white text-[22px]">hello@techopsglobal.com</li>
                <li className="text-white text-[22px]">(608) 555-0123</li>
                <li className="text-white text-[22px] flex items-center gap-2 mt-2"><MapPin size={14}/> Princeton, NJ</li>
              </ul>
              <img 
                src="/assets/images/resource/footer-thumb.png" 
                alt="USA map indicating PJM markets" 
                className="w-full max-w-[160px] opacity-80 mt-4" 
              />
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 text-gray-400 text-[20px]">
            <p>© 2025 TechOps Global. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link to="#" className="text-white hover:text-gray-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    {/*==================================================*/}
    {/* End Solar Panel  Footer  Section */}
    {/*==================================================*/} 

    {/*==================================================*/}
    {/* Start Search Popup Area */}
    {/*==================================================*/}
    <div className="search-popup">
      <button className="close-search style-two"><span className="flaticon-multiply"><i className="far fa-times-circle"></i></span></button>
      <button className="close-search"><i className="fas fa-arrow-up"></i></button>
      <form method="post" action="#">
        <div className="form-group">
          <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required="" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
      </form>
    </div>
    {/*==================================================*/}
    {/* End Search Popup Area */}
    {/*==================================================*/}

    {location.pathname !== '/' && (
      <>
        {/*==================================================*/}
        {/* Start scrollup section Area */}
        {/*==================================================*/}
        <div className="scroll-area">
          <div className="top-wrap">
            <div className="go-top-btn-wraper">
              <div className="go-top go-top-button">
                <i className="fas fa-arrow-up"></i>
                <i className="fas fa-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
        {/*==================================================*/}
        {/* End scrollup section Area */}
        {/*==================================================*/}
        {/* WhatsApp Floating Button */}
        <a href="https://wa.me/12403513209" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </>
    )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
