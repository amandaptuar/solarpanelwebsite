import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SaffaProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Saffa Profile page:", err);
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
					src="/img/teammate2.png" 
					alt="Rev. Ing. Dr. Paul Charles Saffa" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Engineering & Executive Leadership</div>
					<h1 className="profile-name">Rev. Ing. Dr. Paul Charles Saffa</h1>
					<h2 className="profile-title">Director & Energy Policy Expert</h2>
					
					<p className="profile-text">
						Rev. Ing. Dr. Paul Charles Saffa is a distinguished engineer, business leader, and clergyman with over 20 years of experience spanning energy, infrastructure development, and strategic leadership. He brings a unique combination of technical expertise, public sector insight, and commercial acumen, with a strong focus on advancing sustainable energy solutions and large-scale infrastructure initiatives across Africa.
					</p>

					<div className="profile-list-section">
						<h4>Professional Summary</h4>
						<p className="profile-text">
							Dr. Saffa has held key leadership roles in both the public and private sectors, including serving as Country Manager for TRANSCO CLSG and Deputy Director at the Ministry of Energy, Sierra Leone. Throughout his career, he has successfully led complex, high-impact projects in cross-border electrification, renewable energy, and national infrastructure development, working closely with international development partners and regional institutions.
						</p>

						<h4>Experience & Expertise</h4>
						<ul>
							<li><strong>Project Leadership</strong> Directed and delivered major cross-border electrification and renewable energy projects, contributing to regional power integration and energy access.</li>
							<li><strong>Government & Energy Policy</strong> Former Deputy Director, Ministry of Energy, with deep expertise in policy formulation, regulatory frameworks, and national energy planning.</li>
							<li><strong>Business Development & Commercial Strategy</strong> Proven track record in driving sales growth, market expansion, and strategic partnerships across the Oil & Gas and Telecommunications sectors.</li>
							<li><strong>Technical & Engineering Excellence</strong> Specialized in Mechanical Engineering, Renewable Energy Systems, and Project Management, with the ability to bridge technical execution and strategic oversight.</li>
						</ul>

						<h4>Education</h4>
						<ul>
							<li>Doctor of Business Administration (DBA)</li>
							<li>Mechanical Engineering</li>
							<li>Renewable Energy & Environment</li>
							<li>Business Administration</li>
						</ul>

						<h4>Core Competencies</h4>
						<ul>
							<li>Energy Policy & Strategic Leadership</li>
							<li>Sustainable Infrastructure Development</li>
							<li>Cross-Border Energy Projects & Regional Integration</li>
							<li>International Collaboration & Stakeholder Engagement</li>
							<li>Commercial Operations & Market Expansion</li>
						</ul>

						<h4>Leadership Philosophy</h4>
						<p className="profile-text">
							Dr. Saffa is committed to driving sustainable development through innovative energy solutions, fostering international partnerships, and strengthening infrastructure systems that support long-term economic growth and energy security.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default SaffaProfile;
