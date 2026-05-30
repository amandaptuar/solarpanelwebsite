import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, DollarSign, Activity, Zap, Plus,
  Building, TreePine, CarFront, CheckCircle2,
  LayoutDashboard, Box, TrendingUp, ShoppingCart,
  FileText, Bell, Settings, CloudLightning, ChevronRight,
  PlayCircle, Calendar, Clock, Share2, MapPin, AlertTriangle,
  ArrowRight, Globe, Cpu, CreditCard, Gauge, ClipboardList, Leaf
} from "lucide-react";
import logoImg from "../assets/image.png";
import "./Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", dropdown: true },
    { label: "Property Types", dropdown: true },
    { label: "How It Works", dropdown: false },
    { label: "Markets", dropdown: false },
    { label: "Resources", dropdown: true },
    { label: "Company", dropdown: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-0.5" : "bg-[#05070a]/80 backdrop-blur-sm border-b border-white/10 py-1"}`}>
      <div className="w-full px-[50px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="TechOps Global" className="h-2 object-contain" />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link key={item.label} to="#" className="text-[14px] font-medium tracking-wide text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              {item.label} {item.dropdown && <ChevronRight size={12} className="rotate-90 opacity-60" />}
            </Link>
          ))}
        </div>

        {/* Right Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/contact" className="px-5 py-2 rounded text-[14px] font-bold tracking-wider border border-white/30 hover:border-white text-white transition-all duration-300">
            GET SITE ASSESSMENT
          </Link>
          <button className="text-white hover:text-orange-500 transition-colors">
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link key={item.label} to="#" className="text-[20px] font-medium text-gray-300 flex justify-between">
                  {item.label} {item.dropdown && <ChevronRight size={18} className="opacity-60" />}
                </Link>
              ))}
              <Link to="/contact" className="mt-4 px-6 py-3 text-center rounded border border-white/30 text-white font-bold">
                GET SITE ASSESSMENT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TechOps Global | Zero-Capex Revenue Engine";
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 lg:py-0 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/demo/herobg.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>
          {/* Sunset glow effect on the right */}
          <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-[#ff7a00]/10 blur-[150px] rounded-full pointer-events-none"></div>
        </div>

        <div className="w-full px-[50px] relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="lg:col-span-6 pt-24 lg:pt-32 lg:-ml-8 xl:-ml-16 translate-x-[50px]">
              <div className="mb-4 text-[#ff7a00] text-[18px] lg:text-[14px] font-bold tracking-[4px] uppercase">
                AI POWER. REAL ESTATE. REAL REVENUE.
              </div>
              <h1 className="text-[56px] lg:text-[60px] font-bold leading-[1.05] tracking-wide mb-6 text-white">
                Turn Your PJM<br/>Real Estate Footprint<br/>into a <span className="text-[#ff7a00]">Zero-Capex<br/>Revenue Engine.</span>
              </h1>
              <p className="text-[20px] lg:text-[20px] text-gray-300 mb-8 max-w-xl leading-relaxed font-light tracking-[0.5px]">
                Monetize your unused warehouse rooftops, vacant acreage, and parking lots in Pennsylvania, <span className="text-white font-semibold">New Jersey</span>, and <span className="text-white font-semibold">Maryland</span>. We deploy behind-the-meter solar and battery storage systems at <span className="text-white font-semibold">zero cost</span> to you, driving immediate energy savings and massive grid-balancing cash flow.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link to="/contact" className="px-10 py-4 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-bold tracking-widest transition-all flex items-center gap-2 text-[14px] uppercase">
                  GET SITE ASSESSMENT <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="px-10 py-4 rounded border border-white/30 hover:border-white text-white font-bold tracking-widest transition-all flex items-center gap-3 text-[14px] uppercase">
                  SEE HOW IT WORKS <div className="w-6 h-6 rounded-full border border-white text-[#ff7a00] flex items-center justify-center bg-transparent"><div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#ff7a00] border-b-[5px] border-b-transparent ml-1"></div></div>
                </Link>
              </div>
            </motion.div>

            {/* Right Feature Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9 hidden md:block lg:mt-32 lg:ml-8 xl:ml-16"
            >
              <div className="bg-[#111318]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col gap-8">
                  {/* ZERO CAPEX - Green */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full border border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center shrink-0">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-[18px] tracking-wide">ZERO CAPEX</h4>
                      <p className="text-[16px] text-gray-400">We fund, build, own & operate.</p>
                    </div>
                  </div>
                  
                  {/* DUAL INCOME - Green */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full border border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center shrink-0">
                      <Activity size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-[18px] tracking-wide">DUAL INCOME STREAM</h4>
                      <p className="text-[16px] text-gray-400">Lease income + Energy savings<br/>& market revenue.</p>
                    </div>
                  </div>
                  
                  {/* PJM MARKET - Orange */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full border border-[#ff7a00]/30 text-[#ff7a00] flex items-center justify-center shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-[18px] tracking-wide">PJM MARKET EXPOSURE</h4>
                      <p className="text-[16px] text-gray-400">Tap into billions in grid-balancing<br/>opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. DUAL BENEFIT FRAMEWORK */}
      <section className="py-[60px] relative bg-[#05070a]">
        <div className="w-full px-[50px]">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-[1px] flex-1 max-w-[100px] bg-white/20"></div>
            <h2 className="text-[18px] font-bold tracking-[3px] text-white uppercase">THE DUAL-BENEFIT FRAMEWORK</h2>
            <div className="h-[1px] flex-1 max-w-[100px] bg-white/20"></div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mb-16 w-[calc(100%+40px)] -mx-[20px]">
            {/* The Border Container wrapping both benefits */}
            <div className="border border-white/10 rounded-2xl p-8 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-0 justify-between relative bg-[#05070a]">
              {/* Center Plus Divider */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#ff7a00] text-[#ff7a00] flex items-center justify-center z-10 bg-[#05070a] hidden md:flex shadow-[0_0_15px_rgba(255,122,0,0.2)]">
                <Plus size={20} />
              </div>

              {/* Left Side */}
              <div className="md:w-1/2 md:pr-16 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full border border-[#8dff4d]/50 text-[#8dff4d] flex items-center justify-center shrink-0">
                  <DollarSign size={28} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[14px] font-bold text-white mb-2 uppercase tracking-wide">1. GUARANTEED LEASE INCOME</h3>
                  <p className="text-gray-400 text-[20px] leading-relaxed">Predictable land/roof rental payments<br/>over a 15–20 year term.</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="md:w-1/2 md:pl-16 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full border border-[#8dff4d]/50 text-[#8dff4d] flex items-center justify-center shrink-0">
                  <Zap size={28} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[14px] font-bold text-white mb-2 uppercase tracking-wide">2. BEHIND-THE-METER (BTM) PEAK SHAVING</h3>
                  <p className="text-gray-400 text-[20px] leading-relaxed">Shield your facility from PJM's exploding<br/>capacity pass-through costs (30%+<br/>of corporate electric bills).</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-[calc(100%+40px)] -mx-[20px] pt-8">
            <div className="flex flex-col lg:flex-row items-stretch border border-white/10 rounded-2xl bg-white/[0.02] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {[
                { icon: <Globe size={24}/>, val: "$BILLIONS", desc: "in PJM market\nrevenue potential" },
                { icon: <ClipboardList size={24}/>, val: "0", desc: "Upfront cost\nto you" },
                { icon: <Building size={24}/>, val: "15-20 YEARS", desc: "Long-term predictable\ncash flow" },
                { icon: <Gauge size={24}/>, val: "100%", desc: "Turnkey development\n& operations" },
                { icon: <Cpu size={24}/>, val: "24/7 AI", desc: "Autonomous dispatch\n& performance" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="flex-1 flex items-start gap-4 p-6 w-full">
                  <div className="text-[#ff7a00] shrink-0 mt-0.5">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="text-[14px] font-bold text-white mb-1 leading-tight">{stat.val}</h4>
                    <p className="text-[14px] text-gray-400 leading-relaxed whitespace-pre-line">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PROPERTY TYPE CARDS */}
      <section className="py-[60px] bg-[#0a0c10] relative border-t border-white/5">
        <div className="w-full px-[50px]">
          <div className="flex items-center justify-start gap-6 mb-12">
            <h2 className="text-[18px] font-bold tracking-[2px] text-white uppercase">TAILORED SOLUTIONS FOR EVERY PROPERTY TYPE</h2>
            <div className="h-[1px] flex-1 bg-white/10 max-w-2xl"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=600",
                icon: <Building size={20} />,
                color: "text-[#ff7a00] border-[#ff7a00]/30",
                title: "WAREHOUSE &\nLOGISTICS HUBS",
                loc: "NJ & PA TURNPIKES",
                desc: "Turn structural dead weight into an\noperational asset.",
                points: ["Zero roof penetrations", "Preserve warranties", "100,000+ sq ft of roof monetized", "Containerized battery storage"],
                link: "/solutions/warehouse"
              },
              {
                img: "/demo/buffer1.png",
                icon: <TreePine size={20} />,
                color: "text-[#8dff4d] border-[#8dff4d]/30",
                title: "IDLE LAND &\nBUFFER ACREAGE",
                loc: "INDUSTRIAL PA & MD",
                desc: "Generating yield on land\nyou aren't using.",
                points: ["Ground-mounted solar + storage", "Bypass long utility interconnection", "Plug into local distribution grids", "Operate as a Virtual Power Plant (VPP)"],
                link: "#"
              },
              {
                img: "/demo/ChatGPT%20Image%20May%2027,%202026,%2005_06_12%20PM.png",
                icon: <CarFront size={20} />,
                color: "text-[#8dff4d] border-[#8dff4d]/30",
                title: "COMMERCIAL\nPARKING LOTS",
                loc: "OFFICES & RETAIL",
                desc: "Shade vehicles. Generate power.\nOffset demand.",
                points: ["Solar carports & EV charging", "Reduce tenant energy costs", "Storage hidden in plain sight", "Enhance ESG & property value"],
                link: "#"
              }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                className="group bg-[#111318] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 flex flex-col relative"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>
                <div className="p-8 pt-10 flex-1 flex flex-col relative">
                  {/* Floating Icon overlapping image and content */}
                  <div className={`absolute -top-7 left-8 w-14 h-14 bg-[#111318] border rounded-full flex items-center justify-center ${card.color}`}>
                    {card.icon}
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-[20px] font-bold text-white mb-2 whitespace-pre-line leading-tight uppercase">{card.title}</h3>
                    <span className="text-[14px] font-bold tracking-widest text-[#ff7a00] uppercase">{card.loc}</span>
                  </div>
                  <p className="text-white font-medium mb-6 text-[20px] whitespace-pre-line">{card.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3.5 text-[18px] text-gray-400">
                        <CheckCircle2 size={18} fill="#8dff4d" stroke="#111318" strokeWidth={2.5} className="mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(141,255,77,0.3)]" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to={card.link} className="inline-flex items-center gap-2 text-[18px] font-bold text-orange-custom uppercase tracking-wider transition-colors group/link mt-auto pt-6">
                    EXPLORE SOLUTION <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI PLATFORM */}
      <section className="py-[60px] bg-[#05070a] relative border-t border-white/5 overflow-hidden">
        <div className="w-full px-[50px] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="bg-[#0b0d13] border border-white/5 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full mx-auto"
          >
            {/* Left */}
            <div className="lg:w-[45%] p-10 lg:p-14 flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 text-[#ff7a00] text-[16px] font-bold tracking-[2px] uppercase">
                  HOW IT WORKS
                </div>
                <h2 className="text-[32px] lg:text-[32px] font-bold text-white mb-6 leading-[1.15]">
                  AI-Powered VPP Platform.<br/>Autonomous. Intelligent.<br/>Profitable.
                </h2>
                <p className="text-[18px] text-gray-400 mb-8 leading-relaxed font-light">
                  Our proprietary AI platform continuously analyzes market prices, weather patterns, grid conditions, and facility loads in real-time. By leveraging advanced machine learning models, it autonomously executes the most profitable actions—dispatching energy seamlessly without disrupting your daily operations.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    "Forecast generation, facility load & market prices",
                    "Dynamically optimize battery charge/discharge",
                    "Reduce peak demand charges automatically",
                    "Sell stored energy into PJM markets at peak rates",
                    "Maximize passive revenue while minimizing risk",
                    "Real-time anomaly detection and reporting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-300 text-[16px] font-medium tracking-wide">
                      <CheckCircle2 size={24} fill="#8dff4d" stroke="#0b0d13" strokeWidth={2} className="shrink-0 drop-shadow-[0_0_5px_rgba(141,255,77,0.3)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link to="/about" className="px-8 py-4 rounded-lg border border-[#ff7a00] hover:bg-[#ff7a00]/10 text-white font-bold text-[14px] tracking-wider uppercase transition-all inline-flex items-center gap-2 w-fit">
                  VIEW PLATFORM <span className="text-[#ff7a00] font-sans text-[18px] ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="lg:w-[55%] flex flex-col md:flex-row font-sans border-l border-white/5 bg-[#0b0d13]">
              {/* Sidebar */}
              <div className="w-16 md:w-48 bg-[#07090e] border-r border-white/5 p-4 flex flex-col hidden sm:flex shrink-0">
                <div className="text-white font-bold text-[20px] tracking-tight mb-8 hidden md:flex items-center gap-1.5">
                  TECHOPS AI <div className="w-1.5 h-1.5 bg-[#8dff4d] rounded-full mb-1"></div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { icon: <LayoutDashboard size={14} />, label: "Overview", active: true },
                    { icon: <Box size={14} />, label: "Assets" },
                    { icon: <TrendingUp size={14} />, label: "Forecasting" },
                    { icon: <CloudLightning size={14} />, label: "Dispatch" },
                    { icon: <ShoppingCart size={14} />, label: "Markets" },
                    { icon: <DollarSign size={14} />, label: "Revenue" },
                    { icon: <FileText size={14} />, label: "Reports" },
                    { icon: <Bell size={14} />, label: "Alerts" },
                    { icon: <Settings size={14} />, label: "Settings" }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors ${item.active ? 'text-[#ff7a00] font-bold bg-[#ff7a00]/10' : 'text-gray-500 hover:text-gray-300'}`}>
                      {item.icon}
                      <span className={`text-[16px] hidden md:block ${item.active ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Dash Area */}
              <div className="flex-1 p-5 flex flex-col bg-[#0b0d13] gap-4 overflow-hidden">
                {/* Header Row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-[20px] font-bold text-white">Real-Time Overview</h3>
                  <div className="flex items-center gap-2 bg-[#12141a] px-3 py-1.5 rounded-lg border border-white/5">
                    <span className="text-[14px] text-gray-500 uppercase tracking-wider font-semibold">System Status</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#8dff4d]/10 text-[#8dff4d] text-[14px] font-bold border border-[#8dff4d]/20">
                      <div className="w-1.5 h-1.5 bg-[#8dff4d] rounded-full shadow-[0_0_5px_rgba(141,255,77,0.5)]"></div> OPTIMAL
                    </span>
                  </div>
                </div>

                {/* 4 Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { l: "Total Assets", v: "24", u: "" },
                    { l: "Total Capacity", v: "18.6", u: "MW" },
                    { l: "Battery Capacity", v: "52.4", u: "MWh" },
                    { l: "Live Generation", v: "12.7", u: "MW" }
                  ].map((s, i) => (
                    <div key={i} className="bg-[#12141a] border border-white/5 rounded-xl p-3 flex flex-col">
                      <div className="text-[14px] text-gray-500 mb-1 font-medium">{s.l}</div>
                      <div className="text-[24px] font-bold text-white leading-none">{s.v} <span className="text-[14px] font-normal text-gray-400 ml-0.5">{s.u}</span></div>
                    </div>
                  ))}
                </div>

                {/* Middle Charts Row */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-[240px]">
                  {/* Line Chart Panel */}
                  <div className="lg:col-span-2 bg-[#12141a] border border-white/5 rounded-xl p-4 flex flex-col relative">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                       <div className="text-[14px] text-white font-semibold">Power Flow</div>
                       <div className="flex flex-wrap justify-end gap-2 text-[14px] text-gray-400 font-medium mt-2 md:mt-0">
                         <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#ff7a00] rounded-full"></div> Solar Generation</span>
                         <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Facility Load</span>
                         <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#8dff4d] rounded-full"></div> Battery Charge</span>
                         <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></div> Market Export</span>
                       </div>
                    </div>
                    {/* Graph grid lines */}
                    <div className="flex-1 relative border-b border-l border-white/10">
                      <div className="absolute inset-0 flex flex-col justify-between">
                         <div className="w-full h-[1px] bg-white/5"></div>
                         <div className="w-full h-[1px] bg-white/5"></div>
                         <div className="w-full h-[1px] bg-white/5"></div>
                         <div className="w-full h-[1px] bg-white/5"></div>
                      </div>
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        {/* Smooth curves instead of rigid lines */}
                        <path fill="none" stroke="#ff7a00" strokeWidth="2" d="M0,80 C30,60 60,90 90,40 C120,30 150,70 180,50 C210,60 250,20 300,50" />
                        <path fill="none" stroke="#3b82f6" strokeWidth="2" d="M0,100 C30,90 60,80 90,70 C120,110 150,90 180,100 C210,110 250,80 300,90" />
                        <path fill="none" stroke="#8dff4d" strokeWidth="2" strokeDasharray="4" d="M0,120 L100,120 L150,50 L200,120 L300,120" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[14px] text-gray-500 mt-1.5 font-medium">
                       <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
                    </div>
                  </div>

                  {/* Donut Chart Panel */}
                  <div className="col-span-1 bg-[#12141a] border border-white/5 rounded-xl p-4 flex flex-col">
                     <div className="text-[14px] text-white font-semibold mb-1">Revenue Today</div>
                     <div className="text-[24px] font-bold text-white leading-none mb-3">$128,540</div>
                     
                     <div className="flex justify-center mb-3">
                       <svg viewBox="0 0 36 36" className="w-16 h-16">
                          <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" />
                          <path className="text-[#ff7a00]" strokeDasharray="45, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" />
                          <path className="text-blue-500" strokeDasharray="25, 100" strokeDashoffset="-45" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" />
                          <path className="text-[#8dff4d]" strokeDasharray="20, 100" strokeDashoffset="-70" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" />
                          <path className="text-gray-500" strokeDasharray="10, 100" strokeDashoffset="-90" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8" />
                       </svg>
                     </div>

                     <div className="mt-auto flex flex-col gap-1 text-[14px] text-gray-400 font-medium">
                        <div className="flex justify-between items-center"><span><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff7a00] mr-1.5"></span>Energy Arbitrage</span><span className="text-white">45%</span></div>
                        <div className="flex justify-between items-center"><span><span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>Demand Response</span><span className="text-white">25%</span></div>
                        <div className="flex justify-between items-center"><span><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8dff4d] mr-1.5"></span>Capacity Market</span><span className="text-white">20%</span></div>
                        <div className="flex justify-between items-center"><span><span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5"></span>Other Revenues</span><span className="text-white">10%</span></div>
                     </div>
                  </div>
                </div>

                {/* Bottom Alerts Row */}
                <div className="bg-[#12141a] border border-white/5 rounded-xl p-3 px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shrink-0">
                  <div className="flex flex-wrap items-center gap-6 flex-1">
                     <div>
                        <div className="text-[14px] text-gray-500 uppercase font-semibold mb-1">AI Dispatch Status</div>
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#8dff4d]/10 text-[#8dff4d] text-[14px] font-bold border border-[#8dff4d]/20">
                          <div className="w-1.5 h-1.5 bg-[#8dff4d] rounded-full shadow-[0_0_5px_rgba(141,255,77,0.5)]"></div> ACTIVE
                        </span>
                     </div>
                     <div className="w-[1px] h-8 bg-white/5 hidden md:block"></div>
                     <div>
                        <div className="text-[14px] text-gray-500 uppercase font-semibold mb-0.5">Next Action</div>
                        <div className="text-white text-[14px] font-bold">Discharge Battery 2.4 MW</div>
                        <div className="text-[14px] text-gray-400 mt-0.5">Market Price: $82.67/MWh</div>
                     </div>
                     <div className="w-[1px] h-8 bg-white/5 hidden md:block"></div>
                     <div>
                        <div className="text-[14px] text-gray-500 uppercase font-semibold mb-0.5">Next 5 Min Forecast</div>
                        <div className="text-[#ff7a00] text-[14px] font-bold flex items-center gap-1">
                          High Price Event
                        </div>
                        <div className="text-[14px] text-gray-400 mt-0.5">Increase Export</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 border border-white/5 bg-[#12141a] px-2.5 py-1.5 rounded-lg shrink-0">
                     <Leaf size={12} className="text-[#8dff4d]" />
                     <div>
                        <div className="text-[14px] text-gray-400 uppercase font-semibold leading-none mb-0.5">CO₂ Offset Today</div>
                        <div className="text-white text-[14px] font-bold leading-none mt-1">28.4 Tons</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-[60px] bg-[#05070a] relative border-t border-white/5">
        <div className="w-full px-[50px] relative z-10">
          <div className="bg-[#111318] border border-white/5 rounded p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/demo/background.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111318] via-[#111318]/90 to-[#111318]/50"></div>
            <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#ff7a00]/20 to-transparent pointer-events-none"></div>

            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-[32px] lg:text-[32px] font-bold text-white mb-4 leading-tight">Your Assets. Our Technology.<br/>Shared Success.</h2>
              <p className="text-gray-400 text-[20px] font-light max-w-md">Join the growing number of forward-thinking real estate owners who are turning their properties into long-term cash-flowing assets.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-10 lg:w-1/2 justify-end relative z-10">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white text-[18px] font-medium"><div className="w-3.5 h-3.5 border border-[#ff7a00] rounded-full flex items-center justify-center text-[#ff7a00]"><div className="w-1.5 h-1.5 bg-[#ff7a00] rounded-full"></div></div> Zero risk</div>
                <div className="flex items-center gap-3 text-white text-[18px] font-medium"><div className="w-3.5 h-3.5 border border-[#ff7a00] rounded-full flex items-center justify-center text-[#ff7a00]"><div className="w-1.5 h-1.5 bg-[#ff7a00] rounded-full"></div></div> Zero capital</div>
                <div className="flex items-center gap-3 text-white text-[18px] font-medium"><div className="w-3.5 h-3.5 border border-[#ff7a00] rounded-full flex items-center justify-center text-[#ff7a00]"><div className="w-1.5 h-1.5 bg-[#ff7a00] rounded-full"></div></div> Maximum reward</div>
              </div>
              <Link to="/contact" className="px-8 py-3.5 rounded bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-bold text-[16px] tracking-wider uppercase transition-all whitespace-nowrap flex items-center gap-2">
                GET YOUR FREE SITE ASSESSMENT <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
