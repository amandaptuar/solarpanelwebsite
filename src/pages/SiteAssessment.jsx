import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { MapPin, Activity, Zap, DollarSign, Building, Leaf, AlertTriangle, Loader2, Battery, Target, TrendingUp, Download, CheckCircle, Shield } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, Cell, ReferenceLine, Area, AreaChart } from "recharts";



const fadeUp = { hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:0.55,ease:"easeOut"}} };

export default function SiteAssessment() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState(null);
  const [isPDF, setIsPDF] = useState(false);
  const [manualLat, setManualLat] = useState("");
  const [manualLng, setManualLng] = useState("");
  const [manualError, setManualError] = useState("");
  const dashRef = useRef(null);
  const BASE = "https://vpp-backened-model.onrender.com";

  useEffect(()=>{ window.scrollTo(0,0); document.title="Live Site Assessment | TechOps Global"; },[]);

  const handleStart = () => {
    setStatus("loading_location"); setErrorMsg(""); setManualError("");
    if(!navigator.geolocation){ setErrorMsg("Geolocation not supported."); setStatus("error"); return; }
    navigator.geolocation.getCurrentPosition(
      p=>fetchAnalysis(p.coords.latitude,p.coords.longitude),
      ()=>{ setErrorMsg("Location access denied. Please allow location or use manual input."); setStatus("error"); },
      {timeout:10000}
    );
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
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
      setData(d); setStatus("success");
    } catch(e) {
      setErrorMsg(e.message==="Failed to fetch"?"Server busy — try Simulate instead.":e.message);
      setStatus("error");
    }
  };

  const handleSimulate = () => {
    setData({
      coordinates:{latitude:37.7749,longitude:-122.4194},
      executive_summary:{
        summary:"This commercial property demonstrates exceptional potential for a fully integrated solar-plus-storage deployment optimized for Virtual Power Plant (VPP) participation. The expansive unobstructed roof area, combined with favorable solar irradiance, positions this asset as a Tier 1 candidate for grid services revenue.",
        key_metrics:{property_type:"Commercial",roof_area_sqm:2500,solar_capacity_kw:350,battery_mwh:1.5,annual_generation_kwh:520000,annual_savings_usd:125000}
      },
      solar:{
        technical:"A 350 kWp monocrystalline PV system is proposed across 2,500 sqm of usable roof space, utilizing high-efficiency panels to maximize energy yield per square meter.",
        performance:{specific_yield:1485,capacity_factor:17.5},
        insights:{solar_viability:"High",deployment_scale:"Utility-grade Commercial"}
      },
      battery:{
        storage:{battery_mwh:1.5,storage_summary:"A 1.5 MWh BESS will capture excess solar generation and provide critical grid balancing services, enabling peak shaving during high-demand periods."},
        performance:{estimated_backup_hours:6,dispatch_capability:"Instantaneous"},
        insights:{battery_readiness:"Excellent",vpp_compatibility:"Fully Compatible"}
      },
      financial:{
        economics:{estimated_system_cost_usd:850000,annual_savings_usd:125000,estimated_roi_years:5.8},
        savings:{monthly_savings_usd:10416,daily_savings_usd:342}
      },
      property:{classification:{property_type:"Commercial",roof_area_sqm:2500}},
      vpp_analysis:{vpp_score:94,readiness_level:"Tier 1 — Prime Asset"},
      recommendations:[
        {category:"Engineering",priority:"High",title:"Initiate Structural Assessment",recommendation:"Proceed with structural and electrical engineering to validate roof load capacity and optimal panel placement."},
        {category:"Regulatory",priority:"Medium",title:"File Interconnection Application",recommendation:"Submit interconnection request to the local utility to secure queue position and identify grid upgrade requirements."},
        {category:"Financial",priority:"Low",title:"Leverage Federal ITC",recommendation:"Engage a tax advisor to fully utilize the Investment Tax Credit and MACRS accelerated depreciation for maximum return."}
      ]
    });
    setStatus("success");
  };

  const handleDownloadPDF = async () => {
    if(!dashRef.current) return;
    setIsPDF(true);
    try {
      await new Promise(r=>setTimeout(r,600));
      const canvas = await html2canvas(dashRef.current,{
        scale:2,useCORS:true,allowTaint:true,backgroundColor:"#05070a",
        onclone:(doc)=>{
          doc.querySelectorAll("*").forEach(el=>{
            try{
              const cs=window.getComputedStyle(el);
              if(cs.color&&cs.color.includes("oklch")) el.style.color="#ffffff";
              if(cs.backgroundColor&&cs.backgroundColor.includes("oklch")) el.style.backgroundColor="transparent";
            }catch(e){}
          });
        }
      });
      const img=canvas.toDataURL("image/png");
      const pdf=new jsPDF({orientation:"portrait",unit:"mm",format:"a4"});
      const pw=pdf.internal.pageSize.getWidth(), ph=pdf.internal.pageSize.getHeight();
      const ih=(canvas.height*pw)/canvas.width;
      let pos=0, left=ih;
      pdf.addImage(img,"PNG",0,pos,pw,ih); left-=ph;
      while(left>=0){ pos=left-ih; pdf.addPage(); pdf.addImage(img,"PNG",0,pos,pw,ih); left-=ph; }
      pdf.save("VPP-Site-Assessment.pdf");
    } catch(e){ alert("PDF error: "+e.message); }
    finally{ setIsPDF(false); }
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
    {icon:<Building size={28}/>,label:"Solar Capacity",val:`${km.solar_capacity_kw?.toLocaleString()||350}`,unit:"kW",sub:`${km.annual_generation_kwh?.toLocaleString()||"520,000"} kWh/yr`,c:ORANGE},
    {icon:<Battery size={28}/>,label:"Battery Storage",val:`${km.battery_mwh||1.5}`,unit:"MWh",sub:`${data?.battery?.performance?.estimated_backup_hours||6} hrs backup`,c:BLUE},
    {icon:<DollarSign size={28}/>,label:"Annual Savings",val:`$${km.annual_savings_usd?.toLocaleString()||"125,000"}`,unit:"",sub:`ROI: ${data?.financial?.economics?.estimated_roi_years||5.8} years`,c:GREEN},
    {icon:<Building size={28}/>,label:"Roof Area",val:`${km.roof_area_sqm?.toLocaleString()||"2,500"}`,unit:"sqm",sub:km.property_type||"Commercial",c:"#a78bfa"}
  ] : [];

  const TT = {contentStyle:{background:CARD,border:`1px solid ${BORDER}`,borderRadius:"10px",color:"#fff"}};

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
              <div style={{display:"flex",flexWrap:"wrap",gap:"12px",justifyContent:"center",marginBottom:"40px"}}>
                <button onClick={handleStart} style={{display:"flex",alignItems:"center",gap:"8px",padding:"14px 32px",background:ORANGE,color:"#000",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:700,letterSpacing:"0.06em",cursor:"pointer",boxShadow:"0 0 28px rgba(255,122,0,0.25)"}}>
                  <MapPin size={18}/> Use My GPS Location
                </button>
                <button onClick={handleSimulate} style={{display:"flex",alignItems:"center",gap:"8px",padding:"14px 28px",background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"8px",fontSize:"14px",fontWeight:600,cursor:"pointer"}}>
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
              <form onSubmit={handleManualSubmit} style={{width:"100%",maxWidth:"520px"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"12px"}}>
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
              <div className="flex gap-4">
                <button onClick={()=>setStatus("idle")} className="px-8 py-3 rounded font-bold uppercase tracking-widest text-sm" style={{background:"transparent",color:"#fff",border:`1px solid rgba(255,255,255,0.25)`}}>Try Again</button>
                <button onClick={handleSimulate} className="px-8 py-3 rounded font-bold uppercase tracking-widest text-sm" style={{background:ORANGE,color:"#000",boxShadow:"0 0 20px rgba(255,122,0,0.2)"}}>Simulate Dashboard</button>
              </div>
            </motion.div>
          )}

          {/* DASHBOARD */}
          {status==="success" && data && (
            <motion.div key="dash" variants={fadeUp} initial="hidden" animate="visible" className="w-full">

              {/* Header row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style={{background:"rgba(255,122,0,0.1)",border:"1px solid rgba(255,122,0,0.2)",color:ORANGE}}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{background:ORANGE}}></span> Analysis Complete
                    </span>
                    <span className="text-sm font-mono" style={{color:GRAY}}>
                      {data.coordinates?.latitude?.toFixed(4)}°N {Math.abs(data.coordinates?.longitude?.toFixed(4))}°W
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Property Intelligence Report</h1>
                </div>
                <button onClick={handleDownloadPDF} disabled={isPDF} className="flex items-center gap-2 px-6 py-3 rounded font-bold uppercase tracking-widest text-sm transition-all"
                  style={{background:isPDF?"#1a1d26":BLUE,color:"#fff",border:`1px solid ${isPDF?BORDER:"transparent"}`,opacity:isPDF?0.7:1,cursor:isPDF?"not-allowed":"pointer"}}>
                  {isPDF?<><Loader2 size={16} style={{animation:"spin 0.8s linear infinite"}}/>Generating...</>:<><Download size={16}/>Download PDF</>}
                </button>
              </div>

              {/* PDF wrapper */}
              <div ref={dashRef} style={{background:BG,padding:"8px",borderRadius:"12px"}}>

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
                  </div>
                  <div className="rounded-2xl p-6 flex flex-col items-center justify-center gap-4" style={{background:CARD,border:`1px solid rgba(59,130,246,0.2)`}}>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{color:GRAY}}>VPP Readiness Score</p>
                    <div style={{position:"relative",width:"120px",height:"120px"}}>
                      <svg width="120" height="120" viewBox="0 0 120 120" style={{transform:"rotate(-90deg)"}}>
                        <circle cx="60" cy="60" r={r} fill="none" stroke="#1f2937" strokeWidth="10"/>
                        <circle cx="60" cy="60" r={r} fill="none" stroke={ORANGE} strokeWidth="10"
                          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"/>
                      </svg>
                      <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <span className="text-3xl font-black text-white">{score}</span>
                        <span className="text-xs" style={{color:GRAY}}>/100</span>
                      </div>
                    </div>
                    <div className="px-4 py-1 rounded-full text-xs font-bold" style={{background:"rgba(255,122,0,0.1)",border:"1px solid rgba(255,122,0,0.2)",color:ORANGE}}>
                      {data.vpp_analysis?.readiness_level}
                    </div>
                  </div>
                </div>

                {/* KPI cards */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",marginBottom:"24px"}}>
                  {KPIs.map((k,i)=>(
                    <div key={i} style={{background:CARD,border:`1px solid ${BORDER}`,borderTop:`3px solid ${k.c}`,borderRadius:"12px",padding:"20px"}}>
                      <p style={{fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:GRAY,marginBottom:"8px"}}>{k.label}</p>
                      <p style={{fontSize:"26px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"4px"}}>{k.val}<span style={{fontSize:"14px",color:GRAY,marginLeft:"4px"}}>{k.unit}</span></p>
                      <p style={{fontSize:"13px",fontWeight:600,color:k.c}}>{k.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Charts - inline flex to avoid grid height collapse */}
                <div style={{display:"flex",gap:"20px",marginBottom:"24px",flexWrap:"wrap"}}>

                  {/* Financial Savings Bar Chart */}
                  <div style={{flex:"1 1 420px",background:CARD,border:`1px solid ${BORDER}`,borderRadius:"12px",padding:"20px"}}>
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
                    <div style={{width:"100%",height:"220px",display:"flex",justifyContent:"center"}}>
                      <BarChart width={460} height={220} data={finData} margin={{top:4,right:16,left:0,bottom:4}} barCategoryGap="30%">
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false}/>
                        <XAxis dataKey="name" tick={{fill:"#94a3b8",fontSize:13}} axisLine={false} tickLine={false}/>
                        <YAxis tick={{fill:"#94a3b8",fontSize:12}} axisLine={false} tickLine={false} tickFormatter={v=>v>=1000?`$${Math.round(v/1000)}k`:`$${v}`} width={48}/>
                        <Tooltip contentStyle={{background:"#1a1d26",border:`1px solid ${BORDER}`,borderRadius:"10px",color:"#fff",fontSize:"14px"}} formatter={v=>[`$${Number(v).toLocaleString()}`,'Savings']} labelStyle={{color:"#94a3b8"}}/>
                        <Bar dataKey="v" radius={[6,6,0,0]} isAnimationActive={false} maxBarSize={70} minPointSize={0}>
                          {finData.map((_,i)=><Cell key={i} fill={[ORANGE,BLUE,GREEN][i%3]}/>)}
                        </Bar>
                      </BarChart>
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
                  <div style={{flex:"1 1 420px",background:CARD,border:`1px solid ${BORDER}`,borderRadius:"12px",padding:"20px"}}>
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
                    <div style={{width:"100%",height:"220px",display:"flex",justifyContent:"center"}}>
                      <AreaChart width={460} height={220} data={roiData} margin={{top:4,right:16,left:0,bottom:4}}>
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
                        <Area type="monotone" dataKey="Savings" stroke={GREEN} strokeWidth={2.5} fill="url(#sg)" dot={{fill:GREEN,r:4,strokeWidth:0}} isAnimationActive={false}/>
                        <Legend iconType="circle" wrapperStyle={{color:"#94a3b8",fontSize:"13px",paddingTop:"4px"}}/>
                      </AreaChart>
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

                {/* Intelligence cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-xl p-6" style={{background:CARD,border:`1px solid rgba(255,122,0,0.2)`}}>
                    <div className="flex items-center gap-2 mb-4"><Zap size={18} style={{color:ORANGE}}/><h4 className="font-bold text-white text-lg">Solar Intelligence</h4></div>
                    <p className="text-sm leading-relaxed mb-4" style={{color:"#94a3b8"}}>{data.solar?.technical}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[{l:"Specific Yield",v:`${data.solar?.performance?.specific_yield||1485} kWh/kWp`},{l:"Viability",v:data.solar?.insights?.solar_viability||"High"}].map((it,i)=>(
                        <div key={i} className="rounded-lg p-3" style={{background:"rgba(0,0,0,0.3)",border:`1px solid ${BORDER}`}}>
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>{it.l}</p>
                          <p className="font-bold text-white">{it.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-6" style={{background:CARD,border:`1px solid rgba(59,130,246,0.2)`}}>
                    <div className="flex items-center gap-2 mb-4"><Battery size={18} style={{color:BLUE}}/><h4 className="font-bold text-white text-lg">Battery Intelligence</h4></div>
                    <p className="text-sm leading-relaxed mb-4" style={{color:"#94a3b8"}}>{data.battery?.storage?.storage_summary}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[{l:"Dispatch",v:data.battery?.performance?.dispatch_capability||"Instantaneous"},{l:"VPP Status",v:data.battery?.insights?.vpp_compatibility||"Compatible"}].map((it,i)=>(
                        <div key={i} className="rounded-lg p-3" style={{background:"rgba(0,0,0,0.3)",border:`1px solid ${BORDER}`}}>
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:GRAY}}>{it.l}</p>
                          <p className="font-bold text-white">{it.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

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
