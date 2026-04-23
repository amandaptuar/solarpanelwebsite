import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PreetamProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Preetam Profile page:", err);
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
				object-position: center 15%;
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
					src="/img/teammate4.jpeg" 
					alt="Preetam Bagalkotkar" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Executive Leadership & Operations</div>
					<h1 className="profile-name">Preetam Bagalkotkar</h1>
					<h2 className="profile-title">Chief Operations Officer</h2>
					
					<p className="profile-text">
						Preetam Bagalkotkar is the Chief Operations Officer. He has successfully accomplished infrastructure development executive with deep expertise in strategic planning, project finance, EPC procurement, and operational planning across the renewable energy sector.
					</p>

					<p className="profile-text">
						He brings over two decades of experience managing complex, multi-stakeholder programs — including oversight of federal programs exceeding $1 billion in scope — with a proven track record in institutional governance, procurement integrity, and large-scale program delivery.
					</p>

					<div className="profile-list-section">
						<h4>Expertise & Innovation</h4>
						<p className="profile-text">
							A forward-thinking technologist, Mr. Bagalkotkar leads the integration of automation, AI-driven workflows, advanced battery storage, SCADA monitoring, and next-generation O&M platforms that push solar and BESS assets to their highest potential.
						</p>

						<h4>Global Frameworks</h4>
						<p className="profile-text">
							Equally fluent in sovereign government engagement and multilateral institutional frameworks, he works directly with national ministries and aligns projects to the standards of institutions such as the World Bank and the United Nations Sustainable Development Goals.
						</p>

						<h4>Vision</h4>
						<p className="profile-text">
							He is driven by the conviction that well-executed energy infrastructure is a generational investment — creating lasting economic opportunity, energy access, and resilience for the communities and nations that need it most.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default PreetamProfile;
