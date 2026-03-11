export default function GenerationCard({
    imageSrc,
    title,
    category,
    flagSrc,
    country,
    styleLabel,
    date
}) {
    return (
        <div className="group rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex items-center gap-6 p-6">
            {/* Image thumbnail placeholder */}
            <div className="w-32 h-32 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 relative overflow-hidden">
                {imageSrc ? (
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/20 to-accent-orange/10" />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{date}</span>
                    <button className="text-slate-300 hover:text-accent-orange transition-colors">
                        <span className="material-symbols-outlined hover:font-variation-fill">favorite</span>
                    </button>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-primary dark:text-white mb-1 group-hover:text-accent-teal transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span>{category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <span>{country}</span>
                            {flagSrc && <img src={flagSrc} alt={country} className="h-3 w-auto rounded-sm" />}
                        </span>
                    </div>
                </div>

                <div className="mt-1">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-primary dark:text-white uppercase tracking-widest">
                        {styleLabel}
                    </span>
                </div>
            </div>
        </div>
    );
}
