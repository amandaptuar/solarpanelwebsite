import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Home page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
		{/*==================================================*/}
		{/* Start Solar Panel  slider Section */}
		{/*==================================================*/}
		<div id="home" className="slider-list owl-carousel">
			<div className="slider-section d-flex align-items-center">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="slider-content ">
								<h4> Our Solar Systems</h4>
								<h1>Energize Society By</h1>
								<h1>Reliable Energy</h1>
								<p>Universal energy access is critical for economic growth. TechOps Global is committed to supplying 1–4.5 GW of sustainable power to Sierra Leone through strategic infrastructure and technology partnerships.</p>
								<div className="solar-btn slider1 ">
									<Link to="/contact">Our Service <i className="bi bi-arrow-right"></i></Link>
								</div>
								<div className="solar-btn slider2  ">
									<Link to="/about">More About! <i className="bi bi-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="slider-section style-three d-flex align-items-center">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="slider-content ">
								<h4> Our Solar Systems</h4>
								<h1>Financial Savings</h1>
								<h1>With Solar System</h1>
								<p>Mitigate rising fuel costs and demand-based utility fees. Our commercial solar systems offer significant financial savings and long-term energy security for industrial and corporate partners.</p>
								<div className="solar-btn slider1 ">
									<Link to="/contact">Our Service <i className="bi bi-arrow-right"></i></Link>
								</div>
								<div className="solar-btn slider2  ">
									<Link to="/about">More About! <i className="bi bi-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/*End Solar Panel  slider Section  */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  About Section */}
		{/*==================================================*/}
		<div id="about" className="about-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="">
							<div className="about-thumb">
								<img src="assets/images/about/about-thumb.jpg" alt=""  loading="lazy" />
								<div className="about-counter">
									<div className="about-counter-text">
										<div className="about-numbar">
											<h4 className="counter">29</h4>
											<span>+</span>
										</div>
										<div className="about-text">
											<h5>Years Experience</h5>
										</div>
									</div>
								</div>
								<div className="about-counter-two d-flex align-items-center ">
									<div className="about-counter-img">
										<img src="assets/images/about/about-shape.png" alt=""  loading="lazy" />
									</div>
									<div className="about-number-two">
										<h4 className="counter">100</h4>
										<span>MW+</span>
										<h5>Commissioned</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="about-section-title">
							<div className="about-section-sub-title ">
								<h4>Our Introduction</h4>
							</div>
							<div className="about-section-main-title ">
								<h2>We're Developing Future
									Solar Solutions </h2>
							</div>
						</div>
						{/* tab */}
						<div className="tab">
							<ul className="tabs active ">
								<li className="current"><Link to="/contact">About Us <i className="bi bi-arrow-up-right"></i></Link></li>
								<li className=""><Link to="/contact">Mission <i className="bi bi-arrow-up-right"></i></Link></li>
								<li className=""><Link to="/contact">Vision <i className="bi bi-arrow-up-right"></i></Link></li>
							</ul> {/* / tabs */}
		
							 <div className="tab_content">
								{/* / tabs_item */}
								<div className="tabs_item" >
									<div className="tabs-items-content">
										<div className="about-content-discription ">
											<p>TechOps Global is an international project development, technology, and infrastructure firm. We focus on designing bankable, scalable solutions for governments, utilities, and industrial operators in West Africa.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list ">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Mega Project Management</li>
														<li><i className="bi bi-chevron-double-right"></i> NIWE Validated Data</li>
														<li><i className="bi bi-chevron-double-right"></i> Industrial Grid-Tie</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list ">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Power Evacuation</li>
														<li><i className="bi bi-chevron-double-right"></i> Land Procurement</li>
														<li><i className="bi bi-chevron-double-right"></i> Utility Liaisoning</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about ">
												<Link to="/contact">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>
								</div>
								{/* / tabs_item */}
								<div className="tabs_item" style={{ display: 'none' }}>
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>Our mission is to provide 1 – 4.5 GW of power to Sierra Leone, enhancing economic development and job opportunities through large-scale renewable infrastructure and localized technical training.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Job Opportunity Creation</li>
														<li><i className="bi bi-chevron-double-right"></i> Local Technical Training</li>
														<li><i className="bi bi-chevron-double-right"></i> Sustainable Infrastructure</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Job Opportunity Creation</li>
														<li><i className="bi bi-chevron-double-right"></i> Sustainable Agriculture</li>
														<li><i className="bi bi-chevron-double-right"></i> Technical Empowerment</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/contact">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>		
								</div>
								{/* / tabs_item */}
								<div className="tabs_item" style={{ display: 'none' }}>
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>We aim to become the trusted clean energy partner for West Africa, harmonizing equipment standards and synchronizing renewable systems nationwide for universal energy access.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Bankable Power Systems</li>
														<li><i className="bi bi-chevron-double-right"></i> Optimized ROI Strategy</li>
														<li><i className="bi bi-chevron-double-right"></i> Standardized Logistics</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Standardized Logistics</li>
														<li><i className="bi bi-chevron-double-right"></i> Reliable Grid Hosting</li>
														<li><i className="bi bi-chevron-double-right"></i> Economic Stabilization</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/contact">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>		
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  About Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  Service Section */}
		{/*==================================================*/}
		 <div id="services" className="service-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title ">
								<h4>Our Most Service</h4>
							</div>
							<div className="section-main-title ">
								<h2>Provide Solar Solution</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="service-box ">
							<div className="service-thumb">
								<img src="assets/images/resource/service1.png" alt=""  loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">Commercial Solar</Link></h4>
										<p>Tailored Off-grid, Hybrid, and Grid-tie solar solutions designed to meet unique commercial energy needs.</p>
										<Link to="/contact">Read More <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-box ">
							<div className="service-thumb">
								<img src="assets/images/resource/service2.png" alt=""  loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">Battery storage</Link></h4>
										<p>Emergency backup, peak demand shaving, and full off-grid battery systems with environmental cooling.</p>
										<Link to="/contact">Read More <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-box ">
							<div className="service-thumb">
								<img src="assets/images/resource/service3.png" alt=""  loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">Wind Energy</Link></h4>
										<p>Resource assessment validated by NIWE with a track record of commissioning 100 MW in West Africa.</p>
										<Link to="/contact">Read More <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  Service Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  contanct us Section */}
		{/*==================================================*/}
		 <div id="contact" className="contact-us-section">
			<div className="container">
				<div className="row contact-us align-items-center">
					<div className="col-lg-2"></div>
					<div className="col-lg-7 col-md-6">
						<div className="section-title ">
							<div className="section-main-title contact-us">
								<h2>How We Create Solar Energy</h2>
							</div>
						</div>
						<div className="contact-us-discription ">
							<p>Building &amp; Maintaining The Energy</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="solar-btn contact-us ">
							<Link to="/contact">Contact Now <i className="bi bi-arrow-right"></i></Link>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  contanct us Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  pricing Section */}
		{/*==================================================*/}
		 <div className="pricing-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="section-title">
							<div className="section-sub-title pricing ">
								<h4>Our Pricing Table</h4>
							</div>
							<div className="section-main-title pricing ">
								<h2>Want to Ask Something</h2>
								<h2>from Us?</h2>
							</div>
						</div>
						{/* Start Accordion */}
						<div className="tab_container">
							<div id="tab1" className="tab_content">
								<ul className="accordion">
									<li className=""><a><span> What are the benefits of Hybrid Solar systems? </span></a>
										<p>Hybrid systems are a unique and innovative solution that combines solar energy with traditional power sources to create a reliable and efficient energy system, providing consistent power even when solar generation is low.</p>
									</li>
									<li className=""><a><span> How does Peak Demand Shaving reduce fees? </span></a>
										<p>Energy Storage helps mitigate demand-based fees by allowing your business to flatten demand peaks, drawing from stored solar energy rather than grid energy during high-cost billing cycles.</p>
									</li>
									<li className=""><a><span> What is validated wind resource data? </span></a>
										<p>Our wind resource assessment data is validated by the National Institute of Wind Energy (NIWE), ensuring the highest accuracy for project planning and investment – a first for the private energy sector in the region.</p>
									</li>
									<li className=""><a><span> Do you provide Off-grid solutions for remote areas? </span></a>
										<p>Yes, our off-grid solar and battery systems are specifically designed for facilities located in remote areas without access to the power grid, ensuring 24/7 reliability through advanced storage.</p>
									</li>
								</ul>
							</div>
						</div>
						{/* End Accordion */}
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="pricing-box ">
							<div className="pricing-info">
								<div className="pricing-year"><h4>Standard</h4></div>
								<div className="pricing-rate"><h2>Project<span>Based</span></h2></div>
							</div>
							<div className="pricing-icon"><i className="bi bi-check2"></i></div>
							<div className="pricing-content">
								<h4>Consultation First</h4>
								<p>Detailed technical and commercial feasibility studies followed by customized engineering and deployment strategies for industrial scale.</p>
							</div>
							<div className="pricing-value"><h5>Best Value</h5></div>
						</div>
						<div className="pricing-box ">
							<div className="pricing-info">
								<div className="pricing-year"><h4>Enterprise</h4></div>
								<div className="pricing-rate"><h2>Supply<span>Chain</span></h2></div>
							</div>
							<div className="pricing-icon"><i className="bi bi-check2"></i></div>
							<div className="pricing-content">
								<h4>Finance Options</h4>
								<p>Strategic supply chain finance solutions for large-scale solar and wind developments to optimize ROI and project cash flow.</p>
							</div>
							<div className="pricing-value"><h5>Best Value</h5></div>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  pricing Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Call Do Action  Section */}
		{/*==================================================*/}
		 <div className="call-do-action-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* Background Image Section - Video Removed */}
						<div style={{ height: '140px' }}></div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  Call Do Action  Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Choose Us  Section */}
		{/*==================================================*/}
		 <div className="choose-us-section">
			<div className="container">
				<div className="row choose">
					<div className="col-lg-6 col-md-12">
						<div className="section-title ">
							<div className="section-sub-title choose">
								<h4>Why Choose Us</h4>
							</div>
							<div className="section-main-title home">
								<h2>Our Expert Renewable</h2>
								<h2>Energy Strategy</h2>
							</div>
							<div className="about-discription">
								<p>Techops Global will analyses technical, commercial, and financial prefeasibility & feasibility for our partners. We develop optimized technical concepts and negotiate commercial Power Purchase Agreements (PPA) to ensure Solar Solutions Reliability and performance. </p>
							</div>
						</div>
						<div className="choose-us-content ">
							<div className="choose-us-thumb">
								<img src="assets/images/resource/choose-thumb.png" alt=""  loading="lazy" />
							</div>
							<div className="choose-us-list">
								<ul>
									<li><i className="bi bi-check"></i> Resource Assessment</li>
									<li><i className="bi bi-check"></i> Efficient Engineering</li>
									<li><i className="bi bi-check"></i> Strong Collaborations</li>
								</ul>
							</div>
							<div className="choose-us-info">
								<div className="solar-btn choose">
									<Link to="/contact">Get A Quote <i className="bi bi-arrow-right"></i></Link>
								</div>
								<div className="choose-us-icon">
									<i className="bi bi-telephone-plus"></i>
								</div>
								<div className="choose-us-phone">
									<h5>Emergency Call <span>+232 33 448 065</span></h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="choose-contact-box ">
							<div className="choose-contact-title">
								<h4>Make an Appointment</h4>
							</div>
							<form action="https://formspree.io/f/myyleorq" method="POST" id="it-form">
								<div className="row">
									<div className="col-lg-12">
										<div className="form-box">
											<input type="text" name="name" placeholder="Full Name *" />
											<i className="bi bi-person"></i>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box">
											<input type="text" name="email" placeholder="Email Here *" />
											<i className="bi bi-envelope"></i>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box">
											<input type="text" name="subject" placeholder="Select Service *" />
											<i className="bi bi-pencil-square"></i>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box">
											<textarea name="massage" id="massage" cols="30" rows="10" placeholder="Your Comment *"></textarea>
											<i className="bi bi-chat-left-text-fill"></i>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box-button">
											<button type="Submit">Appointment Now <i className="bi bi-arrow-right"></i></button>
										</div>
									</div>
								</div>
							</form>
							<div id="status"></div>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  Choose Us  Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Protfolio  Section */}
		{/*==================================================*/}
		<div id="projects" className="protfolio-section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-8 col-md-6 col-sm-12">
						<div className="section-title">
							<div className="section-sub-title protfolio">
								<h4>What We Project</h4>
							</div>
							<div className="section-main-title protfolio ">
								<h2>Our Energy Project</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="solar-btn protfolio">
							<Link to="/contact">All  Projects <i className="bi bi-arrow-right"></i></Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="protfolio-thumb ">
							<img src="assets/images/project/protfolio-thumb.png" alt=""  loading="lazy" />
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="protfolio-item ">
							<div className="protfolio-item-content">
								<div className="protfolio-item-numbar"><span>01</span></div>
								<div className="protfolio-item-title">
									<h3>100MW Solar Photovoltaic</h3>
									<h3>Kenema District, SL</h3>
								</div>
							</div>
							<div className="protfolio-itme-hover">
								<img src="assets/images/project/prot-hover.png" alt=""  loading="lazy" />
							</div>
							<div className="protfolio-item-icon">
								<i className="bi bi-arrow-up-right"></i>
							</div>
						</div> 
						<div className="protfolio-item">
							<div className="protfolio-item-content">
								<div className="protfolio-item-numbar"><span>02</span></div>
								<div className="protfolio-item-title">
									<h3>Wind Resource Assessment</h3>
									<h3>20 Validated Locations</h3>
								</div>
							</div>
							<div className="protfolio-itme-hover">
								<img src="assets/images/project/prot-hover.png" alt=""  loading="lazy" />
							</div>
							<div className="protfolio-item-icon">
								<i className="bi bi-arrow-up-right"></i>
							</div>
						</div> 
						<div className="protfolio-item style-two">
							<div className="protfolio-item-content">
								<div className="protfolio-item-numbar"><span>03</span></div>
								<div className="protfolio-item-title">
									<h3>Off-Grid Battery Storage</h3>
									<h3>Industrial Utility Plan</h3>
								</div>
							</div>
							<div className="protfolio-itme-hover">
								<img src="assets/images/project/prot-hover.png" alt=""  loading="lazy" />
							</div>
							<div className="protfolio-item-icon">
								<i className="bi bi-arrow-up-right"></i>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Protfolio  Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  Offer  Section */}
		{/*==================================================*/}
		<div className="offer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-12">
						<div className="section-title ">
							<div className="section-sub-title offer">
								<h4>What We Offer</h4>
							</div>
							<div className="section-main-title offer">
								<h2>Taking The Effort Out Of</h2>
								<h2>Business Energy</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<div className="offer-items-box">
									<div className="offer-card-image">
										<img src="assets/images/resource/offer-battery.png" alt="Battery Storage"  loading="lazy" />
									</div>
									<div className="offer-icon-thumb">
										<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 48 48" fill="none">
											<rect x="6" y="12" width="30" height="24" rx="3" stroke="#e63a27" strokeWidth="3" fill="rgba(230,58,39,0.1)"/>
											<rect x="36" y="19" width="6" height="10" rx="2" fill="#e63a27"/>
											<polyline points="18,20 14,27 22,27 18,34" stroke="#e63a27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
										</svg>
									</div>
									<div className="offer-content">
										<h4>Backup Systems</h4>
										<p>Expand security around the clock for your most critical power loads at night.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<div className="offer-items-box">
									<div className="offer-card-image">
										<img src="assets/images/resource/offer-energy.png" alt="Energy Around"  loading="lazy" />
									</div>
									<div className="offer-icon-thumb">
										<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 48 48" fill="none">
											<circle cx="24" cy="24" r="8" fill="#f59c19" opacity="0.9"/>
											<circle cx="24" cy="24" r="3.5" fill="#fff"/>
											<line x1="24" y1="4" x2="24" y2="10" stroke="#f59c19" strokeWidth="2.5" strokeLinecap="round"/>
											<line x1="24" y1="38" x2="24" y2="44" stroke="#f59c19" strokeWidth="2.5" strokeLinecap="round"/>
											<line x1="4" y1="24" x2="10" y2="24" stroke="#f59c19" strokeWidth="2.5" strokeLinecap="round"/>
											<line x1="38" y1="24" x2="44" y2="24" stroke="#f59c19" strokeWidth="2.5" strokeLinecap="round"/>
										</svg>
									</div>
									<div className="offer-content">
										<h4>Peak Shaving</h4>
										<p>Flatten demand peaks by drawing from stored solar energy rather than grid energy.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<div className="offer-items-box">
									<div className="offer-card-image">
										<img src="assets/images/resource/offer-solar.png" alt="Solar PV Systems"  loading="lazy" />
									</div>
									<div className="offer-icon-thumb">
										<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 48 48" fill="none">
											<path d="M8 24 L24 10 L40 24 L38 24 L38 40 L10 40 L10 24 Z" stroke="#e63a27" strokeWidth="2.5" fill="rgba(230,58,39,0.08)" strokeLinejoin="round"/>
											<rect x="16" y="16" width="7" height="5" rx="1" fill="#e63a27" opacity="0.8"/>
											<rect x="25" y="16" width="7" height="5" rx="1" fill="#e63a27" opacity="0.8"/>
											<circle cx="24" cy="6" r="2.5" fill="#f59c19"/>
										</svg>
									</div>
									<div className="offer-content">
										<h4>Full Off-Grid</h4>
										<p>Advanced systems including cooling and backup generators for remote utility independence.</p>
									</div>
								</div>
							</div>
						</div>
						{/* start progress bar */}
						<div className="process-ber-plugin">
							<span className="process-bar">Project Reliability</span>
							<div id="bar1" className="barfiller">
								<div className="tipWrap" style={{ display: 'inline' }}>
									<span className="tip" style={{ left: '100.254px', transition: 'left 7s ease-in-out 0s' }}>98%</span>
								</div>
								<span className="fill" data-percentage="98" style={{ background: 'rgb(22, 181, 151)', width: '100.076px', transition: 'width 7s ease-in-out 0s' }}></span>
							</div>  
							<span className="process-bar">Grid Efficiency</span>
							<div id="bar2" className="barfiller">
								<div className="tipWrap" style={{ display: 'inline' }}>
									<span className="tip" style={{ left: '100.294px', transition: 'left 7s ease-in-out 0s' }}>95%</span>
								</div>
								<span className="fill my-class" data-percentage="95" style={{ background: 'rgb(22, 181, 151)', width: '100.117px', transition: 'width 7s ease-in-out 0s' }}></span>
							</div>
						</div>
						{/* end progress bar */}
					</div>
					<div className="col-lg-5 col-md-12">
						<div className="offer-thumb ">
							<img src="assets/images/resource/offer-thumb.png" alt=""  loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Offer  Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Team  Section */}
		{/*==================================================*/}
		<div id="team" className="team-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center ">
							<div className="section-sub-title">
								<h4>Our Team Members</h4>
							</div>
							<div className="section-main-title ">
								<h2>Meet Experience Team</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{[
						{ img: 'team1.png', name: 'John L. Huggins', role: 'Executive Vice President' },
						{ img: 'team2.png', name: 'Preetam Bagalkotkar', role: 'Technical Director' },
						{ img: 'team3.png', name: 'Hermon Wooden', role: 'Operations Manager' },
						{ img: 'team4.png', name: 'Jasson Roy', role: 'Chief Engineer' },
					].map((member) => (
						<div className="col-lg-3 col-md-6" key={member.name}>
							<div className="team-items-box">
								<div className="team-thumb">
									<img src={`assets/images/team/${member.img}`} alt="" loading="lazy" />
									<div className="team-icon">
										<ul>
											<li><Link to="/contact"><i className="fab fa-facebook-f"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-twitter"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-vimeo-v"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-instagram"></i></Link></li>
										</ul>
									</div>
									<div className="team-main-icon">
										<Link to="/contact"><i className="bi bi-plus"></i></Link>
									</div>
									<div className="team-content">
										<h4><Link to="/contact">{member.name}</Link></h4>
										<span>{member.role}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Team  Section */}
		{/*==================================================*/}

		{/*==================================================*/}
		{/* Start Solar Panel  Appointment  Section */}
		{/*==================================================*/}
		<div className="appointment-section">
			<div className="container">
				<div className="row appointment">
					<div className="col-lg-7 col-md-6">
						<div className="section-title ">
							<div className="section-sub-title offer appointment">
								<h4>Make an Appointment</h4>
							</div>
							<div className="section-main-title offer ">
								<h2>Accelerating Growth</h2>  
								<h2>And Success</h2>
							</div>
						</div>
						<div className="choose-us-info ">
							<div className="choose-us-icon appointment">
								<i className="bi bi-telephone-plus"></i>
							</div>
							<div className="choose-us-phone">
								<h5>Emergency Call <span>+232 33 448 065</span></h5>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-6">
						<div className="choose-contact-box appointment ">
							<form action="https://formspree.io/f/myyleorq" method="POST" id="appt-form">
								<div className="row">
									<div className="col-lg-12">
										<div className="form-box appointment">
											<input type="text" name="name" placeholder="Your Name" />
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box appointment">
											<input type="text" name="email" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box-button appointment">
											<button type="Submit">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
							<div id="appt-status"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Appointment  Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Industries We Serve Section */}
		{/*==================================================*/}
		<div id="industries" className="service-section style-three" style={{ backgroundColor: '#f8f9fa', padding: '100px 0' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title">
								<h4>Industries We Serve</h4>
							</div>
							<div className="section-main-title">
								<h2>Powering Growth Across Sectors</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					{[
						{ title: "Healthcare", desc: "Providing mission-critical backup power and energy independence to ensure life-saving medical equipment operates without interruption.", icon: "bi-hospital" },
						{ title: "Education", desc: "Reducing operational costs for schools and universities with high-efficiency solar campuses, enabling more funds for student success.", icon: "bi-book" },
						{ title: "Government", desc: "Supporting energy security and infrastructure stability with reliable, large-scale renewable projects tailored for public utility needs.", icon: "bi-building-gov-house" },
						{ title: "Finance", desc: "Optimizing ROI through predictable energy overheads and long-term asset management of renewable energy portfolios.", icon: "bi-bank" }
					].map((industry, i) => (
						<div className="col-lg-3 col-md-6" key={i}>
							<div className="service-box style-two" style={{ padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', height: '100%' }}>
								<div className="industry-icon mb-3" style={{ fontSize: '40px', color: '#fba500' }}>
									<i className={`bi ${industry.icon}`}></i>
								</div>
								<h4>{industry.title}</h4>
								<p style={{ fontSize: '14px' }}>{industry.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* Start Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 


		{/*==================================================*/}
		{/* Start Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 
		<div className="subscribe-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="section-title ">
							<div className="section-main-title Subscribe">
								<h2>Subscribe For The </h2>
								<h2>Exclusive</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<form action="https://formspree.io/f/myyleorq" method="POST" id="contact-form">
							<div className="form-box Subscribe ">
								<input type="text" name="email" placeholder="Your Email Address..." />
								<button type="submit" className="icons">
									<i className="bi bi-send"></i>
								</button>
							</div>
							<div className="checkbox-box">
								<input type="checkbox" id="reviewcheck" name="reviewcheck" />
								<label htmlFor="reviewcheck"> I agree to the <Link to="/contact">Privacy Policy</Link></label>
							</div>
						</form>
						<div id="status"></div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 
		</>
	);
}

export default Home;
