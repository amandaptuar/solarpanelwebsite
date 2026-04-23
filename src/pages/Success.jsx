import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/image.png";

function Success() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="success-page-wrapper" style={{ 
			minHeight: '100vh', 
			display: 'flex', 
			alignItems: 'center', 
			justifyContent: 'center', 
			background: '#1c1632',
			padding: '40px 20px'
		}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 text-center">
						<div className="success-content">
							<div className="success-logo mb-5">
								<img 
									src={logoImg} 
									alt="TechOps Global Logo" 
									style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '15px' }} 
								/>
							</div>
							<div className="success-icon mb-4" style={{ fontSize: '80px', color: '#e63a27' }}>
								<i className="bi bi-check-circle-fill"></i>
							</div>
							<div className="success-text">
								<h1 style={{ color: '#ffffff', fontSize: '36px', marginBottom: '20px', fontWeight: '700' }}>
									Submission Received!
								</h1>
								<p style={{ color: '#e2e2e2', fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
									Thanks for register with us, We will connect you shortly for confirmation by email, Regards Techops Global LLC
								</p>
								<div className="solar-btn">
									<Link to="/" style={{ padding: '15px 40px', fontSize: '18px' }}>
										Back To Home <i className="bi bi-house-door-fill ml-2"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Success;
