import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function JohnProfile() {
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on John Profile page:", err);
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
			.profile-focus {
				margin-top: 35px;
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 12px;
			}
			.profile-tag {
				padding: 12px 20px;
				border-radius: 12px;
				background: #fff8eb;
				border: 1px solid #fee2b3;
				font-size: 15px;
				font-weight: 600;
				color: #b45309;
				text-align: center;
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
					src="/assets/images/team/john-huggins.jpeg" 
					alt="John L. Huggins, Jr." 
				/>
				<div className="profile-bio">
					<div className="profile-eyebrow">Executive Leadership</div>
					<h1 className="profile-name">John L. Huggins, Jr., MBA, PMP</h1>
					<h2 className="profile-title">Executive Vice President</h2>
					
					<p className="profile-text">
						<strong>Professional Summary:</strong> John L. Huggins, Jr. is an experienced Entrepreneur, Consultant, Business coach, and Certified Project Management Professional (PMP).
					</p>

					<div className="profile-list-section">
						<h4>Experience</h4>
						<ul>
							<li><strong>40+ years in:</strong> Telecommunications systems, Information Technology systems, Computer facilities & datacenters, Copper & fiber cable infrastructure design and maintenance</li>
							<li><strong>20+ years in:</strong> Starting and leading small businesses, Leadership & program management, Strategic planning, Business development</li>
						</ul>
						
						<h4>Key Skills</h4>
						<ul>
							<li>Team building</li>
							<li>Leadership & vision</li>
							<li>Collaboration with organizations</li>
							<li>Results-driven management</li>
						</ul>
						
						<h4>Education</h4>
						<ul>
							<li>Bachelor of Science in Industrial Engineering Technology</li>
							<li>Dual Master of Arts: Computer Resource Management / Management</li>
							<li>MBA in Procurement & Acquisition Management</li>
							<li>Certificate in Innovation Management (University of Maryland – Robert H. Smith Business School)</li>
						</ul>
						
						<h4>Executive Education</h4>
						<ul>
							<li>UVA Darden School of Business</li>
							<li>Tuck School of Business at Dartmouth</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default JohnProfile;
