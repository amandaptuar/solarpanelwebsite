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
						Preetam Bagalkotkar serves as Chief Operations Officer, bringing over two decades of leadership in infrastructure development, with specialized expertise across renewable energy, strategic planning, project finance, EPC procurement, and large-scale operational delivery.
					</p>

					<div className="profile-list-section">
						<h4>Professional Overview</h4>
						<p className="profile-text">
							Mr. Bagalkotkar has an extensive track record of managing complex, multi-stakeholder programs at scale, including oversight of federal and institutional initiatives exceeding $1 billion in value. His experience spans end-to-end project lifecycle management—from financial structuring and procurement governance to execution and long-term operational optimization—ensuring efficiency, transparency, and measurable impact.
						</p>

						<h4>Operational Leadership & Expertise</h4>
						<ul>
							<li>Strategic Planning & Infrastructure Development</li>
							<li>Project Finance & Investment Structuring</li>
							<li>EPC Procurement & Contract Management</li>
							<li>Large-Scale Program Execution & Delivery</li>
							<li>Institutional Governance & Procurement Integrity</li>
						</ul>

						<h4>Technology & Innovation</h4>
						<p className="profile-text">
							A forward-looking leader, Mr. Bagalkotkar drives the adoption of advanced technologies across energy infrastructure. His work includes integrating:
						</p>
						<ul>
							<li>AI-driven operational workflows</li>
							<li>SCADA-based monitoring systems</li>
							<li>Advanced Battery Energy Storage Systems (BESS)</li>
							<li>Next-generation Operations & Maintenance (O&M) platforms</li>
						</ul>
						<p className="profile-text">
							These innovations enhance performance, reliability, and lifecycle value of solar and energy assets.
						</p>

						<h4>Global Engagement & Frameworks</h4>
						<p className="profile-text">
							With deep experience in international development environments, he actively collaborates with sovereign governments, national ministries, and multilateral institutions. His approach aligns projects with global best practices, including frameworks set by the World Bank and the United Nations Sustainable Development Goals (SDGs).
						</p>

						<h4>Leadership Vision</h4>
						<p className="profile-text">
							Mr. Bagalkotkar believes that well-executed energy infrastructure represents a generational investment—one that drives economic growth, expands energy access, and builds long-term resilience for communities and nations worldwide.
						</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default PreetamProfile;
