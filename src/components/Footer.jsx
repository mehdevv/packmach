import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-primary px-6 lg:px-20 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 text-slate-400">

                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="flex items-center gap-2 text-accent-teal mb-6 w-fit">
                        <span className="material-symbols-outlined text-3xl font-bold">package_2</span>
                        <h2 className="text-white text-2xl font-bold tracking-tight">PackMach</h2>
                    </Link>
                    <p className="max-w-sm text-sm leading-relaxed mb-6">
                        Simplifying international trade with AI-powered packaging design and compliance automation for modern exporters worldwide.
                    </p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">public</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">mail</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Product</h4>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">AI Generator</a>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Compliance Hub</a>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Templates</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Resources</h4>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Export Guide</a>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">API Docs</a>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Blog</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Legal</h4>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Privacy Policy</a>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Terms of Service</a>
                    <a className="text-sm hover:text-accent-teal transition-colors" href="#">Cookie Policy</a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© {new Date().getFullYear()} PackMach AI. All rights reserved.</p>
                <p>Designed for the global export ecosystem.</p>
            </div>
        </footer>
    );
}
