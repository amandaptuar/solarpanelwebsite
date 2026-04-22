import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Contact page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);


	return (
		<>
		{/*==================================================*/}
		{/* Breadcrumb / Page Title Banner */}
		{/*==================================================*/}
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/business-solution-2026-03-10-02-05-05-utc.JPG")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1>Contact Us</h1>
							</div>
							<div className="bratcome-text">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>Contact Us</li>
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
		{/* Start Solar Panel  Contact Us Section */}
		{/*==================================================*/}
		<div className="contact-section">
			<div className="container">
				<div className="row">
					{/* Left — Info */}
					<div className="col-lg-6 col-md-12">
						<div className="contact-title">
							<div className="contact-sub-title">
								<h4>Contact With Us</h4>
							</div>
							<div className="contact-main-title">
								<h2>Get In Touch!</h2>
							</div>
							<div className="contact-discription">
								<p>Reach out to us to learn how we can power your growth with sustainable energy solutions.</p>
							</div>
						</div>

						<div className="contact-box-item">
							<div className="contact-icon">
								<i className="bi bi-geo-alt-fill"></i>
							</div>
							<div className="contact-adress">
								<h5>USA Office</h5>
								<span>7454 Old Alexandria Ferry Road, Clinton, MD 20744</span>
							</div>
						</div>

						<div className="contact-box-item">
							<div className="contact-icon">
								<i className="bi bi-geo-alt-fill"></i>
							</div>
							<div className="contact-adress">
								<h5>Sierra Leone Office</h5>
								<span>2 Taylor Lewis Drive, Juba Hill, Freetown, Sierra Leone</span>
							</div>
						</div>

						<div className="contact-box-item">
							<div className="contact-icon">
								<i className="bi bi-phone-flip"></i>
							</div>
							<div className="contact-adress">
								<h5>Call Us Today</h5>
								<span>USA: +1 (240) 351-3209 | SL: +232 33 448 065</span>
							</div>
						</div>

						<div className="contact-box-item">
							<div className="contact-icon">
								<i className="bi bi-envelope"></i>
							</div>
							<div className="contact-adress">
								<h5>Email Us</h5>
								<span>info@techops-global.com</span>
							</div>
						</div>
					</div>

					{/* Right — Form */}
					<div className="col-lg-6 col-md-12">
						<div className="choose-contact-box contact-inner">
							<form action="https://formsubmit.co/atul@techops-global.com" method="POST" id="contact-page-form">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="form-box contact-inner">
											<input type="text" name="name" placeholder="Full Name*" />
											<i className="bi bi-person"></i>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="form-box contact-inner">
											<input type="text" name="email" placeholder="Email Address*" />
											<i className="bi bi-envelope"></i>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box contact-inner">
											<input type="text" name="phone" placeholder="Phone Number*" />
											<i className="bi bi-phone-flip"></i>
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
									<div className="col-lg-12">
										<div className="form-box contact-inner">
											<input type="text" name="company" placeholder="Your Company Name*" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box contact-inner">
											<textarea name="massage" id="contact-massage" cols="30" rows="10" placeholder="Write your question here*"></textarea>
											<i className="bi bi-chat-left-text-fill"></i>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box-button contact-inner">
											<button type="submit">Send Messages</button>
										</div>
									</div>
								</div>
							</form>
							<div id="contact-page-status"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Contact Us Section */}
		{/*==================================================*/}

		{/*==================================================*/}
		{/* Start Solar Panel  Map  Section */}
		{/*==================================================*/}
		<div className="map-area">
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126435.0392815152!2d-13.2458428172!3d8.484444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf048ecbc0000000%3A0x0!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2ssl!4v1635150422284!5m2!1sen!2ssl"
							width="100%"
							height="500"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="Contact Map"
						></iframe>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Map  Section */}
		{/*==================================================*/}
		</>
	);
}

export default Contact;
