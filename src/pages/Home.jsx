import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TechOps Global | Zero-Capex Revenue Engine";
  }, []);

  return (
    <div className="home-dark-theme">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="hero-content">
                <h5 className="text-orange mb-3" style={{ letterSpacing: '1px', fontWeight: '700', fontSize: '0.85rem' }}>
                  AI POWER. REAL ESTATE. REAL REVENUE.
                </h5>
                <h1>Turn Your PJM<br />Real Estate Footprint<br />into a <span className="text-orange">Zero-Capex</span><br />Revenue Engine.</h1>
                <p>
                  Monetize your unused warehouse rooftops, vacant acreage, and parking lots in Pennsylvania, <strong className="text-white">New Jersey</strong>, and <strong className="text-white">Maryland</strong>. We deploy behind-the-meter solar and battery storage systems at <strong className="text-white">zero cost</strong> to you, driving immediate energy savings and massive grid-balancing cash flow.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn-orange">
                    GET SITE ASSESSMENT <i className="bi bi-arrow-right"></i>
                  </Link>
                  <Link to="/services" className="btn-outline">
                    SEE HOW IT WORKS <i className="bi bi-play-circle" style={{fontSize: '1.2rem'}}></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 mt-5 mt-lg-0">
              <div className="hero-panel">
                <div className="hero-panel-item">
                  <div className="hero-panel-icon green">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold text-white" style={{fontSize: '0.95rem'}}>ZERO CAPEX</h6>
                    <p className="mb-0 text-gray" style={{ fontSize: '0.85rem' }}>We fund, build, own & operate.</p>
                  </div>
                </div>
                <div className="hero-panel-item">
                  <div className="hero-panel-icon green">
                    <i className="bi bi-bar-chart-fill"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold text-white" style={{fontSize: '0.95rem'}}>DUAL INCOME STREAM</h6>
                    <p className="mb-0 text-gray" style={{ fontSize: '0.85rem' }}>Lease income + Energy savings<br/>& market revenue.</p>
                  </div>
                </div>
                <div className="hero-panel-item">
                  <div className="hero-panel-icon orange">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold text-white" style={{fontSize: '0.95rem'}}>PJM MARKET EXPOSURE</h6>
                    <p className="mb-0 text-gray" style={{ fontSize: '0.85rem' }}>Tap into billions in grid-balancing<br/>opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Benefit Framework */}
      <section className="dual-benefit-section">
        <div className="container">
          <div className="section-header-line">
            <span>THE DUAL-BENEFIT FRAMEWORK</span>
          </div>
          
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="db-box">
                <div className="db-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div>
                  <h6 className="text-green mb-2 fw-bold" style={{letterSpacing: '0.5px'}}>1. GUARANTEED LEASE INCOME</h6>
                  <p className="text-gray mb-0" style={{fontSize: '0.95rem'}}>Predictable land/roof rental payments<br/>over a 15–20 year term.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 text-center my-4 my-lg-0">
              <div className="db-plus">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="db-box">
                <div className="db-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <div>
                  <h6 className="text-green mb-2 fw-bold" style={{letterSpacing: '0.5px'}}>2. BEHIND-THE-METER (BTM) PEAK SHAVING</h6>
                  <p className="text-gray mb-0" style={{fontSize: '0.95rem'}}>Shield your facility from PJM's exploding<br/>capacity pass-through costs (30%+<br/>of corporate electric bills).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon"><i className="bi bi-diagram-3"></i></div>
              <div className="stat-text">
                <h4 className="text-white">$BILLIONS</h4>
                <p>in PJM market<br/>revenue potential</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><i className="bi bi-bag"></i></div>
              <div className="stat-text">
                <h4 className="text-white">0</h4>
                <p>Upfront cost<br/>to you</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><i className="bi bi-calendar-event"></i></div>
              <div className="stat-text">
                <h4 className="text-white">15-20 YEARS</h4>
                <p>Long-term predictable<br/>cash flow</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><i className="bi bi-clock-history"></i></div>
              <div className="stat-text">
                <h4 className="text-white">100%</h4>
                <p>Turnkey development<br/>& operations</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><i className="bi bi-bounding-box-circles"></i></div>
              <div className="stat-text">
                <h4 className="text-white">24/7 AI</h4>
                <p>Autonomous dispatch<br/>& performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="section-header-left">
            <span>TAILORED SOLUTIONS FOR EVERY PROPERTY TYPE</span>
          </div>

          <div className="row g-5 mt-2">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="solution-card">
                <div className="solution-img-wrapper">
                  <img src="/img/business-solution-2026-03-10-02-05-05-utc.JPG" alt="Warehouse & Logistics Hubs" className="solution-img" />
                  <div className="sol-icon"><i className="bi bi-building"></i></div>
                </div>
                <div className="solution-content">
                  <div className="solution-title">
                    <h4 className="text-white">WAREHOUSE &<br/>LOGISTICS HUBS</h4>
                    <span>NJ & PA TURNPIKES</span>
                  </div>
                  <p className="text-white fw-bold mb-3" style={{ fontSize: '0.95rem' }}>Turn structural dead weight into an<br/>operational asset.</p>
                  <ul className="solution-list">
                    <li><i className="bi bi-check2"></i> Zero roof penetrations</li>
                    <li><i className="bi bi-check2"></i> Preserve warranties</li>
                    <li><i className="bi bi-check2"></i> 100,000+ sq ft of roof monetized</li>
                    <li><i className="bi bi-check2"></i> Containerized battery storage</li>
                  </ul>
                  <Link to="/services" className="text-orange fw-bold" style={{ textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    EXPLORE SOLUTION <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="solution-card">
                <div className="solution-img-wrapper">
                  <img src="/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg" alt="Idle Land" className="solution-img" />
                  <div className="sol-icon green"><i className="bi bi-tree"></i></div>
                </div>
                <div className="solution-content">
                  <div className="solution-title">
                    <h4 className="text-white">IDLE LAND &<br/>BUFFER ACREAGE</h4>
                    <span>INDUSTRIAL PA & MD</span>
                  </div>
                  <p className="text-white fw-bold mb-3" style={{ fontSize: '0.95rem' }}>Generating yield on land<br/>you aren't using.</p>
                  <ul className="solution-list">
                    <li><i className="bi bi-check2"></i> Ground-mounted solar + storage</li>
                    <li><i className="bi bi-check2"></i> Bypass long utility interconnection</li>
                    <li><i className="bi bi-check2"></i> Plug into local distribution grids</li>
                    <li><i className="bi bi-check2"></i> Operate as a Virtual Power Plant (VPP)</li>
                  </ul>
                  <Link to="/services" className="text-orange fw-bold" style={{ textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    EXPLORE SOLUTION <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="solution-card">
                <div className="solution-img-wrapper">
                  <img src="/img/low-angle-shot-of-a-group-of-businesspeople-joinin-2026-01-09-09-45-09-utc.jpg" alt="Commercial Parking Lots" className="solution-img" />
                  <div className="sol-icon green"><i className="bi bi-car-front"></i></div>
                </div>
                <div className="solution-content">
                  <div className="solution-title">
                    <h4 className="text-white">COMMERCIAL<br/>PARKING LOTS</h4>
                    <span>OFFICES & RETAIL</span>
                  </div>
                  <p className="text-white fw-bold mb-3" style={{ fontSize: '0.95rem' }}>Shade vehicles. Generate power.<br/>Offset demand.</p>
                  <ul className="solution-list">
                    <li><i className="bi bi-check2"></i> Solar carports & EV charging</li>
                    <li><i className="bi bi-check2"></i> Reduce tenant energy costs</li>
                    <li><i className="bi bi-check2"></i> Storage hidden in plain sight</li>
                    <li><i className="bi bi-check2"></i> Enhance ESG & property value</li>
                  </ul>
                  <Link to="/services" className="text-orange fw-bold" style={{ textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    EXPLORE SOLUTION <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Dashboard Section */}
      <section className="dashboard-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-5 mb-lg-0 pe-lg-5">
              <h6 className="text-orange mb-3" style={{ letterSpacing: '1.5px', fontWeight: '700', fontSize: '0.8rem' }}>HOW IT WORKS</h6>
              <h2 className="text-white fw-bold mb-4" style={{ fontSize: '2.4rem', lineHeight: '1.15', letterSpacing: '-0.5px' }}>
                AI-Powered VPP Platform.<br/>Autonomous. Intelligent.<br/>Profitable.
              </h2>
              <p className="text-gray mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Our proprietary AI platform continuously analyzes market prices, weather, grid conditions, and facility loads to autonomously decide the most profitable actions.
              </p>
              <ul className="solution-list mb-5">
                <li><i className="bi bi-check2"></i> Forecast generation, load & market prices</li>
                <li><i className="bi bi-check2"></i> Optimize battery charge/discharge</li>
                <li><i className="bi bi-check2"></i> Reduce peak demand automatically</li>
                <li><i className="bi bi-check2"></i> Sell into PJM markets at the right time</li>
                <li><i className="bi bi-check2"></i> Maximize revenue. Minimize risk.</li>
              </ul>
              <Link to="/about" className="btn-outline">
                VIEW PLATFORM <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            
            <div className="col-lg-8">
              {/* Fake Dashboard Replica */}
              <div className="dashboard-ui">
                {/* Sidebar */}
                <div className="dash-sidebar">
                  <div className="dash-brand">
                    TECHOPS AI<span style={{color: '#f97316'}}>•</span>
                  </div>
                  <ul className="dash-nav">
                    <li className="active"><i className="bi bi-grid-1x2"></i> Overview</li>
                    <li><i className="bi bi-box"></i> Assets</li>
                    <li><i className="bi bi-graph-up-arrow"></i> Forecasting</li>
                    <li><i className="bi bi-lightning-charge"></i> Dispatch</li>
                    <li><i className="bi bi-cart"></i> Markets</li>
                    <li><i className="bi bi-currency-dollar"></i> Revenue</li>
                    <li><i className="bi bi-file-earmark-text"></i> Reports</li>
                    <li><i className="bi bi-bell"></i> Alerts</li>
                    <li><i className="bi bi-gear"></i> Settings</li>
                  </ul>
                </div>
                
                {/* Main Content */}
                <div className="dash-main">
                  <div className="dash-header">
                    <h4>Real-Time Overview</h4>
                    <div>
                      <span className="text-gray" style={{fontSize: '0.8rem', marginRight: '10px'}}>System Status</span>
                      <span className="status-pill">OPTIMAL</span>
                    </div>
                  </div>
                  
                  <div className="dash-top-stats">
                    <div className="dash-stat-box">
                      <span>Total Assets</span>
                      <strong>24</strong>
                    </div>
                    <div className="dash-stat-box">
                      <span>Total Capacity</span>
                      <strong>18.6 <small>MW</small></strong>
                    </div>
                    <div className="dash-stat-box">
                      <span>Battery Capacity</span>
                      <strong>52.4 <small>MWh</small></strong>
                    </div>
                    <div className="dash-stat-box">
                      <span>Live Generation</span>
                      <strong>12.7 <small>MW</small></strong>
                    </div>
                  </div>
                  
                  <div className="dash-charts">
                    <div className="dash-chart-box">
                      <div className="dash-chart-title d-flex justify-content-between">
                        <span>Power Flow</span>
                        <div style={{fontSize: '0.7rem', color: '#9ca3af', display: 'flex', gap: '10px'}}>
                          <span><span style={{color: '#f97316'}}>•</span> Solar</span>
                          <span><span style={{color: '#3b82f6'}}>•</span> Load</span>
                          <span><span style={{color: '#4ade80'}}>•</span> Battery</span>
                        </div>
                      </div>
                      <div className="mock-line-chart">
                        <svg className="mock-chart-svg" viewBox="0 0 400 150" preserveAspectRatio="none">
                          <polyline fill="none" stroke="#f97316" strokeWidth="2" points="0,100 50,80 100,120 150,60 200,40 250,90 300,50 350,70 400,30" />
                          <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points="0,120 50,110 100,100 150,90 200,130 250,100 300,110 350,130 400,90" />
                          <polyline fill="none" stroke="#4ade80" strokeWidth="2" strokeDasharray="4" points="0,140 150,140 200,80 250,140 400,140" />
                        </svg>
                      </div>
                      <div className="d-flex justify-content-between mt-2 text-gray" style={{fontSize: '0.65rem'}}>
                        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
                      </div>
                    </div>
                    
                    <div className="dash-chart-box">
                      <div className="dash-chart-title">Revenue Today</div>
                      <h4 className="text-white mb-4">$128,540</h4>
                      <div className="mock-donut-wrapper">
                        <div className="mock-donut"></div>
                        <div className="mock-donut-legend">
                          <div className="legend-item"><span className="text-white"><span className="legend-color" style={{backgroundColor: '#f97316'}}></span>Energy Arbitrage</span> <span>45%</span></div>
                          <div className="legend-item"><span className="text-white"><span className="legend-color" style={{backgroundColor: '#4ade80'}}></span>Demand Response</span> <span>25%</span></div>
                          <div className="legend-item"><span className="text-white"><span className="legend-color" style={{backgroundColor: '#3b82f6'}}></span>Capacity Market</span> <span>20%</span></div>
                          <div className="legend-item"><span className="text-white"><span className="legend-color" style={{backgroundColor: '#8b5cf6'}}></span>Other Revenues</span> <span>10%</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dash-bottom">
                    <div className="dash-bottom-item">
                      <span>AI Dispatch Status</span>
                      <strong className="text-green">ACTIVE</strong>
                    </div>
                    <div className="dash-bottom-item">
                      <span>Next Action</span>
                      <strong>Discharge Battery 2.4 MW</strong>
                      <span style={{fontSize: '0.65rem', marginTop: '2px'}}>Market Price: $82.67/MWh</span>
                    </div>
                    <div className="dash-bottom-item">
                      <span>Next 5 Min Forecast</span>
                      <strong>High Price Event</strong>
                      <span style={{fontSize: '0.65rem', marginTop: '2px'}}>Increase Export</span>
                    </div>
                    <div className="dash-bottom-item" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <i className="bi bi-cloud-arrow-down text-green" style={{fontSize: '1.5rem'}}></i>
                      <div>
                        <span>CO₂ Offset Today</span>
                        <strong>28.4 Tons</strong>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="cta-banner">
            <div className="cta-content">
              <h2 className="text-white fw-bold mb-3">Your Assets. Our Technology.<br/>Shared Success.</h2>
              <p className="text-gray mb-0">Join the growing number of forward-thinking real estate owners<br/>who are turning their properties into long-term cash-flowing assets.</p>
            </div>
            <div className="cta-stats">
              <div className="cta-stat"><i className="bi bi-record-circle"></i> <span className="text-white">Zero risk</span></div>
              <div className="cta-stat"><i className="bi bi-record-circle"></i> <span className="text-white">Zero capital</span></div>
              <div className="cta-stat"><i className="bi bi-record-circle"></i> <span className="text-white">Maximum reward</span></div>
            </div>
            <div>
              <Link to="/contact" className="btn-orange">
                GET YOUR FREE SITE ASSESSMENT <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
