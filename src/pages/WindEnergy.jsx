import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Wind, CheckCircle2, ArrowRight, DollarSign, Activity, Zap,
    Leaf, TrendingUp, Shield, Settings, PlayCircle, BatteryCharging,
    Globe, Sun, Users, BarChart3
} from "lucide-react";

export default function WindEnergy() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "TechOps Global | Wind Energy Solutions";
    }, []);

    return (
        <div className="min-h-screen bg-[#05070b] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

            {/* ===== 1. HERO SECTION ===== */}
            <section
                className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 border-b border-white/5 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(5,7,11,0.96) 30%, rgba(5,7,11,0.75) 60%, rgba(5,7,11,0.40) 100%), url('/unsplash/wind-turbines.jpg')",
                }}
            >
                {/* Breadcrumb */}
                <div className="w-full px-[50px] mb-8">
                    <div className="flex items-center gap-2 type-body-sm font-bold text-gray-400 tracking-wider uppercase">
                        <Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-gray-400">Solutions</span>
                        <span>&gt;</span>
                        <span className="!text-[#ff7a00]">Wind Energy</span>
                    </div>
                </div>

                <div className="w-full px-[50px] relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Main copy */}
                        <div className="lg:col-span-7">
                            <div className="mb-4 text-[#ff7a00] type-body font-bold tracking-[3px] uppercase">
                                Clean Power. Stronger Future.
                            </div>
                            <h1 className="!text-white type-hero mb-6">
                                Wind Energy Solutions<br />
                                <span className="!text-[#ff7a00]">Powering a Sustainable<br />Tomorrow.</span>
                            </h1>
                            <p className="type-body-lg text-gray-300 mb-10 max-w-2xl">
                                TechOps Global develops, owns, and operates high-performance wind energy projects that deliver clean, reliable power, reduce energy costs, and create long-term value for landowners, communities, and investors.
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
                        <div className="lg:col-span-5 flex flex-col gap-5 mt-10 lg:mt-0">
                            {[
                                {
                                    icon: <DollarSign size={20} />,
                                    color: "#8dff4d",
                                    title: "ZERO CAPEX",
                                    desc: "We fund, build, own & operate.",
                                },
                                {
                                    icon: <Activity size={20} />,
                                    color: "#8dff4d",
                                    title: "LONG-TERM LEASE INCOME",
                                    desc: "15–30 years of predictable revenue.",
                                },
                                {
                                    icon: <Zap size={20} />,
                                    color: "#ff7a00",
                                    title: "MAXIMUM PERFORMANCE",
                                    desc: "Advanced turbines. AI-driven monitoring.",
                                },
                                {
                                    icon: <Leaf size={20} />,
                                    color: "#ff7a00",
                                    title: "SUSTAINABLE IMPACT",
                                    desc: "100% clean energy for a better tomorrow.",
                                },
                            ].map((card, i) => (
                                <div
                                    key={i}
                                    className={`bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl hover:border-[${card.color}]/40 transition-all`}
                                >
                                    <div className="flex gap-4 items-start">
                                        <div
                                            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                                            style={{
                                                border: `2px solid ${card.color}`,
                                                color: card.color,
                                                background: `${card.color}0d`,
                                            }}
                                        >
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h4 className="!text-white type-card tracking-wide uppercase">
                                                {card.title}
                                            </h4>
                                            <p className="type-body text-gray-400 mt-1">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 2. THE WIND ADVANTAGE ===== */}
            <section className="py-24 bg-[#07090e] border-b border-white/5">
                <div className="w-full px-[50px]">
                    {/* Title row */}
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[22px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            THE WIND ADVANTAGE
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    {/* 5-column advantages */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                        {[
                            { icon: <Wind size={24} />, title: "Abundant & Renewable", desc: "Wind is one of the most reliable and sustainable energy sources." },
                            { icon: <DollarSign size={24} />, title: "Lower Energy Costs", desc: "Reduce reliance on the grid and protect against rising energy prices." },
                            { icon: <TrendingUp size={24} />, title: "Long-Term Revenue", desc: "Landowners benefit from stable and predictable lease payments." },
                            { icon: <Shield size={24} />, title: "Energy Independence", desc: "Generate local clean power and strengthen grid resilience." },
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
                            { icon: <Wind size={26} strokeWidth={1.5} />, value: "2.5GW+", label: "Wind Capacity Developed" },
                            { icon: <BarChart3 size={26} strokeWidth={1.5} />, value: "150+", label: "Projects Completed" },
                            { icon: <Activity size={26} strokeWidth={1.5} />, value: "15–30 Years", label: "Long-Term Lease Contracts" },
                            { icon: <Leaf size={26} strokeWidth={1.5} />, value: "3M+", label: "Tons CO₂ Offset Annually" },
                            { icon: <Zap size={26} strokeWidth={1.5} />, value: "100%", label: "Renewable Infrastructure" },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-5 p-7">
                                <div className="w-14 h-14 rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="!text-white text-[32px] font-extrabold tracking-tight leading-none mb-1">{s.value}</h3>
                                    <div className="!text-white text-[13px] font-bold tracking-widest uppercase leading-snug text-gray-400">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 3. WIND SOLUTIONS FOR EVERY PROPERTY TYPE ===== */}
            <section className="py-24 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-14">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[22px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            WIND SOLUTIONS FOR EVERY PROPERTY TYPE
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                img: "/unsplash/wind-onshore.jpg",
                                title: "Onshore Wind Projects",
                                desc: "Cost-effective, scalable, and ideal for large land parcels.",
                                bullets: ["High energy yield", "Low operational impact", "Proven technology"],
                            },
                            {
                                img: "/unsplash/wind-community.jpg",
                                title: "Community Wind",
                                desc: "Local clean energy for communities and municipalities.",
                                bullets: ["Community engagement", "Local economic benefits", "Green energy access"],
                            },
                            {
                                img: "/unsplash/wind-battery.jpg",
                                title: "Wind + Battery Storage",
                                desc: "Store excess energy and maximize value with hybrid solutions.",
                                bullets: ["Energy arbitrage", "Peak shaving", "Better grid stability"],
                            },
                            {
                                img: "/unsplash/wind-vpp.jpg",
                                title: "Wind + VPP Integration",
                                desc: "Participate in Virtual Power Plant and energy markets.",
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
            <section className="py-24 bg-[#07090e] border-b border-white/5" id="how-it-works">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-14">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[22px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            HOW IT WORKS
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {[
                            { num: 1, title: "Site Assessment", desc: "We evaluate wind resources, land suitability, and grid access." },
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
            <section className="py-24 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Case Study Card */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#0f1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="text-[#8dff4d] text-[14px] font-bold tracking-[3px] uppercase mb-4">
                                        CASE STUDY
                                    </div>
                                    <h3 className="!text-white text-[24px] lg:text-[32px] font-extrabold mb-4 leading-tight">
                                        Wind Project – Texas
                                    </h3>
                                    <p className="text-gray-400 text-[17px] leading-relaxed mb-8 font-light">
                                        A 200MW wind energy project delivering clean power and long-term land value.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "200MW Wind Capacity",
                                            "$20M Annual Energy Revenue",
                                            "30-Year Lease Agreement",
                                            "Supports 130,000+ Homes",
                                            "Zero Operational Impact",
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
                                    style={{ backgroundImage: "url('/unsplash/wind-turbines.jpg')" }}
                                />
                            </div>
                        </div>

                        {/* TechOps AI Performance Dashboard */}
                        <div className="lg:col-span-4 bg-[#0f1117] border border-white/10 rounded-2xl p-7 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="!text-white font-extrabold text-[16px] tracking-wider uppercase">
                                    TECHOPS AI™ PERFORMANCE DASHBOARD
                                </h3>
                                <span className="px-2 py-1 bg-[#8dff4d]/10 border border-[#8dff4d]/30 text-[#8dff4d] text-[11px] font-bold rounded uppercase tracking-wider">
                                    OPTIMAL
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: "Total Capacity", val: "2.5 GW+" },
                                    { label: "Energy Generated Today", val: "9.8 GWh" },
                                    { label: "CO₂ Offset Today", val: "3,200 Tons" },
                                    { label: "Capture Ratio", val: "42.7%" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                        <div className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="!text-white font-extrabold text-[22px]">{m.val}</div>
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

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Lifetime Energy Generated", val: "12.6 TWh" },
                                    { label: "CO₂ Lifetime Offset", val: "4.2M Tons" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                        <div className="text-gray-500 text-[12px] font-bold uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="!text-white font-extrabold text-[20px]">{m.val}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex items-center justify-between bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                <span className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">Availability</span>
                                <span className="!text-white font-extrabold text-[20px]">98.6%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== 6. CTA BLOCK ===== */}
            <section className="py-16 bg-[#05070b] border-t border-white/5">
                <div className="w-full px-[50px]">
                    <div
                        className="border border-white/10 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(10,12,18,0.97) 0%, rgba(10,12,18,0.88) 55%, rgba(10,12,18,0.70) 100%), url('/unsplash/wind-turbines.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00]" />

                        <div className="md:w-5/12 relative z-10">
                            <h2 className="!text-white text-[32px] lg:text-[48px] font-extrabold leading-tight">
                                The Power of Wind.<br />
                                <span className="!text-[#ff7a00]">The Value for Generations.</span>
                            </h2>
                        </div>

                        <div className="md:w-3/12 flex flex-col gap-4 relative z-10">
                            {["Zero Capex", "Long-Term Lease Income", "Maximum Performance", "Sustainable Future"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white text-[17px] font-bold tracking-wider">
                                    <CheckCircle2 size={18} className="text-[#8dff4d]" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="md:w-4/12 flex justify-end relative z-10 w-full">
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
