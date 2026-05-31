import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Building, CheckCircle2, ArrowRight, DollarSign, Activity, Zap, 
  ShieldCheck, Shield, HelpCircle, HardHat, Compass, Clock, Award,
  Leaf, TrendingUp, Sparkles, Settings, PlayCircle, LayoutGrid, BatteryCharging
} from "lucide-react";

export default function WarehouseSolution() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TechOps Global | Warehouse & Logistics Solar Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-[#05070b] text-white font-sans overflow-x-hidden selection:bg-[#ff7a00]/30 selection:text-[#ff7a00]">
      
      {/* 1. HERO SECTION WITH IMAGING BACKDROP */}
      <section 
        className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 border-b border-white/5 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(5, 7, 11, 0.96) 30%, rgba(5, 7, 11, 0.75) 60%, rgba(5, 7, 11, 0.45) 100%), url('/solutiondemo/warehouse-solar.png')"
        }}
      >
        {/* Top Breadcrumb Inside Hero */}
        <div className="w-full px-[50px] mb-8">
          <div className="flex items-center gap-2 text-[16px] font-bold text-gray-400 tracking-wider uppercase">
            <Link to="/" className="text-white hover:text-[#ff7a00] transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-400">Solutions</span>
            <span>&gt;</span>
            <span className="!text-[#ff7a00] text-[#ff7a00]">Warehouse & Logistics</span>
          </div>
        </div>

        <div className="w-full px-[50px] relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="mb-4 text-[#ff7a00] text-[18px] font-bold tracking-[3px] uppercase">
                Flat-Roof Commercial Solar & Storage
              </div>
              <h1 className="!text-white text-[60px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6">
                Turn Structural <br />
                Dead Weight into an <br />
                <span className="!text-[#ff7a00] text-[#ff7a00]">Operational Asset.</span>
              </h1>
              <p className="text-[20px] lg:text-[24px] text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
                We transform massive flat-roof warehouses into high-performing energy assets—at zero cost to you. Behind-the-meter solar and battery storage systems deliver immediate savings and long-term revenue.
              </p>
              
              {/* Action Buttons */}
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

            {/* Right Column - Stacked Feature Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 relative mt-10 lg:mt-0">
              
              {/* Card 1: ZERO CAPEX */}
              <div className="bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-[#8dff4d]/40 transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-[#8dff4d] text-[#8dff4d] flex items-center justify-center shrink-0 bg-[#8dff4d]/5">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h4 className="!text-white text-white font-extrabold text-[20px] tracking-wide uppercase">ZERO CAPEX</h4>
                    <p className="text-[18px] text-gray-400 mt-1 leading-snug">We fund, build, own & operate.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: DUAL INCOME STREAM */}
              <div className="bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-[#8dff4d]/40 transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-[#8dff4d] text-[#8dff4d] flex items-center justify-center shrink-0 bg-[#8dff4d]/5">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="!text-white text-white font-extrabold text-[20px] tracking-wide uppercase">DUAL INCOME STREAM</h4>
                    <p className="text-[18px] text-gray-400 mt-1 leading-snug">Lease income + Energy savings & market revenues.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: PJM MARKET EXPOSURE */}
              <div className="bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-[#ff7a00]/40 transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center shrink-0 bg-[#ff7a00]/5">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="!text-white text-white font-extrabold text-[20px] tracking-wide uppercase">PJM MARKET EXPOSURE</h4>
                    <p className="text-[18px] text-gray-400 mt-1 leading-snug">Tap into billions in grid-balancing opportunities.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. THE WAREHOUSE ADVANTAGE SECTION (3-COLUMN MOCKUP SPEC) */}
      <section className="py-28 bg-[#07090e] border-b border-white/5 relative">
        <div className="w-full px-[50px]">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column - Headline & Main Advantage List */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="mb-4 text-[#ff7a00] text-[18px] font-bold tracking-[3px] uppercase">
                  The Warehouse Advantage
                </div>
                <h2 className="!text-white text-[40px] lg:text-[48px] font-extrabold leading-tight mb-6">
                  Monetize Every Square Foot of Your Roof—Without Disruption.
                </h2>
                <p className="text-gray-400 text-[18px] leading-relaxed font-light mb-10">
                  Our lightweight, ballasted solar arrays and containerized battery systems are engineered for industrial rooftops and logistics facilities. No roof penetrations. No compromise to your warranties. Just pure performance and value.
                </p>
              </div>

              {/* Three Left Feature Callouts */}
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[20px] tracking-wide uppercase">ZERO ROOF PENETRATIONS</h4>
                    <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">
                      Ballasted design protects your roof integrity and warranties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[20px] tracking-wide uppercase">NO OPERATIONAL DISRUPTION</h4>
                    <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">
                      Installation without interrupting daily operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[20px] tracking-wide uppercase">INSTANT MICRO-POWER PLANT</h4>
                    <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">
                      Turns 100,000+ sq. ft. of roof space into a localized energy engine.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - 3D Isometric Building Model */}
            <div className="lg:col-span-5 flex items-center justify-center relative bg-gradient-to-b from-white/[0.01] to-white/[0.03] rounded-2xl border border-white/5 p-4 overflow-hidden">
              {/* Tech blueprint background overlay lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              <img 
                src="/solutiondemo/ChatGPT Image May 29, 2026, 10_11_02 AM.png" 
                alt="TechOps Warehouse Solar Model Blueprint" 
                className="w-full h-auto object-cover rounded-xl relative z-10 border border-white/5 shadow-2xl" 
              />
            </div>

            {/* Right Column - Spec Pointer Callouts */}
            <div className="lg:col-span-3 flex flex-col justify-center gap-12 border-l border-white/5 pl-8">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[18px] tracking-wide uppercase">LIGHTWEIGHT, BALLASTED SOLAR ARRAYS</h4>
                  <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">
                    No roof penetrations. Engineered for flat roofs. Maintains all warranties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#8dff4d]/10 border border-[#8dff4d]/20 text-[#8dff4d] flex items-center justify-center shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="!text-[#8dff4d] text-[#8dff4d] font-bold text-[18px] tracking-wide uppercase">CONTAINERIZED BATTERY STORAGE</h4>
                  <p className="text-gray-400 text-[18px] mt-1 leading-relaxed">
                    Plug-and-play systems. Scalable. Safe. Powerful. Installed at grade.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* 3. KEY METRICS GRID BANNER */}
      <section className="py-16 bg-[#05070b] relative">
        <div className="w-full px-[50px]">
          <div className="grid md:grid-cols-4 gap-6 border border-white/10 rounded-2xl bg-[#0a0c10] p-8 lg:p-10 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl">
            
            {/* Metric 1 */}
            <div className="flex items-center gap-5 p-2">
              <div className="w-[60px] h-[60px] rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                <LayoutGrid size={26} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="!text-white text-white text-[40px] lg:text-[40px] font-extrabold tracking-tight leading-none mb-1">100,000+</h3>
                <div className="!text-white text-white text-[14px] lg:text-[16px] font-bold tracking-widest uppercase leading-snug">SQ. FT. ROOF SPACE<br />MONETIZED</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-5 p-2 md:pl-8">
              <div className="w-[60px] h-[60px] rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                <Zap size={26} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="!text-white text-white text-[40px] lg:text-[40px] font-extrabold tracking-tight leading-none mb-1">30-50%</h3>
                <div className="!text-white text-white text-[14px] lg:text-[16px] font-bold tracking-widest uppercase leading-snug">REDUCTION IN PEAK<br />DEMAND COSTS</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-5 p-2 md:pl-8">
              <div className="w-[60px] h-[60px] rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                <DollarSign size={26} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="!text-white text-white text-[40px] lg:text-[40px] font-extrabold tracking-tight leading-none mb-1">15-20</h3>
                <div className="!text-white text-white text-[14px] lg:text-[16px] font-bold tracking-widest uppercase leading-snug">YEAR PREDICTABLE LEASE<br />INCOME</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-5 p-2 md:pl-8">
              <div className="w-[60px] h-[60px] rounded-full border-2 border-[#ff7a00] text-[#ff7a00] flex items-center justify-center bg-[#ff7a00]/5 shrink-0">
                <Leaf size={26} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="!text-white text-white text-[40px] lg:text-[40px] font-extrabold tracking-tight leading-none mb-1">ZERO</h3>
                <div className="!text-white text-white text-[14px] lg:text-[16px] font-bold tracking-widest uppercase leading-snug">CAPEX. ZERO RISK.<br />ALL VALUE.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DESIGNED FOR WAREHOUSE & LOGISTICS LEADERS (5-COLUMN MOCKUP SPEC) */}
      <section className="py-24 bg-[#07090e] border-t border-b border-white/5">
        <div className="w-full px-[50px]">
          
          {/* Header Title with lateral lines */}
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] bg-white/10 flex-1"></div>
            <h2 className="!text-white text-[24px] md:text-[24px] font-extrabold tracking-[4px] uppercase whitespace-nowrap text-center">
              DESIGNED FOR WAREHOUSE & LOGISTICS LEADERS
            </h2>
            <div className="h-[1px] bg-white/10 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            
            {/* Col 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center bg-[#8dff4d]/5 mb-6">
                <Building size={24} />
              </div>
              <h3 className="!text-white text-white font-bold text-[20px] mb-3">Lower Operating Costs</h3>
              <p className="text-gray-400 text-[18px] leading-relaxed font-light">
                Slash electric bills by shaving peak demand.
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center bg-[#8dff4d]/5 mb-6">
                <DollarSign size={24} />
              </div>
              <h3 className="!text-white text-white font-bold text-[20px] mb-3">New Revenue Stream</h3>
              <p className="text-gray-400 text-[18px] leading-relaxed font-light">
                Long-term lease payments with no upfront cost.
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center bg-[#8dff4d]/5 mb-6">
                <Leaf size={24} />
              </div>
              <h3 className="!text-white text-white font-bold text-[20px] mb-3">ESG & Sustainability Leadership</h3>
              <p className="text-gray-400 text-[18px] leading-relaxed font-light">
                Strengthen sustainability goals and reporting.
              </p>
            </div>

            {/* Col 4 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center bg-[#8dff4d]/5 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="!text-white text-white font-bold text-[20px] mb-3">Energy Security & Resilience</h3>
              <p className="text-gray-400 text-[18px] leading-relaxed font-light">
                On-site power reduces grid dependency.
              </p>
            </div>

            {/* Col 5 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#8dff4d]/30 text-[#8dff4d] flex items-center justify-center bg-[#8dff4d]/5 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="!text-white text-white font-bold text-[20px] mb-3">Enhance Property Value</h3>
              <p className="text-gray-400 text-[18px] leading-relaxed font-light">
                Increase NOI and asset valuation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CASE STUDY & HOW IT WORKS SPLIT ROW */}
      <section className="py-24 bg-[#05070b]" id="how-it-works">
        <div className="w-full px-[50px]">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Case Study Card (8 columns) */}
            <div className="lg:col-span-8">
              <div className="bg-[#0f1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                
                {/* Text Content (Left Half) */}
                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-[#8dff4d] text-[14px] font-bold tracking-[3px] uppercase mb-4">
                    CASE STUDY
                  </div>
                  <h3 className="!text-white text-white text-[24px] lg:text-[32px] font-extrabold mb-4 leading-tight">
                    Logistics Facility – New Jersey Turnpike
                  </h3>
                  <p className="text-gray-400 text-[18px] leading-relaxed mb-8 font-light">
                    A 1.2M sq. ft. distribution center transformed its roof into a 2.8 MW solar + 5 MWh battery micro-power plant.
                  </p>

                  <ul className="space-y-4 mb-10">
                    {[
                      "$380,000+ annual energy savings",
                      "$250,000 annual lease income",
                      "42% peak demand cost reduction",
                      "Zero operational impact"
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

                {/* Photo (Right Half) */}
                <div 
                  className="w-full md:w-1/2 min-h-[300px] bg-cover bg-center border-l border-white/10"
                  style={{ backgroundImage: "url('/solutiondemo/warehouse-solar.png')" }}
                >
                </div>

              </div>
            </div>

            {/* Right How It Works Process (4 columns) */}
            <div className="lg:col-span-4 pl-0 lg:pl-6 pt-6 lg:pt-0">
              <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase mb-8">
                HOW IT WORKS
              </div>

              <div className="flex flex-col gap-8">
                {[
                  { num: 1, title: "Site Assessment", desc: "We evaluate your roof, load profile, and utility costs." },
                  { num: 2, title: "Custom System Design", desc: "Engineered for maximum performance without roof penetration." },
                  { num: 3, title: "Build & Commission", desc: "We install solar and storage with zero disruption." },
                  { num: 4, title: "Operate & Optimize", desc: "AI-powered dispatch maximizes savings, revenue, and performance." }
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


      {/* 6. CTA BLOCK (3-COLUMN SPEC) */}
      <section className="py-16 bg-[#05070b] relative border-t border-white/5">
        <div className="w-full px-[50px] relative z-10">
          <div 
            className="border border-white/10 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(10,12,18,0.97) 0%, rgba(10,12,18,0.90) 50%, rgba(10,12,18,0.75) 100%), url('/solutiondemo/warehouse-solar.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Grid textures */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            
            {/* Accent orange borders */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#ff7a00]"></div>
            
            {/* Component 1 (Left) */}
            <div className="md:w-5/12 relative z-10">
              <h2 className="!text-white text-[32px] lg:text-[48px] font-extrabold leading-tight">
                Your Roof. Our Technology. <br className="hidden lg:block"/>
                <span className="!text-[#ff7a00] text-[#ff7a00]">Shared Success.</span>
              </h2>
            </div>
            
            <div className="md:w-3/12 flex flex-col gap-4 font-semibold relative z-10">
              <div className="flex items-center gap-3 text-white text-[18px] font-bold tracking-wider">
                <CheckCircle2 size={18} className="text-[#8dff4d]" /> Zero Capex
              </div>
              <div className="flex items-center gap-3 text-white text-[18px] font-bold tracking-wider">
                <CheckCircle2 size={18} className="text-[#8dff4d]" /> Zero Risk
              </div>
              <div className="flex items-center gap-3 text-white text-[18px] font-bold tracking-wider">
                <CheckCircle2 size={18} className="text-[#8dff4d]" /> Maximum Reward
              </div>
            </div>
            
            {/* Component 3 (Right CTA Button) */}
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
