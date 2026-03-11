import StatCard from '../../components/StatCard';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function AdminUserManagement() {
    const users = [
        { id: 1, name: "Sarah Jenkins", email: "sarah@healthfoods.co", plan: "Premium", used: 84, active: true, joined: "Oct 12, 2023", avatar: "Sarah" },
        { id: 2, name: "Michael Chen", email: "m.chen@logistics.net", plan: "Free", used: 1, active: false, joined: "Oct 15, 2023", avatar: "Michael" },
        { id: 3, name: "Elena Rodriguez", email: "elena@artisanal.es", plan: "Premium", used: 42, active: true, joined: "Oct 18, 2023", avatar: "Elena" },
        { id: 4, name: "David Kim", email: "dkim@techpack.io", plan: "Premium", used: 115, active: true, joined: "Oct 20, 2023", avatar: "David" },
        { id: 5, name: "Lisa Wong", email: "lwong@globaltrade.org", plan: "Free", used: 0, active: false, joined: "Oct 21, 2023", avatar: "Lisa" },
    ];

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">User Management</h1>
                <Button variant="primary" className="gap-2">
                    <span className="material-symbols-outlined">person_add</span>
                    Add User
                </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                <StatCard title="Total Users" value="12,450" />
                <StatCard title="Active Today" value="1,842" trend="12%" isPositive={true} />
                <StatCard title="Premium Users" value="3,210" trend="5%" isPositive={true} />
                <StatCard title="Free Users" value="9,240" />
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-6">

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="w-full md:max-w-md">
                        <Input id="search-users" placeholder="Search users by name or email..." icon="search" />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <select className="px-5 py-3 h-12 bg-white border border-slate-200 font-bold rounded-xl text-sm outline-none appearance-none pr-10 relative cursor-pointer shadow-sm text-slate-700 w-full md:w-auto">
                            <option>All Plans</option>
                            <option>Premium</option>
                            <option>Free</option>
                        </select>
                        <button className="h-12 px-5 border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center gap-2 font-bold text-slate-700 whitespace-nowrap">
                            <span className="material-symbols-outlined">filter_list</span>
                            More Filters
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-widest leading-loose">
                                <th className="py-4 px-4 font-bold">User</th>
                                <th className="py-4 px-4 font-bold">Plan</th>
                                <th className="py-4 px-4 font-bold">Generations</th>
                                <th className="py-4 px-4 font-bold">Status</th>
                                <th className="py-4 px-4 font-bold">Joined</th>
                                <th className="py-4 px-4 text-right font-bold w-12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} alt={user.name} className="w-10 h-10 rounded-full bg-slate-100" />
                                            <div>
                                                <p className="font-bold text-primary">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${user.plan === 'Premium' ? 'bg-accent-teal/10 text-accent-teal' : 'bg-slate-100 text-slate-500'
                                            }`}>
                                            {user.plan}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3 max-w-[150px]">
                                            <span className="text-sm font-bold text-slate-700 min-w-[20px]">{user.used}</span>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full ${user.plan === 'Premium' ? 'bg-accent-teal' : 'bg-slate-400'}`} style={{ width: `${Math.min((user.used / (user.plan === 'Premium' ? 150 : 1)) * 100, 100)}%` }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`w-2 h-2 rounded-full ${user.active ? 'bg-green-500' : 'bg-slate-300'}`} />
                                            <span className="text-sm text-slate-600">{user.active ? 'Active' : 'Offline'}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-slate-600">
                                        {user.joined}
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-medium text-slate-500">
                    <span>Showing 1 to 5 of 12,450 users</span>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
