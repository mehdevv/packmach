export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {title && (
                    <h2 className="text-2xl font-bold text-primary dark:text-white mb-6 pr-8">
                        {title}
                    </h2>
                )}

                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    );
}
