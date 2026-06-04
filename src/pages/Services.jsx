import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Sun, Wind, Battery, Factory, Lightbulb, HardHat,
	CheckCircle2, ArrowRight, Phone, Mail, ChevronRight
} from "lucide-react";

function Services() {
	const [formName, setFormName] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = "TechOps Global | Solar Energy Systems";
	}, []);

	return (
		<div className="min-h-screen bg-[#05070b] text-white font-sans selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

			{/* ===== 1. HERO SECTION ===== */}
			<section
				className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-cover bg-center"
				style={{
					backgroundImage: "linear-gradient(to right, rgba(5,7,11,0.9) 0%, rgba(5,7,11,0.7) 50%, rgba(5,7,11,0.4) 100%), url('/img/team-technicians-carrying-photovoltaic-solar-modul-2026-01-09-10-53-57-utc.jpg')"
				}}
			>
				<div className="w-full px-[50px] relative z-10">
					<div className="flex items-center gap-2 type-body-sm font-bold text-gray-400 tracking-wider uppercase mb-8">
						<Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
						<ChevronRight size={14} />
						<span className="text-[#ff7a00]">Solar Energy Systems</span>
					</div>

					<div className="max-w-3xl">
						<div className="mb-4 text-[#ff7a00] type-body font-bold tracking-[3px] uppercase">
							OUR SOLUTIONS
						</div>
						<h1 className="!text-white type-hero mb-6 leading-[1.1]">
							Comprehensive Energy &<br />
							<span className="text-[#ff7a00]">Infrastructure Services</span>
						</h1>
						<p className="type-body-lg text-gray-300 mb-10 max-w-2xl">
							TechOps Global provides renewable energy, solar power, wind systems, battery storage, and industrial infrastructure solutions across the USA and global markets.
						</p>
						<Link
							to="/contact"
							className="inline-flex items-center gap-3 px-8 py-4 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold text-[16px] uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(255,122,0,0.4)]"
						>
							GET A QUOTE <ArrowRight size={18} />
						</Link>
					</div>
				</div>
			</section>

			{/* ===== 2. SERVICES GRID ===== */}
			<section className="py-24 bg-[#07090e] border-b border-white/5">
				<div className="w-full px-[50px]">
					<div className="flex items-center gap-6 mb-16">
						<div className="h-[1px] bg-white/10 flex-1" />
						<h2 className="!text-white text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
							CORE CAPABILITIES
						</h2>
						<div className="h-[1px] bg-white/10 flex-1" />
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ icon: <Sun size={32} />, title: "Solar Energy Systems", desc: "Custom solar power solutions for commercial, industrial, and utility-scale applications.", img: "/unsplash/service-solar.jpg" },
							{ icon: <Wind size={32} />, title: "Wind Power Infrastructure", desc: "Efficient wind energy systems designed for long-term performance and sustainability.", img: "/unsplash/service-wind.jpg" },
							{ icon: <Battery size={32} />, title: "Battery Energy Storage", desc: "Advanced storage systems for grid stability, backup power, and energy optimization.", img: "/unsplash/service-battery.jpg" },
							{ icon: <Factory size={32} />, title: "Industrial Power Operations", desc: "Reliable plant operations, maintenance, and performance management.", img: "/unsplash/service-industrial.jpg" },
							{ icon: <Lightbulb size={32} />, title: "Engineering & Consulting", desc: "Strategic guidance for energy planning, design, compliance, and execution.", img: "/unsplash/service-engineering.jpg" },
							{ icon: <HardHat size={32} />, title: "EPC Project Support", desc: "End-to-end engineering, procurement, and construction management solutions.", img: "/unsplash/service-epc.jpg" },
						].map((service, i) => (
							<div key={i} className="bg-[#0d0f15] border border-white/10 rounded-xl overflow-hidden group hover:border-[#ff7a00]/30 transition-all shadow-xl">
								<div className="aspect-video overflow-hidden relative bg-[#111318]">
									<img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
									<div className="absolute inset-0 bg-gradient-to-t from-[#0d0f15] to-transparent opacity-80" />
									<div className="absolute bottom-4 left-6 text-[#ff7a00]">
										{service.icon}
									</div>
								</div>
								<div className="p-8 pt-4">
									<h3 className="!text-white font-extrabold text-[22px] mb-3">{service.title}</h3>
									<p className="text-gray-400 text-[16px] leading-relaxed mb-6 font-light">{service.desc}</p>
									<Link to="/contact" className="inline-flex items-center gap-2 text-[#ff7a00] text-[14px] font-bold tracking-wider uppercase hover:underline">
										EXPLORE SOLUTIONS <ArrowRight size={14} />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== 3. WHY CHOOSE US & APPOINTMENT ===== */}
			<section className="py-24 bg-[#05070b] border-b border-white/5">
				<div className="w-full px-[50px]">
					<div className="grid lg:grid-cols-12 gap-16 items-center">

						{/* Left Content */}
						<div className="lg:col-span-6">
							<div className="mb-4 text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase">
								WHY CHOOSE US
							</div>
							<h2 className="!text-white text-[36px] lg:text-[48px] font-extrabold leading-[1.1] mb-6">
								Powering the Future Through Smart Energy Solutions
							</h2>
							<p className="text-gray-400 text-[18px] leading-relaxed mb-10 font-light">
								TechOps Global is a forward-thinking energy solutions company committed to building reliable and sustainable power systems for businesses, communities, and governments. We combine technical excellence with strategic execution to deliver measurable results.
							</p>

							<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
								{[
									"Experienced Industry Leadership",
									"Proven Project Delivery",
									"Safety & Compliance Focused",
									"Innovative Clean Energy",
									"Cost-Efficient Operations",
									"Global Expertise, Local Execution"
								].map((item, i) => (
									<div key={i} className="flex items-center gap-3 text-white text-[16px] font-medium">
										<CheckCircle2 size={18} className="text-[#ff7a00] shrink-0" />
										<span>{item}</span>
									</div>
								))}
							</div>

							<div className="flex items-center gap-6 p-6 bg-[#0d0f15] border border-white/10 rounded-xl w-fit">
								<div className="w-12 h-12 rounded-full bg-[#ff7a00]/10 flex items-center justify-center text-[#ff7a00]">
									<Phone size={24} />
								</div>
								<div>
									<div className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">Emergency Call</div>
									<div className="text-white font-bold text-[20px]">+232 33 448 065</div>
								</div>
							</div>
						</div>

						{/* Right Form */}
						<div className="lg:col-span-6">
							<div className="bg-[#0d0f15] border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
								<div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7a00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

								<h3 className="!text-white text-[28px] font-extrabold mb-8 relative z-10">Make an Appointment</h3>

								<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" className="space-y-5 relative z-10">
									<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
									<input type="hidden" name="_subject" value={`New Appointment Request By ${formName || 'a User'} From Techops Global`} />

									<div className="grid sm:grid-cols-2 gap-5">
										<div>
											<input
												type="text"
												name="name"
												placeholder="Full Name*"
												required
												onChange={(e) => setFormName(e.target.value)}
												className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] outline-none transition-all"
											/>
										</div>
										<div>
											<input
												type="email"
												name="email"
												placeholder="Email Address*"
												required
												className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] outline-none transition-all"
											/>
										</div>
									</div>

									<div>
										<select
											name="subject"
											required
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white focus:border-[#ff7a00] outline-none transition-all appearance-none"
										>
											<option value="" disabled selected>Select Service*</option>
											<option value="Commercial Solar">Commercial Solar</option>
											<option value="Battery Storage">Battery Storage</option>
											<option value="Wind Energy">Wind Energy</option>
											<option value="Solar Maintenance">Solar Maintenance</option>
											<option value="Energy Audits">Energy Audits</option>
										</select>
									</div>

									<div>
										<textarea
											name="message"
											placeholder="Your Message*"
											required
											rows="4"
											className="w-full bg-[#05070b] border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-600 focus:border-[#ff7a00] outline-none transition-all resize-none"
										></textarea>
									</div>

									<button
										type="submit"
										className="w-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold py-4 rounded-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2"
									>
										SCHEDULE APPOINTMENT <ArrowRight size={18} />
									</button>
								</form>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* ===== 4. SUBSCRIBE SECTION ===== */}
			<section className="py-20 bg-[#07090e]">
				<div className="w-full px-[50px]">
					<div className="bg-[#0d0f15] border border-white/10 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
						<div className="md:w-1/2">
							<h2 className="!text-white text-[32px] lg:text-[40px] font-extrabold leading-[1.1] mb-4">
								Subscribe For<br />
								<span className="text-[#ff7a00]">Exclusive Updates</span>
							</h2>
							<p className="text-gray-400 text-[16px]">Stay informed about the latest in renewable energy and infrastructure.</p>
						</div>
						<div className="md:w-1/2 w-full">
							<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" className="flex flex-col gap-4">
								<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
								<input type="hidden" name="_subject" value="New Newsletter Subscription From Techops Global" />

								<div className="flex relative">
									<input
										type="email"
										name="email"
										placeholder="Your Email Address..."
										required
										className="w-full bg-[#05070b] border border-white/10 rounded-lg pl-6 pr-16 py-5 text-white placeholder:text-gray-600 focus:border-[#ff7a00] outline-none transition-all"
									/>
									<button
										type="submit"
										className="absolute right-2 top-2 bottom-2 w-12 bg-[#ff7a00] hover:bg-[#ff8a1c] text-black rounded flex items-center justify-center transition-colors"
									>
										<Mail size={20} />
									</button>
								</div>
								<div className="flex items-center gap-2 text-gray-500 text-[13px]">
									<input type="checkbox" id="reviewcheck" required className="accent-[#ff7a00]" />
									<label htmlFor="reviewcheck">I agree to the <Link to="/contact" className="text-white hover:text-[#ff7a00] underline">Privacy Policy</Link></label>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}

export default Services;
