export default function Input({
    label,
    id,
    icon,
    error,
    className = '',
    containerClassName = '',
    ...props
}) {
    return (
        <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
            {label && (
                <label htmlFor={id} className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={id}
                    className={`w-full h-12 rounded-xl border ${error
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-slate-200 dark:border-slate-700 focus:border-accent-teal focus:ring-accent-teal/20'
                        } bg-white dark:bg-primary px-4 text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${icon ? 'pl-11' : ''} ${className}`}
                    {...props}
                />
                {icon && (
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                        {icon}
                    </span>
                )}
            </div>
            {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
        </div>
    );
}
