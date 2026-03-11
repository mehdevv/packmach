import { Outlet, Link, useLocation } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminLayout() {
    const location = useLocation();

    // Mobile nav item active state helper
    const isActive = (path) => {
        return location.pathname === path ||
            (path !== '/admin' && location.pathname.startsWith(path));
    };

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden">

            <AdminSidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center overflow-y-auto pb-24 lg:pb-0 hide-scrollbar bg-background-light">

                {/* Mobile Header */}
                <header className="lg:hidden w-full flex items-center justify-between p-6 bg-primary border-b border-slate-800 sticky top-0 z-40">
                    <Link to="/admin" className="flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-accent-teal text-3xl font-bold">admin_panel_settings</span>
                        <span className="text-xl font-bold tracking-tight">Admin<span className="text-accent-teal">Console</span></span>
                    </Link>
                    <div className="flex items-center gap-4 text-white">
                        <span className="material-symbols-outlined">notifications</span>
                    </div>
                </header>

                {/* Content Outlet */}
                <div className="w-full max-w-6xl px-4 py-8 md:px-8 md:py-12 animate-in fade-in zoom-in-95 duration-500">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary border-t border-slate-800 z-50 px-6 py-3 flex justify-between items-center pb-safe">
                <Link to="/admin" className={`flex flex-col items-center gap-1 ${isActive('/admin') ? 'text-accent-orange' : 'text-slate-500 hover:text-white'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/admin') ? 'font-variation-fill' : ''}`}>analytics</span>
                    <span className="text-[10px] font-bold">Analytics</span>
                </Link>
                <Link to="/admin/users" className={`flex flex-col items-center gap-1 ${isActive('/admin/users') ? 'text-accent-orange' : 'text-slate-500 hover:text-white'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/admin/users') ? 'font-variation-fill' : ''}`}>group</span>
                    <span className="text-[10px] font-bold">Users</span>
                </Link>
                <Link to="/admin/regulations" className={`flex flex-col items-center gap-1 ${isActive('/admin/regulations') ? 'text-accent-orange' : 'text-slate-500 hover:text-white'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/admin/regulations') ? 'font-variation-fill' : ''}`}>library_books</span>
                    <span className="text-[10px] font-bold">Regulations</span>
                </Link>
                <Link to="/admin/settings" className={`flex flex-col items-center gap-1 ${isActive('/admin/settings') ? 'text-accent-orange' : 'text-slate-500 hover:text-white'}`}>
                    <span className={`material-symbols-outlined text-[24px] ${isActive('/admin/settings') ? 'font-variation-fill' : ''}`}>settings</span>
                    <span className="text-[10px] font-bold">Settings</span>
                </Link>
            </nav>

        </div>
    );
}
