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
						Rev. Ing. Dr. Paul Charles Saffa is an accomplished engineer, business executive, and clergyman with over two decades of experience in energy, infrastructure, and leadership.
					</p>

					<div className="profile-list-section">
						<h4>Professional Summary</h4>
						<p className="profile-text">
							His career spans senior roles as Country Manager for TRANSCO CLSG and Deputy Director in Sierra Leone’s Ministry of Energy, where he has led major cross-border electrification, renewable energy, and infrastructure projects in collaboration with international partners.
						</p>

						<h4>Experience & Expertise</h4>
						<ul>
							<li><strong>Project Leadership:</strong> Led major cross-border electrification and renewable energy projects.</li>
							<li><strong>Government & Policy:</strong> Former Deputy Director in Sierra Leone’s Ministry of Energy with expertise in energy policy and infrastructure.</li>
							<li><strong>Business Development:</strong> Extensive experience in sales and market expansion within Oil & Gas and Telecommunications sectors.</li>
							<li><strong>Technical Proficiency:</strong> Specializes in mechanical engineering, renewable energy, and project management.</li>
						</ul>
						
						<h4>Education</h4>
						<ul>
							<li>Doctor of Business Administration (DBA)</li>
							<li>Mechanical Engineering</li>
							<li>Renewable Energy & Environment</li>
							<li>Business Administration</li>
						</ul>
						
						<h4>Core Values</h4>
						<ul>
							<li>Strategic Leadership in Energy Policy</li>
							<li>Sustainable Infrastructure Development</li>
							<li>International Collaboration & Partnerships</li>
							<li>Commercial Operations & Market Growth</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default SaffaProfile;
