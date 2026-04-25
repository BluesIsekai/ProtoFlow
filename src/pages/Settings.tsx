export const Settings = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto p-8 lg:p-12 animate-in fade-in duration-500">
            
{/*  Hero Status Visual  */}
<section className="relative h-48 rounded-3xl overflow-hidden bg-surface-container-low p-6 flex flex-col justify-end">
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="material-symbols-outlined text-[120px]" data-icon="hub">hub</span>
</div>
<div className="z-10">
<span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-1 block">Aether Protocol</span>
<h2 className="font-headline text-3xl font-bold text-on-surface leading-tight">Kinetic Signal Optimizer</h2>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-on-surface-variant text-sm lg:text-base font-medium">System Armed &amp; Analyzing</span>
</div>
</div>
</section>
{/*  General Settings Section  */}
<section className="space-y-4">
<div className="flex items-center justify-between px-2">
<h3 className="font-headline text-sm lg:text-base font-bold tracking-widest text-on-surface-variant uppercase">General Settings</h3>
<span className="text-[10px] text-primary/50 font-bold uppercase tracking-tighter italic">Phase 01</span>
</div>
<div className="bg-surface-container-low rounded-3xl p-6 space-y-6">
<div className="flex items-center justify-between group">
<div className="space-y-1">
<p className="text-on-surface font-semibold text-lg lg:text-xl">Optimization Mode</p>
<p className="text-on-surface-variant text-xs">Switch between automated and manual tuning</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-8 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-secondary after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary-container"></div>
</label>
</div>
<div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center text-xs text-on-surface-variant">
<span>STATUS: ACTIVE</span>
<span className="text-primary font-mono tracking-wider">LATENCY: 14MS</span>
</div>
</div>
</section>
{/*  Network Probing Section  */}
<section className="space-y-4">
<div className="flex items-center justify-between px-2">
<h3 className="font-headline text-sm lg:text-base font-bold tracking-widest text-on-surface-variant uppercase">Network Probing</h3>
<span className="text-[10px] text-primary/50 font-bold uppercase tracking-tighter italic">Phase 02</span>
</div>
<div className="bg-surface-container-low rounded-3xl p-6 space-y-8">
<div className="space-y-4">
<div className="flex justify-between items-end">
<div className="space-y-1">
<p className="text-on-surface font-semibold text-lg lg:text-xl">Probe Interval</p>
<p className="text-on-surface-variant text-xs">Frequency of network health pings</p>
</div>
<div className="bg-surface-container-highest px-3 py-1 rounded-lg border border-outline-variant/20">
<span className="text-primary font-mono text-sm lg:text-base font-bold">500ms</span>
</div>
</div>
<input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer" max="2000" min="100" step="50" type="range" value="500"/>
<div className="flex justify-between text-[10px] font-bold text-on-surface-variant/40 tracking-widest uppercase">
<span>High Precision</span>
<span>Balanced</span>
<span>Low Impact</span>
</div>
</div>
</div>
</section>
{/*  Protocol Preferences Section  */}
<section className="space-y-4">
<div className="flex items-center justify-between px-2">
<h3 className="font-headline text-sm lg:text-base font-bold tracking-widest text-on-surface-variant uppercase">Protocol Preferences</h3>
<span className="text-[10px] text-primary/50 font-bold uppercase tracking-tighter italic">Phase 03</span>
</div>
<div className="bg-surface-container-low rounded-3xl p-6 space-y-6">
{/*  Dropdown  */}
<div className="space-y-3">
<p className="text-on-surface font-semibold text-sm lg:text-base uppercase tracking-wider">Preferred Protocol</p>
<div className="relative group">
<select className="w-full appearance-none bg-surface-container-highest border border-outline-variant/30 text-on-surface text-sm lg:text-base rounded-2xl p-4 pr-10 focus:outline-none focus:border-primary/50 font-medium">
<option>HTTP/3 (QUIC)</option>
<option>HTTP/2 (Legacy)</option>
<option>UDP Stream</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-6 lg:px-10 pointer-events-none">
<span className="material-symbols-outlined text-primary text-sm lg:text-base" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
{/*  UDP Toggle  */}
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xl" data-icon="speed">speed</span>
</div>
<div className="space-y-0.5">
<p className="text-on-surface font-semibold">Force UDP Mode</p>
<p className="text-on-surface-variant text-xs">Override auto-negotiation</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-12 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-secondary after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
{/*  Save Action  */}
<div className="pt-4">
<button className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg lg:text-xl tracking-widest uppercase active:scale-95 duration-200 shadow-lg shadow-primary/20">
                Update Configuration
            </button>
</div>

        </div>
    );
};
