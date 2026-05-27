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
import logoImg from "./assets/image.png";

// Inner layout that re-initializes jQuery theme on every route change
function Layout() {
  const location = useLocation();
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
              <Link to="/" className="text-white text-decoration-none uppercase tracking-wider hover-orange" style={{fontSize: '14px', fontWeight: '800'}}>
                Home
              </Link>
              <Link to="/about" className="text-white text-decoration-none uppercase tracking-wider hover-orange" style={{fontSize: '14px', fontWeight: '800'}}>
                About
              </Link>
              <Link to="/services" className="text-white text-decoration-none uppercase tracking-wider hover-orange" style={{fontSize: '14px', fontWeight: '800'}}>
                Service
              </Link>
              <Link to="/team" className="text-white text-decoration-none uppercase tracking-wider hover-orange" style={{fontSize: '14px', fontWeight: '800'}}>
                Team
              </Link>
              <Link to="/videos" className="text-white text-decoration-none uppercase tracking-wider hover-orange" style={{fontSize: '14px', fontWeight: '800'}}>
                Videos
              </Link>
              <Link to="/contact" className="text-white text-decoration-none uppercase tracking-wider hover-orange" style={{fontSize: '14px', fontWeight: '800'}}>
                Contact
              </Link>
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
                <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover-orange" style={{color:'#fff', textDecoration:'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase'}}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover-orange" style={{color:'#fff', textDecoration:'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase'}}>About</Link></li>
                <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover-orange" style={{color:'#fff', textDecoration:'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase'}}>Service</Link></li>
                <li><Link to="/team" onClick={() => setIsMobileMenuOpen(false)} className="hover-orange" style={{color:'#fff', textDecoration:'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase'}}>Team</Link></li>
                <li><Link to="/videos" onClick={() => setIsMobileMenuOpen(false)} className="hover-orange" style={{color:'#fff', textDecoration:'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase'}}>Videos</Link></li>
                <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover-orange" style={{color:'#fff', textDecoration:'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase'}}>Contact</Link></li>
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
    </Routes>

    {/*==================================================*/}
    {/* Start Solar Panel  Footer  Section */}
    {/*==================================================*/} 
    {location.pathname !== '/' && (
     <footer className="footer-section" style={{background: '#0b0c10', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', paddingBottom: '20px', fontFamily: "'Inter', sans-serif"}}>
      <div className="container-fluid px-[50px]">
        <div className="row mb-5">
          {/* Column 1: Logo & About */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="footer-logo mb-4">
              <Link to="/"><img src={logoImg} alt="TechOps Global Logo" style={{height: '40px'}} loading="lazy" /></Link>
            </div>
            <p className="text-gray" style={{fontSize: '14px', lineHeight: '1.6', marginBottom: '20px'}}>
              AI-powered energy infrastructure developer specializing in behind-the-meter solar, battery storage, and VPP solutions across the PJM markets.
            </p>
            <div className="d-flex gap-3">
              <Link to="#" className="text-gray" style={{fontSize: '1.2rem', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#fff'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}><i className="bi bi-linkedin"></i></Link>
              <Link to="#" className="text-gray" style={{fontSize: '1.2rem', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#fff'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}><i className="bi bi-twitter-x"></i></Link>
              <Link to="#" className="text-gray" style={{fontSize: '1.2rem', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#fff'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}><i className="bi bi-instagram"></i></Link>
              <Link to="#" className="text-gray" style={{fontSize: '1.2rem', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#fff'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}><i className="bi bi-youtube"></i></Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-white mb-4" style={{fontSize: '14px', letterSpacing: '1px'}}>SOLUTIONS</h6>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Warehouse & Logistics</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Idle Land</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Parking Lots</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Battery Storage</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>VPP & Markets</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
            <h6 className="text-white mb-4" style={{fontSize: '14px', letterSpacing: '1px'}}>COMPANY</h6>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li><Link to="/about" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>About Us</Link></li>
              <li><Link to="/team" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Leadership</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Careers</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>News</Link></li>
              <li><Link to="/contact" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="col-lg-2 col-md-4 mb-4 mb-lg-0">
            <h6 className="text-white mb-4" style={{fontSize: '14px', letterSpacing: '1px'}}>RESOURCES</h6>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Case Studies</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Whitepapers</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Blog</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>FAQs</Link></li>
              <li><Link to="#" className="text-gray text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#9ca3af'}>Investor Relations</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="col-lg-3 col-md-4">
            <h6 className="text-white mb-4" style={{fontSize: '14px', letterSpacing: '1px'}}>CONTACT US</h6>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li className="text-gray" style={{fontSize: '14px'}}>hello@techopsglobal.com</li>
              <li className="text-gray" style={{fontSize: '14px'}}><i className="bi bi-telephone text-white me-2"></i> (609) 555-0123</li>
              <li className="text-gray" style={{fontSize: '14px'}}><i className="bi bi-geo-alt text-white me-2"></i> Princeton, NJ</li>
            </ul>
            {/* Outline Map Placeholder */}
            <div className="mt-4" style={{height: '100px', width: '100px', border: '1px dashed rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', opacity: 0.5}}>
               <i className="bi bi-map" style={{fontSize: '2rem', color: '#fff'}}></i>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4" style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
          <p className="text-gray mb-3 mb-md-0" style={{fontSize: '14px'}}>© 2025 TechOps Global. All rights reserved.</p>
          <div className="d-flex gap-3">
            <Link to="#" className="text-white text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#fff'}>Privacy Policy</Link>
            <span className="text-gray" style={{fontSize: '14px'}}>|</span>
            <Link to="#" className="text-white text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#fff'}>Terms of Service</Link>
            <span className="text-gray" style={{fontSize: '14px'}}>|</span>
            <Link to="#" className="text-white text-decoration-none" style={{fontSize: '14px', transition: 'color 0.3s'}} onMouseOver={(e)=>e.target.style.color='#f97316'} onMouseOut={(e)=>e.target.style.color='#fff'}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
    )}
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
