import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import FounderProfile from "./pages/FounderProfile";
import JohnProfile from "./pages/JohnProfile";
import Contact from "./pages/Contact";
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
    <header className="solar-header-section" id="sticky-header">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-8 col-md-3 col-lg-3">
            <div className="logo" style={{ padding: '15px 0' }}>
              <Link to="/"><img src={logoImg} alt="TechOps Global Logo" style={{maxHeight:'150px', width:'auto', borderRadius: '10px', display: 'block', overflow: 'hidden'}} loading="lazy" /></Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="col-4 col-md-9 d-lg-none text-end">
            <button 
              className="mobile-nav-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <i className={isMobileMenuOpen ? "bi bi-x" : "bi bi-list"} style={{ fontSize: '2.5rem', color: '#1c1632' }}></i>
            </button>
          </div>

          {/* Collapsible Wrapper for Mobile / display:contents for Desktop */}
          <div className={`mobile-nav-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="col-12 col-lg-6">
              <div className="solar-menu">
                <ul>
                  <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                  <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                  <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
                  <li><Link to="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link></li>
                  <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contacts</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 pb-4 pb-lg-0">
              <div className="solar-search-button">
                <div className="solar-btn">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get A Quote <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Route path="/founder" element={<FounderProfile />} />
      <Route path="/john-huggins" element={<JohnProfile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    {/*==================================================*/}
    {/* Start Solar Panel  Footer  Section */}
    {/*==================================================*/} 
     <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget ">
              <div className="footer-wiget-log">
                <Link to="/"><img src={logoImg} alt="TechOps Global Logo" style={{maxHeight:'60px', width:'auto', borderRadius: '6px', display: 'block', overflow: 'hidden'}} loading="lazy" /></Link>
              </div>
              <div className="footer-wiget-text">
                <p>TechOps-Global Sierra Leone, a subsidiary of TechOps-Global Group LTD, is a renewable energy firm dedicated to providing sustainable power solutions and enhancing economic development.</p>
              </div>
              <div className="footer-wiget-social">
                <ul>
                  <li><Link to="/contact"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="/contact"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="/contact"><i className="fab fa-vimeo-v"></i></Link></li>
                  <li><Link to="/contact"><i className="fab fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-wiget ">
              <div className="footer-wiget-title">
                <h4>Industry Sectors</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li><Link to="/services">Healthcare</Link></li>
                  <li><Link to="/services">Education</Link></li>
                  <li><Link to="/services">Government</Link></li>
                  <li><Link to="/services">Finance</Link></li>
                  <li><Link to="/services">Commercial</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-wiget-quick-contanct ">
              <div className="footer-wiget-title">
                <h4>Get In Touch</h4>
              </div>
              <div className="footer-wiget-contact-menu">
                <ul>
                  <li>USA: 7454 Old Alexandria Ferry Road Clinton, Md. 20744</li>
                  <li>SL: 2 Taylor Lewis Drive Freetown, Sierra Leone</li>
                  <li style={{ whiteSpace: 'nowrap' }}>USA: +1 (240) 351-3209 | SL: +232 33 448 065</li>
                  <li><Link to="/contact">info@techops-global.com</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-thumb ">
              <img src="assets/images/resource/footer-thumb.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="row footer-line">
          <div className="col-lg-12">
            <div className="copyright-text text-center">
              <p>&copy; {new Date().getFullYear()} TechOps Global. All rights reserved.</p>
            </div>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
