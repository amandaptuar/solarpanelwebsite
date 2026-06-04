import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Team.css";
import { teamMembers } from "../data/TeamData";

function Team() {
	const [selectedMember, setSelectedMember] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		const timer = setTimeout(() => {
			try {
				if (window.initTheme && window.jQuery) {
					window.initTheme(window.jQuery);
				}
			} catch (err) {
				console.error("Theme init error on Team page:", err);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (selectedMember) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [selectedMember]);

	const values = [
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
				</svg>
			),
			title: "Integrity",
			desc: "We build trust through transparency & accountability"
		},
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
					<circle cx="12" cy="12" r="10"/>
					<path d="M12 8v4l3 3"/>
				</svg>
			),
			title: "Excellence",
			desc: "We deliver exceptional results every time"
		},
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
					<path d="M9 18h6"/>
					<path d="M10 22h4"/>
					<path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
				</svg>
			),
			title: "Innovation",
			desc: "We embrace technology to drive progress"
		},
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
					<circle cx="9" cy="7" r="4"/>
					<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
				</svg>
			),
			title: "Collaboration",
			desc: "We achieve more together"
		},
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
					<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
				</svg>
			),
			title: "Sustainability",
			desc: "We create long-term value for people & planet"
		}
	];

	const stats = [
		{ icon: "👥", value: "50+", label: "Energy Experts" },
		{ icon: "⚙️", value: "200+", label: "Projects Delivered" },
		{ icon: "⚡", value: "10+ GW", label: "Managed Assets" },
		{ icon: "🌍", value: "3", label: "Countries" }
	];

	return (
		<>
			{/* ========== HERO SECTION ========== */}
			<section className="tg-team-hero">
				<div className="tg-team-hero-overlay" />
				<div className="tg-team-hero-inner">
					<div className="tg-team-hero-left">
						<span className="tg-team-label">OUR TEAM</span>
						<h1 className="tg-team-hero-h1">
							Powering the Future with<br />
							<span className="tg-orange">Experience &amp; Innovation</span>
						</h1>
						<p className="tg-team-hero-desc">
							Our leadership team brings decades of expertise in power generation,
							engineering, renewable energy, infrastructure development,
							and industrial operations. We combine technical excellence
							with strategic execution to deliver measurable results.
						</p>
					</div>
					<div className="tg-team-stats-grid">
						{stats.map((s, i) => (
							<div className="tg-stat-card" key={i}>
								<div className="tg-stat-icon">{s.icon}</div>
								<div>
									<div className="tg-stat-value">{s.value}</div>
									<div className="tg-stat-label">{s.label}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ========== VALUES BAR ========== */}
			<section className="tg-values-bar">
				{values.map((v, i) => (
					<div className="tg-value-item" key={i}>
						<div className="tg-value-icon">{v.icon}</div>
						<div>
							<div className="tg-value-title">{v.title}</div>
							<div className="tg-value-desc">{v.desc}</div>
						</div>
					</div>
				))}
			</section>

			{/* ========== LEADERSHIP SECTION ========== */}
			<section className="tg-leadership-section">
				<div className="tg-leadership-header">
					<h2 className="tg-leadership-h2">Meet Our Leadership Team</h2>
					<div className="tg-divider">
						<span className="tg-divider-line" />
						<span className="tg-divider-dot" />
						<span className="tg-divider-line" />
					</div>
					<p className="tg-leadership-sub">
						Visionary leaders driving the energy transition and building the future.
					</p>
				</div>

				<div className="tg-cards-grid">
					{teamMembers.map((member, index) => (
						<div
							className="tg-member-card"
							key={index}
							onClick={() => setSelectedMember(member)}
						>
							<div className="tg-member-photo-wrap">
								<img
									src={member.img}
									alt={member.name}
									className="tg-member-photo"
								/>
							</div>
							<div className="tg-member-info">
								<h3 className="tg-member-name">{member.name}</h3>
								<span className="tg-member-role">{member.role}</span>
								<p className="tg-member-desc">{member.quote}</p>
								<div className="tg-member-socials">
									<a href="#" className="tg-social-btn" aria-label="LinkedIn">
										<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
									</a>
									<a href="#" className="tg-social-btn" aria-label="X/Twitter">
										<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
									</a>
									<a href="#" className="tg-social-btn" aria-label="Email">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ========== CTA BANNER ========== */}
			<section className="tg-cta-banner">
				<div className="tg-cta-left">
					<div className="tg-cta-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="#ff7a00" strokeWidth="1.5" width="36" height="36">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
							<circle cx="9" cy="7" r="4"/>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
						</svg>
					</div>
					<div>
						<h3 className="tg-cta-title">A Team United by Purpose. Driven by Impact.</h3>
						<p className="tg-cta-sub">Together, we are building the next generation of energy infrastructure.</p>
					</div>
				</div>
				<Link to="/contact" className="tg-cta-btn">
					Work With Our Team →
				</Link>
			</section>

			{/* ========== MODAL ========== */}
			{selectedMember && (
				<div
					className="rh-modal-overlay active"
					onClick={() => setSelectedMember(null)}
				>
					<div className="rh-modal-container" onClick={e => e.stopPropagation()}>
						<button className="rh-modal-close" onClick={() => setSelectedMember(null)}>
							<i className="bi bi-x-lg"></i>
						</button>
						<div className="rh-modal-grid">
							<div className="rh-modal-left">
								<img src={selectedMember.img} alt={selectedMember.name} />
							</div>
							<div className="rh-modal-right">
								<div className="rh-modal-header">
									<h2>{selectedMember.name}</h2>
									<h3 style={{ color: '#ff7a00' }}>{selectedMember.role}</h3>
								</div>
								<div className="rh-modal-body">
									{selectedMember.bio}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Team;
