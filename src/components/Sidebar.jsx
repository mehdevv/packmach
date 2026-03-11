import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: '/dashboard', icon: 'grid_view', label: 'Dashboard' },
    { path: '/dashboard/history', icon: 'history', label: 'History' },
    { path: '/pricing', icon: 'payments', label: 'Pricing' },
    { path: '/dashboard/settings', icon: 'settings', label: 'Settings' },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <aside className="hidden lg:flex w-72 flex-col bg-white dark:bg-primary border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <Link to="/" className="flex items-center gap-2 text-accent-teal">
                    <span className="material-symbols-outlined text-3xl font-bold">package_2</span>
                    <h2 className="text-primary dark:text-white text-2xl font-bold tracking-tight">PackMach</h2>
                </Link>
            </div>

            <div className="flex-1 py-8 px-4 flex flex-col gap-2">
                <h3 className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Menu</h3>
                {navItems.map((item) => {
                    // simple active check
                    const isActive = location.pathname === item.path ||
                        (item.path === '/dashboard' && location.pathname.startsWith('/dashboard/step'));

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all ${isActive
                                    ? 'bg-accent-teal/10 text-accent-teal'
                                    : 'text-slate-500 hover:text-primary dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                        >
                            <span className={`material-symbols-outlined ${isActive ? 'font-variation-fill' : ''}`}>
                                {item.icon}
                            </span>
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            <div className="p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="User"
                        className="w-10 h-10 rounded-full bg-slate-100"
                    />
                    <div>
                        <p className="text-sm font-bold text-primary dark:text-white">Alex Packer</p>
                        <p className="text-xs text-slate-500">Premium Plan</p>
                    </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                    <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-500">Generations</span>
                        <span className="text-accent-teal">84 / 100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-teal w-[84%]" />
                    </div>
                </div>
            </div>
        </aside>
    );
}
