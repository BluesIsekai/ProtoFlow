export const SystemHealth = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto p-8 lg:p-12 animate-in fade-in duration-500">
            
{/*  Hero: Network Stability Score  */}
<section className="relative overflow-hidden bg-surface-container-low rounded-3xl p-6 shadow-2xl shadow-black/20">
<div className="absolute top-0 right-0 w-32 h-32 kinetic-gradient opacity-10 blur-3xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-6">
<div>
<span className="font-label text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant">Stability Score</span>
<div className="flex items-baseline gap-2">
<span className="font-display text-6xl font-black text-on-surface">98</span>
<span className="font-display text-2xl font-bold text-primary">%</span>
</div>
</div>
<div className="bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-sm lg:text-base text-primary" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
<span className="text-[10px] font-bold text-primary uppercase">+0.4%</span>
</div>
</div>
{/*  Mini Line Chart Visualization  */}
<div className="h-16 w-full flex items-end gap-[2px]">
<div className="flex-1 bg-primary/20 rounded-t-sm h-3/4"></div>
<div className="flex-1 bg-primary/30 rounded-t-sm h-2/3"></div>
<div className="flex-1 bg-primary/40 rounded-t-sm h-4/5"></div>
<div className="flex-1 bg-primary/30 rounded-t-sm h-3/4"></div>
<div className="flex-1 bg-primary/50 rounded-t-sm h-5/6"></div>
<div className="flex-1 bg-primary/40 rounded-t-sm h-2/3"></div>
<div className="flex-1 bg-primary/60 rounded-t-sm h-full"></div>
<div className="flex-1 bg-primary/50 rounded-t-sm h-4/5"></div>
<div className="flex-1 bg-primary/70 rounded-t-sm h-5/6"></div>
<div className="flex-1 kinetic-gradient rounded-t-sm h-[98%]"></div>
</div>
</section>
{/*  Status Grid (2x2)  */}
<section className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
{/*  WebSocket  */}
<div className="bg-[#2f353e] p-5 rounded-2xl flex flex-col justify-between h-36">
<span className="material-symbols-outlined text-primary text-xl">settings_input_component</span>
<div>
<h3 className="font-body text-xs font-semibold text-on-surface-variant mb-1">WebSocket</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="font-display text-[10px] font-black tracking-widest text-on-surface">CONNECTED</span>
</div>
</div>
</div>
{/*  Backend  */}
<div className="bg-[#2f353e] p-5 rounded-2xl flex flex-col justify-between h-36">
<span className="material-symbols-outlined text-primary text-xl">database</span>
<div>
<h3 className="font-body text-xs font-semibold text-on-surface-variant mb-1">Backend</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="font-display text-[10px] font-black tracking-widest text-on-surface">OPERATIONAL</span>
</div>
</div>
</div>
{/*  Native Modules  */}
<div className="bg-[#2f353e] p-5 rounded-2xl flex flex-col justify-between h-36">
<span className="material-symbols-outlined text-tertiary text-xl">extension</span>
<div>
<h3 className="font-body text-xs font-semibold text-on-surface-variant mb-1">Native Modules</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></span>
<span className="font-display text-[10px] font-black tracking-widest text-on-surface">RE-SYNCING</span>
</div>
</div>
</div>
{/*  Probe Health  */}
<div className="bg-[#2f353e] p-5 rounded-2xl flex flex-col justify-between h-36">
<span className="material-symbols-outlined text-primary text-xl">sensors</span>
<div>
<h3 className="font-body text-xs font-semibold text-on-surface-variant mb-1">Probe Health</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="font-display text-[10px] font-black tracking-widest text-on-surface">OPTIMAL</span>
</div>
</div>
</div>
</section>
{/*  Resource Monitoring  */}
<section className="bg-surface-container-low rounded-3xl p-6 space-y-6">
<h2 className="font-display text-sm lg:text-base font-bold tracking-[0.1em] text-on-surface-variant uppercase border-b border-outline-variant/10 pb-4">Resource Clusters</h2>
{/*  CPU Usage  */}
<div className="space-y-3">
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="font-body text-xs font-medium text-on-surface">CPU Usage</span>
<span className="text-[10px] text-on-surface-variant">Thread-level optimization active</span>
</div>
<span className="font-display font-bold text-primary">42%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full kinetic-gradient rounded-full" style={{width: "42%"}}></div>
</div>
</div>
{/*  Memory Usage  */}
<div className="space-y-3">
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="font-body text-xs font-medium text-on-surface">Memory Usage</span>
<span className="text-[10px] text-on-surface-variant">Allocated: 12.4GB / 32GB</span>
</div>
<span className="font-display font-bold text-primary">68%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full kinetic-gradient rounded-full" style={{width: "68%"}}></div>
</div>
</div>
</section>
{/*  Aesthetic Texture Element  */}
<div className="relative w-full h-32 rounded-3xl overflow-hidden grayscale opacity-30">
<img alt="System Matrix Architecture" className="w-full h-full object-cover" data-alt="Abstract close-up of high-tech circuit board with neon green glowing lines and futuristic digital patterns on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMZtpQ-wPQBa5GfUvbu0gAcpbh9UKXWx7ROYJgxMPpITppZSFiBjeJjH0e4tqc343ZV7emMJ6tKj7wi3uPxXv7KlZ8AM80kC0KXtZd4crhnp7tzGCdsEh-G3T_5JXOhpMR47w8TQVcjyVssb51pHWQ4uZw5ZhdZZ-bZyNeYaMe8tXIgVlu6Mg8XeKxUcohyl-5eqw3XfSaV4NEInVdSwlwNgU4VjqZYP9Zcb12IBMlsWxqn6Eaq6Nf8UbjW_yzDq41va6JN45rDn4r"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>

        </div>
    );
};
