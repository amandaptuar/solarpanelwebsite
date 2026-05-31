import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ShieldCheck, Clock, Award, Globe,
  Check, Target, Rocket, Shield,
  Cpu, Leaf, Users, Activity,
  Sun, BatteryCharging, Wind, LayoutGrid, Settings, Wrench
} from "lucide-react";

// ─── Stat Item ─────────────────────────────────────────────────────────────
function StatItem({ icon: Icon, value, label, isLastOnDesktop = false }) {
  return (
    <div
      className={`flex items-center gap-4 p-6 md:p-8 border-b border-white/5 lg:border-b-0 lg:border-r ${
        isLastOnDesktop ? "lg:border-r-0" : "border-white/5"
      }`}
    >
      <div
        className="shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: 56,
          height: 56,
          border: "2px solid #ff7a00",
          background: "rgba(255,122,0,0.06)",
          color: "#ff7a00",
        }}
      >
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-white font-extrabold text-[28px] leading-none mb-1">
          {value}
        </div>
        <div className="text-gray-400 uppercase font-bold tracking-wider text-[13px]">
          {label}
        </div>
      </div>
    </div>
  );
}

// ─── What We Do Card ────────────────────────────────────────────────────────
function WhatWeDoCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl p-6 transition-all hover:border-[#ff7a00]/40"
      style={{ background: "#0d1020", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 48,
          height: 48,
          border: "1.5px solid rgba(255,122,0,0.5)",
          background: "rgba(255,122,0,0.06)",
          color: "#ff7a00",
        }}
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="!text-white font-extrabold text-[18px] mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-gray-400 text-[16px] leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

// ─── Expertise Capability Item ──────────────────────────────────────────────
function CapItem({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="shrink-0 flex items-center justify-center rounded-full mt-0.5"
        style={{
          width: 44,
          height: 44,
          border: "1.5px solid rgba(255,122,0,0.45)",
          background: "rgba(255,122,0,0.07)",
          color: "#ff7a00",
        }}
      >
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-white font-extrabold text-[18px] leading-snug mb-1">
          {title}
        </div>
        <div className="text-gray-400 text-[16px] font-light">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TechOps Global | About Us - Clean Energy Developer";
  }, []);

  return (
    <div className="min-h-screen bg-[#05070b] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

      {/* ── HERO SECTION WITH BACKGROUND ─────────────────────────────────── */}
      <section 
        className="relative w-full px-6 md:px-[50px] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-cover bg-center border-b border-white/5"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(5, 7, 11, 0.98) 35%, rgba(5, 7, 11, 0.6) 100%), url('/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg')"
        }}
      >
        {/* Breadcrumbs inside hero */}
        <div className="relative z-10 flex items-center gap-2 text-[14px] md:text-[16px] font-bold text-gray-400 tracking-wider uppercase mb-8">
          <Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
          <span className="text-gray-600">&gt;</span>
          <span className="text-gray-300">About Us</span>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-[800px]">
          <h1 className="!text-white text-[36px] sm:text-[48px] md:text-[60px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6">
            About <span className="!text-[#ff7a00] text-[#ff7a00]">TechOps Global</span>
          </h1>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] text-white font-semibold mb-5 leading-relaxed">
            Powering the Future Through Innovation,<br />
            Sustainability, and Excellence.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-400 font-light leading-relaxed">
            TechOps Global is a forward-thinking energy solutions company
            committed to building reliable and sustainable power systems for
            businesses, communities, and governments across the USA and
            international markets.
          </p>
        </div>
      </section>

      {/* Container for Stats Bar below the hero */}
      <section className="w-full px-6 md:px-[50px] pb-0 pt-8 md:pt-12">

        {/* ── STATS BAR ──────────────────────────────────────────────────── */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "#0d1020",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <StatItem icon={Award}       value="100MW+"        label="Commissioned Projects" />
            <StatItem icon={Clock}       value="29+"           label="Years of Industry Experience" />
            <StatItem icon={Globe}       value="International" label="Presence in USA & Global Markets" />
            <StatItem icon={ShieldCheck} value="100%"          label="Commitment to Quality & Safety" isLastOnDesktop />
          </div>
        </div>
      </section>

      {/* ── OUR STORY ───────────────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-[50px] py-16 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: text & button */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="!text-white font-extrabold text-[32px]">Our Story</h2>
                <div style={{ width: 40, height: 3, background: "#ff7a00", borderRadius: 2, flexShrink: 0 }} />
              </div>
              <p className="text-[18px] text-gray-300 font-light leading-relaxed">
                Founded with a vision to accelerate the global transition to clean
                energy, TechOps Global has grown into a trusted partner for
                delivering end-to-end energy and infrastructure solutions.
              </p>
              <p className="text-[18px] text-gray-400 font-light leading-relaxed">
                From renewable energy development and engineering support to
                large-scale project execution and operations, we bring decades of
                expertise and a strong commitment to sustainability and innovation.
              </p>
            </div>
            {/* Pill-shaped border button matching mockup */}
            <div>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#ff7a00] text-white hover:bg-[#ff7a00] transition-colors rounded-full text-[15px] font-medium group"
              >
                Our Journey <span className="text-[#ff7a00] group-hover:text-white transition-colors">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Combined Card Container (Image left flush, Values right padded) */}
          <div
            className="lg:col-span-7 rounded-3xl overflow-hidden grid grid-cols-1 sm:grid-cols-2"
            style={{
              background: "rgba(13,16,32,0.45)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Left side: Image flush */}
            <div className="h-72 sm:h-full min-h-[300px] sm:min-h-[400px]">
              <img
                src="/solutiondemo/industrial-solar.png"
                alt="Solar panels at sunset"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
            {/* Right side: Values List (padded) */}
            <div className="p-6 md:p-8 flex flex-col justify-center gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Vision",
                  body: "A world powered by clean, affordable, and reliable energy.",
                },
                {
                  icon: Rocket,
                  title: "Our Mission",
                  body: "Deliver innovative energy solutions that drive progress and create lasting value.",
                },
                {
                  icon: Shield,
                  title: "Our Values",
                  body: "Integrity, Safety, Innovation, Collaboration, and Excellence.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 44,
                      height: 44,
                      border: "1.5px solid rgba(255,122,0,0.4)",
                      background: "rgba(255,122,0,0.07)",
                      color: "#ff7a00",
                      marginTop: 2,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-[18px] uppercase tracking-wide mb-1.5">
                      {title}
                    </div>
                    <div className="text-gray-400 text-[16px] font-light leading-relaxed">
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ──────────────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-[50px] py-16 md:py-24 border-b border-white/5">
        <div className="flex items-center gap-4 mb-14">
          <h2 className="!text-white font-extrabold text-[28px] md:text-[32px] uppercase tracking-widest whitespace-nowrap">
            What We Do
          </h2>
          <div style={{ height: 3, background: "#ff7a00", width: 40, flexShrink: 0, borderRadius: 2 }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <WhatWeDoCard
            icon={Cpu}
            title="Engineering Excellence"
            desc="Delivering innovative and reliable energy systems with precision."
          />
          <WhatWeDoCard
            icon={Leaf}
            title="Sustainable Solutions"
            desc="Promoting clean energy technologies for a greener tomorrow."
          />
          <WhatWeDoCard
            icon={Users}
            title="Strategic Partnerships"
            desc="Building long-term relationships based on trust and performance."
          />
          <WhatWeDoCard
            icon={Activity}
            title="Operational Excellence"
            desc="Ensuring efficiency, safety, and quality in every project we deliver."
          />
          <WhatWeDoCard
            icon={ShieldCheck}
            title="Safety & Compliance"
            desc="Upholding the highest standards of safety, quality, and compliance."
          />
        </div>
      </section>

      {/* ── OUR EXPERTISE ───────────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-[50px] py-16 md:py-24 border-b border-white/5">
        {/* Header layout matching mockup (Title left, intro right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5 flex items-center gap-4">
            <h2 className="!text-white font-extrabold text-[28px] md:text-[32px] uppercase tracking-widest whitespace-nowrap">
              Our Expertise
            </h2>
            <div style={{ height: 3, background: "#ff7a00", flex: 1, minWidth: 50, borderRadius: 2 }} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[16px] md:text-[18px] text-gray-300 font-light leading-relaxed">
              We specialize in renewable energy development, energy storage
              systems, engineering support, and industrial infrastructure
              solutions. Our team combines technical expertise with strategic
              execution to deliver measurable results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">

          {/* Left: image with competency overlay bottom-right */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden flex items-end justify-end min-h-[380px] sm:min-h-[460px]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/img/multigeneration-family-walking-on-field-on-wind-fa-2026-01-05-22-45-03-utc.jpg')",
              }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
            
            {/* Overlay card touching bottom right corner */}
            <div
              className="relative z-10 w-full sm:w-[60%] lg:w-[55%] rounded-t-2xl sm:rounded-tr-none sm:rounded-tl-2xl p-7 shadow-2xl"
              style={{
                background: "rgba(10,13,22,0.92)",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Mega Project Management",
                  "NIWE Validated Data",
                  "Industrial Grid-Tie",
                  "Power Evacuation",
                  "Land Procurement",
                  "Utility Liaisoning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-semibold text-[16px]">
                    <div
                      className="shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: 24,
                        height: 24,
                        background: "#ff7a00",
                        color: "#fff",
                      }}
                    >
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: 2-column capability grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              <CapItem icon={Sun}             title="Solar Energy Systems"         subtitle="Utility-scale & Distributed" />
              <CapItem icon={BatteryCharging} title="Battery Energy Storage"       subtitle="BESS Solutions" />
              <CapItem icon={Wind}            title="Wind Power Infrastructure"    subtitle="Resource Assessment & Development" />
              <CapItem icon={LayoutGrid}      title="Virtual Power Plant Services" subtitle="VPP Platforms & Optimization" />
              <CapItem icon={Settings}        title="Energy Management Solutions"  subtitle="Efficiency & Monitoring" />
              <CapItem icon={Wrench}          title="Operations & Maintenance"     subtitle="Reliable & Safe Operations" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-[50px] py-16 md:py-20">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/solutiondemo/warehouse-solar.png')" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(5,7,11,0.96) 40%, rgba(5,7,11,0.82) 100%)" }}
          />

          <div
            className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 p-8 sm:p-14 lg:p-16"
          >
            <div>
              <h2 className="!text-white font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] leading-tight mb-4">
                Let's Build a Smarter,<br />
                Sustainable Energy Future—Together.
              </h2>
              <p className="text-[16px] md:text-[18px] text-gray-400 font-light">
                Partner with TechOps Global for reliable, efficient, and future-ready energy solutions.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded text-white font-extrabold text-[16px] tracking-wider uppercase transition-all shadow-[0_4px_24px_rgba(255,102,0,0.4)] hover:opacity-90"
                style={{ background: "#ff6600", textDecoration: "none" }}
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
