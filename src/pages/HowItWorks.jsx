import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Sun, BatteryCharging, Activity, Coins, ClipboardCheck, 
  Ruler, Wrench, Monitor, DollarSign, ShieldCheck, 
  Shield, Leaf, TrendingUp, ArrowRight
} from "lucide-react";

export default function HowItWorks() {
  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      num: 1,
      title: "Assess",
      desc: "We evaluate your property, energy usage, roof condition, and goals to determine the best solution for you.",
      icon: <ClipboardCheck className="text-[#ff7a00]" size={22} />,
      img: "/img/low-angle-shot-of-a-group-of-businesspeople-joinin-2026-01-09-09-45-09-utc.jpg"
    },
    {
      num: 2,
      title: "Design",
      desc: "Our engineers create a custom solar, storage, and energy solution tailored to your property and budget.",
      icon: <Ruler className="text-[#ff7a00]" size={22} />,
      img: "/solutiondemo/design-blueprint.png"
    },
    {
      num: 3,
      title: "Build",
      desc: "We handle permitting, procurement, and installation with minimal disruption to your daily operations.",
      icon: <Wrench className="text-[#ff7a00]" size={22} />,
      img: "/img/team-technicians-carrying-photovoltaic-solar-modul-2026-01-09-10-53-57-utc.jpg"
    },
    {
      num: 4,
      title: "Operate",
      desc: "Your system goes live. We monitor performance 24/7 to ensure maximum efficiency and reliability.",
      icon: <Monitor className="text-[#ff7a00]" size={22} />,
      img: "/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg"
    },
    {
      num: 5,
      title: "Optimize",
      desc: "We continuously optimize your system to increase savings, extend equipment life, and maximize value.",
      icon: <DollarSign className="text-[#ff7a00]" size={22} />,
      img: "/demo/optimize-dashboard.png"
    }
  ];

  const differences = [
    {
      title: "End-to-End Ownership",
      desc: "We own, develop, and operate your custom energy systems — you receive all the benefits of clean energy without any operational complexity.",
      icon: <ShieldCheck size={26} className="text-[#ff7a00]" />
    },
    {
      title: "No Upfront Capital",
      desc: "Zero upfront capital cost with our flexible solar financing models and scalable energy-as-a-service options built for your business.",
      icon: <DollarSign size={26} className="text-[#ff7a00]" />
    },
    {
      title: "Expert Engineering",
      desc: "Our experienced in-house engineers design and deliver high-performance solar and battery systems customized for your facility layout.",
      icon: <Wrench size={26} className="text-[#ff7a00]" />
    },
    {
      title: "Real-Time Monitoring",
      desc: "Advanced 24/7 analytics and remote monitoring ensure your solar system performs at its absolute peak capacity, every single day.",
      icon: <TrendingUp size={26} className="text-[#ff7a00]" />
    },
    {
      title: "Reliable & Secure",
      desc: "We use top-tier, industry-leading equipment and certified maintenance routines to keep your power system running securely for decades.",
      icon: <Shield size={26} className="text-[#ff7a00]" />
    },
    {
      title: "Sustainable Impact",
      desc: "Substantially reduce carbon emissions, hit environmental ESG goals, and create a cleaner, more resilient future for your community.",
      icon: <Leaf size={26} className="text-[#ff7a00]" />
    }
  ];

  return (
    <div className="bg-[#05070b] min-h-screen text-white font-sans overflow-x-hidden pt-0">
      
      {/* 2. Hero Section */}
      <section 
        className="relative pt-[110px] pb-16 md:pt-[140px] md:pb-20 lg:pt-[180px] lg:pb-32 w-full overflow-hidden border-b border-white/5 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5,7,11,0.92) 40%, rgba(5,7,11,0.6) 100%), url("/solutiondemo/ChatGPT Image May 29, 2026, 10_05_44 AM.png")`,
        }}
      >
        <div className="w-full px-6 sm:px-[50px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase mb-4">
                HOW IT WORKS
              </div>
              <h1 className="!text-white text-white text-[40px] sm:text-[48px] lg:text-[60px] font-extrabold leading-[1.2] lg:leading-[1.1] mb-6 tracking-tight">
                Simple Process.<br />
                Powerful Results.
              </h1>
              <p className="text-gray-300 text-[18px] sm:text-[20px] lg:text-[20px] leading-relaxed mb-8 font-light max-w-lg">
                We make clean energy simple. From your first assessment to long-term performance, TechOps Global handles everything — so you can focus on your business while we power your property.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold text-[18px] tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(255,122,0,0.3)] w-fit gap-2"
                style={{ textDecoration: 'none' }}
              >
                GET YOUR FREE SITE ASSESSMENT <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Interactive Solar Callouts Column */}
            <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[520px] w-full">
              
              {/* Desktop Absolute Positioned Layout (Hidden on Mobile/Tablet) */}
              <div className="hidden lg:block absolute inset-0 z-10">
                {/* Pointer Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Solar Power Line: From bottom edge of SOLAR POWER card to panels */}
                  <line x1="26%" y1="20%" x2="48%" y2="28%" stroke="#ff7a00" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                  <circle cx="48%" cy="28%" r="4" fill="#ff7a00" />

                  {/* Battery Storage Line: From bottom edge of BATTERY STORAGE card to cabinets */}
                  <line x1="74%" y1="20%" x2="65%" y2="26%" stroke="#ff7a00" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                  <circle cx="65%" cy="26%" r="4" fill="#ff7a00" />

                  {/* Smart Monitoring Line: From top edge of SMART MONITORING card to center panels */}
                  <line x1="22%" y1="78%" x2="40%" y2="52%" stroke="#ff7a00" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                  <circle cx="40%" cy="52%" r="4" fill="#ff7a00" />

                  {/* Energy Savings Line: From top edge of ENERGY SAVINGS card to warehouse docks */}
                  <line x1="78%" y1="78%" x2="68%" y2="60%" stroke="#ff7a00" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                  <circle cx="68%" cy="60%" r="4" fill="#ff7a00" />
                </svg>

                {/* Card 1: SOLAR POWER (Top Left-Center) */}
                <div 
                  className="absolute bg-[#0b0f19]/90 backdrop-blur-md border border-[#ff7a00]/30 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.1)] hover:border-[#ff7a00] transition-colors"
                  style={{ top: '6%', left: '8%', width: '235px' }}
                >
                  <div className="w-9 h-9 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                    <Sun className="text-[#ff7a00]" size={18} />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="text-white font-bold text-[16px] mb-0.5 tracking-wider uppercase">SOLAR POWER</h4>
                    <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Clean. Reliable. Scalable.</p>
                  </div>
                </div>

                {/* Card 2: BATTERY STORAGE (Top Right) */}
                <div 
                  className="absolute bg-[#0b0f19]/90 backdrop-blur-md border border-[#ff7a00]/30 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.1)] hover:border-[#ff7a00] transition-colors"
                  style={{ top: '6%', right: '8%', width: '235px' }}
                >
                  <div className="w-9 h-9 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                    <BatteryCharging className="text-[#ff7a00]" size={18} />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="text-white font-bold text-[16px] mb-0.5 tracking-wider uppercase">BATTERY STORAGE</h4>
                    <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Store energy. Use anytime.</p>
                  </div>
                </div>

                {/* Card 3: SMART MONITORING (Bottom Left-Center) */}
                <div 
                  className="absolute bg-[#0b0f19]/90 backdrop-blur-md border border-[#ff7a00]/30 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.1)] hover:border-[#ff7a00] transition-colors"
                  style={{ bottom: '12%', left: '2%', width: '245px' }}
                >
                  <div className="w-9 h-9 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                    <Activity className="text-[#ff7a00]" size={18} />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="text-white font-bold text-[16px] mb-0.5 tracking-wider uppercase">SMART MONITORING</h4>
                    <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Real-time insights. Maximum performance.</p>
                  </div>
                </div>

                {/* Card 4: ENERGY SAVINGS (Bottom Right) */}
                <div 
                  className="absolute bg-[#0b0f19]/90 backdrop-blur-md border border-[#ff7a00]/30 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.1)] hover:border-[#ff7a00] transition-colors"
                  style={{ bottom: '12%', right: '2%', width: '235px' }}
                >
                  <div className="w-9 h-9 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                    <Coins className="text-[#ff7a00]" size={18} />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <h4 className="text-white font-bold text-[16px] mb-0.5 tracking-wider uppercase">ENERGY SAVINGS</h4>
                    <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Lower costs. Stronger bottom line.</p>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Responsive Fallback Layout (Block Grid) */}
              <div className="block lg:hidden mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px] mx-auto">
                  {/* Card 1 */}
                  <div className="bg-[#0b0f19]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.03)]">
                    <div className="w-10 h-10 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                      <Sun className="text-[#ff7a00]" size={20} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h4 className="text-white font-bold text-[16px] tracking-wider uppercase">SOLAR POWER</h4>
                      <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Clean. Reliable. Scalable.</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#0b0f19]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.03)]">
                    <div className="w-10 h-10 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                      <BatteryCharging className="text-[#ff7a00]" size={20} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h4 className="text-white font-bold text-[16px] tracking-wider uppercase">BATTERY STORAGE</h4>
                      <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Store energy. Use anytime.</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#0b0f19]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.03)]">
                    <div className="w-10 h-10 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                      <Activity className="text-[#ff7a00]" size={20} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h4 className="text-white font-bold text-[16px] tracking-wider uppercase">SMART MONITORING</h4>
                      <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Real-time insights. Maximum performance.</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#0b0f19]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,0,0.03)]">
                    <div className="w-10 h-10 rounded-full border border-[#ff7a00] flex items-center justify-center shrink-0">
                      <Coins className="text-[#ff7a00]" size={20} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h4 className="text-white font-bold text-[16px] tracking-wider uppercase">ENERGY SAVINGS</h4>
                      <p className="text-gray-400 text-[14px] mb-0 font-light leading-snug">Lower costs. Stronger bottom line.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Process Section */}
      <section className="py-20 lg:py-28 bg-[#05070b] border-b border-white/5">
        <div className="w-full px-6 sm:px-[50px]">
          
          <div className="text-center mb-16">
            <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase mb-3">
              OUR PROCESS
            </div>
            <h2 className="!text-white text-white text-[40px] lg:text-[48px] font-extrabold tracking-tight">
              From Start to Savings in 5 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((s, index) => (
              <div 
                key={s.num} 
                className="bg-[#0a0c10] border border-white/10 rounded-2xl relative flex flex-col items-start hover:border-[#ff7a00]/30 transition-all group overflow-hidden shadow-2xl"
              >
                {/* Photo box (flush with top, left, right) */}
                <div className="w-full h-48 bg-cover bg-center relative border-b border-white/5 shrink-0" style={{ backgroundImage: `url(${s.img})` }}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                  
                  {/* Step Badge (inside image, top left) */}
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-[#ff7a00] text-black font-extrabold flex items-center justify-center shadow-lg text-[20px]">
                    {s.num}
                  </div>
                </div>

                {/* Content area (with padding) */}
                <div className="p-6 lg:p-8 w-full flex flex-col items-start flex-grow">
                  {/* Circled icon */}
                  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#ff7a00] flex items-center justify-center mb-6 bg-transparent shrink-0">
                    {/* Clone the icon to ensure it has the right size for this new circle */}
                    {React.cloneElement(s.icon, { size: 34, strokeWidth: 1.5 })}
                  </div>

                  {/* Text content */}
                  <h3 className="!text-white text-white font-bold text-[24px] tracking-wide mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-[18px] leading-relaxed font-light mb-0">{s.desc}</p>
                </div>

                {/* Desktop Connection Arrow */}
                {index < 4 && (
                  <div className="hidden lg:flex absolute top-[96px] -right-[18px] z-20 items-center justify-center w-9 h-9 rounded-full bg-[#111318] border border-white/10 shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Difference Section */}
      <section className="py-20 lg:py-28 bg-[#05070b]">
        <div className="w-full px-6 sm:px-[50px]">
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex-grow h-[1px] bg-white/10 max-w-[200px] hidden md:block"></div>
            <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase">
              THE TECHOPS GLOBAL DIFFERENCE
            </div>
            <div className="flex-grow h-[1px] bg-white/10 max-w-[200px] hidden md:block"></div>
          </div>

          <div className="mb-16">
            <h2 className="!text-white text-white font-extrabold text-[40px] lg:text-[48px] text-center tracking-tight">
              Built for Performance. Backed by Experts.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {differences.map((d, index) => (
              <div key={index} className="flex gap-5 items-start hover:translate-y-[-2px] transition-transform">
                <div className="w-14 h-14 rounded-full border border-[#ff7a00]/30 bg-[#ff7a00]/5 flex items-center justify-center shrink-0">
                  {d.icon}
                </div>
                <div>
                  <h3 className="!text-white text-white font-bold text-[20px] mb-2 tracking-wide">{d.title}</h3>
                  <p className="text-gray-400 text-[18px] leading-relaxed font-light">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA Block */}
      <section className="py-16 bg-[#05070b]">
        <div className="w-full px-6 sm:px-[50px]">
          <div 
            className="rounded-2xl border border-white/10 p-10 md:p-14 overflow-hidden relative min-h-[250px] flex items-center bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(5,7,11,0.95) 45%, rgba(5,7,11,0.7) 100%), url("/solutiondemo/ChatGPT Image May 29, 2026, 10_05_44 AM.png")`,
            }}
          >
            {/* Grid textures */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left">
                <h2 className="!text-white text-white text-[40px] md:text-[48px] font-extrabold tracking-tight">
                  Let's Power Your Property.
                </h2>
                <p className="text-gray-300 text-[20px] md:text-[20px] font-light mt-2 max-w-xl">
                  Take the first step toward lower costs, energy independence, and a sustainable future.
                </p>
              </div>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-extrabold text-[18px] tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(255,122,0,0.3)] shrink-0 gap-2 flex items-center"
                style={{ textDecoration: 'none' }}
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
