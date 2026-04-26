import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Videos() {
	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Videos page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	// Set dynamic SEO Meta Tags for Videos Page
	useEffect(() => {
		document.title = "Videos | TechOps Global LLC";
	}, []);

	return (
		<>
		{/*==================================================*/}
		{/* Breadcrumb / Page Title Banner */}
		{/*==================================================*/}
		<div className="breatcome-section" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="breatcome-content">
							<div className="breatcome-title">
								<h1>Videos</h1>
							</div>
							<div className="bratcome-text">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>Videos</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Breadcrumb */}
		{/*==================================================*/}

		{/*==================================================*/}
		{/* Video Section */}
		{/*==================================================*/}
		<div className="video-page-section" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center mb-5">
							<div className="section-sub-title">
								<h4>Our Media</h4>
							</div>
							<div className="section-main-title">
								<h2>Watch Our Latest Video</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-10 col-md-12">
						<div className="video-container" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
							<video 
								width="100%" 
								controls 
								poster="/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg"
								style={{ display: 'block' }}
							>
								<source src="/img/video.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Videos;
