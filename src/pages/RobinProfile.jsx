import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function RobinProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Robin Profile page:", err);
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
					src="/img/teammate6.png" 
					alt="Robin Fola Mansaray" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Renewable Energy & Policy</div>
					<h1 className="profile-name">Robin Fola Mansaray</h1>
					<h2 className="profile-title">Renewable Energy Specialist | Policy Advisor | Project Development Expert</h2>
					
					<p className="profile-text">
						Robin Fola Mansaray is a senior renewable energy professional with more than two decades of experience in energy policy, project development, technical evaluation, stakeholder coordination, and implementation support across Sierra Leone and West Africa. He brings a strong combination of public-sector leadership, regulatory familiarity, and practical project experience spanning utility-scale solar, mini-grids, rural electrification, energy efficiency, and renewable energy planning.
					</p>
					
					<p className="profile-text">
						He has served in key leadership roles within the Ministry of Energy, Government of Sierra Leone, including Director of Renewable Energy & Energy Efficiency and Head of Renewable Energy & Energy Efficiency, where he supported national renewable energy strategy, policy reviews, donor-funded programs, project assessments, and interagency coordination. His experience includes engagement with leading institutions such as UNOPS, IRENA, ECREEE, the World Bank, FAO, DFID/FCDO, UNDP, and the European Union.
					</p>

					<p className="profile-text">
						Robin has contributed to a wide range of assignments involving solar PV, battery energy storage systems (BESS), mini-grid evaluation, land due diligence for renewable energy developments, energy access planning, and renewable energy policy formulation. He is particularly effective in aligning government priorities, technical requirements, and stakeholder interests to support well-structured, bankable, and sustainable infrastructure projects.
					</p>

					<p className="profile-text">
						He holds an MSc in Renewable Energy & the Environment and a BSc in Physics/Chemistry Education from Njala University. At TechOps Global, Robin strengthens the company’s renewable energy and infrastructure platform through his deep sector knowledge, institutional credibility, and proven ability to support project development, regulatory engagement, and execution readiness.
					</p>
				</div>
			</div>
		</div>
		</>
	);
}

export default RobinProfile;
