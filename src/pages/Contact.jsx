import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Phone, Mail, Clock, MapPin, ChevronRight,
	CheckCircle2, ArrowRight, Globe, Shield, Zap, Users
} from "lucide-react";

function Contact() {
	const [formName, setFormName] = useState("");
	const [focused, setFocused] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = "Contact Us | TechOps Global";
	}, []);

	const inputClass = (field) =>
		`w-full bg-white/5 border rounded-xl px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 ${
			focused === field
				? "border-[#ff7a00] ring-1 ring-[#ff7a00]/30 bg-white/8"
				: "border-white/10 hover:border-white/20"
		}`;

	return (
		<div className="min-h-screen bg-[#05070b] text-white font-sans selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

			{/* ===== 1. HERO SECTION ===== */}
			<section
				className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden"
				style={{
					backgroundImage: "url('/img/business-solution-2026-03-10-02-05-05-utc.JPG')",
					backgroundSize: "cover",
					backgroundPosition: "center top"
				}}
			>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#05070b] via-[#05070b]/85 to-[#05070b]/50" />
				<div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-[#05070b]/40" />
				{/* Orange glow */}
				<div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-[#ff7a00]/8 blur-[120px] rounded-full pointer-events-none" />

				<div className="w-full px-6 md:px-[50px] relative z-10">
					{/* Breadcrumb */}
					<div className="flex items-center gap-2 type-body-sm font-bold text-gray-500 tracking-wider uppercase mb-12">
						<Link to="/" className="text-gray-400 hover:text-[#ff7a00] transition-colors">Home</Link>
						<ChevronRight size={14} className="text-gray-600" />
						<span className="text-[#ff7a00]">Contact Us</span>
					</div>

					<div className="grid lg:grid-cols-12 gap-16 items-start">
						{/* Left Content */}
						<div className="lg:col-span-6">
							<div className="mb-4 text-[#ff7a00] text-[13px] font-bold tracking-[4px] uppercase">
								WE'RE HERE TO HELP
							</div>
							<h1 className="!text-white type-hero mb-8 leading-[1.05]">
								Let's Build a<br />
								Smarter Energy<br />
								Future—<span className="text-[#ff7a00]">Together.</span>
							</h1>
							<p className="text-gray-300 text-[20px] leading-relaxed mb-12 max-w-xl font-light">
								Have a question, project idea, or looking for more information? Our team is ready to help you unlock the potential of your property with AI-powered energy solutions.
							</p>

							{/* Quick stats */}
							<div className="grid grid-cols-3 gap-6 mb-12">
								{[
									{ icon: <Zap size={18} />, val: "24/7", label: "AI Monitoring" },
									{ icon: <Globe size={18} />, val: "15+", label: "States Active" },
									{ icon: <Users size={18} />, val: "500+", label: "Sites Deployed" },
								].map((s, i) => (
									<div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#ff7a00]/30 transition-all">
										<div className="text-[#ff7a00] flex justify-center mb-2">{s.icon}</div>
										<div className="text-white text-[22px] font-extrabold leading-none mb-1">{s.val}</div>
										<div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">{s.label}</div>
									</div>
								))}
							</div>

							{/* Quick Contact Info */}
							<div className="space-y-5">
								{[
									{ icon: <Phone size={18} />, label: "Call Us", value: "(609) 555-0123" },
									{ icon: <Mail size={18} />, label: "Email Us", value: "hello@techopsglobal.com" },
									{ icon: <Clock size={18} />, label: "Business Hours", value: "Mon – Fri: 8AM – 6PM EST" },
								].map((item, i) => (
									<div key={i} className="flex items-center gap-4">
										<div className="w-10 h-10 rounded-xl border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] bg-[#ff7a00]/8 shrink-0">
											{item.icon}
										</div>
										<div>
											<div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">{item.label}</div>
											<div className="text-white font-semibold text-[15px]">{item.value}</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right Form */}
						<div className="lg:col-span-6">
							<div className="bg-[#0a0c12]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
								<div className="mb-2 text-[#ff7a00] text-[12px] font-bold tracking-[3px] uppercase">GET IN TOUCH</div>
								<h3 className="!text-white text-[26px] font-extrabold mb-8">Send Us a Message</h3>

								<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" className="space-y-4">
									<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
									<input type="hidden" name="_subject" value={`New Contact Submission By ${formName || 'a User'} From Techops Global`} />

									<div className="grid sm:grid-cols-2 gap-4">
										<input
											type="text" name="name" placeholder="Full Name*" required
											onChange={(e) => setFormName(e.target.value)}
											onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
											className={inputClass("name")}
										/>
										<input
											type="email" name="email" placeholder="Work Email*" required
											onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
											className={inputClass("email")}
										/>
									</div>

									<div className="grid sm:grid-cols-2 gap-4">
										<input
											type="tel" name="phone" placeholder="Phone Number*" required
											onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
											className={inputClass("phone")}
										/>
										<input
											type="text" name="company" placeholder="Company Name*" required
											onFocus={() => setFocused("company")} onBlur={() => setFocused("")}
											className={inputClass("company")}
										/>
									</div>

									<select
										name="interest" required
										onFocus={() => setFocused("interest")} onBlur={() => setFocused("")}
										className={inputClass("interest") + " appearance-none"}
									>
										<option value="" disabled>I'm interested in...*</option>
										<option value="Solar Energy">Solar Energy</option>
										<option value="Battery Storage">Battery Storage</option>
										<option value="Wind Energy">Wind Energy</option>
										<option value="Parking Lot Solar">Parking Lot Solar</option>
										<option value="VPP Solutions">VPP Solutions</option>
										<option value="Other">Other</option>
									</select>

									<textarea
										name="message" placeholder="Tell us about your project or inquiry..." required rows="4"
										onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
										className={inputClass("message") + " resize-none"}
									></textarea>

									<button
										type="submit"
										className="w-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold py-4 rounded-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2 text-[15px] shadow-[0_4px_25px_rgba(255,122,0,0.4)] hover:shadow-[0_4px_35px_rgba(255,122,0,0.6)]"
									>
										SEND MESSAGE <ArrowRight size={18} />
									</button>

									<p className="text-center text-gray-600 text-[12px] flex items-center justify-center gap-2 mt-2">
										<Shield size={12} className="text-gray-500" />
										Your information is secure and 100% confidential.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ===== 2. GET IN TOUCH INFO CARDS ===== */}
			<section className="py-24 bg-[#07090e] border-b border-white/5">
				<div className="w-full px-6 md:px-[50px]">
					<div className="flex items-center gap-6 mb-16">
						<div className="h-[1px] bg-white/10 flex-1" />
						<h2 className="!text-white text-[22px] font-extrabold tracking-[4px] uppercase whitespace-nowrap">
							Contact Information
						</h2>
						<div className="h-[1px] bg-white/10 flex-1" />
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								icon: <MapPin size={26} />,
								title: "Our Headquarters",
								details: ["200 Princeton Hightstown Rd", "Suite 201, Princeton, NJ 08540", "USA"],
								color: "#ff7a00"
							},
							{
								icon: <Phone size={26} />,
								title: "Call Us",
								details: ["(609) 555-0123", "Toll Free: (833) TECH-OPS", "(833-832-4677)"],
								color: "#8dff4d"
							},
							{
								icon: <Mail size={26} />,
								title: "Email Us",
								details: ["hello@techopsglobal.com", "info@techopsglobal.com", "investors@techopsglobal.com"],
								color: "#ff7a00"
							},
							{
								icon: <Clock size={26} />,
								title: "Business Hours",
								details: ["Monday – Friday", "8:00 AM – 6:00 PM EST", "Saturday – Sunday: By Appt."],
								color: "#8dff4d"
							}
						].map((card, i) => (
							<div key={i} className="bg-[#0d0f15] border border-white/8 rounded-2xl p-8 hover:border-[#ff7a00]/30 transition-all group relative overflow-hidden">
								<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff7a00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								<div
									className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
									style={{ background: `${card.color}15`, border: `1px solid ${card.color}30`, color: card.color }}
								>
									{card.icon}
								</div>
								<h4 className="!text-white text-[18px] font-bold mb-4">{card.title}</h4>
								<div className="space-y-2">
									{card.details.map((line, j) => (
										<p key={j} className="text-gray-400 text-[14px] leading-relaxed">{line}</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== 3. OUR LOCATIONS ===== */}
			<section className="py-24 bg-[#05070b] border-b border-white/5">
				<div className="w-full px-6 md:px-[50px]">
					<div className="flex items-center gap-6 mb-16">
						<div className="h-[1px] bg-white/10 flex-1" />
						<h2 className="!text-white text-[22px] font-extrabold tracking-[4px] uppercase whitespace-nowrap">
							Our Locations
						</h2>
						<div className="h-[1px] bg-white/10 flex-1" />
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								city: "Princeton, New Jersey",
								type: "Headquarters",
								address: ["200 Princeton Hightstown Rd", "Suite 201", "Princeton, NJ 08540", "USA"],
								img: "/unsplash/office-solar.jpg"
							},
							{
								city: "Houston, Texas",
								type: "Regional Office",
								address: ["5444 Westheimer Rd", "Suite 1000", "Houston, TX 77056", "USA"],
								img: "/unsplash/industrial-solar.jpg"
							},
							{
								city: "Los Angeles, California",
								type: "West Coast Office",
								address: ["1900 Avenue of the Stars", "Suite 200", "Los Angeles, CA 90067", "USA"],
								img: "/unsplash/la.jpg"
							}
						].map((loc, i) => (
							<div key={i} className="bg-[#0d0f15] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#ff7a00]/30 transition-all">
								<div className="h-[220px] overflow-hidden relative">
									<img
										src={loc.img}
										alt={loc.city}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] via-[#0d0f15]/30 to-transparent" />
									<div className="absolute top-4 left-4">
										<span className="px-3 py-1 bg-[#ff7a00] text-black text-[11px] font-extrabold uppercase tracking-wider rounded">
											{loc.type}
										</span>
									</div>
									<div className="absolute bottom-4 left-4 right-4">
										<h4 className="!text-white text-[20px] font-extrabold leading-tight">{loc.city}</h4>
									</div>
								</div>
								<div className="p-6">
									<div className="space-y-1 mb-5">
										{loc.address.map((line, j) => (
											<p key={j} className="text-gray-400 text-[14px] leading-relaxed">{line}</p>
										))}
									</div>
									<div className="flex items-center gap-2 text-[#ff7a00] text-[13px] font-bold uppercase tracking-wider">
										<MapPin size={14} />
										<span>Get Directions</span>
										<ArrowRight size={13} />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== 4. WHY WORK WITH US ===== */}
			<section
				className="py-24 relative overflow-hidden"
				style={{
					backgroundImage: "url('/img/team-technicians-carrying-photovoltaic-solar-modul-2026-01-09-10-53-57-utc.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-[#05070b] via-[#05070b]/90 to-[#05070b]/70" />
				<div className="w-full px-6 md:px-[50px] relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="mb-4 text-[#ff7a00] text-[13px] font-bold tracking-[4px] uppercase">WHY TECHOPS GLOBAL</div>
							<h2 className="!text-white text-[38px] lg:text-[48px] font-extrabold leading-[1.1] mb-8">
								Your Assets.<br />
								Our Technology.<br />
								<span className="text-[#ff7a00]">Shared Success.</span>
							</h2>
							<p className="text-gray-300 text-[18px] leading-relaxed mb-10 font-light max-w-lg">
								Join hundreds of property owners who are already generating passive income with zero capital investment through our AI-powered energy platform.
							</p>
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_25px_rgba(255,122,0,0.4)]"
							>
								GET FREE SITE ASSESSMENT <ArrowRight size={18} />
							</Link>
						</div>
						<div className="grid grid-cols-2 gap-5">
							{[
								{ icon: <Zap size={22} />, title: "Zero Capex", desc: "We fund, build, own and operate everything." },
								{ icon: <Shield size={22} />, title: "Zero Risk", desc: "Your operations remain completely unaffected." },
								{ icon: <CheckCircle2 size={22} />, title: "Guaranteed Income", desc: "Long-term lease payments from day one." },
								{ icon: <Globe size={22} />, title: "Maximum Returns", desc: "Stack multiple revenue streams simultaneously." },
							].map((item, i) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ff7a00]/30 transition-all backdrop-blur-sm">
									<div className="text-[#ff7a00] mb-4">{item.icon}</div>
									<h4 className="!text-white font-bold text-[16px] mb-2">{item.title}</h4>
									<p className="text-gray-400 text-[14px] leading-relaxed">{item.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ===== 5. FINAL CTA ===== */}
			<section className="py-20 bg-[#05070b]">
				<div className="w-full px-6 md:px-[50px]">
					<div className="bg-gradient-to-r from-[#ff7a00]/10 to-[#0d0f15] border border-[#ff7a00]/20 rounded-2xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
						<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00] rounded-l-2xl" />
						<div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#ff7a00]/5 to-transparent pointer-events-none" />

						<div className="lg:w-1/2 relative z-10">
							<h2 className="!text-white text-[32px] lg:text-[42px] font-extrabold leading-tight mb-4">
								Ready to Get Started?<br />
								<span className="text-[#ff7a00]">Let's Talk Today.</span>
							</h2>
							<p className="text-gray-400 text-[17px] leading-relaxed max-w-md">
								Whether you have a single site or an entire portfolio, we'll craft a custom energy solution that maximizes your returns.
							</p>
						</div>

						<div className="lg:w-1/2 relative z-10 w-full">
							<div className="grid sm:grid-cols-2 gap-4 mb-8">
								{["Zero Capex", "Sustainable Impact", "Long-Term Value", "AI-Powered Platform"].map((item, i) => (
									<div key={i} className="flex items-center gap-3 text-white text-[15px] font-semibold">
										<CheckCircle2 size={18} className="text-[#ff7a00] shrink-0" />
										{item}
									</div>
								))}
							</div>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold px-10 py-5 rounded-xl text-[15px] uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(255,122,0,0.4)]"
							>
								GET YOUR FREE SITE ASSESSMENT <ArrowRight size={20} />
							</Link>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}

export default Contact;
