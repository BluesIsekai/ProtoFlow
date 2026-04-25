export const SecurityLogs = () => {
  return (
    <div className="p-8 lg:p-12 animate-in fade-in duration-500">
      
{/*  TopAppBar (Shared Component)  */}
<header className="sticky top-0 z-50 w-full bg-surface/70 backdrop-blur-xl flex justify-between items-center h-20 px-8 font-['Inter'] font-medium">
<div className="flex items-center gap-6">
<h1 className="text-lg font-black tracking-widest text-primary uppercase">DYNAMIC MULTI-PROTOCOL</h1>
<div className="h-6 w-px bg-outline-variant/30"></div>
<div className="flex items-center gap-4 text-xs font-mono">
<span className="flex items-center gap-1.5 text-primary"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> SYSTEM_LIVE</span>
<span className="text-slate-500">UPTIME: 142:12:08</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
<input className="bg-white/5 border-none rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600 font-mono tracking-tighter" placeholder="QUERY PROTOCOLS..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-slate-400">notifications_active</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-slate-400">settings_input_component</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined text-slate-400">account_tree</span>
</button>
</div>
</div>
</header>
{/*  Content Canvas  */}
<div className="p-8 flex flex-col gap-8">
{/*  Page Header Area  */}
<div className="flex justify-between items-end">
<div className="space-y-1">
<span className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase">Security Module</span>
<h2 className="font-headline text-4xl font-bold tracking-tight">System Event Logs</h2>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end mr-4">
<span className="text-[10px] text-slate-500 uppercase tracking-widest">Global Threat Level</span>
<span className="text-xl font-headline font-bold text-tertiary">NOMINAL (0.02%)</span>
</div>
<div className="w-32 h-10 bg-surface-container-low rounded-xl overflow-hidden flex items-end px-1 pb-1">
<div className="w-1/6 h-2 bg-primary/20 mx-0.5 rounded-sm"></div>
<div className="w-1/6 h-3 bg-primary/30 mx-0.5 rounded-sm"></div>
<div className="w-1/6 h-1 bg-primary/20 mx-0.5 rounded-sm"></div>
<div className="w-1/6 h-4 bg-primary/40 mx-0.5 rounded-sm"></div>
<div className="w-1/6 h-2 bg-primary/20 mx-0.5 rounded-sm"></div>
<div className="w-1/6 h-3 bg-primary/30 mx-0.5 rounded-sm"></div>
</div>
</div>
</div>
{/*  Filter Bar  */}
<div className="bg-surface-container-low rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Severity</span>
<div className="flex gap-1">
<button className="px-3 py-1.5 rounded-lg bg-error-container/30 border border-error/20 text-error text-[10px] font-bold">CRITICAL</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface-variant text-[10px] font-bold">WARNING</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface-variant text-[10px] font-bold">INFO</button>
</div>
</div>
<div className="h-8 w-px bg-outline-variant/10"></div>
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Protocol</span>
<select className="bg-surface-container-highest text-on-surface border-none rounded-lg text-xs font-mono py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary/50 outline-none appearance-none">
<option>ALL_PROTOCOLS</option>
<option>HTTPS_ENCRYPTED</option>
<option>UDP_STREAM</option>
<option>SSH_TUNNEL</option>
<option>WS_SECURE</option>
</select>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-xl text-xs font-medium hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">download</span> EXPORT CSV
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-xl text-xs font-medium hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">filter_alt</span> ADVANCED
                    </button>
</div>
</div>
{/*  Professional Log Viewer Table  */}
<div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl">
<div className="max-h-[600px] overflow-y-auto scroll-smooth">
<table className="w-full text-left border-separate border-spacing-0">
<thead className="sticky top-0 z-10 bg-surface-container-high/95 backdrop-blur-md">
<tr>
<th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Timestamp</th>
<th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Event Type</th>
<th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Protocol</th>
<th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Severity</th>
<th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Message</th>
<th className="py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
{/*  Critical Log Row  */}
<tr className="group hover:bg-error-container/5 transition-colors">
<td className="py-4 px-6 font-mono text-xs text-on-surface-variant">2023-10-24 14:22:01.04</td>
<td className="py-4 px-6">
<span className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-error text-lg" style={{fontVariationSettings: "'FILL' 1"}}>dangerous</span>
                                        UNAUTHORIZED_ACCESS
                                    </span>
</td>
<td className="py-4 px-6 font-mono text-[10px] text-tertiary">SSH_TUNNEL [PORT 22]</td>
<td className="py-4 px-6">
<span className="inline-block px-2 py-0.5 rounded bg-error text-on-error text-[10px] font-black uppercase tracking-wider">CRITICAL</span>
</td>
<td className="py-4 px-6 text-xs text-on-surface-variant max-w-xs truncate">Multiple failed handshake attempts from source IP 192.168.1.104. Sequence anomaly detected.</td>
<td className="py-4 px-6 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">expand_more</button>
</td>
</tr>
{/*  Detailed Row Expansion (Simulated)  */}
<tr className="bg-surface-container-lowest/50">
<td className="px-10 py-6" colSpan={6}>
<div className="grid grid-cols-3 gap-8">
<div className="space-y-4">
<div>
<span className="block text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Source Identifier</span>
<span className="block font-mono text-xs text-primary">NODE_DELTA_09 // IP: 10.0.0.42</span>
</div>
<div>
<span className="block text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Payload Analysis</span>
<code className="block text-[10px] text-on-surface-variant bg-surface-container p-3 rounded-lg border border-outline-variant/10">
                                                    {`{"header": "0x4F22", "flag": "ERR_SYN", "data": "..."}`}
                                                </code>
</div>
</div>
<div className="space-y-4">
<div>
<span className="block text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Threat Assessment</span>
<div className="flex items-center gap-2">
<div className="flex-grow h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error w-[88%]"></div>
</div>
<span className="text-xs font-mono text-error">88%</span>
</div>
</div>
<div>
<span className="block text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Mitigation Action</span>
<span className="text-xs text-on-surface font-medium">Automatic node isolation initiated. Traffic rerouted to secondary buffer.</span>
</div>
</div>
<div className="flex flex-col justify-end gap-2">
<button className="w-full py-2 bg-error text-on-error rounded-xl font-bold text-xs uppercase tracking-widest">QUARANTINE NODE</button>
<button className="w-full py-2 bg-surface-container-highest text-on-surface rounded-xl font-bold text-xs uppercase tracking-widest border border-outline-variant/20">IGNORE FALSE POSITIVE</button>
</div>
</div>
</td>
</tr>
{/*  Standard Row 1  */}
<tr className="group hover:bg-surface-container-highest/40 transition-colors">
<td className="py-4 px-6 font-mono text-xs text-on-surface-variant">2023-10-24 14:21:45.92</td>
<td className="py-4 px-6">
<span className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-primary text-lg">sync_alt</span>
                                        PROTOCOL_SWITCH
                                    </span>
</td>
<td className="py-4 px-6 font-mono text-[10px] text-primary">HTTPS -&gt; WS_SECURE</td>
<td className="py-4 px-6">
<span className="inline-block px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-black uppercase tracking-wider">INFO</span>
</td>
<td className="py-4 px-6 text-xs text-on-surface-variant max-w-xs truncate">Optimizing latency for video stream ID #8822. Switching to websocket channel.</td>
<td className="py-4 px-6 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">expand_more</button>
</td>
</tr>
{/*  Warning Row  */}
<tr className="group hover:bg-surface-container-highest/40 transition-colors">
<td className="py-4 px-6 font-mono text-xs text-on-surface-variant">2023-10-24 14:20:12.11</td>
<td className="py-4 px-6">
<span className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-tertiary text-lg">warning</span>
                                        THROUGHPUT_SPIKE
                                    </span>
</td>
<td className="py-4 px-6 font-mono text-[10px] text-secondary">UDP_STREAM [INCOMING]</td>
<td className="py-4 px-6">
<span className="inline-block px-2 py-0.5 rounded bg-tertiary text-on-tertiary text-[10px] font-black uppercase tracking-wider">WARNING</span>
</td>
<td className="py-4 px-6 text-xs text-on-surface-variant max-w-xs truncate">Ingress volume exceeded 85% of allocated capacity on Backbone-A.</td>
<td className="py-4 px-6 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">expand_more</button>
</td>
</tr>
{/*  Standard Row 2  */}
<tr className="group hover:bg-surface-container-highest/40 transition-colors">
<td className="py-4 px-6 font-mono text-xs text-on-surface-variant">2023-10-24 14:19:58.33</td>
<td className="py-4 px-6">
<span className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                                        IDENTITY_VALIDATED
                                    </span>
</td>
<td className="py-4 px-6 font-mono text-[10px] text-primary">HTTPS_ENCRYPTED</td>
<td className="py-4 px-6">
<span className="inline-block px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-black uppercase tracking-wider">INFO</span>
</td>
<td className="py-4 px-6 text-xs text-on-surface-variant max-w-xs truncate">Handshake successful for Certificate 0x992B... Signature verified via Root CA.</td>
<td className="py-4 px-6 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">expand_more</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="group hover:bg-surface-container-highest/40 transition-colors">
<td className="py-4 px-6 font-mono text-xs text-on-surface-variant">2023-10-24 14:18:22.00</td>
<td className="py-4 px-6">
<span className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-primary text-lg">dns</span>
                                        DNS_RESOLVED
                                    </span>
</td>
<td className="py-4 px-6 font-mono text-[10px] text-primary">HTTPS_ENCRYPTED</td>
<td className="py-4 px-6">
<span className="inline-block px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-black uppercase tracking-wider">INFO</span>
</td>
<td className="py-4 px-6 text-xs text-on-surface-variant max-w-xs truncate">Domain query for internal-api.aether.local resolved to 10.5.0.12.</td>
<td className="py-4 px-6 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">expand_more</button>
</td>
</tr>
{/*  More Critical Entry  */}
<tr className="group hover:bg-error-container/5 transition-colors border-l-4 border-error/50">
<td className="py-4 px-6 font-mono text-xs text-on-surface-variant">2023-10-24 14:15:44.29</td>
<td className="py-4 px-6">
<span className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-error text-lg" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                                        DDOS_ATTEMPT_DETECTED
                                    </span>
</td>
<td className="py-4 px-6 font-mono text-[10px] text-tertiary">UDP_FLOOD [PORT 443]</td>
<td className="py-4 px-6">
<span className="inline-block px-2 py-0.5 rounded bg-error text-on-error text-[10px] font-black uppercase tracking-wider">CRITICAL</span>
</td>
<td className="py-4 px-6 text-xs text-on-surface-variant max-w-xs truncate">Abnormal packet rate (50k/sec) detected from 212 distributed sources.</td>
<td className="py-4 px-6 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">expand_more</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer / Pagination  */}
<div className="bg-surface-container-high px-6 py-4 flex items-center justify-between">
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Showing 1,240 events • Page 1 of 62
                    </div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">first_page</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<div className="flex items-center gap-1 px-4">
<span className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">1</span>
<span className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant text-xs hover:bg-surface-container-highest cursor-pointer transition-colors">2</span>
<span className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant text-xs hover:bg-surface-container-highest cursor-pointer transition-colors">3</span>
<span className="text-slate-500 mx-1">...</span>
<span className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant text-xs hover:bg-surface-container-highest cursor-pointer transition-colors">62</span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">last_page</span>
</button>
</div>
</div>
</div>
{/*  Dashboard Metric Overlay (Asymmetric Layout element)  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-2">
<span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Analyzed Requests</span>
<div className="flex items-end gap-2">
<span className="text-3xl font-headline font-bold text-on-surface tracking-tighter">4.2M</span>
<span className="text-xs text-primary mb-1 font-mono">+12.4%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-2">
<div className="h-full bg-primary w-2/3"></div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-2">
<span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Active Violations</span>
<div className="flex items-end gap-2">
<span className="text-3xl font-headline font-bold text-error tracking-tighter">03</span>
<span className="text-xs text-slate-500 mb-1 font-mono">STABLE</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full mt-2">
<div className="h-full bg-error w-1/4"></div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl md:col-span-2 flex justify-between items-center relative overflow-hidden group">
<div className="relative z-10 flex flex-col gap-2">
<span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Network Health Signature</span>
<div className="flex items-center gap-4">
<span className="text-3xl font-headline font-bold text-on-surface">OPTIMAL</span>
<div className="flex gap-1 h-8 items-end">
<div className="w-1 bg-primary/40 h-1/2"></div>
<div className="w-1 bg-primary/60 h-2/3"></div>
<div className="w-1 bg-primary/80 h-full"></div>
<div className="w-1 bg-primary h-3/4"></div>
<div className="w-1 bg-primary/60 h-1/2"></div>
</div>
</div>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings: "'wght' 200"}}>security</span>
</div>
</div>
</div>
</div>

    </div>
  );
};
