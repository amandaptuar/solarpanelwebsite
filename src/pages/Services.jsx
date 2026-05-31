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
		setMetaTag('name', 'keywords', 'solar energy systems, wind power infrastructure, battery energy storage, industrial power operations, technical consulting, EPC project support');
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
									<li><Link to="/" className="!text-white hover:!text-[#ff7a00]">Home</Link></li>
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
								<h4>Our Solutions</h4>
							</div>
							<div className="section-main-title">
								<h2>Comprehensive Energy & Infrastructure Services</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{[
						{ img: "assets/images/resource/service1.png", title: "1. Solar Energy Systems", desc: "Custom solar power solutions for commercial, industrial, and utility-scale applications." },
						{ img: "assets/images/resource/service2.png", title: "2. Wind Power Infrastructure", desc: "Efficient wind energy systems designed for long-term performance and sustainability." },
						{ img: "assets/images/resource/service3.png", title: "3. Battery Energy Storage", desc: "Advanced storage systems for grid stability, backup power, and energy optimization." },
						{ img: "assets/images/resource/service1.png", title: "4. Industrial Power Operations", desc: "Reliable plant operations, maintenance, and performance management." },
						{ img: "assets/images/resource/service2.png", title: "5. Engineering & Technical Consulting", desc: "Strategic guidance for energy planning, design, compliance, and execution." },
						{ img: "assets/images/resource/service3.png", title: "6. EPC Project Support", desc: "End-to-end engineering, procurement, and construction management solutions." },
					].map((service, index) => (
						<div className="col-lg-4 col-md-6" key={index}>
							<div className="service-box style-two">
								<div className="service-thumb">
									<img src={service.img} alt="" />
									<div className="service-content">
										<div className="service-text">
											<h4><Link to="/contact">{service.title}</Link></h4>
											<p>{service.desc}</p>
											<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
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
		 <div className="call-do-action-section" style={{ height: '450px', backgroundImage: 'url("/assets/images/resource/call-do-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* Background Image restored via CSS class or inline if needed */}
						<div style={{ height: '200px' }}></div>
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
		 <div className="choose-us-section" style={{ marginTop: '-220px', position: 'relative', zIndex: 10 }}>
			<div className="container">
				<div className="row choose" style={{ backgroundImage: 'url("/assets/images/resource/choose-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<div className="col-lg-6 col-md-12">
						<div className="section-title">
							<div className="section-sub-title choose">
								<h4>Why Choose Us</h4>
							</div>
							<div className="section-main-title choose">
								<h2>Powering the Future Through Smart Energy Solutions</h2>
							</div>
						</div>
						<div className="choose-us-discription">
							<p>TechOps Global is a forward-thinking energy solutions company committed to building reliable and sustainable power systems for businesses, communities, and governments. We combine technical excellence with strategic execution to deliver measurable results.</p>
						</div>
						<div className="choose-us-content">
							<div className="choose-us-thumb">
								<img src="assets/images/resource/choose-thumb.png" alt="" />
							</div>
							<div className="choose-us-list">
								<ul>
									<li><i className="bi bi-check"></i> Experienced Industry Leadership</li>
									<li><i className="bi bi-check"></i> Proven Project Delivery</li>
									<li><i className="bi bi-check"></i> Safety & Compliance Focused</li>
									<li><i className="bi bi-check"></i> Innovative Clean Energy Solutions</li>
									<li><i className="bi bi-check"></i> Cost-Efficient Operations</li>
									<li><i className="bi bi-check"></i> Global Expertise with Local Execution</li>
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
							<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="it-form">
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
											<input type="text" name="email" placeholder="Email Address *" />
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
											<textarea name="message" id="massage" cols="30" rows="10" placeholder="Your Message *"></textarea>
											<i className="bi bi-chat-left-text-fill"></i>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box-button">
											<button type="Submit">Schedule Appointment <i className="bi bi-arrow-right"></i></button>
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
								<h2>Subscribe For </h2>
								<h2>Exclusive Updates</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="contact-form">
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
