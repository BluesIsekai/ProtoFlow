export const NetworkMap = () => {
  return (
    <div className="p-8 lg:p-12 animate-in fade-in duration-500">
      
{/*  Central Visualization Area  */}
<div className="flex-grow flex flex-col gap-6">
{/*  Controls Bar  */}
<div className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl ghost-border">
<div className="flex gap-4">
<div className="flex bg-surface-container-highest rounded-xl p-1">
<button className="px-4 py-1.5 rounded-lg text-xs font-bold bg-primary text-on-primary">GLOBAL</button>
<button className="px-4 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">APAC</button>
<button className="px-4 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">EMEA</button>
<button className="px-4 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">AMER</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30 my-auto"></div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Protocol:</span>
<select className="bg-transparent border-none text-xs font-bold text-primary focus:ring-0 cursor-pointer">
<option>HYDRA-UDP v2</option>
<option>QUANTUM-TCP</option>
<option>NEBULA-MESH</option>
</select>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-xl border border-primary/10">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#55d8e1]"></div>
<span className="text-[10px] font-bold text-primary tracking-widest">AUTO-ROUTING ON</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-xl text-xs font-bold hover:text-on-surface transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">refresh</span>
                        REFRESH MAP
                    </button>
</div>
</div>
{/*  The Map Canvas  */}
<div className="relative flex-grow bg-surface-container-lowest rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-12">
{/*  Background Grid Texture  */}
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(#55d8e1 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
{/*  SVG Visualization  */}
<svg className="w-full h-full max-w-5xl" fill="none" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
{/*  Connection Edges (Pathways)  */}
{/*  Path 1  */}
<path className="opacity-40" d="M150 300C300 300 400 150 500 150" stroke="#55d8e1" strokeDasharray="8 4" strokeWidth="2"></path>
{/*  Path 2 (Active)  */}
<path d="M150 300C300 300 400 450 500 450" stroke="#55d8e1" strokeWidth="4"></path>
<circle fill="#55d8e1" r="4">
<animateMotion dur="3s" path="M150 300C300 300 400 450 500 450" repeatCount="indefinite"></animateMotion>
</circle>
{/*  Path 3  */}
<path d="M500 450C700 450 800 300 850 300" stroke="#55d8e1" strokeWidth="4"></path>
<circle fill="#55d8e1" r="4">
<animateMotion dur="2.5s" path="M500 450C700 450 800 300 850 300" repeatCount="indefinite"></animateMotion>
</circle>
{/*  Nodes  */}
{/*  Source Node  */}
<g transform="translate(150, 300)">
<circle fill="#1a2029" r="30" stroke="#55d8e1" strokeWidth="2"></circle>
<text fill="#bbc9ca" fontFamily="Inter" fontSize="10" fontWeight="800" textAnchor="middle" y="50">CLIENT-AP-01</text>
<text fill="#55d8e1" fontFamily="Inter" fontSize="8" textAnchor="middle" y="65">TOKYO, JP</text>
</g></svg><span className="material-symbols-outlined" style={{fontSize: "20px", color: "#55d8e1"}}>laptop_mac</span>
{/*  Relay Node A (Inactive/Standby)  */}
<g transform="translate(500, 150)">
<circle fill="#1a2029" r="25" stroke="#3c494a" strokeWidth="2"></circle>
<text fill="#3c494a" fontFamily="Inter" fontSize="10" textAnchor="middle" y="45">RELAY-SEA-04</text>
</g>
{/*  Relay Node B (Active)  */}
<g transform="translate(500, 450)">
<circle fill="#1a2029" r="35" stroke="#55d8e1" strokeWidth="3"></circle>
<circle className="opacity-20 animate-ping" fill="none" r="35" stroke="#55d8e1" strokeWidth="1"></circle>
<text fill="#dde3ef" fontFamily="Inter" fontSize="11" fontWeight="700" textAnchor="middle" y="55">RELAY-SFO-12</text>
<text fill="#55d8e1" fontFamily="Inter" fontSize="9" textAnchor="middle" y="70">OPTIMIZED PATH</text>
</g>
{/*  Destination Node  */}
<g transform="translate(850, 300)">
<circle fill="#1a2029" r="30" stroke="#ffb68d" strokeWidth="2"></circle>
<text fill="#bbc9ca" fontFamily="Inter" fontSize="10" fontWeight="800" textAnchor="middle" y="50">AWS-EAST-MAIN</text>
<text fill="#ffb68d" fontFamily="Inter" fontSize="8" textAnchor="middle" y="65">VIRGINIA, US</text>
</g>
{/*  Metric Callouts (Overlaying edges)  */}
<foreignObject height="40" width="100" x="300" y="380">
<div className="bg-[#161c25]/80 backdrop-blur-sm p-2 rounded-lg ghost-border flex flex-col items-center">
<span className="text-[8px] text-on-surface-variant leading-none uppercase">Latency</span>
<span className="text-[10px] text-primary font-bold">114ms</span>
</div>
</foreignObject>
<foreignObject height="40" width="100" x="650" y="380">
<div className="bg-[#161c25]/80 backdrop-blur-sm p-2 rounded-lg ghost-border flex flex-col items-center">
<span className="text-[8px] text-on-surface-variant leading-none uppercase">Loss</span>
<span className="text-[10px] text-tertiary font-bold">0.002%</span>
</div>
</foreignObject>
{/*  Floating Info Card  */}
<div className="absolute bottom-8 left-8 p-4 glass-panel rounded-2xl ghost-border flex gap-6">
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-widest text-on-surface-variant">Active Throughput</span>
<span className="text-xl font-headline font-bold text-primary">842.1 MB/S</span>
</div>
<div className="w-[1px] bg-outline-variant/30 self-stretch"></div>
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-widest text-on-surface-variant">Congestion Index</span>
<span className="text-xl font-headline font-bold text-tertiary">LOW (12%)</span>
</div>
</div>
</div>
</div>
{/*  Right Side Panel: Node Details  */}
<aside className="w-96 flex flex-col gap-6">
{/*  Selected Node Details  */}
<div className="bg-surface-container-low rounded-2xl p-6 flex flex-col gap-8 shadow-xl">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[10px] font-black text-primary tracking-tighter uppercase">Selected Node</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">STATUS: STABLE</span>
</div>
<h2 className="text-2xl font-headline font-bold">RELAY-SFO-12</h2>
<p className="text-xs text-on-surface-variant leading-relaxed">High-performance edge relay located in Equinix SV5, San Jose. Operating on redundant fiber backhaul.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-surface-container-high rounded-xl">
<span className="text-[8px] uppercase tracking-widest text-on-surface-variant block mb-1">CPU Load</span>
<div className="flex items-end justify-between">
<span className="text-lg font-headline font-bold">24.2%</span>
<div className="h-1 w-12 bg-outline-variant/30 rounded-full overflow-hidden mb-1">
<div className="bg-primary h-full w-[24%]"></div>
</div>
</div>
</div>
<div className="p-3 bg-surface-container-high rounded-xl">
<span className="text-[8px] uppercase tracking-widest text-on-surface-variant block mb-1">Memory</span>
<div className="flex items-end justify-between">
<span className="text-lg font-headline font-bold">4.8 GB</span>
<div className="h-1 w-12 bg-outline-variant/30 rounded-full overflow-hidden mb-1">
<div className="bg-primary h-full w-[40%]"></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-xs font-bold text-on-surface border-b border-outline-variant/10 pb-2 uppercase tracking-widest">Active Route Info</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary">fork_right</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant">Incoming Protocol</span>
<span className="text-xs font-bold">HYDRA-UDP (Encrypted)</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-tertiary">swap_horiz</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant">Peer Connections</span>
<span className="text-xs font-bold">42 Active Peer Tunnels</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-on-surface">lan</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant">MTU Discovery</span>
<span className="text-xs font-bold">1500 Optimized</span>
</div>
</div>
</div>
</div>
<button className="w-full py-4 bg-surface-container-highest rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all active:scale-95 border border-outline-variant/10">
                    View Hardware Logs
                </button>
</div>
{/*  Health Snapshot  */}
<div className="bg-surface-container-low rounded-2xl p-6 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold text-on-surface uppercase tracking-widest">Path Telemetry</h3>
<span className="text-[10px] text-primary">REAL-TIME</span>
</div>
<div className="h-32 w-full flex items-end gap-1 px-1">
{/*  Fake Micro-Bar Chart  */}
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[60%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[45%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[70%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[85%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[65%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[90%] rounded-t-sm"></div>
<div className="bg-tertiary/40 w-full h-[20%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[75%] rounded-t-sm"></div>
<div className="bg-primary/20 hover:bg-primary/40 transition-colors w-full h-[55%] rounded-t-sm"></div>
</div>
<div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
<span>-10m</span>
<span>NOW</span>
</div>
</div>
</aside>

    </div>
  );
};
