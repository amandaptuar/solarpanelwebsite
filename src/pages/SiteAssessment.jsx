import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Activity, Zap, DollarSign, Building, Leaf, AlertTriangle, Loader2, Battery, Target, TrendingUp, Download, CheckCircle, Shield, Home as HomeIcon, CarFront, ZapOff, Check, X, Info } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, ReferenceLine, Area, AreaChart } from "recharts";

const fadeUp = { hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:0.55,ease:"easeOut"}} };

export default function SiteAssessment() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState(null);
  const [isPDF, setIsPDF] = useState(false);
  const [manualLat, setManualLat] = useState("");
  const [manualLng, setManualLng] = useState("");
  const [manualError, setManualError] = useState("");
  const [activeCoords, setActiveCoords] = useState(null);
  const BASE = "https://vpp-backened-model.onrender.com";

  useEffect(()=>{ window.scrollTo(0,0); document.title="Live Site Assessment | TechOps Global"; },[]);

  const handleStart = () => {
    setStatus("loading_location"); setErrorMsg(""); setManualError("");
    if(!navigator.geolocation){ setErrorMsg("Geolocation not supported."); setStatus("error"); return; }
    navigator.geolocation.getCurrentPosition(
      p => {
        const lat = Number(p.coords.latitude.toFixed(6));
        const lon = Number(p.coords.longitude.toFixed(6));
        fetchAnalysis(lat, lon);
      },
      ()=>{ setErrorMsg("Location access denied. Please allow location or use manual input."); setStatus("error"); },
      {timeout:10000}
    );
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    const lat = Number(parseFloat(manualLat).toFixed(6));
    const lng = Number(parseFloat(manualLng).toFixed(6));
    if(isNaN(lat) || lat < -90 || lat > 90) { setManualError("Enter a valid latitude (−90 to 90)."); return; }
    if(isNaN(lng) || lng < -180 || lng > 180) { setManualError("Enter a valid longitude (−180 to 180)."); return; }
    setManualError("");
    fetchAnalysis(lat, lng);
  };

  const fetchAnalysis = async (lat,lon) => {
    setStatus("loading_api");
    try {
      const res = await fetch(`${BASE}/analyze-property`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({latitude:lat,longitude:lon})});
      if(!res.ok) throw new Error("API error");
      const d = await res.json();
      if(d.error) throw new Error(d.error);
      if(!d.coordinates) throw new Error("No building data found.");
      setData(d); 
      setActiveCoords({latitude: lat, longitude: lon});
      setStatus("success");
    } catch(e) {
      setErrorMsg(e.message==="Failed to fetch"?"Server busy — try Simulate instead.":e.message);
      setStatus("error");
    }
  };

  const handleSimulate = () => {
    setData({
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
      executive_summary: {
        summary: "This property demonstrates strong distributed energy potential with an estimated rooftop area of 18,214 sqm and regional solar irradiance of 4.8 Peak Sun Hours. The proposed solar system can generate approximately 6,154 kWh/day, supporting commercial solar deployment, battery integration, and future Virtual Power Plant participation.",
        key_metrics: { property_type: "Mall", roof_area_sqm: 18214, solar_capacity_kw: 1602.7, battery_mwh: 1.85, annual_generation_kwh: 2246344.32, annual_savings_usd: 269561.32 }
      },
      solar: {
        technical: "Solar Infrastructure Analysis\n• Usable Rooftop Area: 14,571 sqm\n• Estimated Panel Count: 2,914\n• Proposed System Capacity: 1,603 kW\n• System Performance Ratio: 0.8\nThe rooftop configuration appears suitable for medium-to-large scale commercial photovoltaic deployment.",
        generation: "Estimated Regional Solar Resource\n• Average Solar Irradiance: 4.8 Peak Sun Hours\n• Estimated Daily Generation: 6,154 kWh/day\n• Estimated Monthly Generation: 187,195 kWh/month\n• Estimated Annual Generation: 2,246,344 kWh/year",
        equivalencies: { homes_powered: 512, ev_charges: 102, equivalency_summary: "The estimated solar generation capacity is approximately equivalent to powering 512 average homes daily or supporting nearly 102 EV charging sessions per day." },
        performance: { specific_yield: 1401.6, capacity_factor: 16.0, performance_summary: "Performance analysis indicates a specific yield of approximately 1,402 kWh/kW/year with an estimated capacity factor of 16.0%." },
        insights: { solar_viability: "Good", deployment_scale: "Commercial Scale", strategic_summary: "The property demonstrates Good solar viability with a deployment classification of Commercial Scale." }
      },
      battery: {
        storage: { battery_kwh: 1846.31, battery_mwh: 1.85, storage_summary: "Battery Storage Infrastructure\n• Recommended Battery Capacity: 1,846 kWh\n• Utility Scale Storage: 1.85 MWh\n• Storage Strategy: Commercial Distributed Energy Storage" },
        applications: { supported_services: ["Peak Shaving", "Demand Response", "Backup Power", "Energy Arbitrage"], applications_summary: "Operational Energy Applications\n• Peak Demand Reduction Support\n• Backup Power Resiliency\n• Energy Time-Shifting Capability" },
        performance: { estimated_backup_hours: 3.7, dispatch_capability: "Moderate", performance_summary: "Battery Performance Assessment\n• Estimated Backup Capability: 3.7 hours\n• Dispatch Flexibility: Moderate\n• Grid Interaction Potential: Commercial Scale" },
        insights: { battery_readiness: "Commercial Ready", vpp_compatibility: "Moderate", strategic_summary: "Strategic Energy Storage Insights\n• Battery Readiness Level: Commercial Ready\n• VPP Compatibility: Moderate" }
      },
      financial: {
        economics: { estimated_system_cost_usd: 1282160, annual_savings_usd: 269561.32, estimated_roi_years: 4.8, economics_summary: "Financial Performance Assessment\n• Estimated System Investment: $1,282,160 USD\n• Estimated Annual Savings: $269,561 USD/year\n• Estimated ROI Period: 4.8 years" },
        savings: { monthly_savings_usd: 22463.44, daily_savings_usd: 738.52, savings_summary: "Projected Energy Cost Savings\n• Estimated Daily Savings: $739 USD/day\n• Estimated Monthly Savings: $22,463 USD/month\n• Estimated Annual Savings: $269,561 USD/year" },
        insights: { financial_viability: "Good", investment_scale: "Commercial Scale", strategic_summary: "Strategic Financial Insights\n• Financial Viability: Good\n• Investment Category: Commercial Scale" }
      },
      property: {
        classification: { property_type: "Mall", roof_area_sqm: 18214 },
        energy_profile: { estimated_daily_consumption_kwh: 10928.4, estimated_monthly_consumption_kwh: 327852, energy_intensity: 18 },
        insights: { consumption_methodology: "Estimated using commercial energy benchmarks based on property type.", property_comment: "Property profile is suitable for distributed energy deployment." }
      },
      vpp_analysis: {
        vpp_score: 62, readiness_level: "Moderate", summary: "The property has moderate VPP potential with opportunities for optimization.",
        strengths: ["Strong commercial solar generation potential.", "Commercial property profile aligns well with distributed energy deployment."],
        risks: [], recommendations: [],
        grid_services: ["Peak Shaving", "Demand Response", "Backup Power", "Grid Export Support"],
        analysis: { solar_capacity_kw: 1602.7, battery_mwh: 1.85, peak_sun_hours: 4.8, annual_generation_kwh: 2246344.32 }
      },
      recommendations: [
        { category: "VPP Integration", priority: "High", title: "Evaluate VPP Participation", recommendation: "The property's operational and energy characteristics appear well-suited for future Virtual Power Plant integration. Participation may unlock additional value streams." },
        { category: "Sustainability", priority: "Low", title: "Leverage Sustainability Benefits", recommendation: "The projected carbon reduction potential may contribute meaningfully toward corporate ESG initiatives and sustainability targets." }
      ]
    });
    setActiveCoords({ latitude: 37.7749, longitude: -122.4194 });
    setStatus("success");
  };

  const handleDownloadPDF = async () => {
    if(!activeCoords) return;
    setIsPDF(true);
    try {
      const res = await fetch(`${BASE}/generate-report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activeCoords)
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to generate report on server.");
      }
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to generate report on server.");
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `VPP-Site-Assessment-${activeCoords.latitude.toFixed(4)}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch(e) { 
      alert("PDF download error: " + e.message); 
    } finally { 
      setIsPDF(false); 
    }
  };

  const km = data?.executive_summary?.key_metrics;
  const score = data?.vpp_analysis?.vpp_score||94;
  const r=50, circ=2*Math.PI*r, dash=(score/100)*circ;

  const finData = data ? [
    {name:"Daily",v:data.financial?.savings?.daily_savings_usd||342},
    {name:"Monthly",v:data.financial?.savings?.monthly_savings_usd||10416},
    {name:"Annual (÷100)",v:Math.round((data.financial?.economics?.annual_savings_usd||125000)/100)}
  ] : [{name:"Daily",v:342},{name:"Monthly",v:10416},{name:"Annual (÷100)",v:1250}];

  const roiData = (()=>{
    const save=(data?.financial?.economics?.annual_savings_usd||125000)/1000;
    const cost=(data?.financial?.economics?.estimated_system_cost_usd||850000)/1000;
    return Array.from({length:8},(_,i)=>({yr:`Y${i+1}`,Savings:Math.round(save*(i+1)),Cost:Math.round(cost)}));
  })();

  const ORANGE="#ff7a00", BLUE="#3b82f6", GREEN="#22c55e", GRAY="#6b7280";
  const BG="#05070a", CARD="#111318", BORDER="rgba(255,255,255,0.06)";

  const KPIs = km ? [
    {icon:<Building size={28}/>,label:"Solar Capacity",val:`${km.solar_capacity_kw?.toLocaleString()||350}`,unit:"kW",sub:`${km.annual_generation_kwh?.toLocaleString(undefined, {maximumFractionDigits:0})||"520,000"} kWh/yr`,c:ORANGE},
    {icon:<Battery size={28}/>,label:"Battery Storage",val:`${km.battery_mwh||1.5}`,unit:"MWh",sub:`${data?.battery?.performance?.estimated_backup_hours||6} hrs backup`,c:BLUE},
    {icon:<DollarSign size={28}/>,label:"Annual Savings",val:`$${km.annual_savings_usd?.toLocaleString(undefined, {maximumFractionDigits:0})||"125,000"}`,unit:"",sub:`ROI: ${data?.financial?.economics?.estimated_roi_years||5.8} years`,c:GREEN},
    {icon:<Building size={28}/>,label:"Roof Area",val:`${km.roof_area_sqm?.toLocaleString()||"2,500"}`,unit:"sqm",sub:km.property_type||"Commercial",c:"#a78bfa"}
  ] : [];

  return (
    <div className="min-h-screen overflow-x-hidden pt-28 pb-16" style={{background:BG,color:"#fff",fontFamily:"inherit"}}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>

      {/* ambient blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full" style={{background:"rgba(255,122,0,0.04)",filter:"blur(120px)"}}/>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full" style={{background:"rgba(59,130,246,0.04)",filter:"blur(120px)"}}/>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <AnimatePresence mode="wait">

          {/* IDLE */}
          {status==="idle" && (
            <motion.div key="idle" variants={fadeUp} initial="hidden" animate="visible" exit={{opacity:0,y:-16}}
              style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",maxWidth:"680px",margin:"0 auto"}}>
              <div style={{width:"72px",height:"72px",borderRadius:"18px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"28px",position:"relative",overflow:"hidden",background:CARD,border:`1px solid ${BORDER}`}}>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(255,122,0,0.2),transparent)"}}/>
                <Target size={34} style={{color:ORANGE,position:"relative",zIndex:1}}/>
              </div>
              <h1 style={{fontSize:"clamp(30px,5vw,46px)",fontWeight:800,color:"#fff",lineHeight:1.15,marginBottom:"14px"}}>Live AI Site Assessment</h1>
              <p style={{fontSize:"16px",color:"#a8b0bd",maxWidth:"520px",lineHeight:1.7,marginBottom:"36px"}}>
                Analyze your property's solar capacity, battery storage potential, and VPP revenue — use GPS or enter coordinates manually.
              </p>

              {/* GPS + Demo buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-10 w-full px-4 sm:px-0">
                <button onClick={handleStart} className="w-full sm:w-auto flex items-center justify-center gap-2" style={{padding:"14px 32px",background:ORANGE,color:"#000",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:700,letterSpacing:"0.06em",cursor:"pointer",boxShadow:"0 0 28px rgba(255,122,0,0.25)"}}>
                  <MapPin size={18}/> Use My GPS Location
                </button>
                <button onClick={handleSimulate} className="w-full sm:w-auto flex items-center justify-center gap-2" style={{padding:"14px 28px",background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"8px",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>
                  Run Demo
                </button>
              </div>

              {/* Divider */}
              <div style={{display:"flex",alignItems:"center",gap:"14px",width:"100%",marginBottom:"28px"}}>
                <div style={{flex:1,height:"1px",background:BORDER}}/>
                <span style={{fontSize:"12px",fontWeight:600,color:GRAY,letterSpacing:"0.1em",textTransform:"uppercase"}}>Or Enter Coordinates Manually</span>
                <div style={{flex:1,height:"1px",background:BORDER}}/>
              </div>

              {/* Manual input form */}
              <form onSubmit={handleManualSubmit} className="w-full max-w-[520px] px-4 sm:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:GRAY,marginBottom:"6px"}}>Latitude</label>
                    <input
                      type="number" step="any" placeholder="e.g. 37.7749"
                      value={manualLat} onChange={e=>{ setManualLat(e.target.value); setManualError(""); }}
                      style={{width:"100%",padding:"12px 14px",background:"#1a1d26",border:`1px solid ${manualError&&manualError.includes("latitude")?"#ef4444":BORDER}`,borderRadius:"8px",color:"#fff",fontSize:"15px",outline:"none",boxSizing:"border-box"}}
                    />
                  </div>
                  <div>
                    <label style={{display:"block",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:GRAY,marginBottom:"6px"}}>Longitude</label>
                    <input
                      type="number" step="any" placeholder="e.g. -122.4194"
                      value={manualLng} onChange={e=>{ setManualLng(e.target.value); setManualError(""); }}
                      style={{width:"100%",padding:"12px 14px",background:"#1a1d26",border:`1px solid ${manualError&&manualError.includes("longitude")?"#ef4444":BORDER}`,borderRadius:"8px",color:"#fff",fontSize:"15px",outline:"none",boxSizing:"border-box"}}
                    />
                  </div>
                </div>
                {manualError && (
                  <p style={{fontSize:"13px",color:"#ef4444",marginBottom:"10px",textAlign:"left"}}>{manualError}</p>
                )}
                <button type="submit" style={{width:"100%",padding:"14px",background:BLUE,color:"#fff",border:"none",borderRadius:"8px",fontSize:"15px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}}>
                  <Activity size={18}/> Analyze This Location
                </button>
                <p style={{fontSize:"12px",color:GRAY,marginTop:"10px",textAlign:"center"}}>
                  Latitude: −90 to 90 &nbsp;|&nbsp; Longitude: −180 to 180
                </p>
              </form>
            </motion.div>
          )}

          {/* LOADING */}
          {(status==="loading_location"||status==="loading_api") && (
            <motion.div key="loading" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <div className="w-20 h-20 rounded-full mb-8" style={{border:`4px solid ${BORDER}`,borderTopColor:ORANGE,animation:"spin 0.8s linear infinite"}}/>
              <h2 className="text-2xl font-bold text-white mb-2">{status==="loading_location"?"Acquiring Coordinates...":"Running AI Analysis..."}</h2>
              <p style={{color:"#a8b0bd"}}>{status==="loading_location"?"Allow location access in your browser.":"Calculating solar yield, battery capacity, and financial projections..."}</p>
            </motion.div>
          )}

          {/* ERROR */}
          {status==="error" && (
            <motion.div key="error" initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} exit={{opacity:0}}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)"}}>
                <AlertTriangle size={36} style={{color:"#ef4444"}}/>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Assessment Failed</h2>
              <p className="mb-8 leading-relaxed" style={{color:"#a8b0bd"}}>{errorMsg}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=>setStatus("idle")} className="px-8 py-3 rounded font-bold uppercase tracking-widest text-sm w-full sm:w-auto" style={{background:"transparent",color:"#fff",border:`1px solid rgba(255,255,255,0.25)`}}>Try Again</button>
                <button onClick={handleSimulate} className="px-8 py-3 rounded font-bold uppercase tracking-widest text-sm w-full sm:w-auto" style={{background:ORANGE,color:"#000",boxShadow:"0 0 20px rgba(255,122,0,0.2)"}}>Simulate Dashboard</button>
              </div>
            </motion.div>
          )}

          {/* DASHBOARD */}
          {status==="success" && data && (
            <motion.div key="dash" variants={fadeUp} initial="hidden" animate="visible" className="w-full">

              {/* Header row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 mt-8 md:mt-0">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style={{background:"rgba(255,122,0,0.1)",border:"1px solid rgba(255,122,0,0.2)",color:ORANGE}}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{background:ORANGE}}></span> Analysis Complete
                    </span>
                    <span className="text-sm font-mono" style={{color:GRAY}}>
                      {data.coordinates?.latitude?.toFixed(4)}°N {Math.abs(data.coordinates?.longitude?.toFixed(4))}°W
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Property Intelligence Report</h1>
                </div>
                <button onClick={handleDownloadPDF} disabled={isPDF} className="flex items-center justify-center gap-2 px-6 py-3 rounded font-bold uppercase tracking-widest text-sm transition-all w-full md:w-auto hover:bg-blue-600"
                  style={{background:isPDF?"#1a1d26":BLUE,color:"#fff",border:`1px solid ${isPDF?BORDER:"transparent"}`,opacity:isPDF?0.7:1,cursor:isPDF?"not-allowed":"pointer"}}>
                  {isPDF?<><Loader2 size={16} style={{animation:"spin 0.8s linear infinite"}}/>Generating PDF...</>:<><Download size={16}/>Download PDF Report</>}
                </button>
              </div>

              {/* PDF wrapper */}
              <div id="pdf-dashboard" style={{background:BG,padding:"8px",borderRadius:"12px"}}>

                {/* Executive Summary + VPP Score */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="lg:col-span-2 rounded-2xl p-6 md:p-8" style={{background:"linear-gradient(135deg,#111318,#161b26)",border:`1px solid ${BORDER}`}}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background:"rgba(255,122,0,0.12)",border:"1px solid rgba(255,122,0,0.25)"}}>
                        <Activity size={18} style={{color:ORANGE}}/>
                      </div>
                      <h3 className="text-xl font-bold" style={{color:ORANGE}}>Executive Summary</h3>
                    </div>
                    <p className="leading-relaxed text-base" style={{color:"#cbd5e1"}}>{data.executive_summary?.summary}</p>
                    
                    {/* Additional Property Profile info */}
                    <div className="mt-6 pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4" style={{borderTop:`1px solid ${BORDER}`}}>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>Daily Energy Use</p>
                        <p className="font-bold text-white">{data.property?.energy_profile?.estimated_daily_consumption_kwh?.toLocaleString(undefined,{maximumFractionDigits:0})} kWh</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>Monthly Use</p>
                        <p className="font-bold text-white">{data.property?.energy_profile?.estimated_monthly_consumption_kwh?.toLocaleString(undefined,{maximumFractionDigits:0})} kWh</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>Energy Intensity</p>
                        <p className="font-bold text-white">{data.property?.energy_profile?.energy_intensity} kWh/sqm</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden" style={{background:CARD,border:`1px solid rgba(59,130,246,0.2)`}}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
                    <p className="text-xs font-bold uppercase tracking-widest z-10" style={{color:GRAY}}>VPP Readiness Score</p>
                    <div style={{position:"relative",width:"120px",height:"120px",zIndex:10}}>
                      <svg width="120" height="120" viewBox="0 0 120 120" style={{transform:"rotate(-90deg)"}}>
                        <circle cx="60" cy="60" r={r} fill="none" stroke="#1f2937" strokeWidth="10"/>
                        <circle cx="60" cy="60" r={r} fill="none" stroke={ORANGE} strokeWidth="10"
                          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" style={{transition: "stroke-dasharray 1s ease-out"}}/>
                      </svg>
                      <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <span className="text-3xl font-black text-white">{score}</span>
                        <span className="text-xs" style={{color:GRAY}}>/100</span>
                      </div>
                    </div>
                    <div className="px-4 py-1 rounded-full text-xs font-bold z-10 text-center" style={{background:"rgba(255,122,0,0.1)",border:"1px solid rgba(255,122,0,0.2)",color:ORANGE}}>
                      {data.vpp_analysis?.readiness_level}
                    </div>
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  {KPIs.map((k,i)=>(
                    <div key={i} className="flex flex-col items-center justify-center text-center h-full rounded-xl p-3 sm:p-5" style={{background:CARD,border:`1px solid ${BORDER}`,borderTop:`3px solid ${k.c}`}}>
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1 sm:mb-2" style={{color:GRAY}}>{k.label}</p>
                      <p className="text-[17px] sm:text-2xl lg:text-[26px] font-black text-white leading-tight mb-1">{k.val}<span className="text-[10px] sm:text-[14px] ml-1" style={{color:GRAY}}>{k.unit}</span></p>
                      <p className="text-[11px] sm:text-[13px] font-semibold mt-auto" style={{color:k.c}}>{k.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Charts - flex col on mobile, grid on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">

                  {/* Financial Savings Bar Chart */}
                  <div style={{background:CARD,border:`1px solid ${BORDER}`,borderRadius:"12px",padding:"20px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                        <div style={{width:"34px",height:"34px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(34,197,94,0.12)",border:"1px solid rgba(34,197,94,0.2)"}}>
                          <DollarSign size={17} style={{color:GREEN}}/>
                        </div>
                        <span style={{fontWeight:700,color:"#fff",fontSize:"15px"}}>Expected Financial Savings</span>
                      </div>
                      <span style={{fontSize:"11px",fontWeight:700,padding:"3px 10px",borderRadius:"6px",background:"rgba(34,197,94,0.1)",color:GREEN}}>USD</span>
                    </div>
                    <p style={{fontSize:"12px",color:GRAY,marginBottom:"16px"}}>Daily, monthly and annual savings from solar + VPP revenue</p>
                    <div style={{width:"100%",height:"220px"}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={finData} margin={{top:4,right:16,left:0,bottom:4}} barCategoryGap="30%">
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false}/>
                          <XAxis dataKey="name" tick={{fill:"#94a3b8",fontSize:13}} axisLine={false} tickLine={false}/>
                          <YAxis tick={{fill:"#94a3b8",fontSize:12}} axisLine={false} tickLine={false} tickFormatter={v=>v>=1000?`$${Math.round(v/1000)}k`:`$${v}`} width={48}/>
                          <Tooltip contentStyle={{background:"#1a1d26",border:`1px solid ${BORDER}`,borderRadius:"10px",color:"#fff",fontSize:"14px"}} formatter={v=>[`$${Number(v).toLocaleString()}`,'Savings']} labelStyle={{color:"#94a3b8"}} cursor={{fill:"rgba(255,255,255,0.05)"}}/>
                          <Bar dataKey="v" radius={[6,6,0,0]} isAnimationActive={true} maxBarSize={70} minPointSize={0}>
                            {finData.map((_,i)=><Cell key={i} fill={[ORANGE,BLUE,GREEN][i%3]}/>)}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",marginTop:"12px",paddingTop:"12px",borderTop:`1px solid ${BORDER}`}}>
                      {finData.map((d,i)=>(
                        <div key={i} style={{textAlign:"center"}}>
                          <div style={{fontSize:"11px",fontWeight:700,color:[ORANGE,BLUE,GREEN][i%3],marginBottom:"2px"}}>{d.name}</div>
                          <div style={{fontSize:"15px",fontWeight:900,color:"#fff"}}>${Number(d.v).toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI Area Chart */}
                  <div style={{background:CARD,border:`1px solid ${BORDER}`,borderRadius:"12px",padding:"20px"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                        <div style={{width:"34px",height:"34px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59,130,246,0.12)",border:"1px solid rgba(59,130,246,0.2)"}}>
                          <TrendingUp size={17} style={{color:BLUE}}/>
                        </div>
                        <span style={{fontWeight:700,color:"#fff",fontSize:"15px"}}>8-Year ROI Projection</span>
                      </div>
                      <span style={{fontSize:"11px",fontWeight:700,padding:"3px 10px",borderRadius:"6px",background:"rgba(59,130,246,0.1)",color:BLUE}}>$k</span>
                    </div>
                    <p style={{fontSize:"12px",color:GRAY,marginBottom:"16px"}}>Cumulative savings vs. system cost over 8 years</p>
                    <div style={{width:"100%",height:"220px"}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={roiData} margin={{top:4,right:16,left:0,bottom:4}}>
                          <defs>
                            <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={GREEN} stopOpacity={0.35}/>
                              <stop offset="95%" stopColor={GREEN} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false}/>
                          <XAxis dataKey="yr" tick={{fill:"#94a3b8",fontSize:13}} axisLine={false} tickLine={false}/>
                          <YAxis tick={{fill:"#94a3b8",fontSize:12}} axisLine={false} tickLine={false} width={40}/>
                          <Tooltip contentStyle={{background:"#1a1d26",border:`1px solid ${BORDER}`,borderRadius:"10px",color:"#fff",fontSize:"14px"}} formatter={v=>[`$${v}k`]} labelStyle={{color:"#94a3b8"}}/>
                          <ReferenceLine y={roiData[0]?.Cost} stroke="#ef4444" strokeDasharray="5 3" strokeWidth={1.5} label={{value:"System Cost",fill:"#ef4444",fontSize:11,position:"insideTopRight"}}/>
                          <Area type="monotone" dataKey="Savings" stroke={GREEN} strokeWidth={2.5} fill="url(#sg)" dot={{fill:GREEN,r:4,strokeWidth:0}} isAnimationActive={true}/>
                          <Legend iconType="circle" wrapperStyle={{color:"#94a3b8",fontSize:"13px",paddingTop:"4px"}}/>
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",marginTop:"12px",paddingTop:"12px",borderTop:`1px solid ${BORDER}`}}>
                      {[{l:"System Cost",v:`$${Math.round((data?.financial?.economics?.estimated_system_cost_usd||850000)/1000)}k`,c:"#ef4444"},{l:"Year 5 Return",v:`$${roiData[4]?.Savings||0}k`,c:GREEN},{l:"ROI Period",v:`${data?.financial?.economics?.estimated_roi_years||5.8}y`,c:ORANGE}].map((s,i)=>(
                        <div key={i} style={{textAlign:"center"}}>
                          <div style={{fontSize:"11px",fontWeight:700,color:s.c,marginBottom:"2px"}}>{s.l}</div>
                          <div style={{fontSize:"15px",fontWeight:900,color:"#fff"}}>{s.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Intelligence cards - Expanding to include new API fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                  {/* Solar Intelligence */}
                  <div className="rounded-xl p-6" style={{background:CARD,border:`1px solid rgba(255,122,0,0.2)`}}>
                    <div className="flex items-center gap-2 mb-4"><Zap size={18} style={{color:ORANGE}}/><h4 className="font-bold text-white text-lg">Solar Intelligence</h4></div>
                    
                    <p className="text-sm leading-relaxed mb-4 whitespace-pre-line" style={{color:"#94a3b8"}}>{data.solar?.technical}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[{l:"Specific Yield",v:`${data.solar?.performance?.specific_yield||1485} kWh/kWp`},{l:"Viability",v:data.solar?.insights?.solar_viability||"High"}].map((it,i)=>(
                        <div key={i} className="rounded-lg p-3" style={{background:"rgba(0,0,0,0.3)",border:`1px solid ${BORDER}`}}>
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>{it.l}</p>
                          <p className="font-bold text-white">{it.v}</p>
                        </div>
                      ))}
                    </div>

                    {/* Solar Equivalencies */}
                    {data.solar?.equivalencies && (
                      <div className="mt-4 pt-4" style={{borderTop:`1px solid ${BORDER}`}}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{color:ORANGE}}>Environmental Equivalency</p>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center border border-gray-700">
                              <HomeIcon size={14} className="text-yellow-500" />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-white leading-none">{data.solar.equivalencies.homes_powered}</p>
                              <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-1">Homes Powered</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 w-1/2">
                            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center border border-gray-700">
                              <CarFront size={14} className="text-green-500" />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-white leading-none">{data.solar.equivalencies.ev_charges}</p>
                              <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-1">EV Charges/Day</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Battery Intelligence */}
                  <div className="rounded-xl p-6 flex flex-col" style={{background:CARD,border:`1px solid rgba(59,130,246,0.2)`}}>
                    <div className="flex items-center gap-2 mb-4"><Battery size={18} style={{color:BLUE}}/><h4 className="font-bold text-white text-lg">Battery Intelligence</h4></div>
                    
                    <p className="text-sm leading-relaxed mb-4 whitespace-pre-line" style={{color:"#94a3b8"}}>{data.battery?.storage?.storage_summary}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[{l:"Dispatch",v:data.battery?.performance?.dispatch_capability||"Instantaneous"},{l:"VPP Status",v:data.battery?.insights?.vpp_compatibility||"Compatible"}].map((it,i)=>(
                        <div key={i} className="rounded-lg p-3" style={{background:"rgba(0,0,0,0.3)",border:`1px solid ${BORDER}`}}>
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>{it.l}</p>
                          <p className="font-bold text-white">{it.v}</p>
                        </div>
                      ))}
                    </div>

                    {/* Battery Applications */}
                    {data.battery?.applications?.supported_services && (
                      <div className="mt-auto pt-4" style={{borderTop:`1px solid ${BORDER}`}}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{color:BLUE}}>Supported Grid Services</p>
                        <div className="flex flex-wrap gap-2">
                          {data.battery.applications.supported_services.map((srv, i) => (
                            <span key={i} className="px-2.5 py-1 rounded text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* VPP Analysis Details */}
                {data.vpp_analysis && (
                  <div className="rounded-xl p-6 mb-6" style={{background:CARD,border:`1px solid ${BORDER}`}}>
                    <div className="flex items-center gap-2 mb-4"><ZapOff size={18} style={{color:"#a78bfa"}}/><h4 className="font-bold text-white text-lg">Virtual Power Plant (VPP) Integration</h4></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Strengths */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{color:GREEN}}>Platform Strengths</p>
                        <ul className="space-y-2">
                          {data.vpp_analysis.strengths?.map((str, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="leading-tight">{str}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Grid Services */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{color:"#a78bfa"}}>Available Markets</p>
                        <ul className="space-y-2">
                          {data.vpp_analysis.grid_services?.map((srv, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <Activity size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-tight">{srv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                {data.recommendations?.length>0 && (
                  <div className="rounded-xl p-6" style={{background:CARD,border:`1px solid ${BORDER}`}}>
                    <div className="flex items-center gap-2 mb-6"><CheckCircle size={18} style={{color:GREEN}}/><h3 className="font-bold text-white text-xl">Strategic Recommendations</h3></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {data.recommendations.map((r,i)=>{
                        const pc={High:{bg:"rgba(239,68,68,0.08)",bd:"rgba(239,68,68,0.2)",c:"#ef4444"},Medium:{bg:"rgba(255,122,0,0.08)",bd:"rgba(255,122,0,0.2)",c:ORANGE},Low:{bg:"rgba(59,130,246,0.08)",bd:"rgba(59,130,246,0.2)",c:BLUE}}[r.priority]||{bg:"#1a1d26",bd:BORDER,c:GRAY};
                        return (
                          <div key={i} className="rounded-xl p-5 flex flex-col gap-3" style={{background:"rgba(0,0,0,0.35)",border:`1px solid ${BORDER}`}}>
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-black uppercase tracking-wider" style={{color:GRAY}}>{r.category}</span>
                              <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-full" style={{background:pc.bg,border:`1px solid ${pc.bd}`,color:pc.c}}>{r.priority}</span>
                            </div>
                            <p className="font-bold text-white">{r.title}</p>
                            <p className="text-sm leading-relaxed" style={{color:"#94a3b8"}}>{r.recommendation}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
