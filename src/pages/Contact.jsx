import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Phone, Mail, Clock, MapPin, ChevronRight,
	CheckCircle2, ArrowRight
} from "lucide-react";

function Contact() {
	const [formName, setFormName] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = "Contact Us | TechOps Global";
	}, []);

	return (
		<div className="min-h-screen bg-[#05070b] text-white font-sans selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

			{/* ===== 1. HERO SECTION ===== */}
			<section
				className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: "linear-gradient(to right, rgba(5,7,11,0.9) 0%, rgba(5,7,11,0.7) 50%, rgba(5,7,11,0.4) 100%), url('/img/contact-hero.jpg')"
				}}
			>
				<div className="w-full px-[50px] relative z-10">
					{/* Breadcrumb */}
					<div className="flex items-center gap-2 type-body-sm font-bold text-gray-400 tracking-wider uppercase mb-12">
						<Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
						<ChevronRight size={14} />
						<span className="text-[#ff7a00]">Contact Us</span>
					</div>

					<div className="grid lg:grid-cols-12 gap-16 items-start">
						{/* Left Content */}
						<div className="lg:col-span-7">
							<div className="mb-4 text-[#ff7a00] type-body font-bold tracking-[3px] uppercase">
								WE'RE HERE TO HELP
							</div>
							<h1 className="!text-white type-hero mb-8 leading-[1.1]">
								Let's Build a<br />
								Smarter Energy<br />
								Future—<span className="text-[#ff7a00]">Together.</span>
							</h1>
							<p className="type-body-lg text-gray-300 mb-12 max-w-xl">
								Have a question, project idea, or looking for more information? Our team is ready to help you unlock the potential of your property with AI-powered energy solutions.
							</p>

							{/* Quick Contact Info */}
							<div className="grid sm:grid-cols-3 gap-8">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] bg-[#ff7a00]/5">
										<Phone size={20} />
									</div>
									<div>
										<div className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Call Us</div>
										<div className="text-white font-bold">(609) 555-0123</div>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] bg-[#ff7a00]/5">
										<Mail size={20} />
									</div>
									<div>
										<div className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Email Us</div>
										<div className="text-white font-bold">hello@techopsglobal.com</div>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] bg-[#ff7a00]/5">
										<Clock size={20} />
									</div>
									<div>
										<div className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Business Hours</div>
										<div className="text-white font-bold">Mon - Fri: 8AM - 6PM EST</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Form */}
						<div className="lg:col-span-5">
							<div className="bg-[#0d0f15]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
								<h3 className="!text-white text-[24px] font-extrabold mb-8">Send Us a Message</h3>
								<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" className="space-y-5">
									<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
									<input type="hidden" name="_subject" value={`New Contact Submission By ${formName || 'a User'} From Techops Global`} />

									<div>
										<input
											type="text"
											name="name"
											placeholder="Full Name*"
											required
											onChange={(e) => setFormName(e.target.value)}
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] outline-none transition-all"
										/>
									</div>
									<div>
										<input
											type="email"
											name="email"
											placeholder="Work Email*"
											required
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] outline-none transition-all"
										/>
									</div>
									<div>
										<input
											type="tel"
											name="phone"
											placeholder="Phone Number*"
											required
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] outline-none transition-all"
										/>
									</div>
									<div>
										<input
											type="text"
											name="company"
											placeholder="Company Name*"
											required
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] outline-none transition-all"
										/>
									</div>
									<div>
										<select
											name="interest"
											required
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] outline-none transition-all appearance-none"
										>
											<option value="" disabled selected>I'm interested in...*</option>
											<option value="Solar Energy">Solar Energy</option>
											<option value="Battery Storage">Battery Storage</option>
											<option value="Wind Energy">Wind Energy</option>
											<option value="VPP Solutions">VPP Solutions</option>
											<option value="Other">Other</option>
										</select>
									</div>
									<div>
										<textarea
											name="message"
											placeholder="Tell us about your project or inquiry...*"
											required
											rows="4"
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] focus:ring-1 focus:ring-[#ff7a00] outline-none transition-all resize-none"
										></textarea>
									</div>

									<button
										type="submit"
										className="w-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold py-4 rounded-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2"
									>
										SEND MESSAGE <ArrowRight size={18} />
									</button>

									<p className="text-center text-gray-500 text-[12px] flex items-center justify-center gap-2">
										<CheckCircle2 size={12} /> Your information is secure and confidential.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ===== 2. GET IN TOUCH SECTION ===== */}
			<section className="py-24 bg-[#07090e] border-b border-white/5">
				<div className="w-full px-[50px]">
					<div className="flex items-center gap-6 mb-16">
						<div className="h-[1px] bg-white/10 flex-1" />
						<h2 className="!text-white text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap">
							Get in Touch
						</h2>
						<div className="h-[1px] bg-white/10 flex-1" />
					</div>

					<div className="grid lg:grid-cols-12 gap-8">
						{/* Info Cards */}
						<div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
							{[
								{
									icon: <MapPin size={24} />,
									title: "Our Headquarters",
									details: ["TechOps Global, Inc.", "200 Princeton Hightstown Rd", "Suite 201", "Princeton, NJ 08540", "USA"]
								},
								{
									icon: <Phone size={24} />,
									title: "Call Us",
									details: ["(609) 555-0123", "", "Toll Free:", "(833) TECH-OPS", "(833-832-4677)"]
								},
								{
									icon: <Mail size={24} />,
									title: "Email Us",
									details: ["hello@techopsglobal.com", "info@techopsglobal.com", "", "Investor Relations", "investors@techopsglobal.com"]
								},
								{
									icon: <Clock size={24} />,
									title: "Business Hours",
									details: ["Monday – Friday", "8:00 AM – 6:00 PM EST", "", "Saturday – Sunday", "By Appointment"]
								}
							].map((card, i) => (
								<div key={i} className="bg-[#0d0f15] border border-white/10 rounded-xl p-8 hover:border-[#ff7a00]/30 transition-all group">
									<div className="text-[#ff7a00] mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
									<h4 className="!text-white text-[20px] font-bold mb-4">{card.title}</h4>
									<div className="space-y-1">
										{card.details.map((line, j) => (
											<p key={j} className="text-gray-400 text-[15px] leading-relaxed">{line}</p>
										))}
									</div>
								</div>
							))}
						</div>

						{/* Map */}
						<div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-white/10 min-h-[400px]">
							<div className="absolute inset-0 bg-[#0a0c11]">
								{/* Placeholder for Map */}
								<div className="w-full h-full bg-[#111318] flex items-center justify-center">
									<div className="relative">
										<div className="w-12 h-12 bg-[#ff7a00] rounded-full flex items-center justify-center animate-pulse">
											<MapPin size={24} className="text-black" />
										</div>
										<div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded text-white text-[14px] font-bold whitespace-nowrap shadow-2xl">
											Princeton, NJ
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ===== 3. OUR LOCATIONS SECTION ===== */}
			<section className="py-24 bg-[#05070b] border-b border-white/5">
				<div className="w-full px-[50px]">
					<div className="flex items-center gap-6 mb-16">
						<div className="h-[1px] bg-white/10 flex-1" />
						<h2 className="!text-white text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap">
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
								img: "/unsplash/princeton.jpg"
							},
							{
								city: "Houston, Texas",
								type: "Office",
								address: ["5444 Westheimer Rd", "Suite 1000", "Houston, TX 77056", "USA"],
								img: "/unsplash/houston.jpg"
							},
							{
								city: "Los Angeles, California",
								type: "Office",
								address: ["1900 Avenue of the Stars", "Suite 200", "Los Angeles, CA 90067", "USA"],
								img: "/unsplash/la.jpg"
							}
						].map((loc, i) => (
							<div key={i} className="bg-[#0d0f15] border border-white/10 rounded-xl overflow-hidden group hover:border-[#ff7a00]/30 transition-all">
								<div className="h-[240px] overflow-hidden relative bg-[#1a1c23]">
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] to-transparent opacity-60" />
									<div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-[24px] uppercase tracking-widest">
										{loc.city.split(',')[0]}
									</div>
								</div>
								<div className="p-8">
									<h4 className="!text-white text-[22px] font-extrabold mb-1">{loc.city}</h4>
									<div className="text-[#ff7a00] text-[12px] font-bold tracking-wider uppercase mb-6">{loc.type}</div>
									<div className="space-y-1">
										{loc.address.map((line, j) => (
											<p key={j} className="text-gray-400 text-[16px] leading-relaxed">{line}</p>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== 4. CTA SECTION ===== */}
			<section className="py-20 bg-[#05070b]">
				<div className="w-full px-[50px]">
					<div
						className="relative border border-white/10 rounded-2xl p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
						style={{
							backgroundImage: "linear-gradient(to right, rgba(10,12,18,0.95) 0%, rgba(10,12,18,0.8) 100%), url('/unsplash/cta-bg.jpg')",
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
					>
						<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00]" />

						<div className="lg:w-1/2 relative z-10">
							<h2 className="!text-white text-[36px] lg:text-[48px] font-extrabold leading-[1.1] mb-6">
								Let's Talk About<br />Your Project
							</h2>
							<p className="text-gray-300 text-[18px] leading-relaxed max-w-xl">
								Whether you have a single site or a portfolio, we'll help you transform your real estate into high-performing energy assets with zero capex and maximum returns.
							</p>
						</div>

						<div className="lg:w-1/2 relative z-10 w-full">
							<div className="grid sm:grid-cols-2 gap-6 mb-10">
								{[
									"Zero Capex", "Sustainable Impact", "Long-Term Value", "Maximum Performance"
								].map((item, i) => (
									<div key={i} className="flex items-center gap-3 text-white text-[17px] font-bold tracking-wider">
										<CheckCircle2 size={20} className="text-[#ff7a00]" /> {item}
									</div>
								))}
							</div>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold px-10 py-5 rounded-lg text-[16px] uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(255,122,0,0.4)]"
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
