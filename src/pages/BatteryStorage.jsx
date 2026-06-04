import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle2, ArrowRight, DollarSign, Activity, Zap,
    Leaf, TrendingUp, Shield, PlayCircle, BatteryCharging,
    Globe, BarChart3, Search, Cpu, Wrench, Settings, PiggyBank
} from "lucide-react";

export default function BatteryStorage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "TechOps Global | Battery Storage Solutions";
    }, []);

    return (
        <div className="min-h-screen bg-[#05070b] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

            {/* ===== 1. HERO ===== */}
            <section
                className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 border-b border-white/5 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(5,7,11,0.96) 30%, rgba(5,7,11,0.75) 60%, rgba(5,7,11,0.40) 100%), url('/unsplash/battery-storage.jpg')",
                }}
            >
                {/* Breadcrumb */}
                <div className="w-full px-[50px] mb-8">
                    <div className="flex items-center gap-2 type-body-sm font-bold text-gray-400 tracking-wider uppercase">
                        <Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-gray-400">Solutions</span>
                        <span>&gt;</span>
                        <span className="!text-[#ff7a00]">Battery Storage</span>
                    </div>
                </div>

                <div className="w-full px-[50px] relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left copy */}
                        <div className="lg:col-span-7">
                            <div className="mb-4 text-[#ff7a00] type-body font-bold tracking-[3px] uppercase">
                                Store Today. Power Tomorrow.
                            </div>
                            <h1 className="!text-white type-hero mb-6">
                                Battery Storage<br />
                                Solutions for a<br />
                                <span className="!text-[#ff7a00]">Smarter Energy Future.</span>
                            </h1>
                            <p className="type-body-lg text-gray-300 mb-10 max-w-2xl">
                                TechOps Global develops, owns, and operates advanced battery energy storage systems that provide reliability, lower costs, and unlock new revenue streams through energy markets and grid services.
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

                        {/* Right feature cards */}
                        <div className="lg:col-span-5 flex flex-col gap-6 mt-10 lg:mt-0 relative">
                            {[
                                { icon: <DollarSign size={20} />, color: "#8dff4d", title: "ZERO CAPEX", desc: "We fund, build, own & operate." },
                                { icon: <TrendingUp size={20} />, color: "#8dff4d", title: "MAXIMUM VALUE", desc: "Stack multiple revenue streams through energy markets." },
                                { icon: <Zap size={20} />, color: "#ff7a00", title: "GRID RELIABILITY", desc: "Strengthen the grid with fast, dispatchable power." },
                                { icon: <Leaf size={20} />, color: "#ff7a00", title: "SUSTAINABLE FUTURE", desc: "Enable 100% clean energy with storage innovation." },
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

            {/* ===== 2. THE STORAGE ADVANTAGE ===== */}
            <section className="py-28 bg-[#07090e] border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[24px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            THE STORAGE ADVANTAGE
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    {/* 5 advantage columns */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                        {[
                            { icon: <DollarSign size={24} />, title: "Lower Energy Costs", desc: "Store energy when prices are low and discharge during peak demand." },
                            { icon: <Shield size={24} />, title: "Energy Independence", desc: "Reduce reliance on the grid and improve energy security and resilience." },
                            { icon: <Activity size={24} />, title: "Multiple Revenue Streams", desc: "Participate in energy markets, demand response, and capacity programs." },
                            { icon: <Zap size={24} />, title: "Fast Response", desc: "Millisecond response for grid stabilization and frequency regulation." },
                            { icon: <Globe size={24} />, title: "ESG Leadership", desc: "Support decarbonization goals with clean, reliable energy storage." },
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
                    <div className="grid md:grid-cols-5 border border-white/10 rounded-2xl bg-[#0a0c10] p-8 lg:p-10 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl overflow-hidden">
                        {[
                            { icon: <BatteryCharging size={26} strokeWidth={1.5} />, value: "2.5GWh+", label: "Storage Capacity Pipeline" },
                            { icon: <BarChart3 size={26} strokeWidth={1.5} />, value: "150+", label: "Projects Developed" },
                            { icon: <Activity size={26} strokeWidth={1.5} />, value: "15–25 Years", label: "Long-Term Contracts Available" },
                            { icon: <DollarSign size={26} strokeWidth={1.5} />, value: "$200M+", label: "Market Revenue Potential" },
                            { icon: <Leaf size={26} strokeWidth={1.5} />, value: "100%", label: "Clean Energy Infrastructure" },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-5 p-2 md:pl-8 first:pl-2">
                                <div className="w-14 h-14 rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="!text-white text-[30px] font-extrabold tracking-tight leading-none mb-1">{s.value}</h3>
                                    <div className="text-gray-400 text-[13px] font-bold tracking-widest uppercase leading-snug">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 3. SOLUTIONS FOR EVERY NEED ===== */}
            <section className="py-28 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[24px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
                            BATTERY STORAGE SOLUTIONS FOR EVERY NEED
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                img: "/unsplash/battery-utility.jpg",
                                title: "Utility-Scale Storage",
                                desc: "Large-scale systems for grid and energy market applications.",
                                bullets: ["Energy arbitrage", "Capacity markets", "Grid services", "Renewable integration"],
                            },
                            {
                                img: "/unsplash/battery-btm.jpg",
                                title: "Behind-the-Meter Storage",
                                desc: "Reduce demand charges and improve energy efficiency.",
                                bullets: ["Peak shaving", "Load shifting", "Backup power", "Cost optimization"],
                            },
                            {
                                img: "/unsplash/battery-microgrid.jpg",
                                title: "Microgrids & Hybrid Systems",
                                desc: "Combine solar, storage, and generators for resilient power.",
                                bullets: ["Islanded operations", "Critical load support", "Resilience & reliability", "Renewable optimization"],
                            },
                            {
                                img: "/unsplash/battery-colocated.jpg",
                                title: "Co-Located Renewables",
                                desc: "Maximize the value of solar and wind energy.",
                                bullets: ["Smoothing & firming", "Curtailment reduction", "Higher renewable yield", "Stable & clean power"],
                            },
                        ].map((card, i) => (
                            <div key={i} className="bg-[#0d0f15] border border-white/8 rounded-xl overflow-hidden group hover:border-[#ff7a00]/30 transition-all shadow-xl">
                                <div className="aspect-video overflow-hidden bg-[#05070b] flex items-center justify-center">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="!text-white font-extrabold text-[22px] mb-3">{card.title}</h3>
                                    <p className="text-gray-400 text-[17px] leading-relaxed mb-6 font-light">{card.desc}</p>
                                    <ul className="space-y-3 mb-8">
                                        {card.bullets.map((b, j) => (
                                            <li key={j} className="flex items-center gap-3 text-white text-[16px] font-medium">
                                                <CheckCircle2 size={16} className="text-[#ff7a00] shrink-0" /> {b}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-[#ff7a00] text-[15px] font-bold tracking-wider uppercase hover:underline"
                                    >
                                        EXPLORE SOLUTION <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 4. HOW IT WORKS ===== */}
            <section className="py-28 bg-[#07090e] border-b border-white/5" id="how-it-works">
                <div className="w-full px-[50px]">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-[1px] bg-white/10 flex-1" />
                        <h2 className="!text-white text-[24px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap">
                            HOW IT WORKS
                        </h2>
                        <div className="h-[1px] bg-white/10 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { num: 1, icon: <Search size={22} />, title: "Site Assessment", desc: "We evaluate your energy needs and site conditions." },
                            { num: 2, icon: <Cpu size={22} />, title: "Custom Design", desc: "Tailored storage system engineered for maximum performance." },
                            { num: 3, icon: <Wrench size={22} />, title: "Build & Commission", desc: "Expert installation with minimal disruption." },
                            { num: 4, icon: <Settings size={22} />, title: "Operate & Optimize", desc: "AI-powered monitoring and performance optimization." },
                            { num: 5, icon: <PiggyBank size={22} />, title: "You Save & Earn", desc: "Lower costs and earn revenue from multiple energy markets." },
                        ].map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center p-6 bg-[#0a0c11] border border-white/8 rounded-xl">
                                {i < 4 && (
                                    <div className="hidden md:block absolute top-10 right-[-22px] z-10 text-[#ff7a00]/40">
                                        <ArrowRight size={20} />
                                    </div>
                                )}
                                <div className="w-12 h-12 rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center font-extrabold text-[20px] mb-4 bg-[#ff7a00]/5">
                                    {step.num}
                                </div>
                                <div className="text-[#ff7a00] mb-3">{step.icon}</div>
                                <h4 className="!text-white font-bold text-[18px] mb-3">{step.title}</h4>
                                <p className="text-gray-400 text-[15px] leading-relaxed font-light">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 5. CASE STUDY + DASHBOARD ===== */}
            <section className="py-28 bg-[#05070b] border-b border-white/5">
                <div className="w-full px-[50px]">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Case Study */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#0f1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="text-[#8dff4d] text-[14px] font-bold tracking-[3px] uppercase mb-4">CASE STUDY</div>
                                    <h3 className="!text-white text-[24px] lg:text-[30px] font-extrabold mb-4 leading-tight">
                                        Utility-Scale Storage – California
                                    </h3>
                                    <p className="text-gray-400 text-[17px] leading-relaxed mb-8 font-light">
                                        200MW / 800MWh battery storage system delivering reliability and market value.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "$98M Annual Market Revenue",
                                            "200MW / 800MWh Capacity",
                                            "Multiple Market Participation",
                                            "Improved Grid Reliability",
                                            "Zero Operational Impact",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white text-[17px] font-medium">
                                                <CheckCircle2 size={16} className="text-[#ff7a00] shrink-0" />
                                                {item}
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
                                    style={{ backgroundImage: "url('/unsplash/battery-storage.jpg')" }}
                                />
                            </div>
                        </div>

                        {/* Performance Dashboard */}
                        <div className="lg:col-span-4 bg-[#0f1117] border border-white/10 rounded-2xl p-7 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="!text-white font-extrabold text-[14px] tracking-wider uppercase">
                                    TECHOPS AI™ PERFORMANCE DASHBOARD
                                </h3>
                                <span className="px-2 py-1 bg-[#8dff4d]/10 border border-[#8dff4d]/30 text-[#8dff4d] text-[11px] font-bold rounded uppercase tracking-wider">
                                    OPTIMAL
                                </span>
                            </div>

                            {/* Top 4 metrics */}
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                {[
                                    { label: "Max Capacity", val: "800 MWh" },
                                    { label: "Discharging Now", val: "120 MW" },
                                    { label: "Revenue Today", val: "$276,540" },
                                    { label: "Availability", val: "98.7%" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                        <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="!text-white font-extrabold text-[20px]">{m.val}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Chart */}
                            <div className="bg-[#0a0c11] border border-white/8 rounded-xl p-5 mb-4">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-gray-400 text-[12px] font-bold uppercase tracking-wider">Energy Dispatch (MW)</span>
                                    <span className="flex items-center gap-1 text-[#8dff4d] text-[11px] font-bold">● Charge</span>
                                    <span className="flex items-center gap-1 text-[#ff7a00] text-[11px] font-bold">● Discharge</span>
                                </div>
                                <div className="flex items-end gap-[3px] h-[56px]">
                                    {[30, 50, 70, 40, 85, 60, 90, 45, 75, 95, 50, 80, 65, 88, 72, 92].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-sm"
                                            style={{
                                                height: `${h}%`,
                                                background: i % 3 === 0 ? "#8dff4d" : i % 2 === 0 ? "#ff7a00" : "#8dff4d66",
                                                opacity: 0.75,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Bottom metrics */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Monthly Revenue", val: "$5.8M" },
                                    { label: "Cycles Today", val: "2.8" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                        <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">{m.label}</div>
                                        <div className="!text-white font-extrabold text-[20px]">{m.val}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center justify-between bg-[#0a0c11] border border-white/8 rounded-xl p-4">
                                <span className="text-gray-400 text-[12px] font-bold uppercase tracking-wider">CO₂ Offset Today</span>
                                <span className="!text-white font-extrabold text-[20px]">326 Tons</span>
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
                                "linear-gradient(to right, rgba(10,12,18,0.97) 0%, rgba(10,12,18,0.88) 55%, rgba(10,12,18,0.68) 100%), url('/unsplash/battery-storage.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00]" />

                        <div className="md:w-5/12 relative z-10">
                            <h2 className="!text-white text-[32px] lg:text-[48px] font-extrabold leading-tight">
                                Store Energy. Create Value.<br />
                                <span className="!text-[#ff7a00]">Power the Future.</span>
                            </h2>
                        </div>

                        <div className="md:w-3/12 flex flex-col gap-4 relative z-10">
                            {["Zero Capex", "Multiple Revenue Streams", "Maximum Performance", "Sustainable Impact"].map((item, i) => (
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
