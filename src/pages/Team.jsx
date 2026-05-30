import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Team.css";
import { teamMembers } from "../data/TeamData";

function Team() {
	const [selectedMember, setSelectedMember] = useState(null);

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

	// Handle body scroll locking when modal is open
	useEffect(() => {
		if (selectedMember) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [selectedMember]);

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
								<h2>Meet Our Experienced Team</h2>
							</div>
							<div className="team-discription mt-3">
								<p>Our leadership team brings decades of expertise in power generation, engineering, renewable energy, infrastructure development, and industrial operations. We combine technical excellence with strategic execution to deliver measurable results.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{teamMembers.map((member, index) => (
						<div className="col-lg-3 col-md-6 mb-4" key={index}>
							<div className="rh-team-card wow animate__slideInUp">
								<div className="rh-team-img-wrapper">
									<div className="rh-team-img-inner">
										<div className="rh-team-img-front">
											<img src={member.img} alt={member.name} className="rh-team-img" />
										</div>
										<div className="rh-team-img-back">
											<div className="rh-quote-content">
												<p className="rh-quote-text">"{member.quote}"</p>
												<span className="rh-quote-author">— {member.name.split(' ')[0]}</span>
											</div>
										</div>
									</div>
								</div>
								<div className="rh-team-info">
									<h4 className="rh-team-name">{member.name}</h4>
									<span className="rh-team-role">{member.role}</span>
									<button onClick={() => setSelectedMember(member)} className="rh-team-btn" style={{ cursor: 'pointer' }}>
										MEET {member.name.split(' ')[0].toUpperCase()} <i className="bi bi-arrow-right"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>

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
						<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="it-form">
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
		{/* Modal Overlay */}
		{/*==================================================*/}
		{selectedMember && (
			<div className={`rh-modal-overlay ${selectedMember ? 'active' : ''}`} onClick={() => setSelectedMember(null)}>
				<div className="rh-modal-container" onClick={e => e.stopPropagation()}>
					<button className="rh-modal-close" onClick={() => setSelectedMember(null)}>
						<i className="bi bi-x-lg"></i>
					</button>
					<div className="rh-modal-grid">
						<div className="rh-modal-left">
							<img src={selectedMember.img} alt={selectedMember.name} />
						</div>
						<div className="rh-modal-right">
							<div className="rh-modal-header">
								<h2>{selectedMember.name}</h2>
								<h3>{selectedMember.role}</h3>
							</div>
							<div className="rh-modal-body">
								{selectedMember.bio}
							</div>
						</div>
					</div>
					<div className="rh-modal-footer">
						<div className="rh-modal-footer-title">
							By The Numbers:
						</div>
						<div className="rh-modal-footer-stats">
							<div className="rh-stat">
								<strong>85°</strong>
								<span>ideal outdoor<br/>temperature</span>
							</div>
							<div className="rh-stat">
								<strong>30+</strong>
								<span>years of<br/>experience</span>
							</div>
							<div className="rh-stat">
								<strong>6</strong>
								<span>cups of coffee<br/>per day</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)}
		</>
	);
}

export default Team;
