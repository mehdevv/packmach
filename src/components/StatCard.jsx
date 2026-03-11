export default function StatCard({ title, value, trend, isPositive = true, className = '' }) {
    return (
        <div className={`p-6 rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4 ${className}`}>
            <div className="flex justify-between items-start">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {title}
                </h3>
                {trend && (
                    <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${isPositive
                            ? 'bg-accent-teal/10 text-accent-teal'
                            : 'bg-accent-orange/10 text-accent-orange'
                        }`}>
                        <span className="material-symbols-outlined text-[14px]">
                            {isPositive ? 'trending_up' : 'trending_down'}
                        </span>
                        {trend}
                    </div>
                )}
            </div>
            <div className="text-4xl font-bold text-primary dark:text-white">
                {value}
            </div>
            {/* Optional decorative background chart could go here */}
        </div>
    );
}
