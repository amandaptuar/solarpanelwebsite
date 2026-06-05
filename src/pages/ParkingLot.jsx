import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle2, ArrowRight, DollarSign, Activity, Zap,
    Leaf, TrendingUp, Shield, PlayCircle, Car,
    BatteryCharging, BarChart3, Search, Cpu, Wrench, Settings,
    Calculator, Building, ShoppingBag, Hospital, GraduationCap,
    Trophy, Plane, Hotel, Briefcase
} from "lucide-react";

export default function ParkingLot() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "TechOps Global | Solar Parking Lot Solutions";
    }, []);

    return (
        <div className="min-h-screen bg-[#05070b] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

            {/* ===== 1. HERO SECTION ===== */}
            <section
                className="relative min-h-[70vh] flex flex-col justify-center pt-28 pb-16 border-b border-white/5 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(5,7,11,0.96) 30%, rgba(5,7,11,0.75) 60%, rgba(5,7,11,0.45) 100%), url('/solutiondemo/parking-solar.png')"
                }}
            >
                {/* Breadcrumb */}
                <div className="w-full px-[50px] mb-8">
                    <div className="flex items-center gap-2 type-body-sm font-bold text-gray-400 tracking-wider uppercase">
                        <Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-gray-400">Solutions</span>
                        <span>&gt;</span>
                        <span className="!text-[#ff7a00]">Parking Lots</span>
                    </div>
                </div>

                <div className="w-full px-[50px] relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left copy */}
                        <div className="lg:col-span-7">
                            <div className="mb-4 text-[#ff7a00] text-[18px] font-bold tracking-[3px] uppercase">
                                Commercial Solar Carports
                            </div>
                            <h1 className="!text-white text-[60px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6">
                                Transform Underutilized<br />
                                Parking Lots Into<br />
                                <span className="text-[#ff7a00]">Revenue-Generating Energy Assets</span>
                            </h1>
                            <p className="text-[20px] lg:text-[24px] text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
                                Convert parking spaces into high-performance solar carports that generate clean energy, reduce operating costs, provide vehicle shade, and create long-term recurring revenue.
                            </p>
                            <div className="flex flex-wrap items-center gap-5">
                                <Link
                                    to="/contact"
                                    className="px-7 py-3.5 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold tracking-wider transition-all flex items-center gap-2 text-[16px] uppercase shadow-[0_4px_25px_rgba(255,122,0,0.35)]"
                                >
                                    GET SITE ASSESSMENT <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="#how-it-works"
                                    className="px-7 py-3.5 rounded border-2 border-white/50 hover:border-white text-white hover:bg-white/5 font-extrabold tracking-wider transition-all flex items-center gap-3 text-[16px] uppercase"
                                    style={{ textDecoration: 'none' }}
                                >
                                    SEE HOW IT WORKS <PlayCircle size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Right feature cards */}
                        <div className="lg:col-span-5 flex flex-col gap-4 mt-10 lg:mt-0 relative">
                            {[
                                { icon: <DollarSign size={20} />, color: "#8dff4d", title: "ZERO CAPEX", desc: "We fund, build, own & operate." },
                                { icon: <TrendingUp size={20} />, color: "#8dff4d", title: "ENERGY COST SAVINGS", desc: "Reduce utility bills & peak demand." },
                                { icon: <Car size={20} />, color: "#ff7a00", title: "EV CHARGING READY", desc: "Support EV charging infrastructure." },
                                { icon: <Leaf size={20} />, color: "#ff7a00", title: "ESG LEADERSHIP", desc: "Meet sustainability & carbon goals." },
                            ].map((card, i) => (
                                <div
                                    key={i}
                                    className="bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl transition-all hover:border-white/20"
                                >
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                            style={{ border: `2px solid ${card.color}`, color: card.color, background: `${card.color}0d` }}
                                        >
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h4 className="!text-white font-extrabold text-[18px] tracking-wide uppercase leading-tight">{card.title}</h4>
                                            <p className="text-[15px] text-gray-400 mt-0.5 leading-snug">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 2. THE PARKING LOT ADVANTAGE ===== */}
            <section className="py-4 bg-[#07090e] border-b border-white/5 relative">
                <div className="w-full px-[50px]">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column */}
                        <div className="lg:col-span-4">
                            <div className="mb-4 text-[#ff7a00] text-[18px] font-bold tracking-[3px] uppercase">
                                THE PARKING LOT ADVANTAGE
                            </div>
                            <h2 className="!text-white text-[40px] lg:text-[48px] font-extrabold leading-tight mb-6">
                                Monetize Every Parking Space Without Losing Functionality
                            </h2>
                            <p className="text-gray-400 text-[18px] leading-relaxed font-light mb-10">
                                TechOps Global develops solar carports that provide energy generation, weather protection, and EV readiness while maximizing asset value.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <Shield size={20} />, title: "SHADE & VEHICLE PROTECTION", desc: "Protect vehicles from sun, rain, and snow." },
                                    { icon: <BatteryCharging size={20} />, title: "EV CHARGING INTEGRATION", desc: "Future-ready charging infrastructure for tenants and visitors." },
                                    { icon: <Zap size={20} />, title: "INSTANT SOLAR POWER PLANT", desc: "Transform parking lots into energy-producing assets." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[20px] tracking-wide uppercase">{item.title}</h4>
                                            <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Middle Column - Real Parking Solar Image */}
                        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[500px]">
                            <img
                                src="/solutiondemo/parking-solar.png"
                                alt="Solar Carport"
                                className="w-full h-full object-cover rounded-2xl"
                                style={{ minHeight: '500px' }}
                            />
                            {/* Overlay callouts */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl pointer-events-none" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex gap-4">
                                    <div className="bg-black/60 backdrop-blur-sm border border-[#8dff4d]/30 rounded-xl px-4 py-3 flex-1">
                                        <div className="text-[#8dff4d] font-bold text-[12px] uppercase tracking-widest mb-1">Solar Carport Structures</div>
                                        <div className="text-gray-400 text-[11px]">High-efficiency panels with durable steel construction.</div>
                                    </div>
                                    <div className="bg-black/60 backdrop-blur-sm border border-[#8dff4d]/30 rounded-xl px-4 py-3 flex-1">
                                        <div className="text-[#8dff4d] font-bold text-[12px] uppercase tracking-widest mb-1">EV Charging Stations</div>
                                        <div className="text-gray-400 text-[11px]">Integrated charging for a sustainable future.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-3 flex flex-col justify-center gap-12 border-l border-white/5 pl-8">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                                    <BatteryCharging size={20} />
                                </div>
                                <div>
                                    <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[18px] tracking-wide uppercase">BATTERY STORAGE CONTAINER</h4>
                                    <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">Store energy for peak usage and backup.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                                    <BarChart3 size={20} />
                                </div>
                                <div>
                                    <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[18px] tracking-wide uppercase">SMART ENERGY MONITORING</h4>
                                    <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">Real-time performance tracking & analytics.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 3. KEY METRICS ===== */}
            <section className="py-4 bg-[#05070b] relative">
                <div className="w-full px-[50px]">
                    <div className="grid md:grid-cols-4 gap-6 border border-white/10 rounded-2xl bg-[#0a0c10] p-8 lg:p-10 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl">
                        {[
                            { icon: <Car size={26} />, value: "50,000+", label: "PARKING SPACES SOLARIZED" },
                            { icon: <Zap size={26} />, value: "20–60%", label: "ENERGY COST REDUCTION" },
                            { icon: <DollarSign size={26} />, value: "15–25", label: "YEAR REVENUE STREAM" },
                            { icon: <Leaf size={26} />, value: "100%", label: "CLEAN ENERGY GENERATION" },
                        ].map((m, i) => (
                            <div key={i} className="flex items-center gap-5 p-2 md:pl-8 first:pl-2">
                                <div className="w-[60px] h-[60px] rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                                    {m.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="!text-white text-[40px] font-extrabold tracking-tight leading-none mb-1">{m.value}</h3>
                                    <div className="text-white text-[14px] font-bold tracking-widest uppercase leading-snug">{m.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 4. DESIGNED FOR EVERY PROPERTY OWNER ===== */}
            <section className="py-4 bg-[#07090e] border-t border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            DESIGNED FOR EVERY PROPERTY OWNER
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
                        {[
                            { icon: <Building size={24} />, label: "Commercial Campuses" },
                            { icon: <ShoppingBag size={24} />, label: "Shopping Centers" },
                            { icon: <Hospital size={24} />, label: "Hospitals" },
                            { icon: <GraduationCap size={24} />, label: "Universities" },
                            { icon: <Trophy size={24} />, label: "Stadiums" },
                            { icon: <Plane size={24} />, label: "Airports" },
                            { icon: <Hotel size={24} />, label: "Hotels" },
                            { icon: <Briefcase size={24} />, label: "Corporate Parks" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center group cursor-default">
                                <div className="w-16 h-16 rounded-xl bg-[#0d0f15] border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#ff7a00] group-hover:border-[#ff7a00]/30 transition-all mb-4">
                                    {item.icon}
                                </div>
                                <div className="text-gray-400 text-[14px] font-bold uppercase tracking-wider group-hover:text-white transition-colors">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 5. WHY SOLAR CARPORTS? ===== */}
            <section className="py-4 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            WHY SOLAR CARPORTS?
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <DollarSign size={32} />, title: "Reduce Energy Costs", desc: "Generate on-site electricity and lower utility bills.", img: "/solutiondemo/office-solar.png" },
                            { icon: <TrendingUp size={32} />, title: "Increase Property Value", desc: "Enhance asset value and attract sustainability-focused tenants.", img: "/solutiondemo/retail-solar.png" },
                            { icon: <Car size={32} />, title: "Enhance Customer Experience", desc: "Provide shaded, comfortable parking and EV charging convenience.", img: "/solutiondemo/parking-solar.png" },
                            { icon: <Leaf size={32} />, title: "Support Sustainability Goals", desc: "Decrease carbon footprint and meet ESG commitments.", img: "/solutiondemo/industrial-solar.png" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col bg-[#0d0f15] border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff7a00]/30 transition-all group">
                                <div className="h-44 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="text-[#ff7a00] mb-4">{item.icon}</div>
                                    <h3 className="!text-white text-[20px] font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-[15px] leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 6. CASE STUDY & HOW IT WORKS ===== */}
            <section className="py-4 bg-[#07090e]" id="how-it-works">
                <div className="w-full px-[50px]">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Case Study */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#0f1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="text-[#8dff4d] text-[14px] font-bold tracking-[3px] uppercase mb-4">CASE STUDY</div>
                                    <h3 className="!text-white text-[24px] lg:text-[32px] font-extrabold mb-4 leading-tight">
                                        Regional Shopping Mall – Texas
                                    </h3>
                                    <p className="text-gray-400 text-[18px] leading-relaxed mb-8 font-light">
                                        2,500 parking spaces transformed into a solar carport energy hub.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "$450,000 annual energy savings",
                                            "4 MW solar generation",
                                            "EV charging integration",
                                            "35% utility bill reduction",
                                            "Improved customer satisfaction"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white text-[18px] font-medium">
                                                <CheckCircle2 size={16} className="text-[#ff7a00] shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#ff7a00] hover:bg-[#ff7a00]/10 font-bold tracking-wider text-[16px] uppercase transition-all w-fit rounded"
                                        style={{ color: '#ff7a00', textDecoration: 'none' }}
                                    >
                                        VIEW CASE STUDY <ArrowRight size={14} />
                                    </Link>
                                </div>
                                <div
                                    className="w-full md:w-1/2 min-h-[400px] bg-cover bg-center border-l border-white/10"
                                    style={{ backgroundImage: "url('/solutiondemo/parking-solar.png')" }}
                                />
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="lg:col-span-4 pl-0 lg:pl-6 pt-6 lg:pt-0">
                            <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase mb-8">HOW IT WORKS</div>
                            <div className="flex flex-col gap-8">
                                {[
                                    { num: 1, title: "Site Assessment", desc: "Analyze parking layout, structure, and energy requirements." },
                                    { num: 2, title: "Custom Design", desc: "Engineering of solar carport structures tailored to your needs." },
                                    { num: 3, title: "Build & Commission", desc: "Professional installation with minimal disruption to operations." },
                                    { num: 4, title: "Operate & Optimize", desc: "AI-driven monitoring maximizes performance and savings." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-10 h-10 rounded-full border border-[#ff7a00] text-[#ff7a00] flex items-center justify-center font-bold text-[18px] shrink-0">
                                            {step.num}
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="!text-white text-white font-bold text-[20px] mb-1.5">{step.title}</h4>
                                            <p className="text-gray-400 text-[18px] leading-relaxed font-light">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 7. SOLAR + EV CHARGING ===== */}
            <section className="py-4 bg-[#05070b] border-t border-white/5">
                <div className="w-full px-[50px]">
                    <div
                        className="relative border border-white/10 rounded-2xl p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
                        style={{
                            backgroundImage: "linear-gradient(to right, rgba(10,12,18,0.95) 0%, rgba(10,12,18,0.8) 100%), url('/solutiondemo/parking-solar.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="lg:w-1/2 relative z-10">
                            <h2 className="!text-white text-[36px] lg:text-[48px] font-extrabold leading-[1.1] mb-6">
                                Solar + EV Charging =<br />
                                <span className="text-[#ff7a00]">Future-Ready Parking Infrastructure</span>
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-10">
                                {[
                                    { icon: <Zap size={20} />, label: "Fast EV Charging" },
                                    { icon: <Briefcase size={20} />, label: "Fleet Charging Solutions" },
                                    { icon: <DollarSign size={20} />, label: "Smart Payment Systems" },
                                    { icon: <Activity size={20} />, label: "Energy Management" },
                                    { icon: <BatteryCharging size={20} />, label: "Battery Backup Integration" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-3">
                                        <div className="text-[#ff7a00]">{item.icon}</div>
                                        <div className="text-white text-[11px] font-bold uppercase tracking-wider">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-end relative z-10 w-full">
                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold text-[18px] tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(255,122,0,0.4)] w-full text-center md:w-auto flex items-center justify-center gap-2"
                            >
                                GET EV CHARGING ASSESSMENT <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 8. CALCULATOR SECTION ===== */}
            <section className="py-4 bg-[#07090e] border-t border-white/5">
                <div className="w-full px-[50px]">
                    <div className="bg-[#0d0f15] border border-white/10 rounded-2xl p-10 lg:p-12 shadow-2xl">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-4 flex items-center gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-[#ff7a00]/10 border border-[#ff7a00]/20 flex items-center justify-center text-[#ff7a00] shrink-0">
                                    <Calculator size={40} />
                                </div>
                                <div>
                                    <h2 className="!text-white text-[28px] font-extrabold leading-tight mb-2">What Could Your Parking Lot Generate?</h2>
                                    <p className="text-gray-400 text-[16px]">Get an instant estimate of potential savings and revenue.</p>
                                </div>
                            </div>
                            <div className="lg:col-span-8 grid md:grid-cols-4 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Property Type</label>
                                    <select className="bg-[#05070b] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff7a00] outline-none">
                                        <option>Select Type</option>
                                        <option>Commercial</option>
                                        <option>Retail</option>
                                        <option>Industrial</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Number of Parking Spaces</label>
                                    <input type="number" placeholder="Enter Spaces" className="bg-[#05070b] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff7a00] outline-none" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-500 text-[12px] font-bold uppercase tracking-wider">Annual Energy Usage</label>
                                    <input type="number" placeholder="Enter kWh" className="bg-[#05070b] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff7a00] outline-none" />
                                </div>
                                <div className="flex items-end">
                                    <button className="w-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold py-3 rounded-lg transition-all uppercase tracking-wider text-[14px]">
                                        CALCULATE POTENTIAL SAVINGS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 9. FINAL CTA ===== */}
            <section className="py-4 bg-[#05070b]">
                <div className="w-full px-[50px]">
                    <div
                        className="relative border border-white/10 rounded-2xl p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
                        style={{
                            backgroundImage: "linear-gradient(to right, rgba(10,12,18,0.97) 0%, rgba(10,12,18,0.88) 55%, rgba(10,12,18,0.68) 100%), url('/solutiondemo/parking-solar.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00]" />
                        <div className="lg:w-1/2 relative z-10">
                            <h2 className="!text-white text-[36px] lg:text-[48px] font-extrabold leading-[1.1] mb-6">
                                Your Parking Lot. Our Technology.<br />
                                <span className="text-[#ff7a00]">Shared Success.</span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2 relative z-10 w-full">
                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    "Zero Capex", "Zero Risk", "Maximum Returns", "EV Ready"
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
