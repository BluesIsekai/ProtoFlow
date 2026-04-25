export const NetworkMap = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto p-8 lg:p-12 animate-in fade-in duration-500">
            
{/*  Hero Section / Map Card  */}
<div className="mb-8">
<div className="relative bg-[#393E46] rounded-2xl p-6 overflow-hidden min-h-[400px] flex flex-col justify-between shadow-2xl">
<div className="flex justify-between items-start z-10">
<div>
<h2 className="font-headline text-xl font-bold text-[#EEEEEE]">Network Visualization</h2>
<p className="text-on-surface-variant text-sm lg:text-base mt-1">Real-time path analysis</p>
</div>
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            LIVE OPTIMIZATION
          </span>
</div>
{/*  Topology Diagram  */}
<div className="relative flex-1 flex items-center justify-center py-12">
{/*  Connection Lines (SVG)  */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
<defs>
<linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: "#55d8e1", stopOpacity: "1"}}></stop>
<stop offset="100%" style={{stopColor: "#00adb5", stopOpacity: "1"}}></stop>
</linearGradient>
</defs>
<path d="M 60,150 L 200,150" stroke="url(#lineGrad)" strokeDasharray="6,4" strokeWidth="2"></path>
<path d="M 200,150 L 340,150" stroke="#ffb68d" strokeWidth="2"></path>
</svg>
{/*  Nodes Container  */}
<div className="flex justify-between w-full px-6 lg:px-10 items-center z-10">
{/*  Client Node  */}
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-primary/20 node-pulse">
<span className="material-symbols-outlined text-primary">laptop_mac</span>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase tracking-widest text-on-surface-variant">Client</span>
<span className="text-xs font-bold text-[#EEEEEE]">US-WEST-2</span>
</div>
</div>
{/*  Proxy Node (Center)  */}
<div className="flex flex-col items-center gap-3">
<div className="relative">
<div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(85,216,225,0.4)] kinetic-gradient">
<span className="material-symbols-outlined text-on-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>router</span>
</div>
{/*  Latency Tag  */}
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-low px-2 py-1 rounded-md text-[10px] font-bold text-primary border border-primary/20">
                  24ms
                </div>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase tracking-widest text-on-surface-variant">Kinetic Node</span>
<span className="text-xs font-bold text-[#EEEEEE]">FRA-01</span>
</div>
</div>
{/*  Destination Server  */}
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-tertiary/20">
<span className="material-symbols-outlined text-tertiary">dns</span>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase tracking-widest text-on-surface-variant">Destination</span>
<span className="text-xs font-bold text-[#EEEEEE]">AWS-PROD</span>
</div>
{/*  Latency Tag (Warning color)  */}
<div className="absolute top-[150px] translate-y-[-140%] right-20 bg-surface-container-low px-2 py-1 rounded-md text-[10px] font-bold text-tertiary border border-tertiary/20">
                112ms
              </div>
</div>
</div>
</div>
{/*  Legend/Footer  */}
<div className="flex justify-between items-center bg-black/20 p-4 -mx-6 -mb-6 mt-4">
<div className="flex gap-4 lg:gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-[10px] text-on-surface-variant">Optimized</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<span className="text-[10px] text-on-surface-variant">High Jitter</span>
</div>
</div>
<button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
            Refresh Graph <span className="material-symbols-outlined text-sm lg:text-base">refresh</span>
</button>
</div>
</div>
</div>
{/*  Info Panel (Bento Style)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
{/*  Current Route Card  */}
<div className="bg-surface-container-low rounded-2xl p-5 flex flex-col justify-between">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary">route</span>
</div>
<div>
<h3 className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Current Route</h3>
<p className="font-headline font-bold text-[#EEEEEE]">San Francisco → Frankfurt</p>
</div>
</div>
<div className="pt-4 border-t border-outline-variant/10">
<p className="text-xs text-on-surface-variant">Switched from direct path 4m ago</p>
</div>
</div>
{/*  Protocol Card  */}
<div className="bg-surface-container-low rounded-2xl p-5 flex flex-col justify-between">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary">bolt</span>
</div>
<div>
<h3 className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Protocol in Use</h3>
<p className="font-headline font-bold text-[#EEEEEE]">HTTP/3 QUIC (Kinetic-V2)</p>
</div>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold">UDP-BACKBONE</span>
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold">AES-256</span>
</div>
</div>
{/*  Detailed Stats Card  */}
<div className="md:col-span-1 bg-surface-container-low rounded-2xl p-5">
<h3 className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4">Live Performance</h3>
<div className="space-y-4">
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-on-surface-variant">Throughput</p>
<p className="font-headline text-lg lg:text-xl font-bold text-[#EEEEEE]">842 Mb/s</p>
</div>
<div className="w-24 h-8 flex items-end gap-0.5">
<div className="flex-1 bg-primary/20 h-2 rounded-t-sm"></div>
<div className="flex-1 bg-primary/20 h-4 rounded-t-sm"></div>
<div className="flex-1 bg-primary h-6 rounded-t-sm"></div>
<div className="flex-1 bg-primary h-5 rounded-t-sm"></div>
<div className="flex-1 bg-primary/60 h-7 rounded-t-sm"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 lg:gap-6">
<div className="p-3 bg-surface-container-highest rounded-xl">
<p className="text-[10px] text-on-surface-variant">Latency</p>
<p className="font-headline font-bold text-primary">136ms</p>
</div>
<div className="p-3 bg-surface-container-highest rounded-xl">
<p className="text-[10px] text-on-surface-variant">Packet Loss</p>
<p className="font-headline font-bold text-error">0.04%</p>
</div>
</div>
</div>
</div>
</div>
{/*  Extra Map Details Section (Editorial Layout)  */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-6">
<h2 className="font-headline text-2xl font-bold tracking-tight text-[#EEEEEE]">Path Intelligence</h2>
<p className="text-on-surface-variant leading-relaxed">
          The kinetic optimizer has dynamically selected the <span className="text-primary font-bold">FRA-01</span> node to bypass a congestion point detected in the North Atlantic undersea cable network. This shift has improved latency by <span className="text-primary">42ms</span> compared to the standard BGP route.
        </p>
<button className="kinetic-gradient text-on-primary px-8 py-3 rounded-full font-bold text-sm lg:text-base tracking-wide shadow-lg active:scale-95 transition-transform">
          View Route History
        </button>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-video bg-surface-container-low">
<img alt="Network Heatmap" className="w-full h-full object-cover opacity-50" data-alt="abstract tech data visualization with glowing cyan nodes and orange heat clusters over a dark tactical map grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5V2w-1G_KxsiG0lCDlUSVuO4ZrGIZTIgHCA6Qnz5Tq0xdceF5Kby7jYKOlWfF3iM2nFfXO96Lze8dSA5tyj1M-ZVkjn99nsgMwOlVcVEELgcGhk4Th0s2gHizpQDNQb4alOgLivzR_98xZyfFJkoiCriVy_asMouKFR8xREMNzKSYTBwX8qcagDc4ZhoMPlkqhPUN-bne7MnUhO9me4O5i4CN-9vOBev5oQGDkVDGLcAIpIwboSo_jOfw7vxfwnaKMdAyr_UB2mjo"/>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] uppercase font-bold text-[#EEEEEE] tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">Global Node Heatmap</span>
</div>
</div>
</div>

        </div>
    );
};
