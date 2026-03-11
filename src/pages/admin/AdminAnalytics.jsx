import StatCard from '../../components/StatCard';

export default function AdminAnalytics() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">Analytics</h1>
                <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-200 transition-colors">
                    <span className="material-symbols-outlined text-slate-500">notifications</span>
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <span className="material-symbols-outlined text-slate-400">calendar_today</span>
                    <select className="bg-transparent font-medium text-primary outline-none appearance-none flex-1">
                        <option>Oct 1, 2023 - Oct 31, 2023</option>
                        <option>Nov 1, 2023 - Nov 30, 2023</option>
                        <option>Year to Date</option>
                    </select>
                    <span className="material-symbols-outlined text-slate-400">expand_more</span>
                </div>
                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                    <span className="material-symbols-outlined">download</span>
                    Export Report
                </button>
            </div>

            <div className="flex flex-col gap-8">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key Performance Indicators</h3>

                <div className="grid md:grid-cols-3 gap-6">
                    <StatCard title="Total Generations" value="142.8k" trend="12%" isPositive={true} />
                    <StatCard title="Monthly Revenue" value="$42,900" trend="8.4%" isPositive={true} />
                    <StatCard title="Conversion Rate" value="3.24%" trend="0.5%" isPositive={false} />
                </div>

                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-4">Generation Volume Over Time</h3>
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative min-h-[300px] flex items-end">
                    {/* Legend */}
                    <div className="absolute top-6 left-6 flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <span className="w-3 h-3 rounded-full bg-accent-orange"></span> Current
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                            <span className="w-3 h-3 rounded-full bg-slate-300"></span> Previous
                        </div>
                    </div>
                    {/* Simulated chart line graphic */}
                    <div className="w-full h-40 border-b border-l border-slate-100 relative">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0,80 Q25,50 50,70 T100,30" fill="none" stroke="#FF6B35" strokeWidth="2" />
                            <path d="M0,90 Q30,80 50,50 T100,60" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-4">

                    <div className="flex flex-col gap-6">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Countries</h3>
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-6">
                            {[
                                { name: 'United States', val: '42%', w: '42%' },
                                { name: 'United Kingdom', val: '18%', w: '18%' },
                                { name: 'Germany', val: '14%', w: '14%' }
                            ].map(c => (
                                <div key={c.name} className="flex flex-col gap-2">
                                    <div className="flex justify-between font-bold text-primary">
                                        <span>{c.name}</span>
                                        <span>{c.val}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent-orange rounded-full" style={{ width: c.w }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Product Categories</h3>
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-6">
                            {[
                                { name: 'Food & Beverage', val: '$15,400', w: '60%' },
                                { name: 'Cosmetics & Beauty', val: '$12,100', w: '45%' },
                                { name: 'Pharmaceuticals', val: '$9,800', w: '35%' }
                            ].map(c => (
                                <div key={c.name} className="flex flex-col gap-2">
                                    <div className="flex justify-between font-bold text-primary">
                                        <span>{c.name}</span>
                                        <span>{c.val}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full" style={{ width: c.w }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
