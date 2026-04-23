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
						Ahmed Jumui Sumoi Fomba is a highly accomplished Electrical Engineer with over a decade of experience in the power and energy sector, specializing in power systems engineering, grid interconnections, and renewable energy integration. He combines strong technical expertise with practical project leadership, contributing to the design, development, and optimization of large-scale electrical infrastructure.
					</p>

					<div className="profile-list-section">
						<h4>Professional Summary</h4>
						<p className="profile-text">
							Ahmed has a proven track record in delivering complex transmission and distribution projects, with hands-on experience across grid design, substation engineering, and renewable energy systems. His work focuses on enhancing grid reliability, improving operational efficiency, and supporting the transition toward sustainable energy solutions.
						</p>

						<h4>Core Expertise</h4>
						<ul>
							<li>Power Systems Engineering & Grid Interconnections</li>
							<li>Renewable Energy Integration (Solar PV & Battery Energy Storage Systems – BESS)</li>
							<li>Electrical Grid & Substation Design</li>
							<li>Project & Construction Management</li>
							<li>Data Analysis & Technical Problem Solving</li>
						</ul>

						<h4>Professional Experience</h4>
						<ul>
							<li><strong>Project Lead (2020–2024):</strong> Led the execution of large-scale transmission and distribution projects, including 225kV, 66kV, and 33kV infrastructure, ensuring timely delivery, compliance, and operational efficiency.</li>
							<li><strong>Planning Engineer (2015–2020):</strong> Designed and optimized substations and transmission systems, achieving a 20% reduction in operational costs through improved system planning and engineering efficiency.</li>
							<li><strong>Freelance Consultant (Current):</strong> Provides specialized consulting in power system studies, grid optimization, and utility-scale project development, supporting clients in both conventional and renewable energy sectors.</li>
						</ul>

						<h4>Education</h4>
						<ul>
							<li><strong>Master’s in Engineering Management:</strong> Michigan Technological University, USA (2025)</li>
							<li><strong>Master’s in Electrical Engineering:</strong> Universitas Diponegoro, Indonesia (2019)</li>
							<li><strong>Bachelor’s in Electrical & Electronic Engineering:</strong> University of Sierra Leone</li>
						</ul>

						<h4>Certifications</h4>
						<ul>
							<li>Substation Design & Construction (2025)</li>
							<li>Renewable Energy Grid Integration (2022)</li>
							<li>Solar PV Design & Installation (2021)</li>
						</ul>

						<h4>Technical Tools</h4>
						<p className="profile-text">
							Proficient in ETAP, PVsyst, AutoCAD, Microsoft Project, MATLAB/Simulink, and Primavera P6, enabling advanced system modeling, project planning, and performance optimization.
						</p>

						<h4>Professional Memberships</h4>
						<ul>
							<li>Member, National Society of Black Engineers (NSBE)</li>
						</ul>

						<h4>Location & Contact</h4>
						<ul>
							<li><strong>Location:</strong> Columbus, Ohio, USA</li>
							<li><strong>Phone:</strong> +1 906-299-2282</li>
							<li><strong>Email:</strong> fombasl82@gmail.com</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default AhmedProfile;
