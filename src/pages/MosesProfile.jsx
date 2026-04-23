import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MosesProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Moses Profile page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1>Team Profile</h1>
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
				color: #fba500;
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
			.profile-list-section h4 {
				font-size: 20px;
				font-weight: 700;
				margin-top: 30px;
				margin-bottom: 15px;
				color: #111827;
			}
			.profile-list-section ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			.profile-list-section ul li {
				position: relative;
				padding-left: 25px;
				margin-bottom: 10px;
				font-size: 16px;
				color: #374151;
			}
			.profile-list-section ul li::before {
				content: '✓';
				position: absolute;
				left: 0;
				color: #fba500;
				font-weight: bold;
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
					src="/img/teammate5.png" 
					alt="Moses P. Sawyerr" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Power Operations & Infrastructure</div>
					<h1 className="profile-name">Moses P. Sawyerr</h1>
					<h2 className="profile-title">Director, Power Operations</h2>
					
					<p className="profile-text">
						Moses P. Sawyerr is a seasoned energy infrastructure and power operations executive with over 15 years of leadership experience in power generation, industrial energy systems, and renewable energy integration. He is recognized for delivering high-performance energy solutions in complex, mission-critical environments where reliability, efficiency, and scalability are essential.
					</p>

					<div className="profile-list-section">
						<h4>Core Expertise</h4>
						<ul>
							<li>Power Generation & Industrial Energy Systems</li>
							<li>High-Voltage Distribution Networks (up to 48kV)</li>
							<li>Renewable Energy Integration (Solar PV & BESS)</li>
							<li>Operational Reliability & Performance Optimization</li>
							<li>EPC Coordination & Vendor Management</li>
						</ul>

						<h4>Professional Experience</h4>
						<p className="profile-text">
							Mr. Sawyerr has successfully led and managed complex energy operations, including:
						</p>
						<ul>
							<li>Oversight of 28MW base-load power generation systems, ensuring consistent and reliable energy supply in demanding industrial environments</li>
							<li>Leadership support on 40MW+ renewable energy programs, integrating Solar PV and Battery Energy Storage Systems (BESS) into existing power infrastructure</li>
							<li>Coordination with EPC contractors and vendors to ensure seamless project execution, compliance, and operational readiness</li>
						</ul>

						<h4>Leadership Approach</h4>
						<p className="profile-text">
							Known for his results-driven leadership style, Mr. Sawyerr emphasizes operational discipline, data-driven decision-making, and cross-functional collaboration to enhance system performance and long-term asset value.
						</p>

						<h4>Vision</h4>
						<p className="profile-text">
							He is committed to advancing the global energy transition by bridging traditional power systems with modern renewable technologies—delivering sustainable, efficient, and future-ready energy solutions that support economic growth and infrastructure resilience.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default MosesProfile;
