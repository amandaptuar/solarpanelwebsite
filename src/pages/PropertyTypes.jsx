import React from "react";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Factory, 
  ShoppingCart, 
  Building2, 
  Snowflake, 
  Database, 
  Users, 
  ArrowRight,
  ClipboardCheck,
  Ruler,
  Wrench,
  Monitor,
  DollarSign
} from "lucide-react";

export default function PropertyTypes() {
  const propertyCards = [
    {
      title: "Warehouse & Logistics",
      desc: "Power high-demand operations with solar, storage, and microgrids built for uptime and efficiency.",
      img: "/solutiondemo/warehouse-solar.png",
      icon: <Truck size={22} />,
      path: "/solutions/warehouse"
    },
    {
      title: "Industrial",
      desc: "Reduce energy costs and emissions across manufacturing and heavy industrial facilities.",
      img: "/solutiondemo/industrial-solar.png",
      icon: <Factory size={22} />,
      path: "#"
    },
    {
      title: "Retail",
      desc: "Lower operating costs and improve sustainability for retail stores and shopping centers.",
      img: "/solutiondemo/retail-solar.png",
      icon: <ShoppingCart size={22} />,
      path: "#"
    },
    {
      title: "Commercial Office",
      desc: "Sustainable, cost-effective energy solutions for office buildings and corporate campuses.",
      img: "/solutiondemo/office-solar.png",
      icon: <Building2 size={22} />,
      path: "#"
    },
    {
      title: "Cold Storage",
      desc: "Ensure reliable power and temperature control with resilient, on-site energy systems.",
      img: "/solutiondemo/cold-storage-solar.png",
      icon: <Snowflake size={22} />,
      path: "#"
    },
    {
      title: "Data Centers",
      desc: "Protect critical operations with clean, reliable power and advanced energy storage.",
      img: "/solutiondemo/data-center-solar.png",
      icon: <Database size={22} />,
      path: "#"
    },
    {
      title: "Multi-Tenant",
      desc: "Flexible energy solutions designed for shared buildings and multi-tenant facilities.",
      img: "/solutiondemo/multitenant-solar.png",
      icon: <Users size={22} />,
      path: "#"
    },
    {
      title: "Parking Structures",
      desc: "Turn underutilized space into clean energy assets while powering your operations.",
      img: "/solutiondemo/parking-solar.png",
      icon: <span className="font-extrabold text-[20px] leading-none select-none">P</span>,
      path: "#"
    }
  ];

  const steps = [
    {
      num: 1,
      title: "Assess",
      desc: "We evaluate your property, energy usage, and goals.",
      icon: <ClipboardCheck size={22} />
    },
    {
      num: 2,
      title: "Design",
      desc: "Custom system design tailored to your property type.",
      icon: <Ruler size={22} />
    },
    {
      num: 3,
      title: "Build",
      desc: "Expert engineering and seamless installation.",
      icon: <Wrench size={22} />
    },
    {
      num: 4,
      title: "Operate",
      desc: "We operate and monitor for maximum performance.",
      icon: <Monitor size={22} />
    },
    {
      num: 5,
      title: "Optimize",
      desc: "Ongoing optimization to maximize savings and value.",
      icon: <DollarSign size={22} />
    }
  ];

  return (
    <div className="bg-[#05070b] min-h-screen text-white font-sans overflow-x-hidden pt-0">
      
      {/* 1. Hero Section */}
      <section 
        className="relative pt-[100px] pb-[70px] md:pt-[130px] md:pb-[96px] lg:pt-[150px] lg:pb-[112px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5,7,11,0.95) 0%, rgba(5,7,11,0.85) 45%, rgba(5,7,11,0.2) 75%, rgba(5,7,11,0.05) 100%), url("/solutiondemo/warehouse-solar.png")`
        }}
      >
        {/* Radial grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="w-full px-6 sm:px-[50px] relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-12 text-[18px] sm:text-[18px]">
            <Link to="/" className="text-gray-400 hover:text-white no-underline transition-colors">Home</Link>
            <span className="text-gray-600 font-light">&gt;</span>
            <span className="text-white font-medium">Property Types</span>
          </div>

          {/* Heading Content */}
          <div className="max-w-5xl">
            <h1 className="!text-white text-white font-black text-[56px] md:text-[64px] lg:text-[64px] tracking-tight leading-none mb-6">
              Property Types
            </h1>
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[40px] font-extrabold mt-4 mb-6 tracking-tight leading-tight">
              <span className="text-[#ff7a00]">Tailored Energy Solutions for </span>
              <span className="text-white">Every Type of Property.</span>
            </h2>
            <p className="text-gray-300 text-[20px] sm:text-[20px] md:text-[20px] font-light leading-relaxed mt-6 max-w-4xl">
              TechOps Global delivers behind-the-meter solar, battery storage and microgrid solutions across a wide range of commercial and industrial properties. No matter your property type, we design, build, and operate systems that reduce costs, increase resilience, and drive long-term value.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Solutions Grid Section */}
      <section className="py-20 lg:py-28 bg-[#05070b] border-b border-white/5">
        <div className="w-full px-6 sm:px-[50px]">
          
          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="flex-grow h-[1px] bg-white/10 max-w-[200px] hidden md:block"></div>
            <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase">
              SOLUTIONS FOR EVERY PROPERTY TYPE
            </div>
            <div className="flex-grow h-[1px] bg-white/10 max-w-[200px] hidden md:block"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyCards.map((c, index) => (
              <div 
                key={index}
                className="bg-[#111318]/50 border border-white/10 rounded-2xl overflow-hidden relative flex flex-col hover:border-[#ff7a00]/30 hover:shadow-[0_8px_30px_rgba(255,122,0,0.08)] transition-all group duration-300 min-h-[390px]"
              >
                {/* Image block */}
                <div 
                  className="w-full bg-cover bg-center relative border-b border-white/5 shrink-0"
                  style={{ backgroundImage: `url(${c.img})`, height: '192px' }}
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300"></div>
                </div>

                {/* Overlapping Badge */}
                <div className="absolute top-[174px] left-6 z-10 w-11 h-11 rounded-full border border-[#ff7a00]/40 bg-[#ff7a00]/10 flex items-center justify-center text-[#ff7a00] shadow-md backdrop-blur-sm group-hover:border-[#ff7a00] transition-colors duration-300">
                  {c.icon}
                </div>

                {/* Text Content */}
                <div className="pt-8 px-6 pb-6 flex flex-col flex-grow">
                  <h3 className="!text-white text-white font-extrabold text-[20px] sm:text-[20px] tracking-wide mb-3">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-[16px] sm:text-[18px] leading-relaxed font-light mb-5 flex-grow">
                    {c.desc}
                  </p>
                  
                  {c.path === "#" ? (
                    <span className="text-[#ff7a00]/60 font-bold text-[16px] sm:text-[18px] uppercase tracking-wider flex items-center gap-1.5 select-none cursor-default">
                      Learn More <ArrowRight size={14} className="opacity-50" />
                    </span>
                  ) : (
                    <Link 
                      to={c.path}
                      className="text-[#ff7a00] hover:text-[#ff8a1c] font-bold text-[16px] sm:text-[18px] uppercase tracking-wider flex items-center gap-1.5 transition-colors no-underline"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Steps Horizontal Timeline Section */}
      <section className="py-20 lg:py-28 bg-[#05070b] border-b border-white/5">
        <div className="w-full px-6 sm:px-[50px]">

          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-6 mb-20">
            <div className="flex-grow h-[1px] bg-white/10 max-w-[200px] hidden md:block"></div>
            <div className="text-[#ff7a00] text-[16px] font-bold tracking-[3px] uppercase">
              BUILT FOR PERFORMANCE. DESIGNED FOR YOU.
            </div>
            <div className="flex-grow h-[1px] bg-white/10 max-w-[200px] hidden md:block"></div>
          </div>

          {/* Steps Timeline Wrapper */}
          <div className="relative">
            {/* Dashed Connector Line (Desktop Only) */}
            <div className="absolute top-[18px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-white/15 z-0 hidden lg:block"></div>

            {/* Steps Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 relative z-10">
              {steps.map((s, index) => (
                <div key={index} className="flex flex-col items-center group">
                  {/* Number Badge */}
                  <div className="w-9 h-9 rounded-full bg-[#ff7a00] text-black font-extrabold flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(255,122,0,0.3)] text-[18px] z-10 relative">
                    {s.num}
                  </div>

                  {/* Circled Icon Container */}
                  <div className="w-14 h-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mb-5 text-white group-hover:border-[#ff7a00]/30 group-hover:bg-[#ff7a00]/5 transition-all duration-300">
                    <span className="text-gray-300 group-hover:text-[#ff7a00] transition-colors duration-300">
                      {s.icon}
                    </span>
                  </div>

                  {/* Text Details */}
                  <h3 className="!text-white text-white font-extrabold text-[20px] mb-2.5 tracking-wide text-center">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-[16px] sm:text-[18px] leading-relaxed font-light text-center px-4 max-w-[240px]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA Section Block */}
      <section className="py-16 bg-[#05070b]">
        <div className="w-full px-6 sm:px-[50px]">
          <div 
            className="rounded-2xl border border-white/10 p-10 md:p-14 overflow-hidden relative min-h-[250px] flex items-center bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(5,7,11,0.95) 45%, rgba(5,7,11,0.7) 100%), url("/solutiondemo/warehouse-solar.png")`,
            }}
          >
            {/* Grid texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left">
                <h2 className="!text-white text-white text-[40px] md:text-[48px] font-extrabold tracking-tight leading-tight">
                  Every Property. Every Watt. Every Advantage.
                </h2>
                <p className="text-gray-300 text-[20px] md:text-[20px] font-light mt-2 max-w-xl">
                  Let's build a smarter, stronger, more sustainable energy future—together.
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
