export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-accent-teal text-primary hover:opacity-90 shadow-lg shadow-accent-teal/20',
        outline: 'border-2 border-slate-200 dark:border-slate-700 text-primary dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800',
        dark: 'bg-primary dark:bg-white text-white dark:text-primary hover:opacity-90',
        ghost: 'text-slate-600 dark:text-slate-300 hover:text-accent-teal hover:bg-accent-teal/10'
    };

    const sizes = {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg'
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
