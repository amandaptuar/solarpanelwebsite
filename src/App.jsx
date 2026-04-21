import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import FounderProfile from "./pages/FounderProfile";
import Contact from "./pages/Contact";
import logoImg from "./assets/logo.png";

// Inner layout that re-initializes jQuery theme on every route change
function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Hide the preloader once the layout is ready
    if (window.hidePageLoader) {
      window.hidePageLoader();
    }
  }, [location.pathname]);


  return (
    <>
    {/*==================================================*/}
    {/* Start Solar Panel  Header Section */}
    {/*==================================================*/}
    <header className="solar-header-section" id="sticky-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-3">
            <div className="logo">
              <Link to="/"><img src={logoImg} alt="TechOps Global Logo" style={{maxHeight:'80px', width:'auto', padding:'5px 0'}} loading="lazy" /></Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-9 d-none d-lg-block">
            <div className="solar-menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 d-none d-lg-block">
            <div className="solar-search-button">
              <div className="solar-btn">
                <Link to="/contact">Get A Quote <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Solar Mobile Menu Area */}
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
      <div className="mobile-logo" style={{position: 'absolute', top: '5px', left: '15px', zIndex: '9999'}}>
        <Link to="/"><img src={logoImg} alt="TechOps Global Logo" style={{maxHeight:'50px', width:'auto'}} loading="lazy" /></Link>
      </div>
      <div className="mobile-menu">
        <nav className="solar_menu">
          <ul className="nav_scroll">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </nav>
      </div>
    </div>
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
                <Link to="/"><img src={logoImg} alt="TechOps Global Logo" style={{maxHeight:'60px', width:'auto'}} loading="lazy" /></Link>
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
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget ">
              <div className="footer-wiget-title">
                <h4>Industry Sectors</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li><Link to="/contact">Contact us</Link></li>
                  <li><Link to="/contact">How it Works</Link></li>
                  <li><Link to="/contact"> Office Create</Link></li>
                  <li><Link to="/contact">Residential Explore</Link></li>
                  <li><Link to="/contact">Terms &amp; Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget-quick-contanct ">
              <div className="footer-wiget-title">
                <h4>Get In Touch</h4>
              </div>
              <div className="footer-wiget-contact-menu">
                <ul>
                  <li>USA: 7454 Old Alexandria Ferry Road Clinton, Md. 20744</li>
                  <li>SL: 2 Taylor Lewis Drive Freetown, Sierra Leone</li>
                  <li>USA: +1 (240) 351-3209 | SL: +232 33 448 065</li>
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
          <div className="col-lg-3 col-md-6">
            <div className="copyright-text ">
              <p>© 2023-25 | Alrights reserved by <Link to="/contact">TechTime</Link></p>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-condition ">
              <ul>
                <li><Link to="/contact">Privacy</Link></li>
                <li><Link to="/contact">Term &amp; Conditions</Link></li>
                <li><Link to="/contact">Legal</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3"></div>
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
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
