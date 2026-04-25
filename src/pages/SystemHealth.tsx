export const SystemHealth = () => {
  return (
    <div className="p-8 lg:p-12 animate-in fade-in duration-500">
      
{/*  TopAppBar Component  */}
<header className="sticky top-0 z-40 w-full bg-[#0e141c]/70 backdrop-blur-xl flex justify-between items-center h-20 px-8 font-['Inter'] font-medium">
<div className="flex items-center gap-4">
<span className="text-lg font-black tracking-widest text-[#55d8e1] uppercase">DYNAMIC MULTI-PROTOCOL</span>
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded font-bold tracking-tighter">LIVE FEED</span>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
<input className="bg-[#161c25]/50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Protocol query..." type="text"/>
</div>
<div className="flex items-center gap-4 text-slate-400">
<button className="hover:bg-white/5 p-2 rounded-full transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
</button>
<button className="hover:bg-white/5 p-2 rounded-full transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
</button>
<button className="hover:bg-white/5 p-2 rounded-full transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
</button>
<div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container-highest">
<img alt="User Profile" data-alt="close-up portrait of a professional male tech operator with thoughtful expression in cool moody blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhjQoVquAe7BPAyx7QdI2Zk1gn3swA8gP5AIfdZkxYdTLe8O1hOjX3hmElgho0XLR0RumWtbkpsBFnkYmRCOABXDG4_v2oWJWaLfy9nbC39v457hVAkHmfYFjiXZUlj2k0KWJZ7-DlVQoGFvRLcMka0iGpX1VpLZZfNZ0NjyyXmx3NMzqvmVLD4cqAHchhaNC-UhZTy0llwP5XgdBWHH_dteqPLF0V2h2DufC9t9N_1jbqsIqHK6mH0F2XUuMGcRBpiab4XA_fcuUe"/>
</div>
</div>
</div>
</header>
{/*  Page Content: System Health Dashboard  */}
<div className="p-8 space-y-8 max-w-[1600px] mx-auto">
{/*  Global Status Header  */}
<section className="flex flex-col md:flex-row gap-6 items-end justify-between">
<div className="space-y-2">
<h1 className="text-5xl font-bold font-headline tracking-tighter text-on-surface">System Vitality</h1>
<p className="text-on-surface-variant max-w-lg">Monitoring real-time throughput across global edge nodes. All protocol bridges are currently operational with minimal latency overhead.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-low px-6 py-4 rounded-2xl flex flex-col gap-1 min-w-[200px]">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Node Identity</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-headline font-bold text-lg">OPTIMIZER-PX-09</span>
</div>
</div>
<div className="bg-surface-container-low px-6 py-4 rounded-2xl flex flex-col gap-1 min-w-[200px]">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Global Health</span>
<div className="flex items-center gap-2">
<span className="text-primary font-headline font-bold text-lg">STABLE (99.98%)</span>
</div>
</div>
</div>
</section>
{/*  Metric Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/*  CPU Usage  */}
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between h-48 group hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-surface-container-highest text-primary">
<span className="material-symbols-outlined">processing_cluster</span>
</div>
<span className="text-xs font-bold text-primary">LIVE</span>
</div>
<div>
<div className="text-4xl font-headline font-bold">42.8<span className="text-xl text-slate-500">%</span></div>
<div className="text-xs text-slate-500 font-medium tracking-wide mt-1 uppercase">Processor Load</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "42.8%"}}></div>
</div>
</div>
{/*  Memory  */}
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between h-48 hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-surface-container-highest text-tertiary">
<span className="material-symbols-outlined">memory</span>
</div>
<span className="text-xs font-bold text-slate-500">OPTIMIZED</span>
</div>
<div>
<div className="text-4xl font-headline font-bold">12.4<span className="text-xl text-slate-500">GB</span></div>
<div className="text-xs text-slate-500 font-medium tracking-wide mt-1 uppercase">Memory Allocation</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{width: "65%"}}></div>
</div>
</div>
{/*  Throughput  */}
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between h-48 hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-surface-container-highest text-primary">
<span className="material-symbols-outlined">speed</span>
</div>
<span className="text-xs font-bold text-primary">PEAK</span>
</div>
<div>
<div className="text-4xl font-headline font-bold">8.2<span className="text-xl text-slate-500">GB/s</span></div>
<div className="text-xs text-slate-500 font-medium tracking-wide mt-1 uppercase">Data Throughput</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "82%"}}></div>
</div>
</div>
{/*  Active Connections  */}
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between h-48 hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-surface-container-highest text-primary">
<span className="material-symbols-outlined">dynamic_feed</span>
</div>
<span className="text-xs font-bold text-primary">SCALING</span>
</div>
<div>
<div className="text-4xl font-headline font-bold">142K</div>
<div className="text-xs text-slate-500 font-medium tracking-wide mt-1 uppercase">Active Streams</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "30%"}}></div>
</div>
</div>
</section>
{/*  High-Density Charts & Status  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*  Latency Trends (Large)  */}
<div className="lg:col-span-2 bg-surface-container-low rounded-2xl overflow-hidden flex flex-col">
<div className="p-8 flex justify-between items-center">
<div className="space-y-1">
<h3 className="font-headline text-xl font-bold">Latency Telemetry</h3>
<p className="text-xs text-slate-500">Global response time average over 60 minutes</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 bg-surface-container-highest rounded text-[10px] font-bold tracking-widest text-primary uppercase">Real-time</button>
<button className="px-3 py-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">24h History</button>
</div>
</div>
<div className="flex-grow px-8 pb-4 relative h-64 flex items-end gap-1">
{/*  Simulated Kinetic Graph  */}
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "40%"}}></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "45%"}}></div>
<div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "42%"}}></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "38%"}}></div>
<div className="flex-1 bg-primary/40 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "55%"}}></div>
<div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "48%"}}></div>
<div className="flex-1 bg-primary/50 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "70%"}}></div>
<div className="flex-1 bg-primary/40 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "65%"}}></div>
<div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "45%"}}></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "40%"}}></div>
<div className="flex-1 bg-primary/25 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "35%"}}></div>
<div className="flex-1 bg-primary/40 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "50%"}}></div>
<div className="flex-1 bg-primary/60 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "85%"}}></div>
<div className="flex-1 bg-primary/50 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "75%"}}></div>
<div className="flex-1 bg-primary/40 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "60%"}}></div>
<div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "45%"}}></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "30%"}}></div>
<div className="flex-1 bg-primary/15 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "25%"}}></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "35%"}}></div>
<div className="flex-1 bg-primary/40 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "45%"}}></div>
<div className="flex-1 bg-primary/30 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "40%"}}></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "35%"}}></div>
<div className="flex-1 bg-primary/25 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "30%"}}></div>
<div className="flex-1 bg-primary/40 hover:bg-primary/40 transition-all rounded-t-sm" style={{height: "50%"}}></div>
</div>
<div className="bg-surface-container px-8 py-4 border-t border-outline-variant/10 flex justify-between">
<div className="flex gap-8">
<div><span className="text-xs text-slate-500 block">MIN</span><span className="font-bold">12ms</span></div>
<div><span className="text-xs text-slate-500 block">AVG</span><span className="font-bold">24ms</span></div>
<div><span className="text-xs text-slate-500 block">MAX</span><span className="font-bold text-tertiary">142ms</span></div>
</div>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-xs font-bold">+2.4% vs last hour</span>
</div>
</div>
</div>
{/*  Protocol Service Status  */}
<div className="bg-surface-container-low rounded-2xl flex flex-col p-8">
<h3 className="font-headline text-xl font-bold mb-6">Protocol Status</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-highest">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#242a33] flex items-center justify-center text-primary">
<span className="material-symbols-outlined">language</span>
</div>
<div>
<div className="font-bold text-sm">HTTP/3 (QUIC)</div>
<div className="text-[10px] text-primary uppercase font-bold tracking-tighter">Accelerated</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-primary">ACTIVE</div>
<div className="text-[10px] text-slate-500">99.9% Up</div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-highest">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#242a33] flex items-center justify-center text-primary">
<span className="material-symbols-outlined">cloud_sync</span>
</div>
<div>
<div className="font-bold text-sm">HTTP/2.0</div>
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Standard</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-primary">ACTIVE</div>
<div className="text-[10px] text-slate-500">100% Up</div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-highest">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#242a33] flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">rebase_edit</span>
</div>
<div>
<div className="font-bold text-sm">UDP Bridge</div>
<div className="text-[10px] text-tertiary uppercase font-bold tracking-tighter">Retrying...</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-tertiary">WARNING</div>
<div className="text-[10px] text-slate-500">94.2% Up</div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-highest opacity-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-[#242a33] flex items-center justify-center text-slate-500">
<span className="material-symbols-outlined">terminal</span>
</div>
<div>
<div className="font-bold text-sm">Legacy IPv4</div>
<div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Deprecated</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-slate-500">INACTIVE</div>
<div className="text-[10px] text-slate-500">Maintenance</div>
</div>
</div>
</div>
<button className="mt-auto w-full py-3 rounded-xl border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-colors">
                        CONFIGURE ALL PROTOCOLS
                    </button>
</div>
</section>
{/*  Packet Loss & Health Indices  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Packet Loss Card  */}
<div className="lg:col-span-2 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-6">
<div className="space-y-1">
<h3 className="font-headline text-xl font-bold">Packet Integrity</h3>
<p className="text-xs text-slate-500">Loss trends over last 15 minutes</p>
</div>
<div className="text-right">
<span className="text-4xl font-headline font-bold text-primary">0.002<span className="text-lg">%</span></span>
<span className="block text-[10px] font-bold text-primary uppercase">Optimal Range</span>
</div>
</div>
<div className="h-24 flex items-end gap-1.5 px-2">
{/*  Tiny trend chart  */}
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "10%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "12%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "8%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "15%"}}></div>
<div className="flex-1 bg-tertiary rounded-t-sm" style={{height: "45%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "10%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "5%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "12%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "18%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "10%"}}></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm" style={{height: "8%"}}></div>
<div className="flex-1 bg-primary rounded-t-sm" style={{height: "5%"}}></div>
</div>
</div>
{/*  Visual Health Summary 1  */}
<div className="bg-surface-container-highest rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<img alt="background texture" data-alt="abstract tech visualization with glowing neon circuit patterns and dark futuristic geometric shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZTKjsx6I0z-83j-YnDaMFXqRLAF88ElFzQUzpTJXMNeDHrNe_ewiYRfJ-j1fbRDphPNqFdGSgs1Ka_orVswKU9cwcT75mj2HDDF_MN3JIKif7jeLJRsSKesjuYljT0DZoMfMe-Kn5RzcwOnxzI4uQ_FNdvdCSDDrnWGI3bmPACFDr0R7NR5321swiECjuWCImeRf6Lv8AF9GNjX2npDfSVWzNVy-_O0f49AHc9fJMRIfULoccH6HUhxTBpVW71JRDOi_RNJlVinrm"/>
</div>
<div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center relative z-10">
<span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
</div>
<div className="mt-6 relative z-10">
<h4 className="font-headline font-bold text-lg">Secure Layer</h4>
<p className="text-xs text-slate-500 mt-1">Encryption overhead at 3.2%</p>
</div>
</div>
{/*  Visual Health Summary 2  */}
<div className="bg-surface-container-low rounded-2xl p-8 flex flex-col">
<h4 className="font-headline font-bold text-sm uppercase tracking-widest text-slate-500 mb-6">Regional Distribution</h4>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs">
<span className="font-medium">North America</span>
<span className="text-primary font-bold">42ms</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "85%"}}></div>
</div>
<div className="flex items-center justify-between text-xs mt-4">
<span className="font-medium">EU Central</span>
<span className="text-primary font-bold">18ms</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: "95%"}}></div>
</div>
<div className="flex items-center justify-between text-xs mt-4">
<span className="font-medium">Asia Pacific</span>
<span className="text-tertiary font-bold">115ms</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-tertiary" style={{width: "45%"}}></div>
</div>
</div>
</div>
</section>
</div>

    </div>
  );
};
