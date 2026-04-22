import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Team() {
	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Team page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const teamMembers = [
		{ name: "Dr. Francis St. Holder, PhD", role: "President & Managing Director", img: "/img/founder-profile.jpg", isFounder: true },
	];

	return (
		<>
		{/*==================================================*/}
		{/* Start Solar Panel  slider Section */}
		{/*==================================================*/}
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/low-angle-shot-of-a-group-of-businesspeople-joinin-2026-01-09-09-45-09-utc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1> Our Team</h1>
							</div>
							<div className="bratcome-text">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>  Our Team</li>
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
		{/* Start Solar Panel  Team  Section */}
		{/*==================================================*/}
		<div className="team-section style-two">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center wow animate__slideInUp">
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
					{teamMembers.map((member, index) => (
						<div className="col-lg-3 col-md-6" key={index}>
							<div className="team-items-box">
								<div className="team-thumb wow animate__slideInDown">
									<img src={member.img} alt={member.name} />
									<div className="team-icon">
										<ul>
											<li><Link to="/contact"><i className="fab fa-facebook-f"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-twitter"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-vimeo-v"></i></Link></li>
											<li><Link to="/contact"><i className="fab fa-instagram"></i></Link></li>
										</ul>
									</div>
									<div className="team-content">
										<h4><Link to={member.isFounder ? "/founder" : "/contact"}>{member.name}</Link></h4>
										<span>{member.role}</span>
										{member.isFounder && (
											<div className="mt-2">
												<Link to="/founder" style={{ color: '#fba500', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>Founder Profile <i className="bi bi-arrow-right"></i></Link>
											</div>
										)}
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
						<form action="https://formsubmit.co/atul@techops-global.com" method="POST" id="it-form">
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

export default Team;
