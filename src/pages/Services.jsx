import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
	const [formName, setFormName] = useState("");
	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Services page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	// Set dynamic SEO Meta Tags for Services Page
	useEffect(() => {
		document.title = "Techops Global LLC | Best Wind Energy Storage Company in USA | Best Wind Energy Company in Sierra Leone";

		const setMetaTag = (attrName, attrValue, content) => {
			let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(attrName, attrValue);
				document.head.appendChild(element);
			}
			element.setAttribute('content', content);
		};

		setMetaTag('name', 'title', 'Techops Global LLC | Best Wind Energy Storage Company in USA | Best Wind Energy Company in Sierra Leone ');
		setMetaTag('name', 'description', 'TechOps Global delivers advanced solar, wind, and battery energy storage solutions for commercial and industrial projects across the USA. Reliable, scalable, and cost-efficient clean energy systems.');
		setMetaTag('name', 'keywords', 'wind energy company in sierra Leone, wind energy company in USA, battery storage company in sierra Leone,  solar energy company in sierra Leone, solar energy company in Maryland ');
		setMetaTag('name', 'robots', 'index, follow');
		setMetaTag('http-equiv', 'Content-Type', 'text/html; charset=utf-8');
		setMetaTag('name', 'language', 'English');
	}, []);

	return (
		<>
		{/*==================================================*/}
		{/* Start Solar Panel  slider Section */}
		{/*==================================================*/}
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/team-technicians-carrying-photovoltaic-solar-modul-2026-01-09-10-53-57-utc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1>Services</h1>
							</div>
							<div className="bratcome-text">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li> Services</li>
								</ul>
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
		{/* Start Solar Panel  Service Section */}
		{/*==================================================*/}
		<div className="service-section style-two">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title">
								<h4>Our Most Service</h4>
							</div>
							<div className="section-main-title">
								<h2>Provide Solar Solution</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{[
						{ img: "assets/images/resource/service1.png", title: "Commercial Solar Systems", desc: "Tailored Off-grid, Hybrid, and Grid-tie solar solutions designed to meet unique commercial energy needs and reduce environmental impact." },
						{ img: "assets/images/resource/service2.png", title: "Battery Energy Storage", desc: "Emergency backup, peak demand shaving to flatten utility fees, and full off-grid battery systems with environmental cooling." },
						{ img: "assets/images/resource/service3.png", title: "Wind Energy Solutions", desc: "Robust resource assessment validated by the National Institute of Wind Energy (NIWE) with a track record of 100 MW in West Africa." },
						{ img: "assets/images/resource/service1.png", title: "Mining Logistics", desc: "Specialized cargo shipping, ship chartering, and heavy-lift towage of mining floats, dollies, and trailers for large-scale operations." },
						{ img: "assets/images/resource/service2.png", title: "Strategic Prefeasibility", desc: "Expert technical, commercial, and financial feasibility studies to develop optimized concepts and negotiate commercial Power Purchase Agreements (PPA)." },
						{ img: "assets/images/resource/service3.png", title: "O&M / SCADA Systems", desc: "Advanced remote access monitoring and comprehensive lifecycle maintenance for PV plants to ensure peak performance and reliability." },
					].map((service, index) => (
						<div className="col-lg-4 col-md-6" key={index}>
							<div className="service-box style-two">
								<div className="service-thumb">
									<img src={service.img} alt="" />
									<div className="service-content">
										<div className="service-text">
											<h4><Link to="/contact">{service.title}</Link></h4>
											<p>{service.desc}</p>
											<Link to="/contact">Read More <i className="bi bi-arrow-up-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Service Section */}
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
						<div className="section-title">
							<div className="section-sub-title choose">
								<h4>Why Choose Us</h4>
							</div>
							<div className="section-main-title choose">
								<h2>Best Solution For Your</h2>
							</div>
						</div>
						<div className="choose-us-discription">
							<p>Electricity from wind and solar is the fastest growing method of power generation. Since it requires no fuel and does not pollute, it is a sustainable power source that Sierra Leone is uniquely positioned to harness. Our solutions are based on robust resource assessment, efficient engineering and strong collaborations.</p>
						</div>
						<div className="choose-us-content">
							<div className="choose-us-thumb">
								<img src="assets/images/resource/choose-thumb.png" alt="" />
							</div>
							<div className="choose-us-list">
								<ul>
									<li><i className="bi bi-check"></i> 100 MW Wind Power Track Record</li>
									<li><i className="bi bi-check"></i> National Institute Validated Data</li>
									<li><i className="bi bi-check"></i> Power Evacuation & Land Procurement</li>
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
						<div className="choose-contact-box">
							<div className="choose-contact-title">
								<h4>Make an Appointment</h4>
							</div>
							<form action="https://formsubmit.co/amandaptuar@gmail.com" method="POST" id="it-form">
								<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
								<input type="hidden" name="_subject" value={`New Submission By ${formName || 'a User'} From Techops Global`} />
								<div className="row">
									<div className="col-lg-12">
										<div className="form-box">
											<input type="text" name="name" placeholder="Full Name *" onChange={(e) => setFormName(e.target.value)} />
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
											<select name="subject" defaultValue="">
												<option value="" disabled>Select Service *</option>
												<option value="Commercial Solar">Commercial Solar</option>
												<option value="Battery Storage">Battery Storage</option>
												<option value="Wind Energy">Wind Energy</option>
												<option value="Solar Maintenance">Solar Maintenance</option>
												<option value="Energy Audits">Energy Audits</option>
											</select>
											<i className="bi bi-chevron-down" style={{ pointerEvents: 'none' }}></i>
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
		{/* Start Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 
		<div className="subscribe-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="section-title">
							<div className="section-main-title Subscribe">
								<h2>Subscribe For The </h2>
								<h2>Exclusive</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<form action="https://formsubmit.co/amandaptuar@gmail.com" method="POST" id="contact-form">
							<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
							<input type="hidden" name="_subject" value="New Newsletter Subscription From Techops Global" />
							<div className="form-box Subscribe wow animate__slideInRight">
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

export default Services;
