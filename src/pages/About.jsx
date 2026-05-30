import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on About page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	// Set dynamic SEO Meta Tags for About Page
	useEffect(() => {
		document.title = "TechOps Global | Solar, Wind & Energy Storage Solutions USA";

		const setMetaTag = (attrName, attrValue, content) => {
			let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(attrName, attrValue);
				document.head.appendChild(element);
			}
			element.setAttribute('content', content);
		};

		setMetaTag('name', 'title', 'TechOps Global | Solar, Wind & Energy Storage Solutions USA');
		setMetaTag('name', 'description', 'TechOps Global provides renewable energy, solar power, wind systems, battery storage, and industrial infrastructure solutions across the USA and global markets.');
		setMetaTag('name', 'keywords', 'TechOps Global about, clean energy solutions company, renewable energy development, industrial power solutions, solar energy USA');
		setMetaTag('name', 'robots', 'index, follow');
		setMetaTag('http-equiv', 'Content-Type', 'text/html; charset=utf-8');
		setMetaTag('name', 'language', 'English');
	}, []);


	return (
		<>
		{/*==================================================*/}
		{/* Breadcrumb / Page Title Banner */}
		{/*==================================================*/}
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/multigeneration-family-walking-on-field-on-wind-fa-2026-01-05-22-45-03-utc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1>About Us</h1>
							</div>
							<div className="bratcome-text">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>About Us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Breadcrumb */}
		{/*==================================================*/}

		{/*==================================================*/}
		{/* Start Solar Panel  About Section */}
		{/*==================================================*/}
		<div className="about-section style-three">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-thumb">
							<img src="assets/images/about/about-thumb.jpg" alt="" loading="lazy" />
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
									<img src="assets/images/about/about-shape.png" alt="" loading="lazy" />
								</div>
								<div className="about-number-two">
									<h4 className="counter">2900</h4>
									<span>+</span>
									<h5>Satisfied Clients</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="about-section-title">
							<div className="about-section-sub-title">
								<h4>About TechOps Global</h4>
							</div>
							<div className="about-section-main-title">
								<h2>Powering the Future Through Smart Energy Solutions</h2>
							</div>
						</div>
						{/* tab */}
						<div className="tab">
							<ul className="tabs active">
								<li className="current"><Link to="/contact">About Us <i className="bi bi-arrow-up-right"></i></Link></li>
								<li className=""><Link to="/contact">Mission <i className="bi bi-arrow-up-right"></i></Link></li>
								<li className=""><Link to="/contact">Vision <i className="bi bi-arrow-up-right"></i></Link></li>
							</ul>
							<div className="tab_content">
								<div className="tabs_item">
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>TechOps Global is a forward-thinking energy solutions company committed to building reliable and sustainable power systems for businesses, communities, and governments. We specialize in renewable energy development, industrial operations, engineering support, and advanced infrastructure solutions across domestic and international markets.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Universal Access to Energy</li>
														<li><i className="bi bi-chevron-double-right"></i> Reduced Fuel Dependence</li>
														<li><i className="bi bi-chevron-double-right"></i> Lower Energy Costs</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Dedicated Support </li>
														<li><i className="bi bi-chevron-double-right"></i> Board Composition</li>
														<li><i className="bi bi-chevron-double-right"></i> Board Committees</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/services">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="tabs_item" style={{ display: 'none' }}>
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>Our mission is to help organizations transition toward cleaner, smarter, and more efficient energy systems. We combine technical excellence with strategic execution to deliver measurable results and long-term value for our partners and the communities we serve.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Resource Assessment</li>
														<li><i className="bi bi-chevron-double-right"></i> Efficient Engineering</li>
														<li><i className="bi bi-chevron-double-right"></i> Strong Collaborations</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Power Evacuation</li>
														<li><i className="bi bi-chevron-double-right"></i> Land Procurement</li>
														<li><i className="bi bi-chevron-double-right"></i> Utility Liaisoning</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/services">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>
								</div>
								<div className="tabs_item" style={{ display: 'none' }}>
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>We aim to be the global leader in sustainable energy infrastructure, driving innovation and efficiency in every project we deliver. Our vision is a world powered by reliable, clean energy for a sustainable tomorrow.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Financial Feasibility</li>
														<li><i className="bi bi-chevron-double-right"></i> PPA Negotiations</li>
														<li><i className="bi bi-chevron-double-right"></i> O&M Design Integration</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> SCADA Monitoring</li>
														<li><i className="bi bi-chevron-double-right"></i> Remote Access</li>
														<li><i className="bi bi-chevron-double-right"></i> Predictive Maintenance</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/services">Our Service <i className="bi bi-arrow-right"></i></Link>
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
		<div className="service-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title">
								<h4>Our Core Services</h4>
							</div>
							<div className="section-main-title">
								<h2>Comprehensive Solar Solutions</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{/* Solar Panels Services */}
					<div className="col-lg-4 col-md-6">
						<div className="service-box">
							<div className="service-thumb">
								<img src="assets/images/resource/service1.png" alt="" loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">Commercial Solar</Link></h4>
										<p>Large-scale solar integration for industrial campuses, utility farms, and corporate infrastructure.</p>
										<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Roof Solar Panels */}
					<div className="col-lg-4 col-md-6">
						<div className="service-box">
							<div className="service-thumb">
								<img src="assets/images/resource/service2.png" alt="" loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">Off-Grid Systems</Link></h4>
										<p>Specialized standalone energy systems for remote facilities without access to the national grid.</p>
										<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Commercial Roofing */}
					<div className="col-lg-4 col-md-6">
						<div className="service-box">
							<div className="service-thumb">
								<img src="assets/images/resource/service3.png" alt="" loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">Energy Storage</Link></h4>
										<p>Industrial battery energy storage systems (BESS) for peak shaving and emergency backup power.</p>
										<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
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
		<div className="contact-us-section">
			<div className="container">
				<div className="row contact-us align-items-center">
					<div className="col-lg-2"></div>
					<div className="col-lg-7 col-md-6">
						<div className="section-title">
							<div className="section-main-title contact-us">
								<h2>How We Create Solar Energy</h2>
							</div>
						</div>
						<div className="contact-us-discription">
							<p>Building &amp; Maintaining Sustainable Energy Systems</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="solar-btn contact-us">
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
		{/* Start Solar Panel  Team  Section */}
		{/*==================================================*/}
		<div className="team-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title">
								<h4>Our Team</h4>
							</div>
							<div className="section-main-title ">
								<h2>Meet Our Experienced Team</h2>
							</div>
							<div className="team-discription mt-3">
								<p>Our leadership team brings decades of expertise in power generation, engineering, renewable energy, infrastructure development, and industrial operations. We combine technical excellence with strategic execution to deliver measurable results.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{[
						{ img: 'john-huggins.jpeg', name: 'John L. Huggins', role: 'Executive Vice President', path: 'team', profileLink: '/john-huggins' },
						{ img: 'teammate.jpeg', name: 'Alpha Karmoh Mohamed Lavalie', role: 'Strategic Partner & Trade Envoy', path: 'img', profileLink: '/alpha-lavalie' },
						{ img: 'teammate2.png', name: 'Dr. Paul Charles Saffa', role: 'Director & Energy Policy Expert', path: 'img', profileLink: '/paul-saffa' },
						{ img: 'teammate3.png', name: 'Ahmed Jumui Sumoi Fomba', role: 'Electrical Engineer & Power Systems Specialist', path: 'img', profileLink: '/ahmed-fomba' },
						{ img: 'teammate4.jpeg', name: 'Preetam Bagalkotkar', role: 'Chief Operations Officer', path: 'img', profileLink: '/preetam-bagalkotkar' },
						{ img: 'teammate5.png', name: 'Moses P. Sawyerr', role: 'Director, Power Operations', path: 'img', profileLink: '/moses-sawyerr' },
						{ img: 'teammate6.png', name: 'Robin Fola Mansaray', role: 'Renewable Energy Specialist & Policy Advisor', path: 'img', profileLink: '/robin-mansaray' },
					].map((member) => (
						<div className="col-lg-3 col-md-6" key={member.name}>
							<div className="team-items-box">
								<div className="team-thumb">
									<img src={member.path === 'img' ? `/img/${member.img}` : `assets/images/team/${member.img}`} alt={member.name} style={{ width: '100%', height: '350px', objectFit: 'cover', objectPosition: 'top' }} loading="lazy" />
									<div className="team-icon">
										<ul>
											<li><Link to="/contact"><i className="fab fa-facebook-f"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-twitter"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-vimeo-v"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-instagram"></i></Link></li>
										</ul>
									</div>

									<div className="team-content">
										<h4><Link to={member.profileLink || "/contact"}>{member.name}</Link></h4>
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
						{ title: "Government", desc: "Supporting energy security and infrastructure stability with reliable, large-scale renewable projects tailored for public utility needs.", icon: "bi-bank2" },
						{ title: "Finance", desc: "Optimizing ROI through predictable energy overheads and long-term asset management of renewable energy portfolios.", icon: "bi-currency-dollar" }
					].map((industry, i) => (
						<div className="col-lg-3 col-md-6" key={i}>
							<div className="service-box style-two text-center" style={{ padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', height: '100%' }}>
								<div className="industry-icon mb-3" style={{ fontSize: '32px', color: '#fba500' }}>
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
		{/* End Industries We Serve Section */}
		{/*==================================================*/}
		{/*==================================================*/}
		{/* Start Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 
		<div className="subscribe-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="section-title">
							<div className="section-main-title Subscribe">
								<h2>Subscribe For </h2>
								<h2>Exclusive Updates</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="about-subscribe-form">
							<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
							<input type="hidden" name="_subject" value="New Newsletter Subscription From Techops Global" />
							<div className="form-box Subscribe wow animate__slideInRight">
								<input type="text" name="email" placeholder="Your Email Address..." />
								<button type="submit" className="icons">
									<i className="bi bi-send"></i>
								</button>
							</div>
							<div className="checkbox-box">
								<input type="checkbox" id="aboutreviewcheck" name="reviewcheck" />
								<label htmlFor="aboutreviewcheck"> I agree to the <Link to="/contact">Privacy Policy</Link></label>
							</div>
						</form>
						<div id="about-status"></div>
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

export default About;
