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
import WindEnergy from "./pages/WindEnergy";
import BatteryStorage from "./pages/BatteryStorage";
import ParkingLot from "./pages/ParkingLot";
import logoImg from "./assets/image.png";
import { MapPin, ChevronDown, ChevronRight, Sun, Wind, Battery, Warehouse, TreePine, CarFront } from "lucide-react";
import HowItWorks from "./pages/HowItWorks";
import PropertyTypes from "./pages/PropertyTypes";

// Inner layout that re-initializes jQuery theme on every route change
function Layout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMobileSubmenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

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
    setExpandedMenus({});
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Solution",
      dropdown: [
        { name: "Solar Energy", path: "/services", icon: <Sun size={16} /> },
        { name: "Wind Energy", path: "/solutions/wind", icon: <Wind size={16} /> },
        { name: "Battery Storage", path: "/solutions/battery", icon: <Battery size={16} /> }
      ]
    },
    {
      name: "VPP Solution",
      dropdown: [
        { name: "Warehouse & Logistics", path: "/solutions/warehouse", icon: <Warehouse size={16} /> },
        { name: "Commercial Parking Lot", path: "/solutions/parking", icon: <CarFront size={16} /> },
        { name: "Idle Land & Buffer Acreage", path: "/property-types", icon: <TreePine size={16} /> }
      ]
    },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/*==================================================*/}
      {/* Start Solar Panel  Header Section */}
      {/*==================================================*/}
      <header className="custom-dark-navbar" id="sticky-header" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000, background: 'transparent' }}>
        <div className="container-fluid px-[50px]">
          <div className="row align-items-center justify-content-between py-3">
            {/* Logo */}
            <div className="col-auto">
              <div className="logo">
                <Link to="/">
                  <img
                    src={logoImg}
                    alt="TechOps Global Logo"
                    style={{ height: '42px', width: 'auto', filter: 'invert(1)', mixBlendMode: 'screen' }}
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>

            <div className="col-auto d-none d-lg-flex">
              <nav className="d-flex align-items-center gap-4 custom-nav-links">
                {navLinks.map(link => (
                  <div key={link.name} className="nav-item-container position-relative">
                    {link.dropdown ? (
                      <>
                        <button
                          className="nav-dropdown-toggle d-flex align-items-center gap-1 text-decoration-none uppercase tracking-wider hover-orange transition-all"
                          style={{
                            fontSize: '14px',
                            fontWeight: '800',
                            color: '#ffffff',
                            background: 'none',
                            border: 'none',
                            padding: '0 0 4px 0',
                            cursor: 'pointer'
                          }}
                        >
                          {link.name} <ChevronDown size={14} className="chevron-icon" />
                        </button>
                        <div className="nav-dropdown-menu">
                          {link.dropdown.map(sub => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="dropdown-item d-flex align-items-center gap-2"
                            >
                              <span className="sub-icon">{sub.icon}</span>
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
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
                    )}
                  </div>
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

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="d-lg-none"
                style={{
                  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(4px)', zIndex: 1100
                }}
              />

              {/* Sidebar Panel */}
              <motion.div
                key="sidebar"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="d-lg-none"
                style={{
                  position: 'fixed', top: 0, right: 0, bottom: 0,
                  width: '85%', maxWidth: '360px',
                  background: 'linear-gradient(160deg, #0d0f1a 0%, #111420 100%)',
                  borderLeft: '1px solid rgba(255,255,255,0.07)',
                  zIndex: 1200,
                  display: 'flex', flexDirection: 'column',
                  overflowY: 'auto'
                }}
              >
                {/* Sidebar Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <img
                      src={logoImg} alt="TechOps Global"
                      style={{ height: '32px', width: 'auto', filter: 'invert(1)', mixBlendMode: 'screen' }}
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px', width: '38px', height: '38px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: '#fff'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </button>
                </div>

                {/* Nav Links */}
                <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.07, duration: 0.25 }}
                    >
                      {link.dropdown ? (
                        <div className="mobile-dropdown-container">
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              padding: '14px 18px',
                              width: '100%',
                              borderRadius: '12px',
                              background: expandedMenus[link.name] ? 'rgba(255,122,0,0.05)' : 'transparent',
                              border: '1px solid transparent',
                              color: expandedMenus[link.name] ? '#ff7a00' : '#e5e7eb',
                              fontWeight: 700,
                              fontSize: '16px',
                              letterSpacing: '0.3px',
                              transition: 'all 0.2s',
                              cursor: 'pointer',
                              textAlign: 'left'
                            }}
                          >
                            {link.name}
                            <ChevronDown
                              size={18}
                              style={{
                                transform: expandedMenus[link.name] ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                              }}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedMenus[link.name] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ overflow: 'hidden', paddingLeft: '12px' }}
                              >
                                {link.dropdown.map((sub, si) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                      display: 'flex', alignItems: 'center', gap: '12px',
                                      padding: '12px 18px',
                                      color: '#9ca3af',
                                      fontSize: '15px',
                                      fontWeight: 500,
                                      textDecoration: 'none',
                                      transition: 'color 0.2s'
                                    }}
                                  >
                                    <span style={{ color: '#ff7a00', opacity: 0.8 }}>{sub.icon}</span>
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '14px 18px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            background: isActive(link.path) ? 'rgba(255,122,0,0.1)' : 'transparent',
                            border: `1px solid ${isActive(link.path) ? 'rgba(255,122,0,0.25)' : 'transparent'}`,
                            color: isActive(link.path) ? '#ff7a00' : '#e5e7eb',
                            fontWeight: 700,
                            fontSize: '16px',
                            letterSpacing: '0.3px',
                            transition: 'all 0.2s'
                          }}
                        >
                          {link.name}
                          <ChevronRight size={16} style={{ opacity: 0.5 }} />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div style={{ padding: '0 20px 20px' }}>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'block', textAlign: 'center',
                      background: '#ff7a00', color: '#000',
                      fontWeight: 800, fontSize: '14px',
                      letterSpacing: '1.5px', textTransform: 'uppercase',
                      textDecoration: 'none',
                      padding: '14px 20px',
                      borderRadius: '10px',
                      marginBottom: '14px'
                    }}
                  >
                    Get Site Assessment →
                  </Link>

                  {/* Social + Copyright */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#6b7280', fontSize: '12px' }}>© 2025 TechOps Global</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {['in', 'X', 'YT'].map(s => (
                        <div key={s} style={{
                          width: '32px', height: '32px', borderRadius: '50%',
                          border: '1px solid rgba(255,255,255,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#9ca3af', fontSize: '12px', fontWeight: 700, cursor: 'pointer'
                        }}>{s}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
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
        <Route path="/solutions/wind" element={<WindEnergy />} />
        <Route path="/solutions/battery" element={<BatteryStorage />} />
        <Route path="/solutions/parking" element={<ParkingLot />} />
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
                {[
                  { name: "Warehouse & Logistics", path: "/solutions/warehouse" },
                  { name: "Parking Lots", path: "/solutions/parking" },
                  { name: "Idle Land & Buffer Acreage", path: "/property-types" },
                  { name: "Solar Energy System", path: "/services" },
                  { name: "Wind Energy", path: "/solutions/wind" },
                  { name: "Battery Storage", path: "/solutions/battery" },
                  { name: "VPP & Markets", path: "/how-it-works" }
                ].map(l => (
                  <li key={l.name}>
                    <Link to={l.path} className="text-white text-[20px] hover:text-[#ff7a00] transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">PROPERTY TYPES</h4>
              <ul className="space-y-3">
                {["Industrial", "Commercial", "Retail", "Logistics", "Multi-Tenant"].map(l => (
                  <li key={l}>
                    <Link to="/property-types" className="text-white text-[20px] hover:text-[#ff7a00] transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">RESOURCES</h4>
              <ul className="space-y-3">
                {["Case Studies", "Whitepapers", "Blog", "FAQs", "Investor Relations"].map(l => (
                  <li key={l}><Link to="#" className="text-white text-[20px] hover:text-[#ff7a00] transition-colors">{l}</Link></li>
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
                  if (l === "Leadership") path = "/team";
                  return (
                    <li key={l}>
                      <Link to={path} className="text-white text-[20px] hover:text-[#ff7a00] transition-colors">
                        {l}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <h4 className="text-white font-bold mb-5 text-[22px] tracking-widest uppercase">CONTACT US</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-white text-[20px]">hello@techopsglobal.com</li>
                <li className="text-white text-[20px]">(609) 555-0123</li>
                <li className="text-white text-[20px] flex items-center gap-2 mt-2"><MapPin size={14} /> Princeton, NJ</li>
              </ul>
              <img
                src="/assets/images/resource/footer-thumb.png"
                alt="USA map indicating PJM markets"
                className="w-full max-w-[160px] opacity-80 mt-4"
                style={{ filter: 'brightness(0) invert(1)' }}
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
