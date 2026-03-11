import { Outlet, Link, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout() {
    const location = useLocation();

    // Mobile nav item active state helper
    const isActive = (path) => {
        return location.pathname === path ||
            (path === '/dashboard' && location.pathname.startsWith('/dashboard/step'));
    };

    return (
        <div className="flex h-screen bg-background-light dark:bg-primary/50 overflow-hidden">

            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center overflow-y-auto pb-24 lg:pb-0 hide-scrollbar">
                {/* Mobile Header */}
                <header className="lg:hidden w-full flex items-center justify-between p-6 bg-white dark:bg-primary border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
                    <Link to="/" className="flex items-center gap-2 text-primary dark:text-white">
                        <span className="material-symbols-outlined text-accent-teal text-3xl font-bold">package_2</span>
                        <span className="text-xl font-bold tracking-tight">PackMach</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="bg-accent-teal/10 text-accent-teal text-xs font-bold px-3 py-1.5 rounded-full">
                            84 / 100
                            <span className="hidden sm:inline"> Gens</span>
                        </div>
                    </div>
                </header>

                {/* Content Outlet (Rendered Route Components) */}
                <div className="w-full max-w-4xl px-4 py-8 sm:px-8 md:py-12 animate-in fade-in zoom-in-95 duration-500">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-primary border-t border-slate-200 dark:border-slate-800 z-50 px-6 py-3 flex justify-between items-center pb-safe">
                <Link to="/dashboard" className={`flex flex-col items-center gap-1 ${isActive('/dashboard') ? 'text-accent-teal' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/dashboard') ? 'font-variation-fill' : ''}`}>grid_view</span>
                    <span className="text-[10px] font-bold">Generate</span>
                </Link>
                <Link to="/dashboard/history" className={`flex flex-col items-center gap-1 ${isActive('/dashboard/history') ? 'text-accent-teal' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/dashboard/history') ? 'font-variation-fill' : ''}`}>history</span>
                    <span className="text-[10px] font-bold">History</span>
                </Link>
                <Link to="/pricing" className={`flex flex-col items-center gap-1 ${isActive('/pricing') ? 'text-accent-teal' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/pricing') ? 'font-variation-fill' : ''}`}>payments</span>
                    <span className="text-[10px] font-bold">Pricing</span>
                </Link>
                <Link to="/dashboard/settings" className={`flex flex-col items-center gap-1 ${isActive('/dashboard/settings') ? 'text-accent-teal' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/dashboard/settings') ? 'font-variation-fill' : ''}`}>settings</span>
                    <span className="text-[10px] font-bold">Settings</span>
                </Link>
            </nav>

        </div>
    );
}
