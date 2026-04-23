import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function AhmedProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Ahmed Profile page:", err);
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
					src="/img/teammate3.png" 
					alt="Ahmed Jumui Sumoi Fomba" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Electrical Engineering & Power Systems</div>
					<h1 className="profile-name">Ahmed Jumui Sumoi Fomba</h1>
					<h2 className="profile-title">Electrical Engineer & Power Systems Specialist</h2>
					
					<p className="profile-text">
						Ahmed Jumui Sumoi Fomba is a highly skilled Electrical Engineer with over 10 years of experience in the power sector, specializing in power systems, grid interconnections, and renewable energy.
					</p>

					<div className="profile-list-section">
						<h4>Contact Information</h4>
						<ul>
							<li><strong>Location:</strong> Columbus, Ohio, USA</li>
							<li><strong>Phone:</strong> 906-299-2282</li>
							<li><strong>Email:</strong> fombasl82@gmail.com</li>
						</ul>

						<h4>Expertise</h4>
						<ul>
							<li>Power Systems & Grid Interconnections</li>
							<li>Renewable Energy (Solar & BESS)</li>
							<li>Project & Construction Management</li>
							<li>Electrical Grid Design</li>
							<li>Data Analysis & Technical Problem Solving</li>
						</ul>

						<h4>Professional Experience</h4>
						<ul>
							<li><strong>Project Lead (2020–2024):</strong> Led transmission & distribution projects for large-scale grid infrastructure (225kV, 66kV, 33kV).</li>
							<li><strong>Planning Engineer (2015–2020):</strong> Designed substations and transmission systems, reducing operational costs by 20%.</li>
							<li><strong>Freelance Consultant:</strong> Currently focusing on power system studies and utility project development.</li>
						</ul>
						
						<h4>Education</h4>
						<ul>
							<li>Master’s in Engineering Management – Michigan Technological University (2025)</li>
							<li>Master’s in Electrical Engineering – Universitas Diponegoro (2019)</li>
							<li>Bachelor’s in Electrical & Electronic Engineering – University of Sierra Leone</li>
						</ul>
						
						<h4>Certifications</h4>
						<ul>
							<li>Substation Design & Construction (2025)</li>
							<li>Renewable Energy Grid Integration (2022)</li>
							<li>Solar PV Design & Installation (2021)</li>
						</ul>

						<h4>Tools & Technologies</h4>
						<p className="profile-text">
							Proficient in ETAP, PVsyst, AutoCAD, Microsoft Project, MATLAB / Simulink, and Primavera P6.
						</p>

						<h4>Memberships</h4>
						<ul>
							<li>Member of the National Society of Black Engineers</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default AhmedProfile;
