import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Phone, Mail, Clock, MapPin, ChevronRight,
	CheckCircle2, ArrowRight, Shield, Lock
} from "lucide-react";

function Contact() {
	const [formName, setFormName] = useState("");
	const [focused, setFocused] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = "Contact Us | TechOps Global";
	}, []);

	const inputCls = (f) =>
		`w-full bg-transparent border rounded-md px-4 py-3 text-white text-[14px] placeholder:text-gray-500 outline-none transition-all duration-200 ${
			focused === f ? "border-[#ff7a00]" : "border-white/20 focus:border-[#ff7a00]"
		}`;

	return (
		<div className="min-h-screen bg-[#05070b] text-white font-sans selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

			{/* ===== 1. HERO — split layout ===== */}
			<section
				className="relative pt-24 pb-20 overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(5,7,11,0.95) 0%, rgba(5,7,11,0.85) 50%, rgba(5,7,11,0.5) 100%), url('/img/business-solution-2026-03-10-02-05-05-utc.JPG')",
				}}
			>
				<div className="w-full px-6 md:px-[50px] relative z-10">
					{/* Breadcrumb */}
					<div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 tracking-wider uppercase mb-10 pt-6">
						<Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
						<ChevronRight size={13} className="text-gray-600" />
						<span className="text-gray-400">Contact Us</span>
					</div>

					<div className="grid lg:grid-cols-12 gap-10 items-start">
						{/* Left Content */}
						<div className="lg:col-span-7 pr-4 lg:pr-10">
							<div className="text-[#ff7a00] text-[12px] font-extrabold tracking-[4px] uppercase mb-4">
								WE'RE HERE TO HELP
							</div>
							<h1 className="!text-white text-[40px] md:text-[52px] font-extrabold leading-[1.1] mb-6">
								Let's Build a<br />
								Smarter Energy<br />
								Future—<span className="text-[#ff7a00]">Together.</span>
							</h1>
							<p className="text-gray-300 text-[16px] leading-relaxed mb-10 max-w-lg font-light">
								Have a question, project idea, or looking for more information? Our team is ready to help you unlock the potential of your property with AI-powered energy solutions.
							</p>

							{/* 3 contact items horizontal */}
							<div className="flex flex-col sm:flex-row gap-8">
								{[
									{ icon: <Phone size={18} />, label: "Call Us", value: "(609) 555-0123" },
									{ icon: <Mail size={18} />, label: "Email Us", value: "hello@techopsglobal.com" },
									{ icon: <Clock size={18} />, label: "Business Hours", value: "Mon – Fri: 8AM – 6PM EST" },
								].map((item, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="w-11 h-11 rounded-full border-2 border-[#ff7a00]/40 flex items-center justify-center text-[#ff7a00] shrink-0">
											{item.icon}
										</div>
										<div>
											<div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">{item.label}</div>
											<div className="text-white font-semibold text-[13px]">{item.value}</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right: Floating Form Card */}
						<div className="lg:col-span-5">
							<div className="bg-[#0b0d12] border border-white/10 rounded-xl p-8 shadow-2xl max-w-[440px] ml-auto">
								<h3 className="!text-white text-[22px] font-bold mb-6">Send Us a Message</h3>

								<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" className="space-y-4">
									<input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.origin + "/success" : "https://techops-global.com/success"} />
									<input type="hidden" name="_subject" value={`New Contact Submission By ${formName || "a User"} From Techops Global`} />

									<input
										type="text" name="name" placeholder="Full Name*" required
										onChange={(e) => setFormName(e.target.value)}
										onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
										className={inputCls("name")}
									/>
									<input
										type="email" name="email" placeholder="Work Email*" required
										onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
										className={inputCls("email")}
									/>
									<input
										type="tel" name="phone" placeholder="Phone Number*" required
										onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
										className={inputCls("phone")}
									/>
									<input
										type="text" name="company" placeholder="Company Name*" required
										onFocus={() => setFocused("company")} onBlur={() => setFocused("")}
										className={inputCls("company")}
									/>
									<select
										name="interest" required
										onFocus={() => setFocused("interest")} onBlur={() => setFocused("")}
										className={inputCls("interest") + " appearance-none"}
									>
										<option value="" disabled>I'm interested in...*</option>
										<option>Solar Energy</option>
										<option>Battery Storage</option>
										<option>Wind Energy</option>
										<option>Parking Lot Solar</option>
										<option>VPP Solutions</option>
										<option>Other</option>
									</select>
									<textarea
										name="message" placeholder="Tell us about your project or inquiry...*" required rows="4"
										onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
										className={inputCls("message") + " resize-none"}
									></textarea>

									<button
										type="submit"
										className="w-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-bold py-3.5 rounded-md transition-all uppercase flex items-center justify-center gap-2 text-[14px] mt-2"
									>
										SEND MESSAGE <ArrowRight size={16} />
									</button>
									<p className="text-center text-gray-600 text-[11px] flex items-center justify-center gap-1.5 pt-1">
										<Lock size={11} /> Your information is secure and confidential.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ===== 2. GET IN TOUCH ===== */}
			<section className="py-20 bg-[#05070b] border-b border-white/5">
				<div className="w-full px-6 md:px-[50px]">
					{/* Title with decorative line */}
					<div className="flex items-center justify-center mb-3">
						<h2 className="!text-white text-[26px] font-extrabold tracking-wide">Get in Touch</h2>
					</div>
					<div className="flex justify-center mb-12">
						<div className="w-12 h-[3px] bg-[#ff7a00] rounded-full" />
					</div>

					{/* 5-column grid: 4 info cards + 1 map */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
						{[
							{
								icon: <MapPin size={22} />,
								title: "Our Headquarters",
								lines: ["TechOps Global, Inc.", "200 Princeton Hightstown Rd", "Suite 201", "Princeton, NJ 08540", "USA"]
							},
							{
								icon: <Phone size={22} />,
								title: "Call Us",
								lines: ["(609) 555-0123", "", "Toll Free:", "(833) TECH-OPS", "(833-832-4677)"]
							},
							{
								icon: <Mail size={22} />,
								title: "Email Us",
								lines: ["hello@techopsglobal.com", "info@techopsglobal.com", "", "Investor Relations", "investors@techopsglobal.com"]
							},
							{
								icon: <Clock size={22} />,
								title: "Business Hours",
								lines: ["Monday – Friday", "8:00 AM – 6:00 PM EST", "", "Saturday – Sunday", "By Appointment"]
							},
						].map((card, i) => (
							<div key={i} className="bg-[#0d0f15] border border-white/8 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#ff7a00]/30 transition-all group">
								<div className="text-[#ff7a00] mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
								<h4 className="!text-white text-[15px] font-extrabold mb-3">{card.title}</h4>
								<div className="space-y-0.5">
									{card.lines.map((line, j) => (
										<p key={j} className={`text-[13px] leading-relaxed ${line === "" ? "h-3" : "text-gray-400"}`}>{line}</p>
									))}
								</div>
							</div>
						))}

						{/* Map card */}
						<div className="bg-[#0d0f15] border border-white/8 rounded-xl overflow-hidden relative min-h-[220px] hover:border-[#ff7a00]/30 transition-all">
							{/* Dark map background */}
							<div className="absolute inset-0 bg-[#111420]">
								{/* Simulated dark map grid */}
								<svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
											<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4a5568" strokeWidth="0.5"/>
										</pattern>
									</defs>
									<rect width="100%" height="100%" fill="url(#grid)" />
									{/* Roads */}
									<line x1="0" y1="50%" x2="100%" y2="50%" stroke="#2d3748" strokeWidth="2"/>
									<line x1="0" y1="30%" x2="100%" y2="35%" stroke="#2d3748" strokeWidth="1.5"/>
									<line x1="0" y1="70%" x2="100%" y2="65%" stroke="#2d3748" strokeWidth="1.5"/>
									<line x1="30%" y1="0" x2="35%" y2="100%" stroke="#2d3748" strokeWidth="1.5"/>
									<line x1="60%" y1="0" x2="65%" y2="100%" stroke="#2d3748" strokeWidth="1.5"/>
									<line x1="50%" y1="0" x2="50%" y2="100%" stroke="#374151" strokeWidth="2"/>
								</svg>
							</div>
							{/* Pin */}
							<div className="absolute inset-0 flex flex-col items-center justify-center">
								<div className="w-10 h-10 bg-[#ff7a00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,122,0,0.5)] mb-2">
									<MapPin size={20} className="text-black" />
								</div>
								<div className="bg-black/80 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded text-white text-[13px] font-bold shadow-xl">
									Princeton, NJ
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ===== 3. OUR LOCATIONS ===== */}
			<section className="py-20 bg-[#07090e] border-b border-white/5">
				<div className="w-full px-6 md:px-[50px]">
					<div className="flex items-center justify-center mb-3">
						<h2 className="!text-white text-[26px] font-extrabold tracking-wide">Our Locations</h2>
					</div>
					<div className="flex justify-center mb-12">
						<div className="w-12 h-[3px] bg-[#ff7a00] rounded-full" />
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								city: "Princeton, New Jersey",
								type: "Headquarters",
								address: ["200 Princeton Hightstown Rd", "Suite 201", "Princeton, NJ 08540", "USA"],
								img: "/unsplash/choose-thumb.jpg"
							},
							{
								city: "Houston, Texas",
								type: "Office",
								address: ["5444 Westheimer Rd", "Suite 1000", "Houston, TX 77056", "USA"],
								img: "/unsplash/industrial-solar.jpg"
							},
							{
								city: "Los Angeles, California",
								type: "Office",
								address: ["1900 Avenue of the Stars", "Suite 200", "Los Angeles, CA 90067", "USA"],
								img: "/unsplash/la.jpg"
							}
						].map((loc, i) => (
							<div key={i} className="bg-[#0d0f15] border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all">
								<div className="h-[180px] overflow-hidden relative">
									<img
										src={loc.img}
										alt={loc.city}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] via-black/30 to-transparent" />
									<div className="absolute bottom-4 left-4">
										<h4 className="!text-white text-[18px] font-extrabold leading-tight">{loc.city}</h4>
									</div>
								</div>
								<div className="p-6">
									<div className="text-[#ff7a00] text-[11px] font-extrabold tracking-wider uppercase mb-3">{loc.type}</div>
									<div className="space-y-0.5">
										{loc.address.map((line, j) => (
											<p key={j} className="text-gray-400 text-[14px] leading-relaxed">{line}</p>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== 4. CTA SECTION ===== */}
			<section
				className="py-20 relative overflow-hidden"
				style={{
					backgroundImage: "linear-gradient(to right, rgba(10,12,18,0.95) 50%, rgba(10,12,18,0.80) 100%), url('/unsplash/wind-battery.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<div className="w-full px-6 md:px-[50px] relative z-10">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
						<div className="lg:w-1/2">
							<h2 className="!text-white text-[32px] lg:text-[40px] font-extrabold leading-tight mb-5">
								Let's Talk About Your Project
							</h2>
							<p className="text-gray-400 text-[16px] leading-relaxed max-w-md">
								Whether you have a single site or a portfolio, we'll help you transform your real estate into high-performing energy assets with zero capex and maximum returns.
							</p>
						</div>

						<div className="lg:w-1/2 flex flex-col items-start gap-6">
							<div className="grid grid-cols-2 gap-x-12 gap-y-3">
								{["Zero Capex", "Sustainable Impact", "Long-Term Value", "Maximum Performance"].map((item, i) => (
									<div key={i} className="flex items-center gap-2 text-white text-[15px] font-semibold">
										<CheckCircle2 size={18} className="text-[#ff7a00] shrink-0" />
										{item}
									</div>
								))}
							</div>
							<Link
								to="/contact"
								className="inline-flex items-center gap-3 bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold px-8 py-4 rounded-lg text-[14px] uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(255,122,0,0.4)] whitespace-nowrap"
							>
								GET YOUR FREE SITE ASSESSMENT <ArrowRight size={18} />
							</Link>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}

export default Contact;
