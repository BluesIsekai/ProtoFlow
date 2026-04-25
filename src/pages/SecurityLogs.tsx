export const SecurityLogs = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto p-8 lg:p-12 animate-in fade-in duration-500">
            
{/*  Contextual Filter Bar  */}
<div className="px-6 py-4 flex flex-wrap items-center gap-4 lg:gap-6 bg-surface-container-low shadow-sm z-30">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
<button className="whitespace-nowrap px-6 lg:px-10 py-1.5 rounded-full bg-primary text-on-primary text-xs font-semibold">All Protocols</button>
<button className="whitespace-nowrap px-6 lg:px-10 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-variant transition-colors">HTTP/2</button>
<button className="whitespace-nowrap px-6 lg:px-10 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-variant transition-colors">HTTP/3</button>
<button className="whitespace-nowrap px-6 lg:px-10 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-variant transition-colors">UDP</button>
</div>
<div className="h-6 w-px bg-outline-variant/30 hidden md:block"></div>
<div className="flex items-center gap-3 ml-auto">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-outline">Auto-Scroll</span>
<button className="w-10 h-5 rounded-full bg-primary-container relative flex items-center transition-colors">
<span className="absolute right-1 w-3 h-3 bg-white rounded-full"></span>
</button>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant/30 text-on-surface text-xs font-medium">
<span className="material-symbols-outlined text-sm lg:text-base">filter_list</span>
                        Severity
                    </button>
<button className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface text-xs font-medium border border-outline-variant/20">
<span className="material-symbols-outlined text-sm lg:text-base text-primary">download</span>
                        Export Logs
                    </button>
</div>
</div>
{/*  Log Stream Display  */}
<div className="flex-1 overflow-auto p-6 space-y-4">
{/*  Performance Overview Cards (Asymmetric Layout)  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
<div className="md:col-span-8 bg-surface-container-high p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline mb-2">Threat Vector Map</p>
<h3 className="font-display text-2xl font-bold text-on-surface mb-1">Global Traffic Analysis</h3>
<p className="text-xs text-on-surface-variant">Real-time packet inspection active across 14 nodes</p>
</div>
<div className="flex flex-col items-end">
<span className="text-3xl font-display font-bold text-primary">99.9%</span>
<span className="text-[10px] text-outline font-medium">Safe Traffic</span>
</div>
</div>
<div className="mt-8 h-24 w-full flex items-end gap-1">
<div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[80%]"></div>
<div className="flex-1 bg-primary/40 rounded-t-sm h-[95%] border-t-2 border-primary"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-tertiary/40 rounded-t-sm h-[85%] border-t-2 border-tertiary"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[30%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[65%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
</div>
</div>
<div className="md:col-span-4 bg-surface-container-highest p-6 rounded-2xl border border-outline-variant/10">
<div className="flex items-center justify-between mb-4">
<h3 className="font-display font-bold text-on-surface">Active Alerts</h3>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold">CRITICAL</span>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3 pb-3 border-b border-outline-variant/10">
<span className="material-symbols-outlined text-error text-lg lg:text-xl mt-0.5">warning</span>
<div>
<p className="text-xs font-bold text-on-surface">Brute Force Attempt</p>
<p className="text-[10px] text-outline">IP: 192.168.1.105 • Port 22</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary text-lg lg:text-xl mt-0.5">error_outline</span>
<div>
<p className="text-xs font-bold text-on-surface">SSL Cert Expiry</p>
<p className="text-[10px] text-outline">Domain: api.internal.v3 • 4d left</p>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 rounded-xl bg-surface-container text-primary text-xs font-bold border border-primary/20 hover:bg-primary/5 transition-colors">Resolve All</button>
</div>
</div>
{/*  Log Stream Table  */}
<div className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/5">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest/50">
<th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Timestamp</th>
<th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Severity</th>
<th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Protocol</th>
<th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest">Event Description</th>
<th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-widest text-right">Action</th>
</tr>
</thead>
<tbody className="font-mono text-sm lg:text-base">
{/*  Row 1  */}
<tr className="group hover:bg-surface-container-highest transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-on-surface-variant opacity-80">14:22:31.402</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-primary"></span>
                                            INFO
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-bold text-[#00ADB5]">HTTP/3</td>
<td className="px-6 py-4 text-on-surface/90">Successful handshake initiated from edge node cluster-alpha-4</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-primary transition-all">open_in_new</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="group border-t border-outline-variant/5 hover:bg-surface-container-highest transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-on-surface-variant opacity-80">14:22:30.881</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-tertiary"></span>
                                            WARNING
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-bold text-[#00ADB5]">UDP</td>
<td className="px-6 py-4 text-on-surface/90">Fragmented packet detected on ingress port 443; possible spoof attempt</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-primary transition-all">open_in_new</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="group border-t border-outline-variant/5 hover:bg-surface-container-highest transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-on-surface-variant opacity-80">14:22:28.115</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error/10 text-error text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-error"></span>
                                            ERROR
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-bold text-[#00ADB5]">HTTP/2</td>
<td className="px-6 py-4 text-on-surface/90">Request timeout (408) from upstream database service; retrying...</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-primary transition-all">open_in_new</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="group border-t border-outline-variant/5 hover:bg-surface-container-highest transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-on-surface-variant opacity-80">14:22:25.003</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-primary"></span>
                                            INFO
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-bold text-[#00ADB5]">HTTP/3</td>
<td className="px-6 py-4 text-on-surface/90">TLS session resumed for user session 49a2-fb91-0012</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-primary transition-all">open_in_new</button>
</td>
</tr>
{/*  Row 5  */}
<tr className="group border-t border-outline-variant/5 hover:bg-surface-container-highest transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-on-surface-variant opacity-80">14:22:22.449</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-primary"></span>
                                            INFO
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap font-bold text-[#00ADB5]">UDP</td>
<td className="px-6 py-4 text-on-surface/90">Heartbeat signal received from monitoring agent v2.1.0</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-primary transition-all">open_in_new</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-surface-container-highest/20 flex justify-between items-center">
<p className="text-[10px] text-outline font-medium">Displaying 5 of 12,482 events</p>
<div className="flex gap-2">
<button className="p-1 rounded bg-surface-container-highest text-on-surface hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-sm lg:text-base">chevron_left</span>
</button>
<button className="p-1 rounded bg-surface-container-highest text-on-surface hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-sm lg:text-base">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

        </div>
    );
};
