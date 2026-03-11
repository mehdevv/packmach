import { Link, useLocation } from 'react-router-dom';

const adminNavItems = [
    { path: '/admin', icon: 'analytics', label: 'Analytics' },
    { path: '/admin/users', icon: 'group', label: 'Users' },
    { path: '/admin/regulations', icon: 'library_books', label: 'Regulations' },
    { path: '/admin/settings', icon: 'settings', label: 'Settings' },
];

export default function AdminSidebar() {
    const location = useLocation();

    return (
        <aside className="hidden lg:flex w-72 flex-col bg-primary border-r border-slate-800 h-screen sticky top-0 text-slate-300">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <Link to="/admin" className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded bg-white text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl font-bold">admin_panel_settings</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Admin<span className="text-accent-teal pl-1">Console</span></h2>
                </Link>
            </div>

            <div className="flex-1 py-8 px-4 flex flex-col gap-2">
                <h3 className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Management</h3>
                {adminNavItems.map((item) => {
                    const isActive = location.pathname === item.path ||
                        (item.path !== '/admin' && location.pathname.startsWith(item.path));

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all ${isActive
                                    ? 'bg-accent-orange text-primary'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
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

            <div className="p-6 border-t border-slate-800">
                <div className="flex items-center gap-3">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                        alt="Admin"
                        className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700"
                    />
                    <div>
                        <p className="text-sm font-bold text-white">Super Admin</p>
                        <p className="text-xs text-accent-teal">System Operations</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
