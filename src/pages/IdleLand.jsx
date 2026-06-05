import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Map, CheckCircle2, ArrowRight, DollarSign, Activity, Zap,
    Leaf, TrendingUp, Shield, Trees, PlayCircle, BatteryCharging,
    Globe, Sun, Users, BarChart3, Factory
} from "lucide-react";

export default function IdleLand() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "TechOps Global | Idle Land & Buffer Acreage";
    }, []);

    return (
        <div className="min-h-screen bg-[#05070b] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

            {/* ===== 1. HERO SECTION ===== */}
            <section
                className="relative min-h-[70vh] flex flex-col justify-center pt-28 pb-16 border-b border-white/5 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(5,7,11,0.96) 30%, rgba(5,7,11,0.75) 60%, rgba(5,7,11,0.40) 100%), url('/unsplash/buffer-land.jpg')"
                }}
            >
                {/* Radial grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
                {/* Breadcrumb */}
                <div className="w-full px-6 md:px-[50px] mb-8">
                    <div className="flex items-center gap-2 type-body-sm font-bold text-gray-400 tracking-wider uppercase">
                        <Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-gray-400">VPP Solution</span>
                        <span>&gt;</span>
                        <span className="!text-[#ff7a00]">Idle Land</span>
                    </div>
                </div>

                <div className="w-full px-6 md:px-[50px] relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Main copy */}
                        <div className="lg:col-span-7">
                            <div className="mb-4 text-[#ff7a00] type-body font-bold tracking-[3px] uppercase">
                                Monetize Unused Space.
                            </div>
                            <h1 className="!text-white type-hero mb-6">
                                Idle Land Solutions<br />
                                <span className="!text-[#ff7a00]">Turning Unused Space<br />into Revenue.</span>
                            </h1>
                            <p className="type-body-lg text-gray-300 mb-10 max-w-2xl">
                                TechOps Global partners with landowners and commercial entities to develop, build, and operate high-performance energy projects on idle land and buffer acreage, creating long-term value and sustainable impact.
                            </p>

                            <div className="flex flex-wrap items-center gap-5">
                                <Link
                                    to="/contact"
                                    className="px-7 py-3.5 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold tracking-wider transition-all flex items-center gap-2 type-body-sm uppercase shadow-[0_4px_25px_rgba(255,122,0,0.35)]"
                                >
                                    GET SITE ASSESSMENT <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="#how-it-works"
                                    className="px-7 py-3.5 rounded border-2 border-white/50 hover:border-white text-white hover:bg-white/5 font-extrabold tracking-wider transition-all flex items-center gap-3 type-body-sm uppercase"
                                    style={{ textDecoration: "none" }}
                                >
                                    SEE HOW IT WORKS <PlayCircle size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Right: Feature cards */}
                        <div className="lg:col-span-5 flex flex-col gap-6 mt-10 lg:mt-0">
                            {[
                                { icon: <DollarSign size={20} />, color: "#8dff4d", title: "ZERO CAPEX", desc: "We fund, build, own & operate." },
                                { icon: <Activity size={20} />, color: "#8dff4d", title: "LONG-TERM INCOME", desc: "Monetize unused buffer acreage." },
                                { icon: <Zap size={20} />, color: "#ff7a00", title: "GRID RESILIENCE", desc: "Strengthen the local energy grid." },
                                { icon: <Leaf size={20} />, color: "#ff7a00", title: "SUSTAINABLE IMPACT", desc: "Clean energy for a better tomorrow." },
                            ].map((card, i) => (
                                <div
                                    key={i}
                                    className="bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transition-all hover:border-white/20"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                            style={{ border: `2px solid ${card.color}`, color: card.color, background: `${card.color}0d` }}
                                        >
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h4 className="!text-white type-card tracking-wide uppercase">{card.title}</h4>
                                            <p className="type-body text-gray-400 mt-1">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 2. THE IDLE LAND ADVANTAGE ===== */}
            <section className="py-4 bg-[#07090e] border-b border-white/5">
                <div className="w-full px-6 md:px-[50px]">
                    {/* Title row */}
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[16px] sm:text-[22px] md:text-[24px] font-extrabold tracking-[2px] sm:tracking-[4px] uppercase text-center whitespace-normal md:whitespace-nowrap">
                            THE IDLE LAND ADVANTAGE
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    {/* 5-column advantages */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                        {[
                            { icon: <Map size={24} />, title: "Monetize Unused Space", desc: "Turn buffer zones and idle parcels into steady revenue streams." },
                            { icon: <DollarSign size={24} />, title: "Zero Upfront Cost", desc: "We fully finance, build, and operate the energy systems." },
                            { icon: <TrendingUp size={24} />, title: "Long-Term Value", desc: "Secure 15–30 years of predictable lease income." },
                            { icon: <Shield size={24} />, title: "Minimal Impact", desc: "Projects designed to coexist with your core operations." },
                            { icon: <Globe size={24} />, title: "ESG Leadership", desc: "Support decarbonisation and meet sustainability goals." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-4">
                                <div className="w-14 h-14 rounded-full border-2 border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center bg-[#8dff4d]/5 mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="!text-white font-bold text-[20px] mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-[17px] leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats strip */}
                    <div className="grid md:grid-cols-5 gap-0 border border-white/10 rounded-2xl bg-[#0a0c10] divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl overflow-hidden">
                        {[
                            { icon: <Map size={26} strokeWidth={1.5} />, value: "5K+", label: "Acres Evaluated" },
                            { icon: <BarChart3 size={26} strokeWidth={1.5} />, value: "50+", label: "Land Projects" },
                            { icon: <Activity size={26} strokeWidth={1.5} />, value: "15–30 Years", label: "Lease Contracts" },
                            { icon: <Leaf size={26} strokeWidth={1.5} />, value: "500K+", label: "Tons CO₂ Offset" },
                            { icon: <Zap size={26} strokeWidth={1.5} />, value: "100%", label: "Clean Generation" },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-5 p-5 sm:p-7">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="!text-white text-[24px] sm:text-[32px] font-extrabold tracking-tight leading-none mb-1">{s.value}</h3>
                                    <div className="!text-white text-[11px] sm:text-[13px] font-bold tracking-widest uppercase leading-snug text-gray-400">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 3. SOLUTIONS FOR EVERY PROPERTY ===== */}
            <section className="py-4 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-6 md:px-[50px]">
                    <div className="flex items-center gap-6 mb-14">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[16px] sm:text-[22px] md:text-[24px] font-extrabold tracking-[2px] sm:tracking-[4px] uppercase text-center whitespace-normal md:whitespace-nowrap">
                            SOLUTIONS FOR IDLE LAND
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                img: "/solutiondemo/multitenant-solar.png",
                                title: "Ground-Mount Solar",
                                desc: "Cost-effective, scalable solar arrays ideal for large land parcels.",
                                bullets: ["High energy yield", "Low operational impact", "Proven technology"],
                            },
                            {
                                img: "/solutiondemo/industrial-solar.png",
                                title: "Community Solar",
                                desc: "Local clean energy access for communities and municipalities.",
                                bullets: ["Community engagement", "Local economic benefits", "Grid support"],
                            },
                            {
                                img: "/solutiondemo/cold-storage-solar.png",
                                title: "Solar + Battery Storage",
                                desc: "Store excess energy and maximize value with hybrid solutions.",
                                bullets: ["Energy arbitrage", "Peak shaving", "Grid stability"],
                            },
                            {
                                img: "/solutiondemo/data-center-solar.png",
                                title: "VPP Integration",
                                desc: "Participate in Virtual Power Plant and energy capacity markets.",
                                bullets: ["Demand response", "Capacity markets", "Ancillary services"],
                            },
                        ].map((card, i) => (
                            <div key={i} className="bg-[#0d0f15] border border-white/8 rounded-xl overflow-hidden group hover:border-[#ff7a00]/30 transition-all">
                                <div className="h-[200px] overflow-hidden">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="!text-white font-extrabold text-[20px] mb-2">{card.title}</h3>
                                    <p className="text-gray-400 text-[16px] leading-relaxed mb-5">{card.desc}</p>
                                    <ul className="space-y-2 mb-6">
                                        {card.bullets.map((b, j) => (
                                            <li key={j} className="flex items-center gap-2 text-white text-[15px]">
                                                <CheckCircle2 size={14} className="text-[#ff7a00] shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-[#ff7a00] text-[14px] font-bold tracking-wider uppercase hover:underline"
                                    >
                                        EXPLORE SOLUTION <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 4. HOW IT WORKS ===== */}
            <section className="py-4 bg-[#07090e] border-b border-white/5" id="how-it-works">
                <div className="w-full px-6 md:px-[50px]">
                    <div className="flex items-center gap-6 mb-14">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[16px] sm:text-[22px] md:text-[24px] font-extrabold tracking-[2px] sm:tracking-[4px] uppercase text-center whitespace-normal md:whitespace-nowrap">
                            HOW IT WORKS
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {[
                            { num: 1, title: "Site Assessment", desc: "We evaluate land suitability, zoning, and grid access." },
                            { num: 2, title: "Feasibility Study", desc: "Our team conducts technical, financial, and environmental analysis." },
                            { num: 3, title: "Design & Permitting", desc: "We handle engineering, permitting, and interconnection." },
                            { num: 4, title: "Build & Commission", desc: "We construct and commission with safety and efficiency." },
                            { num: 5, title: "Operate & Optimize", desc: "AI-powered monitoring ensures peak performance." },
                        ].map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center p-6 bg-[#0a0c11] border border-white/8 rounded-xl">
                                {i < 4 && (
                                    <div className="hidden md:block absolute top-10 right-[-22px] z-10 text-[#ff7a00]/40">
                                        <ArrowRight size={20} />
                                    </div>
                                )}
                                <div className="w-12 h-12 rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center font-extrabold text-[20px] mb-5 bg-[#ff7a00]/5">
                                    {step.num}
                                </div>
                                <h4 className="!text-white font-bold text-[18px] mb-3">{step.title}</h4>
                                <p className="text-gray-400 text-[15px] leading-relaxed font-light">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 5. CASE STUDY ===== */}
            <section className="py-4 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-6 md:px-[50px]">
                    <div className="grid lg:grid-cols-12 gap-12 items-stretch">

                        {/* Case Study Card */}
                        <div className="lg:col-span-8 bg-[#0f1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                                <div className="text-[#8dff4d] text-[14px] font-bold tracking-[3px] uppercase mb-4">
                                    CASE STUDY
                                </div>
                                <h3 className="!text-white text-[24px] lg:text-[32px] font-extrabold mb-4 leading-tight">
                                    Buffer Acreage Project
                                </h3>
                                <p className="text-gray-400 text-[17px] leading-relaxed mb-8 font-light">
                                    A 15MW solar + storage project utilizing corporate campus buffer land, delivering clean power and land revenue.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "15MW Solar Capacity",
                                        "$1.5M Annual Land Lease Revenue",
                                        "30-Year Lease Agreement",
                                        "Enhances Local Grid Stability",
                                        "Zero Operational Disruption",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white text-[17px] font-medium">
                                            <CheckCircle2 size={16} className="text-[#ff7a00] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#ff7a00] hover:bg-[#ff7a00]/10 font-bold tracking-wider text-[16px] uppercase transition-all w-fit rounded"
                                    style={{ color: "#ff7a00", textDecoration: "none" }}
                                >
                                    VIEW CASE STUDY <ArrowRight size={14} />
                                </Link>
                            </div>
                            <div
                                className="w-full md:w-1/2 min-h-[300px] bg-cover bg-center border-l border-white/10"
                                style={{ backgroundImage: "url('/solutiondemo/multitenant-solar.png')" }}
                            />
                        </div>

                        {/* TechOps AI Performance Dashboard */}
                        <div className="lg:col-span-4 bg-[#0f1117] border border-white/10 rounded-2xl p-7 shadow-2xl h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="!text-white font-extrabold text-[16px] tracking-wider uppercase">
                                    TECHOPS AI™ PERFORMANCE DASHBOARD
                                </h3>
                                <span className="px-2 py-1 bg-[#8dff4d]/10 border border-[#8dff4d]/30 text-[#8dff4d] text-[11px] font-bold rounded uppercase tracking-wider">
                                    OPTIMAL
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                                {[
                                    { label: "Total Land Managed", val: "5,000+ Acres" },
                                    { label: "Energy Generated", val: "4.2 GWh" },
                                    { label: "CO₂ Offset Today", val: "1,200 Tons" },
                                    { label: "Land Yield Rate", val: "94.5%" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-[#0a0c11] border border-white/8 rounded-xl p-3 sm:p-4">
                                        <div className="text-gray-500 text-[10px] sm:text-[12px] font-bold uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="!text-white font-extrabold text-[16px] sm:text-[22px] whitespace-nowrap">{m.val}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#0a0c11] border border-white/8 rounded-xl p-5 mb-4">
                                <div className="text-gray-400 text-[13px] font-bold uppercase tracking-wider mb-4">Energy Generation (Daily)</div>
                                {/* Simple bar chart visual */}
                                <div className="flex items-end gap-1 h-[60px]">
                                    {[40, 60, 45, 80, 65, 90, 70, 85, 75, 95, 60, 88].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-sm"
                                            style={{
                                                height: `${h}%`,
                                                background: i >= 9 ? "#ff7a00" : "#8dff4d",
                                                opacity: 0.7,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: "Lifetime Energy Generated", val: "4.6 TWh" },
                                    { label: "CO₂ Lifetime Offset", val: "1.2M Tons" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-[#0a0c11] border border-white/8 rounded-xl p-3 sm:p-4">
                                        <div className="text-gray-500 text-[10px] sm:text-[12px] font-bold uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="!text-white font-extrabold text-[16px] sm:text-[20px] whitespace-nowrap">{m.val}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto flex items-center justify-between bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                <span className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">Availability</span>
                                <span className="!text-white font-extrabold text-[20px]">99.1%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 6. CTA BLOCK ===== */}
            <section className="py-4 bg-[#05070b] border-t border-white/5">
                <div className="w-full px-6 md:px-[50px]">
                    <div
                        className="border border-white/10 rounded-2xl p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 relative overflow-hidden shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, #0a0c12 0%, #111420 100%)"
                        }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00]" />

                        <div className="md:w-5/12 relative z-10 text-center md:text-left">
                            <h2 className="!text-white text-[28px] md:text-[32px] lg:text-[48px] font-extrabold leading-tight">
                                Maximize Value.<br />
                                <span className="!text-[#ff7a00]">With Zero Investment.</span>
                            </h2>
                        </div>

                        <div className="md:w-3/12 flex flex-col gap-4 relative z-10 mx-auto w-max md:mx-0 md:w-auto">
                            {["Zero Capex", "Monetize Unused Space", "Minimal Impact", "Sustainable Future"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white text-[15px] sm:text-[17px] font-bold tracking-wider">
                                    <CheckCircle2 size={18} className="text-[#8dff4d]" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="md:w-4/12 flex justify-center md:justify-end relative z-10 w-full">
                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold text-[18px] tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(255,122,0,0.4)] w-full text-center md:w-auto flex items-center justify-center gap-2"
                            >
                                GET YOUR FREE SITE ASSESSMENT <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
