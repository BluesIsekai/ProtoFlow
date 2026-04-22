import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Activity, Settings, Network, ShieldCheck, Stethoscope, BookOpen, HelpCircle } from 'lucide-react';

export const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low flex flex-col gap-4 pt-8 pb-8 px-6 z-40 hidden md:flex border-r border-outline-variant/5">
            <div className="mb-10 px-4">
                <h1 className="font-display font-bold text-primary text-xl tracking-widest">SMART PROTOCOL</h1>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">SWITCHER V.4.2</p>
            </div>

            <nav className="flex flex-col gap-2">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `p-4 font-body text-xs font-semibold uppercase tracking-widest flex items-center gap-4 transition-all duration-200 rounded-2xl ${
                            isActive || location.pathname === ''
                            ? 'bg-surface-container-highest text-primary shadow-[0_0_20px_rgba(0,173,181,0.15)]' 
                            : 'text-slate-500 hover:bg-surface-container-high hover:text-white hover:translate-x-1'
                        }`
                    }
                >
                    <LayoutDashboard size={18} />
                    Dashboard
                </NavLink>

                <NavLink 
                    to="/analyzer" 
                    className={({ isActive }) => 
                        `p-4 font-body text-xs font-semibold uppercase tracking-widest flex items-center gap-4 transition-all duration-200 rounded-2xl ${
                            isActive 
                            ? 'bg-surface-container-highest text-primary shadow-[0_0_20px_rgba(0,173,181,0.15)]' 
                            : 'text-slate-500 hover:bg-surface-container-high hover:text-white hover:translate-x-1'
                        }`
                    }
                >
                    <Activity size={18} />
                    Protocol Analyzer
                </NavLink>

                <div className="h-px w-full bg-outline-variant/10 my-2"></div>

                <a className="text-slate-500 p-4 font-body text-xs font-semibold uppercase tracking-widest hover:bg-surface-container-high hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-4 rounded-2xl" href="#">
                    <Network size={18} />
                    Network Map
                </a>
                
                <a className="text-slate-500 p-4 font-body text-xs font-semibold uppercase tracking-widest hover:bg-surface-container-high hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-4 rounded-2xl" href="#">
                    <ShieldCheck size={18} />
                    Security Logs
                </a>
                
                <a className="text-slate-500 p-4 font-body text-xs font-semibold uppercase tracking-widest hover:bg-surface-container-high hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-4 rounded-2xl" href="#">
                    <Stethoscope size={18} />
                    System Health
                </a>
                
                <a className="text-slate-500 p-4 font-body text-xs font-semibold uppercase tracking-widest hover:bg-surface-container-high hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-4 rounded-2xl" href="#">
                    <Settings size={18} />
                    Settings
                </a>
            </nav>

            <div className="mt-auto flex flex-col gap-2">
                <div className="p-4 rounded-2xl bg-surface-container-high border border-outline-variant/10 mb-4">
                    <p className="text-[10px] uppercase tracking-widest text-outline mb-2">Engine Status</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-xs font-bold text-on-surface">V4.2 Stable</span>
                    </div>
                </div>

                <a className="text-slate-500 p-4 font-body text-xs font-semibold uppercase tracking-widest hover:text-white flex items-center gap-4" href="#">
                    <BookOpen size={18} />
                    Docs
                </a>
                <a className="text-slate-500 p-4 font-body text-xs font-semibold uppercase tracking-widest hover:text-white flex items-center gap-4" href="#">
                    <HelpCircle size={18} />
                    Support
                </a>
            </div>
        </aside>
    );
};
