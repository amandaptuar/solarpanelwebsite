import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function FounderProfile() {
	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Founder Profile page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
		{/*==================================================*/}
		{/* Start Solar Panel  slider Section */}
		{/*==================================================*/}
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1>Founder Profile</h1>
							</div>
							<div className="bratcome-text">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/team">Team</Link></li>
									<li> Profile</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/*==================================================*/}
		{/* Profile Content Section */}
		{/*==================================================*/}
		<style>
			{`
			.profile-container {
				max-width: 1200px;
				margin: 100px auto;
				padding: 0 32px;
			}
			.profile-card {
				display: grid;
				grid-template-columns: 400px 1fr;
				gap: 50px;
				background: #ffffff;
				border-radius: 24px;
				overflow: hidden;
				box-shadow: 0 30px 70px rgba(0,0,0,0.08);
				transition: transform 0.3s ease;
			}
			.profile-card:hover {
				transform: translateY(-5px);
			}
			.profile-photo {
				width: 100%;
				height: 100%;
				min-height: 550px;
				object-fit: cover;
				object-position: center top;
				display: block;
				background: #f8f9fa;
			}
			.profile-bio {
				padding: 50px 50px 50px 0;
			}
			.profile-eyebrow {
				text-transform: uppercase;
				letter-spacing: .15em;
				font-size: 14px;
				font-weight: 700;
				color: #fba500; /* Solar Theme Orange */
				margin-bottom: 12px;
			}
			.profile-name {
				font-size: 42px;
				line-height: 1.1;
				margin: 0 0 10px;
				color: #111827;
				font-weight: 800;
			}
			.profile-title {
				font-size: 20px;
				font-weight: 600;
				color: #4b5563;
				margin: 0 0 30px;
			}
			.profile-text {
				font-size: 17px;
				color: #374151;
				line-height: 1.7;
				margin-bottom: 20px;
			}
			.profile-focus {
				margin-top: 35px;
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 12px;
			}
			.profile-tag {
				padding: 12px 20px;
				border-radius: 12px;
				background: #fff8eb; /* Very light orange */
				border: 1px solid #fee2b3;
				font-size: 15px;
				font-weight: 600;
				color: #b45309;
				text-align: center;
			}
			@media (max-width: 991px) {
				.profile-card {
					grid-template-columns: 1fr;
				}
				.profile-bio {
					padding: 40px;
				}
				.profile-photo {
					min-height: 400px;
				}
				.profile-name {
					font-size: 34px;
				}
			}
			`}
		</style>

		<div className="profile-container">
			<div className="profile-card">
				<img 
					className="profile-photo" 
					src="/img/newfounder.jpeg" 
					alt="Dr. Francis St. Holder, PhD" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Executive Leadership</div>
					<h1 className="profile-name">Dr. Francis St. Holder, PhD</h1>
					<h2 className="profile-title">President & Managing Director</h2>
					
					<p className="profile-text">
						<strong>Dr. Francis St. Holder is the President & Managing Director of TechOps Global, an international project development, technology, cybersecurity, energy, and infrastructure firm.</strong>
					</p>
					<p className="profile-text">
						He leads the company’s strategic growth across renewable energy, ICT systems, critical infrastructure, smart security platforms, government technology, and private-sector transformation initiatives.
					</p>
					<p className="profile-text">
						With a background spanning executive leadership, engineering, cybersecurity, operations management, telecommunications, and project development, Dr. Holder brings a multidisciplinary approach to solving complex infrastructure and technology challenges. His work focuses on designing bankable, scalable, and mission-ready solutions for governments, utilities, mining operators, enterprise clients, and international development partners.
					</p>
					<p className="profile-text">
						At TechOps Global, Dr. Holder oversees strategic partnerships, business development, technical delivery, stakeholder engagement, and project structuring. His current focus includes utility-scale solar and battery energy storage systems, AI-enabled infrastructure, cybersecurity and digital resilience, weapons and asset tracking technologies, data center development, and integrated security operations.
					</p>
					
					<div className="profile-focus">
						<div className="profile-tag">Renewable Energy & BESS</div>
						<div className="profile-tag">Cybersecurity & ICT</div>
						<div className="profile-tag">GovTech & Smart Security</div>
						<div className="profile-tag">Critical Infrastructure</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default FounderProfile;
