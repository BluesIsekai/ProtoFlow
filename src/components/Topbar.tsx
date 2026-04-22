import { Search, Bell, Terminal } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Topbar = () => {
    const location = useLocation();
    const title = location.pathname === '/analyzer' ? 'Protocol Analyzer' : 'Dashboard';

    return (
        <header className="bg-surface/70 backdrop-blur-2xl sticky top-0 z-30 flex justify-between items-center px-8 py-4 w-full border-b border-outline-variant/5">
            <div className="flex items-center gap-6">
                <div className="text-2xl font-black text-primary tracking-tight font-display uppercase">
                    {title}
                </div>
                {location.pathname === '/' && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20 tracking-wider">
                        🟢 RUNNING
                    </span>
                )}
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex bg-surface-container rounded-full px-4 py-1.5 items-center gap-2 border border-outline-variant/20 focus-within:border-primary transition-colors">
                    <Search className="text-primary" size={16} />
                    <input 
                        className="bg-transparent border-none focus:ring-0 focus:outline-none text-xs font-body text-on-surface-variant placeholder:text-slate-600 w-48" 
                        placeholder="QUERY SIGNAL..." 
                        type="text" 
                    />
                </div>
                
                <button className="text-primary p-2 hover:bg-white/5 rounded-full transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
                </button>
                
                <button className="text-primary p-2 hover:bg-white/5 rounded-full transition-colors">
                    <Terminal size={20} />
                </button>

                {location.pathname === '/' && (
                    <button className="ml-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-body font-bold px-6 py-2 rounded-2xl text-sm transition-transform active:scale-95 shadow-lg shadow-primary/20">
                        Stop Optimizer
                    </button>
                )}
            </div>
        </header>
    );
};
