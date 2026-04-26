import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SaioProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Saio Profile page:", err);
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
					src="/img/teammate7.jpeg" 
					alt="Saio Millicent Conteh" 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Legal</div>
					<h1 className="profile-name">Saio Millicent Conteh</h1>
					<h2 className="profile-title">Barrister & Solicitor</h2>
					
					<p className="profile-text">
						Ms. Saio Millicent Conteh is a diligent and results-driven Barrister and Solicitor of the High Court of Sierra Leone, currently working at Techops Global (SL) Limited located at No. 2 Taylor-Lewis Drive, Juba, Freetown, Sierra Leone.
					</p>

					<div className="profile-list-section">
						<h4>Professional Summary</h4>
						<p className="profile-text">
							She holds a Bachelor of Laws (LL.B Honours) degree from the University of Makeni (UNIMAK) and a Barrister-at-Law (BL) Certificate from the Sierra Leone Law School. She has a strong foundation in legal principles and practical advocacy, and she is committed to delivering high-quality legal services with professionalism, integrity, and attention to detail.
						</p>

						<p className="profile-text">
							She is known for her analytical approach, strong work ethic, and dedication to achieving favorable outcomes for clients. Ms. Conteh remains passionate about continuous professional development and upholding the highest standards of legal practice.
						</p>

						<h4>Core Expertise</h4>
						<ul>
							<li>Legal Research</li>
							<li>Civil Litigation & Advocacy</li>
							<li>Real Estate Law</li>
							<li>Professional Mediation</li>
							<li>Legal Advisory Services</li>
							<li>Legal Investigations</li>
						</ul>

						<h4>Education</h4>
						<ul>
							<li><strong>Barrister-at-Law (BL) Certificate:</strong> Sierra Leone Law School</li>
							<li><strong>Bachelor of Laws (LL.B Honours):</strong> University of Makeni (UNIMAK)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default SaioProfile;
