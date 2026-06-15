import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Clock, Zap, Battery } from "lucide-react";

export default function SiteAssessment() {
  const ORANGE = "#ff7a00";
  const BLUE = "#3b82f6";
  const BG = "#05070a";
  const CARD = "#111318";
  const BORDER = "rgba(255,255,255,0.06)";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Site Assessment | TechOps Global";
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-32 pb-16 relative flex items-center justify-center"
      style={{ background: BG, color: "#fff", fontFamily: "inherit" }}
    >
      {/* Ambient backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(255,122,0,0.04)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(59,130,246,0.04)", filter: "blur(120px)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Top Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255,122,0,0.1)",
              border: "1px solid rgba(255,122,0,0.2)",
            }}
          >
            <Clock size={16} style={{ color: ORANGE }} />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: ORANGE }}
            >
              Coming Soon
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6"
            style={{ lineHeight: 1.15 }}
          >
            Live AI Site <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Assessments
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-14 max-w-2xl text-gray-400 leading-relaxed"
          >
            We are working hard to bring you the next generation of property
            intelligence. Soon, you will be able to analyze your property's solar
            capacity, battery storage potential, and financial viability in real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-14">
            {[
              {
                icon: <Zap size={28} style={{ color: ORANGE }} />,
                title: "Live Solar Yield",
                desc: "Get instant estimates on your property's solar generation capabilities and structural viability.",
              },
              {
                icon: <Battery size={28} style={{ color: BLUE }} />,
                title: "Battery Insights",
                desc: "Understand your storage needs, backup hours, and potential grid independence.",
              },
              {
                icon: <Activity size={28} style={{ color: "#22c55e" }} />,
                title: "Financial Projections",
                desc: "Calculate precise ROI, annual savings, and potential revenue with VPP integration.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <button
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 font-bold text-black transition-all overflow-hidden rounded shadow-lg"
            style={{
              background: ORANGE,
              boxShadow: "0 0 30px rgba(255,122,0,0.25)",
            }}
            onClick={() => window.history.back()}
          >
            <span className="relative z-10 font-extrabold uppercase tracking-widest text-sm">
              Go Back
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
