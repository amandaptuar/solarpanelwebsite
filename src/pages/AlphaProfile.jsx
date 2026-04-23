import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function AlphaProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Alpha Profile page:", err);
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
					src="/img/teammate.jpeg" 
					alt="Alpha Karmoh Mohamed Lavalie" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Trade & Investment Envoy</div>
					<h1 className="profile-name">Alpha Karmoh Mohamed Lavalie</h1>
					<h2 className="profile-title">Strategic Partner & Trade Envoy</h2>
					
					<p className="profile-text">
						Alpha Karmoh Mohamed Lavalie is a seasoned trade, investment, and business development executive from Sierra Leone, bringing a diverse portfolio of experience across government, private sector leadership, tax advisory, logistics, and international investment promotion. He has a proven track record of driving cross-border partnerships, facilitating trade, and positioning emerging markets for sustainable growth.
					</p>

					<div className="profile-list-section">
						<h4>Current Role</h4>
						<p className="profile-text">
							Alpha currently serves as a Trade Envoy for the Government of Sierra Leone, where he plays a pivotal role in advancing the country’s trade and investment agenda. In this capacity, he actively promotes Sierra Leone as a competitive and attractive destination for foreign direct investment (FDI), identifies strategic investment opportunities, and collaborates closely with key ministries, departments, and regulatory agencies to strengthen the national business ecosystem.
						</p>

						<h4>Professional Experience</h4>
						<ul>
							<li><strong>Managing Director – MANN SL Ltd.</strong> Successfully led corporate operations, business development strategy, and stakeholder engagement, driving revenue growth and strengthening market positioning.</li>
							<li><strong>Tax Associate – KPMG Sierra Leone</strong> Accumulated over five years of experience in tax advisory, compliance, audits, and regulatory frameworks, supporting both local and international clients.</li>
							<li><strong>Public Sector & Investment Promotion</strong> Extensive involvement in government relations, trade facilitation, and international investment promotion initiatives, contributing to policy alignment and economic development.</li>
						</ul>

						<h4>Core Expertise</h4>
						<ul>
							<li>Government Relations & Trade Facilitation</li>
							<li>Investment Promotion & Strategic Partnerships</li>
							<li>Stakeholder Engagement & Negotiation</li>
							<li>Market Expansion in Sierra Leone & International Growth Markets</li>
						</ul>

						<h4>Education & Leadership</h4>
						<ul>
							<li><strong>Master’s Degree in Development Management</strong> Institute of Public Administration and Management (IPAM), University of Sierra Leone</li>
							<li><strong>Bachelor of Arts (Hons.) in Political Science</strong> Fourah Bay College, University of Sierra Leone</li>
						</ul>

						<h4>Leadership Achievement</h4>
						<p className="profile-text">
							Instrumental in establishing the first Confucius Institute at Fourah Bay College in 2011, fostering international academic collaboration and cultural exchange.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default AlphaProfile;
