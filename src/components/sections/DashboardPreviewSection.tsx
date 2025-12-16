"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    ArrowUpRight,
    Clock,
    Repeat,
    UserPlus,
    BarChart3,
    Activity,
    ShieldCheck,
    CheckCircle,
    Server,
    MoreHorizontal,
    Wifi
} from "lucide-react";

type DashboardType = 'presence' | 'marketing' | 'authentication' | 'demographic' | 'verify' | 'hardware' | 'netops';

// Deterministic random number generator for consistent server/client rendering
const getStableRandom = (index: number, min: number = 0, max: number = 100) => {
    const seed = index * 9301 + 49297;
    const x = Math.sin(seed) * 10000;
    const result = x - Math.floor(x); // 0 to 1
    return min + (result * (max - min));
};

export function DashboardPreviewSection() {
    const [activeTab, setActiveTab] = useState<DashboardType>('presence');

    const tabs = [
        { id: 'presence' as const, name: "Presence", icon: BarChart3 },
        { id: 'marketing' as const, name: "Marketing", icon: ArrowUpRight },
        { id: 'authentication' as const, name: "Authentication", icon: ShieldCheck },
        { id: 'demographic' as const, name: "Demographic", icon: Users },
        { id: 'verify' as const, name: "Verify", icon: CheckCircle },
        { id: 'hardware' as const, name: "Hardware", icon: Server },
        { id: 'netops' as const, name: "Net Ops", icon: Activity },
    ];

    return (
        <section className="w-full py-24 relative overflow-hidden flex flex-col items-center">

            {/* Background Decor - Deep Space Plasma */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] bg-brand-base rounded-full blur-[100px] pointer-events-none z-0 opactiy-90" />
            <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-[30%] right-[20%] w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none animate-pulse delay-1000" />

            <div className="container mx-auto px-4 relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Complete Visibility</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-[0_0_10px_rgba(20,216,204,0.3)]">Into Your Physical Space</span>
                </h2>
                <p className="text-xl text-[#F5F0F6]/70 max-w-2xl mx-auto">
                    Understand visitor behavior with the same granularity as web analytics.
                </p>
            </div>

            {/* --- FLOATING DASHBOARD INTERFACE --- */}
            <motion.div
                initial={{ y: 50, opacity: 0, rotateX: 5 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="container mx-auto px-4 perspective-2000"
            >
                <div className="relative w-full aspect-[16/10] bg-[#0c0e1a]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(20,216,204,0.1)] overflow-hidden flex group ring-1 ring-white/5">

                    {/* Neon Glow Effects */}
                    <div className="absolute -top-[200px] left-[20%] w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-[200px] right-[20%] w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] pointer-events-none" />

                    {/* Sidebar */}
                    <div className="w-20 lg:w-64 border-r border-white/5 bg-[#131629]/50 flex flex-col p-4 z-20 hidden md:flex backdrop-blur-md relative">
                        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-brand-primary/30 to-transparent" />

                        <div className="flex items-center gap-3 mb-10 px-2 pt-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent2 flex items-center justify-center text-white shadow-[0_0_15px_rgba(20,216,204,0.5)] border border-brand-primary/30">
                                <Wifi className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-lg text-white hidden lg:block tracking-wide font-headline">Flow Sense</span>
                        </div>

                        <nav className="space-y-1.5 flex-1 overflow-y-auto scrollbar-hide">
                            {tabs.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`group/nav flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden ${activeTab === item.id ? 'text-brand-primary' : 'text-[#F5F0F6]/60 hover:text-white hover:bg-white/5'}`}
                                >
                                    {activeTab === item.id && (
                                        <div className="absolute inset-0 bg-brand-primary/10 border-l-2 border-brand-primary opacity-100 transition-opacity" />
                                    )}
                                    <item.icon className={`w-5 h-5 relative z-10 transition-all duration-300 ${activeTab === item.id ? 'drop-shadow-[0_0_8px_rgba(20,216,204,0.8)] scale-110' : 'group-hover/nav:text-brand-secondary group-hover/nav:drop-shadow-[0_0_8px_rgba(4,150,255,0.6)]'}`} />
                                    <span className="hidden lg:block font-medium text-sm relative z-10">{item.name}</span>
                                </div>
                            ))}
                        </nav>

                        <div className="mt-4 space-y-1 border-t border-white/5 pt-4">
                            {/* User Profile */}
                            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all cursor-pointer group/user shadow-lg">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                    <div className="w-full h-full rounded-full bg-[#1c203c] flex items-center justify-center">
                                        <span className="text-xs font-bold text-white">AP</span>
                                    </div>
                                </div>
                                <div className="hidden lg:block text-left overflow-hidden">
                                    <div className="text-sm font-bold text-white truncate group-hover/user:text-brand-primary transition-colors">Adam P.</div>
                                    <div className="text-[10px] text-white/50 truncate">Administrator</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-6 lg:p-8 overflow-y-auto z-10 relative scrollbar-hide text-[#F5F0F6] bg-[#0c0e1a]/80">

                        {/* Dashboard Header */}
                        <div className="flex justify-between items-center mb-8 sticky top-0 z-50 py-3 -mt-3 backdrop-blur-sm relative">
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-bold text-white drop-shadow-md capitalize font-headline">{activeTab} Analytics</h3>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 shadow-[0_0_10px_rgba(20,216,204,0.1)]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_#14D8CC]" />
                                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Live</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#131629] border border-white/10 rounded-lg flex items-center p-1">
                                    <span className="px-3 py-1.5 rounded text-[10px] font-bold text-white bg-white/10 shadow-sm">LAST 30 DAYS</span>
                                    <span className="px-3 py-1.5 rounded text-[10px] font-bold text-[#F5F0F6]/40 hover:text-white cursor-pointer transition-colors">7 DAYS</span>
                                    <span className="px-3 py-1.5 rounded text-[10px] font-bold text-[#F5F0F6]/40 hover:text-white cursor-pointer transition-colors">24 HOURS</span>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.99, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.01, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col gap-6 pb-8"
                            >
                                {activeTab === 'presence' && <PresenceView />}
                                {activeTab === 'marketing' && <MarketingView />}
                                {activeTab === 'authentication' && <AuthenticationView />}
                                {activeTab === 'demographic' && <DemographicView />}
                                {activeTab === 'verify' && <VerifyView />}
                                {activeTab === 'hardware' && <HardwareView />}
                                {activeTab === 'netops' && <NetOpsView />}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// --- SUB-COMPONENTS AND UTILS ---

const GlassCard = ({ children, className = "", highlight = false, glowColor = "brand-primary" }: { children: React.ReactNode, className?: string, highlight?: boolean, glowColor?: string }) => (
    <div className={`
        relative bg-[#131629]/80 rounded-xl p-5 backdrop-blur-md transition-all duration-300 group
        border border-white/5 hover:border-white/10 shadow-lg
        ${highlight ? `shadow-[0_0_20px_rgba(20,216,204,0.15)] ring-1 ring-${glowColor}/30` : ''}
        ${className}
    `}>
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-xl pointer-events-none" />

        {/* Neon Glow on Hover */}
        <div className={`absolute -inset-[1px] bg-gradient-to-r from-transparent via-${glowColor}/40 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />

        <div className="relative z-10 h-full">
            {children}
        </div>
    </div>
);

// StatCard with embedded Sparkline/Progress visualization to prevent empty look
const StatCard = ({ label, value, change, icon: Icon, color, subvalue, type = 'spark', index = 0 }: any) => (
    <GlassCard className="flex flex-col justify-between h-36 hover:-translate-y-1">
        <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-widest text-[#F5F0F6]/50 font-bold">{label}</span>
            {Icon && <Icon className={`w-4 h-4 ${color || 'text-brand-primary'} opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all`} />}
        </div>

        <div className="flex items-end justify-between mt-2">
            <div>
                <div className="text-3xl font-bold text-[#FFC145] drop-shadow-md tracking-tight font-headline tabular-nums">{value}</div>
                <div className="flex items-center gap-2 mt-1">
                    <div className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${change?.startsWith('+') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : (change?.startsWith('-') ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-gray-500/20 text-gray-400')}`}>
                        {change}
                    </div>
                </div>
            </div>

            {/* Embedded Micro-Chart */}
            <div className="w-16 h-8 opacity-50 group-hover:opacity-100 transition-opacity">
                {type === 'spark' && (
                    <svg className="w-full h-full text-brand-primary" viewBox="0 0 40 20">
                        <path d={`M0,15 Q5,${getStableRandom(index, 2, 18)} 10,10 T20,${getStableRandom(index + 1, 2, 18)} T30,5 T40,2`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                )}
                {type === 'bar' && (
                    <div className="flex items-end h-full gap-1">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="flex-1 bg-brand-secondary/50 rounded-t-sm" style={{ height: `${getStableRandom(index + i, 20, 100)}%` }} />)}
                    </div>
                )}
            </div>
        </div>
    </GlassCard>
);

// --- VIEW COMPONENTS ---

function PresenceView() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <StatCard label="Total Visits" value="76.2 K" change="+12%" icon={Users} color="text-brand-primary" type="spark" index={1} />
                <StatCard label="New Visits" value="39%" change="+5%" icon={UserPlus} color="text-brand-secondary" type="bar" index={2} />
                <StatCard label="Repeat Visits" value="61%" change="-2%" icon={Repeat} color="text-brand-accent2" type="spark" index={3} />
                <StatCard label="Conversion" value="34%" change="+8%" icon={ArrowUpRight} color="text-green-400" type="spark" index={4} />
                <StatCard label="Avg Dwell" value="01h 30m" change="+5m" icon={Clock} color="text-purple-400" type="bar" index={5} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[26rem]">
                <GlassCard className="lg:col-span-1 flex flex-col">
                    <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-wider flex items-center justify-between">
                        Visits by Day
                        <MoreHorizontal className="w-4 h-4 text-white/30 cursor-pointer hover:text-white" />
                    </h4>
                    <div className="flex-1 flex flex-col justify-between">
                        {[
                            { day: "Mon", val: 65, label: "12.6%" },
                            { day: "Tue", val: 78, label: "14.2%" },
                            { day: "Wed", val: 82, label: "16.4%" },
                            { day: "Thu", val: 95, label: "19.7%" },
                            { day: "Fri", val: 100, label: "22.1%" },
                            { day: "Sat", val: 85, label: "15.0%" },
                            { day: "Sun", val: 40, label: "12.0%" }
                        ].map((d, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="flex justify-between text-[10px] text-[#F5F0F6]/40 mb-1 group-hover:text-white transition-colors">
                                    <span>{d.day}</span>
                                    <span className="font-mono text-brand-secondary">{d.label}</span>
                                </div>
                                <div className="w-full h-1.5 bg-[#0c0e1a] rounded-full overflow-hidden border border-white/5">
                                    <div className="h-full bg-gradient-to-r from-brand-primary/60 to-brand-primary rounded-full group-hover:shadow-[0_0_10px_#14D8CC] transition-all duration-500" style={{ width: `${d.val}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="lg:col-span-2 flex flex-col relative overflow-hidden">
                    <div className="flex justify-between mb-8 z-10 relative">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Traffic by Hour</h4>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                            <span className="text-[10px] items-center text-brand-secondary font-bold uppercase">Peak Expectation</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 via-transparent to-transparent pointer-events-none" />

                    <div className="flex-1 flex items-end gap-1.5 px-2 relative z-10 w-full">
                        {Array.from({ length: 24 }).map((_, i) => {
                            const h = [5, 8, 15, 25, 35, 45, 60, 70, 85, 90, 95, 90, 80, 85, 90, 85, 75, 60, 50, 40, 30, 20, 15, 10][i];
                            return (
                                <div key={i} className="flex-1 group relative h-full flex items-end">
                                    {/* @ts-ignore */}
                                    <div className="w-full bg-[#14D8CC] opacity-40 group-hover:opacity-80 rounded-t-[1px] transition-all duration-300 relative" style={{ height: `${h}%` }}>
                                        {h > 80 && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]" />}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-between text-[10px] text-[#F5F0F6]/30 uppercase font-mono px-2 mt-4 border-t border-white/5 pt-2">
                        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:00</span>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}

function MarketingView() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Customers" value="229.5 K" change="+16%" color="text-purple-400" type="spark" index={10} />
                <StatCard label="Lapsed Customers" value="547" change="-4%" color="text-red-400" type="bar" index={11} />
                <StatCard label="Marketing Opt-Ins" value="214.4 K" change="+16%" color="text-brand-primary" type="spark" index={12} />
                <StatCard label="Opt-In Rate" value="93%" change="0%" color="text-green-400" type="bar" index={13} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[26rem]">
                <GlassCard className="flex flex-col relative overflow-hidden">
                    <div className="flex justify-between mb-6 z-10">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Opt-in Customer Trend</h4>
                        <span className="text-[10px] text-brand-primary">This Year</span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />

                    <div className="flex-1 w-full flex items-end gap-3 px-2 pb-2 relative z-10">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end group h-full">
                                {/* @ts-ignore */}
                                <div className="w-full bg-gradient-to-t from-purple-600/30 to-purple-500 rounded-t-sm relative transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]" style={{ height: `${getStableRandom(i, 40, 80)}%` }}>
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-purple-300 opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_10px_#d8b4fe]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="flex items-center justify-between px-8 relative overflow-hidden">
                    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-40 h-40 bg-brand-primary/10 blur-[80px]" />

                    <div className="space-y-8 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                                <div className="text-[#F5F0F6]/50 text-[10px] uppercase tracking-wider">New Customers</div>
                            </div>
                            <div className="text-4xl font-bold text-white font-headline">111.2 K</div>
                            <div className="text-xs text-brand-primary font-mono mt-1 opacity-80">92% Opt-in</div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-[#1c203c] border border-white" />
                                <div className="text-[#F5F0F6]/50 text-[10px] uppercase tracking-wider">Repeat Customers</div>
                            </div>
                            <div className="text-4xl font-bold text-white font-headline">138.0 K</div>
                            <div className="text-xs text-brand-primary font-mono mt-1 opacity-80">95% Opt-in</div>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="w-48 h-48 rounded-full border-4 border-white/5 relative flex items-center justify-center p-4">
                            <div className="w-full h-full rounded-full" style={{ background: 'conic-gradient(from 180deg, #8B5CF6 0deg 170deg, #14D8CC 170deg 360deg)' }} />
                            <div className="absolute inset-4 bg-[#131629] rounded-full flex flex-col items-center justify-center shadow-inner border border-white/5">
                                <span className="text-3xl font-bold text-white">45:55</span>
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Ratio</span>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}

function AuthenticationView() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <GlassCard className="flex flex-col items-center justify-center pt-10 pb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-brand-secondary shadow-[0_0_10px_#FFC145]" />
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="text-[#F5F0F6]/50 mb-3 text-xs uppercase tracking-widest font-bold">Authentication Rate</div>
                        <div className="text-6xl font-bold text-[#FFC145] mb-3 drop-shadow-lg tracking-tighter">74%</div>
                        {/* Mini Circle Chart */}
                        <svg className="w-16 h-16 transform -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="#1c203c" strokeWidth="4" fill="none" />
                            <circle cx="32" cy="32" r="28" stroke="#FFC145" strokeWidth="4" fill="none" strokeDasharray="176" strokeDashoffset="45" className="drop-shadow-[0_0_5px_rgba(255,193,69,0.5)]" />
                        </svg>
                    </div>
                </GlassCard>
                <GlassCard className="flex flex-col items-center justify-center pt-10 pb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-brand-accent1 shadow-[0_0_10px_#FF4E00]" />
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="text-[#F5F0F6]/50 mb-3 text-xs uppercase tracking-widest font-bold">Total Attempts</div>
                        <div className="text-6xl font-bold text-[#FFC145] mb-3 drop-shadow-lg tracking-tighter">706k</div>
                        {/* Mini Bar Chart */}
                        <div className="flex items-end gap-1 h-12">
                            {[30, 45, 60, 40, 70, 85, 100].map((h, i) => (
                                // @ts-ignore
                                <div key={i} className="w-2 bg-[#FF4E00] rounded-t-sm" style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }} />
                            ))}
                        </div>
                    </div>
                </GlassCard>
                <GlassCard className="flex flex-col items-center justify-center pt-10 pb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-green-500 shadow-[0_0_10px_#22c55e]" />
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="text-[#F5F0F6]/50 mb-3 text-xs uppercase tracking-widest font-bold">Successful Auths</div>
                        <div className="text-6xl font-bold text-[#FFC145] mb-3 drop-shadow-lg tracking-tighter">528k</div>
                        <div className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">99.9% Success Rate</div>
                    </div>
                </GlassCard>
            </div>

            <GlassCard className="flex flex-col justify-center h-[20rem]">
                <h4 className="text-xs font-bold text-white mb-8 pl-1 uppercase tracking-wider border-l-2 border-brand-primary pl-3">Access Stage Duration (Median)</h4>
                <div className="space-y-7 px-4">
                    {[
                        { label: "Splash Page", val: "14.0s", w: "20%" },
                        { label: "Registration / Login", val: "45.0s", w: "60%" },
                        { label: "Terms & Conditions", val: "49.0s", w: "65%" },
                        { label: "Password Reset Flow", val: "01m 03s", w: "90%" },
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div className="flex justify-between text-xs text-white/50 mb-2 absolute -top-5 left-0 w-full z-10 group-hover:text-white transition-colors">
                                <span>{item.label}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-2 bg-[#0c0e1a] rounded-full overflow-hidden relative border border-white/5">
                                    <div className="h-full bg-gradient-to-r from-purple-800 to-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] group-hover:brightness-125 transition-all duration-500" style={{ width: item.w }} />
                                </div>
                                <span className="text-xs font-mono text-brand-secondary font-bold min-w-[50px] text-right">{item.val}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    )
}

function DemographicView() {
    return (
        <div className="space-y-6 h-full flex flex-col">
            <GlassCard className="text-center py-10 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-30" />
                <div className="text-[#F5F0F6]/50 mb-4 text-sm uppercase tracking-[0.2em] font-bold">Unique Visitors</div>
                <div className="text-8xl font-bold text-[#FFC145] tracking-tighter drop-shadow-[0_0_20px_rgba(255,193,69,0.2)] mb-4 font-headline">229,472</div>
                <div className="w-full max-w-md h-2 bg-white/5 rounded-full overflow-hidden relative">
                    <div className="absolute left-[30%] right-[30%] h-full bg-brand-primary shadow-[0_0_10px_#14D8CC]" />
                </div>
                <div className="mt-4 text-brand-primary text-sm font-bold inline-flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    +16% v.s. previous period
                </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 h-[22rem]">
                <GlassCard className="flex flex-col items-center justify-center p-8 relative">
                    <h4 className="text-xs font-bold text-white absolute top-6 left-6 uppercase tracking-wider">Gender Split</h4>
                    <div className="w-64 h-64 rounded-full border-[16px] border-[#0c0e1a] relative flex items-center justify-center shadow-2xl relative"
                        style={{ background: 'conic-gradient(#8B5CF6 0deg 200deg, #3B82F6 200deg 360deg)' }}>

                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full text-right">
                            <div className="text-2xl font-bold text-blue-400">46%</div>
                            <div className="text-[10px] text-white/50 uppercase">Male</div>
                        </div>

                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full text-left">
                            <div className="text-2xl font-bold text-purple-400">54%</div>
                            <div className="text-[10px] text-white/50 uppercase">Female</div>
                        </div>

                        <div className="w-36 h-36 bg-[#131629] rounded-full flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-white/5">
                            <Users className="w-8 h-8 text-white/20 mb-1" />
                            <span className="text-xs text-white/40 uppercase tracking-widest">Total</span>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col relative">
                    <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-wider">Age Demographics</h4>
                    <div className="flex items-end gap-3 h-full pb-4 px-2">
                        {[
                            { label: "18-24", val: 80, color: "from-purple-500" },
                            { label: "25-34", val: 95, color: "from-purple-400" },
                            { label: "35-44", val: 40, color: "from-blue-400" },
                            { label: "45-54", val: 20, color: "from-blue-500" },
                            { label: "55+", val: 10, color: "from-blue-600" },
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-3 group h-full">
                                <div className={`w-full bg-gradient-to-t ${item.color} to-transparent opacity-80 rounded-t-sm transition-all relative group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]`} style={{ height: `${item.val}%` }}>

                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-bold text-white mb-1 group-hover:text-brand-secondary transition-colors">{item.val}k</div>
                                    <div className="text-[10px] text-[#F5F0F6]/40 rotate-0 whitespace-nowrap">{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}

function VerifyView() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <GlassCard className="text-center py-8">
                    <div className="text-[#F5F0F6]/50 mb-2 text-xs uppercase tracking-widest">Valid Email Rate</div>
                    <div className="text-6xl font-bold text-[#FFC145] mb-2 drop-shadow-sm font-headline">92%</div>
                    {/* Horizontal Progress Bar */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-brand-secondary w-[92%]" />
                    </div>
                </GlassCard>
                <GlassCard className="text-center py-8">
                    <div className="text-[#F5F0F6]/50 mb-2 text-xs uppercase tracking-widest">Valid Addresses</div>
                    <div className="text-6xl font-bold text-[#FFC145] mb-2 drop-shadow-sm font-headline">156k</div>
                    {/* Trend Line */}
                    <div className="w-full h-6 flex items-end justify-center gap-1 mt-2">
                        {[20, 30, 40, 35, 50, 65, 80].map((h, i) => <div key={i} className="w-2 bg-brand-primary/50" style={{ height: `${h}%` }} />)}
                    </div>
                </GlassCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[22rem]">
                <GlassCard className="flex flex-col p-6 relative">
                    <h4 className="text-xs uppercase font-bold text-white mb-6">Verify Status Breakdown</h4>
                    <div className="flex items-end gap-6 flex-1 w-full relative">
                        <div className="flex flex-col items-center gap-2 group w-16">
                            <div className="w-full bg-red-500/20 border border-red-500/30 h-10 rounded-t transition-all group-hover:h-12 group-hover:bg-red-500/40 relative shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                            </div>
                            <span className="text-[10px] text-white/50 uppercase font-bold">Invalid</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group w-16">
                            <div className="w-full bg-white/10 border border-white/20 h-20 rounded-t transition-all group-hover:h-24 hover:bg-white/20 relative shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                            </div>
                            <span className="text-[10px] text-white/50 uppercase font-bold">Unknown</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                            <div className="text-2xl font-bold text-white mb-2 shadow-black drop-shadow-md">135,335</div>
                            <div className="w-28 bg-gradient-to-t from-brand-secondary/80 to-brand-secondary h-4/5 rounded-t shadow-[0_0_30px_rgba(255,193,69,0.3)] relative border-t border-white/40 opacity-80">
                                <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
                            </div>
                            <span className="text-xs text-brand-secondary font-bold uppercase tracking-widest">Valid Emails</span>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col p-6 relative overflow-hidden">
                    <h4 className="text-xs uppercase font-bold text-white mb-6 z-10 relative">Verification Stream</h4>

                    <div className="w-full flex-1 flex flex-col items-center justify-center gap-6 relative z-10">
                        <div className="w-full h-28 bg-[#0c0e1a] rounded-xl border border-white/5 relative shadow-inner flex items-center overflow-hidden">
                            {/* Mask Overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#0c0e1a] via-transparent to-[#0c0e1a]" />

                            {/* Stream Animation */}
                            <div className="absolute inset-0 flex items-center overflow-hidden z-10">
                                <div className="flex items-center gap-8 animate-shimmer whitespace-nowrap min-w-full pl-4">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                        <div key={i} className="flex-shrink-0 flex items-center gap-2 opacity-70">
                                            <CheckCircle className="w-4 h-4 text-brand-primary" />
                                            <div className="w-16 h-1.5 bg-white/10 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full justify-between px-4">
                            <div className="text-left">
                                <div className="text-[10px] text-white/40 uppercase">Latency</div>
                                <div className="text-xl font-bold text-white">45ms</div>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="text-right">
                                <div className="text-[10px] text-white/40 uppercase">Accuracy</div>
                                <div className="text-xl font-bold text-brand-primary">100%</div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}

function HardwareView() {
    return (
        <div className="space-y-6">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {[
                    { l: "First Login", v: "983 Days" },
                    { l: "Active APs", v: "255" },
                    { l: "APs w/ Logins", v: "248" },
                    { l: "Auth Rate", v: "70%" },
                ].map((s, i) => (
                    <GlassCard key={i} className="min-w-[160px] flex-1 py-6 px-4 text-center items-center justify-center flex flex-col hover:bg-white/5">
                        <div className="text-[10px] text-[#F5F0F6]/50 uppercase mb-2 tracking-widest font-bold">{s.l}</div>
                        <div className="text-3xl font-bold text-[#FFC145] drop-shadow-sm mb-2">{s.v}</div>
                        {/* Mini Line */}
                        <div className="w-16 h-1 bg-white/10 rounded-full" />
                    </GlassCard>
                ))}
            </div>

            <GlassCard className="h-[24rem] relative flex flex-col justify-end overflow-hidden">
                <h4 className="absolute top-6 left-6 text-xs font-bold text-white uppercase tracking-wider z-20">Download Speed Distribution (Mbps)</h4>

                {/* Grid Background */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    {/* @ts-ignore */}
                    <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="w-full h-64 relative z-10 flex items-end">
                    {/* Area Chart Simulation */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradPurple" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                        <path d="M0,100 L0,95 Q10,95 15,90 T30,80 T50,50 T70,30 T90,20 L100,15 V100 Z" fill="url(#gradPurple)" className="drop-shadow-[0_-5px_10px_rgba(139,92,246,0.3)]" />
                        <path d="M0,95 Q10,95 15,90 T30,80 T50,50 T70,30 T90,20 L100,15" fill="none" stroke="#F5F0F6" strokeWidth="0.5" strokeOpacity="0.5" />
                    </svg>
                </div>

                <div className="flex justify-between text-[10px] text-[#F5F0F6]/40 px-2 mt-4 border-t border-white/5 pt-2 z-20 font-mono">
                    <span>0 Mbps</span>
                    <span>100 Mbps</span>
                    <span>500 Mbps</span>
                    <span>1 Gbps+</span>
                </div>
            </GlassCard>
        </div>
    )
}

function NetOpsView() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Total Logins" value="599.7 K" change="+12%" color="text-brand-secondary" type="spark" index={20} />
                <StatCard label="Active Venues" value="233" change="+1%" color="text-brand-primary" type="bar" index={21} />
                <StatCard label="Inactive (7d)" value="11" change="-" color="text-red-400" type="spark" index={22} />
                <StatCard label="Critical Issues" value="8" change="-" color="text-orange-400" type="bar" index={23} />
            </div>

            <GlassCard className="h-[24rem] flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-start mb-6 z-10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Daily WiFi Logins vs Active Venues</h4>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-[10px] text-white/50">
                            <div className="w-2 h-2 rounded-sm bg-brand-primary" /> Logins
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-white/50">
                            <div className="w-2 h-2 rounded-full border border-white" /> Venues
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-end gap-1 px-1 relative z-10 pb-6">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="flex-1 group relative h-full flex items-end">
                            {/* @ts-ignore */}
                            <div className="w-full bg-brand-primary/30 hover:bg-brand-primary/80 transition-all rounded-t-[1px] relative" style={{ height: `${getStableRandom(i, 20, 70)}%` }}>
                                <div className="absolute top-0 inset-x-0 h-[1px] bg-brand-primary/50 shadow-[0_0_5px_#14D8CC]" />
                            </div>
                        </div>
                    ))}

                    {/* Line Chart Overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        <path d="M0,90 Q10,88 20,90 T40,85 T60,25 T80,25 T100,24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        <circle cx="60" cy="25" r="3" fill="#1c203c" stroke="white" strokeWidth="2" />
                        <circle cx="80" cy="25" r="3" fill="#1c203c" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </GlassCard>
        </div>
    )
}
